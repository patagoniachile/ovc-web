import { recibirAviso } from '../../recibir'

/**
 * Forma sin query string: …/api/payku/<clave>/suscripcion
 *
 * Existe porque hay validadores de URL que rechazan los `?` y `&`. La clave
 * va en la ruta en vez de en un parámetro; es igual de secreta y se compara
 * igual.
 */
export async function POST(
  peticion: Request,
  { params }: { params: Promise<{ clave: string; tipo: string }> },
) {
  const { clave, tipo } = await params
  return recibirAviso(peticion, clave, tipo === 'suscripcion' ? 'suscripcion' : 'cobro')
}
