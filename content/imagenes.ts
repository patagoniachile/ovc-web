import type { Imagen } from './types'

/**
 * Archivos de imagen con sus dimensiones reales.
 *
 * Van aparte de los textos porque no se traducen: cada idioma aporta solo el
 * texto alternativo. Así no se duplican los width/height, que es donde un
 * descuido se paga con saltos de layout.
 */
export const imagenes = {
  hero: { src: '/img/hero-granito.jpg', width: 1800, height: 1199 },
  toboganes: { src: '/img/toboganes.jpg', width: 1400, height: 1050 },
  cascada: { src: '/img/cascada-aerea.jpg', width: 1400, height: 786 },
  equipo: { src: '/img/equipo-ovc.jpg', width: 1400, height: 803 },
  registroSendero: { src: '/img/registro-sendero.jpg', width: 1400, height: 787 },
  campingLaJunta: { src: '/img/camping-la-junta.jpg', width: 1400, height: 933 },
  arrieros: { src: '/img/arrieros.jpg', width: 1200, height: 617 },
  senaletica: { src: '/img/senaletica.jpg', width: 1400, height: 933 },
  alerce: { src: '/img/alerce.jpg', width: 1200, height: 899 },
  logo: { src: '/img/logo-ovc.png', width: 93, height: 73 },
  logoIso: { src: '/img/logo-ovc-iso.png', width: 638, height: 497 },
  mammut: { src: '/img/partner-mammut.png', width: 284, height: 177 },
  andesgear: { src: '/img/partner-andesgear.png', width: 301, height: 201 },
  pueloPatagonia: { src: '/img/partner-puelo.png', width: 800, height: 221 },
  arrierosLogo: { src: '/img/partner-arrieros.jpg', width: 279, height: 174 },
  accesoPanam: { src: '/img/partner-accesopanam.png', width: 318, height: 159 },
} satisfies Record<string, Imagen>
