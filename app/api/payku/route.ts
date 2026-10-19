import { recibirAviso } from './recibir'

/** Forma con query string: …/api/payku?clave=X&tipo=suscripcion */
export async function POST(peticion: Request) {
  const parametros = new URL(peticion.url).searchParams
  return recibirAviso(
    peticion,
    parametros.get('clave') ?? '',
    parametros.get('tipo') === 'suscripcion' ? 'suscripcion' : 'cobro',
  )
}
