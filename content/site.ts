import type { Cifra, Enlace, Foto, GrupoMenu } from './types'

/** Datos de la organización. */
export const organizacion = {
  corporacion: 'Corporación',
  nombre: 'Valle Cochamó',
  nombreCompleto: 'Corporación Valle Cochamó',
  alias: 'Organización Valle Cochamó (OVC)',
  fundacion: '2017',
  ubicacion: 'Cochamó, Región de Los Lagos, Chile',
  descripcion:
    'Organización comunitaria sin fines de lucro por el turismo responsable, el ordenamiento territorial y la conservación del Valle Cochamó, Región de Los Lagos, Chile.',
  avisoTemporada: 'Temporada abierta — reserva antes de subir al sector La Junta',
}

export const logo: Foto = {
  src: '/img/logo-ovc.png',
  alt: '',
  width: 93,
  height: 73,
}

/**
 * Enlaces externos. Hoy apuntan a los dos sitios actuales; si algún día se
 * unifica el dominio, se cambian solo acá.
 */
export const externos = {
  reservas: 'https://reservasvallecochamo.cl/',
  donar: 'https://vallecochamo.org/donar/',
  socio: 'https://vallecochamo.org/colaborar/#socio',
  voluntariado: 'https://vallecochamo.org/colaborar/#postula',
  colaborar: 'https://vallecochamo.org/colaborar/',
  noticias: 'https://vallecochamo.org/noticias/',
  conservacion: 'https://vallecochamo.org/conservacion/',
  santuario: 'https://vallecochamo.org/santuario/',
  centroVisitantes: 'https://vallecochamo.org/centro-de-visitantes/',
  ingles: 'https://vallecochamo.org/en/',
  instagram: 'https://www.instagram.com/org.vallecochamo/',
  facebook: 'https://www.facebook.com/reservasvallecochamo',
  youtube: 'https://www.youtube.com/',
}

export const menu: GrupoMenu[] = [
  {
    label: 'Nosotros',
    href: '#nosotros',
    items: [
      { label: 'Nuestra historia', href: '#historia', detalle: 'De 2009 a hoy' },
      { label: 'Quiénes somos', href: '#nosotros', detalle: 'Comunidad y directorio' },
      { label: 'Santuario de la Naturaleza', href: '#santuario', detalle: '11.432,8 ha propuestas' },
      { label: 'Lo que está en juego', href: '#amenazas', detalle: 'Las amenazas sobre el valle' },
    ],
  },
  {
    label: 'Visita',
    href: '#sectores',
    items: [
      { label: 'Sectores', href: '#sectores', detalle: 'Inicio Sendero, La Junta, Lago Vidal' },
      { label: 'Mapa', href: '#mapa', detalle: 'Dónde queda cada sector' },
      { label: 'Planifica tu trekking', href: '#planifica', detalle: 'Horarios, rutas y tiempos' },
      { label: 'Normas básicas', href: '#normas', detalle: 'Lo que debes cumplir' },
      { label: '¿Por qué reservar?', href: '#reservar', detalle: 'Capacidad de carga' },
    ],
  },
  {
    label: 'Proyectos',
    href: '#proyectos',
    items: [
      { label: 'Nuestros desafíos', href: '#proyectos', detalle: 'En qué estamos trabajando' },
      { label: 'Lo que hemos logrado', href: '#logros', detalle: 'Obras terminadas' },
    ],
  },
  {
    label: 'Colaborar',
    href: '#colaborar',
    items: [
      { label: 'Hazte socio o socia', href: externos.socio, detalle: 'Aporte mensual' },
      { label: 'Voluntariado', href: externos.voluntariado, detalle: 'Postula a una jornada' },
      { label: 'Donar', href: externos.donar, detalle: '50% conservación · 50% infraestructura' },
    ],
  },
]

export const hero = {
  sobretitulo: 'Patagonia · Chile',
  titulo: ['Visita el valle.', 'Protégelo.'],
  bajada:
    'El Valle Cochamó no es un parque ni una reserva pública: son tierras privadas que sus dueños abrieron al público. Lo cuidamos entre todos, con una visita ordenada y un compromiso real con su conservación.',
  foto: {
    src: '/img/hero-granito.jpg',
    alt: 'Paredes de granito del Valle Cochamó con el bosque nativo del valle al fondo',
    width: 1800,
    height: 1199,
  } satisfies Foto,
  pieIzquierda: 'Sector La Junta · Comuna de Cochamó, Región de Los Lagos',
  pieDerecha: 'Desde 2016 se reserva para entrar · Desde 2017 nos organizamos',
}

export const cifras: Cifra[] = [
  { valor: 11432, sufijo: ',8 ha', texto: 'Superficie propuesta como Santuario de la Naturaleza' },
  { valor: 8000, sufijo: ' ha', texto: 'De bosque de alerce, con ejemplares de cerca de 1.000 años' },
  { valor: 17000, prefijo: '+', texto: 'Visitantes al año recorren el sendero de los arrieros' },
  { valor: 1000, sufijo: ' m', texto: 'De paredes de granito del Batolito Norpatagónico' },
]

export const enlacesPie: { titulo: string; items: Enlace[] }[] = [
  {
    titulo: 'Visita',
    items: [
      { label: 'Reservar', href: externos.reservas },
      { label: 'Sectores', href: '#sectores' },
      { label: 'Mapa', href: '#mapa' },
      { label: 'Trekking', href: '#planifica' },
      { label: 'Normas básicas', href: '#normas' },
      { label: '¿Por qué reservar?', href: '#reservar' },
    ],
  },
  {
    titulo: 'Conservación',
    items: [
      { label: 'Santuario de la Naturaleza', href: '#santuario' },
      { label: 'Lo que está en juego', href: '#amenazas' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Lo que hemos logrado', href: '#logros' },
      { label: 'Centro de Visitantes', href: externos.centroVisitantes },
    ],
  },
  {
    titulo: 'Organización',
    items: [
      { label: 'Quiénes somos', href: '#nosotros' },
      { label: 'Nuestra historia', href: '#historia' },
      { label: 'Noticias', href: externos.noticias },
      { label: 'Colaborar', href: externos.colaborar },
      { label: 'Donar', href: externos.donar },
    ],
  },
]
