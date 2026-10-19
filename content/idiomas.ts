export const IDIOMAS = ['es', 'en'] as const

export type Lang = (typeof IDIOMAS)[number]

export const ETIQUETA_IDIOMA: Record<Lang, string> = { es: 'ES', en: 'EN' }

/** Código BCP-47 para el atributo lang y los metadatos. */
export const LOCALE: Record<Lang, string> = { es: 'es-CL', en: 'en' }

export function esIdioma(valor: string): valor is Lang {
  return (IDIOMAS as readonly string[]).includes(valor)
}
