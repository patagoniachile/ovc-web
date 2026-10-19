import { NextResponse } from 'next/server'
import { correoOrganizacion } from '@/content/cuenta'

/**
 * Recibe la postulación a socio y la manda por correo a la corporación.
 *
 * Qué hace falta para que funcione (variables de entorno en Vercel):
 *   RESEND_API_KEY     clave del proveedor de correo
 *   CORREO_REMITENTE   dirección verificada desde la que se envía
 *   CORREO_DESTINO     opcional; por defecto, el correo de la corporación
 *
 * Sin RESEND_API_KEY el endpoint responde 503 y la interfaz ofrece el correo
 * directo, para que el formulario nunca se trague una postulación en silencio.
 */

const LIMITE_POR_IP = 5
const VENTANA_MS = 10 * 60 * 1000
const peticiones = new Map<string, number[]>()

/** Freno básico por IP. Vive en memoria, así que es por instancia: frena a un
 *  curioso, no a un ataque. Para eso hace falta un limitador de verdad. */
function excedeLimite(ip: string) {
  const ahora = Date.now()
  const previas = (peticiones.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS)
  previas.push(ahora)
  peticiones.set(ip, previas)
  return previas.length > LIMITE_POR_IP
}

const esCorreo = (valor: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
const limpiar = (valor: unknown, max = 500) => (typeof valor === 'string' ? valor.trim().slice(0, max) : '')

export async function POST(peticion: Request) {
  const ip = peticion.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'desconocida'
  if (excedeLimite(ip)) {
    return NextResponse.json({ ok: false, motivo: 'limite' }, { status: 429 })
  }

  let cuerpo: Record<string, unknown>
  try {
    cuerpo = await peticion.json()
  } catch {
    return NextResponse.json({ ok: false, motivo: 'formato' }, { status: 400 })
  }

  // Trampa para robots: un campo que una persona nunca ve ni rellena.
  if (limpiar(cuerpo.web)) return NextResponse.json({ ok: true })

  const datos = {
    nombre: limpiar(cuerpo.nombre, 120),
    email: limpiar(cuerpo.email, 160),
    telefono: limpiar(cuerpo.telefono, 40),
    direccion: limpiar(cuerpo.direccion, 120),
    mensaje: limpiar(cuerpo.mensaje, 2000),
    idioma: limpiar(cuerpo.idioma, 5) || 'es',
  }

  if (!datos.nombre || !esCorreo(datos.email)) {
    return NextResponse.json({ ok: false, motivo: 'validacion' }, { status: 422 })
  }

  const clave = process.env.RESEND_API_KEY
  const remitente = process.env.CORREO_REMITENTE
  const destino = process.env.CORREO_DESTINO || correoOrganizacion

  if (!clave || !remitente) {
    console.warn('[socios] Falta RESEND_API_KEY o CORREO_REMITENTE: la postulación no se envió.', {
      email: datos.email,
    })
    return NextResponse.json({ ok: false, motivo: 'sin-configurar' }, { status: 503 })
  }

  const lineas = [
    `Nombre: ${datos.nombre}`,
    `Correo: ${datos.email}`,
    datos.telefono && `Teléfono: ${datos.telefono}`,
    datos.direccion && `Ciudad o comuna: ${datos.direccion}`,
    `Idioma del sitio: ${datos.idioma}`,
    datos.mensaje && `\nMensaje:\n${datos.mensaje}`,
  ].filter(Boolean)

  try {
    const respuesta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${clave}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: remitente,
        to: [destino],
        reply_to: datos.email,
        subject: `Nueva postulación a socio: ${datos.nombre}`,
        text: lineas.join('\n'),
      }),
    })

    if (!respuesta.ok) {
      console.error('[socios] El proveedor de correo rechazó el envío', respuesta.status, await respuesta.text())
      return NextResponse.json({ ok: false, motivo: 'proveedor' }, { status: 502 })
    }
  } catch (error) {
    console.error('[socios] No se pudo contactar al proveedor de correo', error)
    return NextResponse.json({ ok: false, motivo: 'red' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
