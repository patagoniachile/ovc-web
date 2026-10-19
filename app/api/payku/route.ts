import { NextResponse } from 'next/server'
import { correoOrganizacion } from '@/content/cuenta'

/**
 * Avisos de Payku: los dos que pide el panel al crear un plan.
 *
 *   charge notification url        → …/api/payku?clave=…
 *   subscription notification url  → …/api/payku?clave=…&tipo=suscripcion
 *
 * El primero avisa de cada cobro —el aporte inicial, cada renovación y los
 * intentos que fallan—; el segundo, de los cambios en la suscripción misma:
 * alguien que se inscribe, alguien que se da de baja. Un endpoint para los
 * dos, porque lo que hacen con el aviso es idéntico y así hay una sola clave
 * que rotar; `tipo` solo cambia cómo se titula el correo.
 *
 * Ninguno de los dos es parte del pago: si no existieran, los cobros
 * ocurrirían igual. Lo que se pierde es enterarse, y una tarjeta vencida deja
 * de aportar en silencio.
 *
 * Variables de entorno en Vercel:
 *   PAYKU_CLAVE_NOTIFICACION  cadena larga al azar, inventada por nosotros
 *   RESEND_API_KEY            clave del proveedor de correo
 *   CORREO_REMITENTE          dirección verificada desde la que se envía
 *   CORREO_DESTINO            opcional; por defecto, el correo de la corporación
 *
 * La URL que se pega en Payku lleva esa clave:
 *   https://<dominio>/api/payku?clave=<PAYKU_CLAVE_NOTIFICACION>
 *
 * Es lo que distingue un aviso de Payku de cualquiera que descubra la ruta y
 * la golpee. Payku también firma sus avisos con el token privado, pero esa
 * firma no está verificada aquí: preferimos un secreto en la URL, que es
 * nuestro y se puede rotar, antes que una comprobación a medias de un esquema
 * que no hemos podido probar contra la pasarela.
 */

const LIMITE_POR_IP = 60
const VENTANA_MS = 60 * 1000
const peticiones = new Map<string, number[]>()

function excedeLimite(ip: string) {
  const ahora = Date.now()
  const previas = (peticiones.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS)
  previas.push(ahora)
  peticiones.set(ip, previas)
  return previas.length > LIMITE_POR_IP
}

/** Compara sin filtrar el tiempo que tarda, que delata el prefijo acertado. */
function coincide(a: string, b: string) {
  if (a.length !== b.length) return false
  let diferencia = 0
  for (let i = 0; i < a.length; i += 1) diferencia |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diferencia === 0
}

/** Payku puede mandar JSON o un formulario; aceptamos los dos. */
async function leerCuerpo(peticion: Request): Promise<Record<string, unknown>> {
  const tipo = peticion.headers.get('content-type') ?? ''
  if (tipo.includes('application/json')) {
    try {
      return await peticion.json()
    } catch {
      return {}
    }
  }
  try {
    return Object.fromEntries(await peticion.formData())
  } catch {
    return {}
  }
}

/** El primer campo que exista, de entre varios nombres posibles. */
function primero(datos: Record<string, unknown>, ...claves: string[]) {
  for (const clave of claves) {
    const valor = datos[clave]
    if (typeof valor === 'string' && valor.trim()) return valor.trim()
    if (typeof valor === 'number') return String(valor)
  }
  return ''
}

/** El título del correo, que es lo único que distingue a los dos avisos. */
function asunto(
  tipo: 'cobro' | 'suscripcion',
  { exito, baja, correo }: { exito: boolean; baja: boolean; correo: string },
) {
  const quien = correo ? ` — ${correo}` : ''
  if (tipo === 'suscripcion') {
    if (baja) return `Payku: suscripción dada de baja${quien}`
    if (exito) return `Payku: nuevo socio suscrito${quien}`
    return `Payku: cambio en una suscripción${quien}`
  }
  return exito ? `Payku: aporte recibido${quien}` : `Payku: cobro con problemas${quien}`
}

export async function POST(peticion: Request) {
  const ip = peticion.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'desconocida'
  if (excedeLimite(ip)) return NextResponse.json({ ok: false }, { status: 429 })

  const esperada = process.env.PAYKU_CLAVE_NOTIFICACION
  if (!esperada) {
    console.warn('[payku] Falta PAYKU_CLAVE_NOTIFICACION: el aviso no se procesó.')
    return NextResponse.json({ ok: false, motivo: 'sin-configurar' }, { status: 503 })
  }

  const clave = new URL(peticion.url).searchParams.get('clave') ?? ''
  if (!coincide(clave, esperada)) {
    console.warn('[payku] Aviso con clave incorrecta', { ip })
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const datos = await leerCuerpo(peticion)
  const tipo = new URL(peticion.url).searchParams.get('tipo') === 'suscripcion' ? 'suscripcion' : 'cobro'

  const estado = primero(datos, 'status', 'estado')
  const suscripcion = primero(datos, 'subscription', 'suscripcion', 'idsuscription', 'id')
  const correo = primero(datos, 'email', 'correo')
  const monto = primero(datos, 'amount', 'monto', 'total')
  const exito = /success|succes|paid|approved|aprobado|pagado|activ|^ok$/i.test(estado)
  const baja = /cancel|anul|baja|inactiv|expir|vencid/i.test(estado)

  // Siempre al registro: si el correo falla, el aviso no se pierde del todo.
  console.log(`[payku] Aviso de ${tipo}`, JSON.stringify(datos))

  const apiCorreo = process.env.RESEND_API_KEY
  const remitente = process.env.CORREO_REMITENTE
  const destino = process.env.CORREO_DESTINO || correoOrganizacion

  // Payku reintenta mientras no reciba un 200, así que el aviso se da por
  // recibido aunque el correo no se pueda enviar: ya quedó en el registro.
  if (!apiCorreo || !remitente) {
    console.warn('[payku] Falta RESEND_API_KEY o CORREO_REMITENTE: no se avisó por correo.')
    return NextResponse.json({ ok: true })
  }

  const lineas = [
    `Tipo de aviso: ${tipo}`,
    `Estado: ${estado || 'sin indicar'}`,
    correo && `Socio: ${correo}`,
    monto && `Monto: ${monto}`,
    suscripcion && `Suscripción: ${suscripcion}`,
    '',
    'Aviso completo tal como llegó:',
    JSON.stringify(datos, null, 2),
  ].filter(Boolean)

  try {
    const respuesta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiCorreo}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: remitente,
        to: [destino],
        subject: asunto(tipo, { exito, baja, correo }),
        text: lineas.join('\n'),
      }),
    })
    if (!respuesta.ok) {
      console.error('[payku] El proveedor de correo rechazó el envío', respuesta.status, await respuesta.text())
    }
  } catch (error) {
    console.error('[payku] No se pudo contactar al proveedor de correo', error)
  }

  return NextResponse.json({ ok: true })
}
