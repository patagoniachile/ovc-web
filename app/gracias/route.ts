import { NextResponse } from 'next/server'

/**
 * Atajo a la página de agradecimiento, para el campo «success payment url».
 *
 * Existe porque el panel de Payku rechazó la ruta real. No sabemos cuál de
 * sus comprobaciones falla, así que esta URL evita todas las sospechas a la
 * vez: es corta, no lleva guiones, no lleva parámetros y responde igual a GET
 * que a POST, que es lo que no hacía una página de Next a secas.
 *
 * El 303 es lo que convierte un POST en el GET que la página sabe atender.
 */
const DESTINO = '/es/como-ayudar/gracias'

function llevar(peticion: Request) {
  return NextResponse.redirect(new URL(DESTINO, peticion.url), 303)
}

export const GET = llevar
export const POST = llevar
