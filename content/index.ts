import { contenido as en } from './en'
import { contenido as es } from './es'
import type { Lang } from './idiomas'
import type { Contenido } from './types'

const POR_IDIOMA: Record<Lang, Contenido> = { es, en }

/** Contenido del sitio en el idioma pedido. */
export function getContenido(lang: Lang): Contenido {
  return POR_IDIOMA[lang]
}

export { correoOrganizacion, cuentaBancaria, payku } from './cuenta'
export { externos } from './externos'
export { imagenes } from './imagenes'
export * from './idiomas'
export type * from './types'
