import { externos } from './site'
import type { Aliado, Aporte, Enlace, IconName, Proyecto } from './types'

export const introProyectos = {
  eyebrow: 'Nuestros desafíos',
  titulo: 'En qué estamos trabajando ahora',
  bajada:
    'Cinco metas concretas que necesitan financiamiento. Cada una mejora directamente la experiencia de quienes visitan y reduce el impacto sobre el valle.',
}

export const proyectos: Proyecto[] = [
  {
    titulo: 'Centro de Visitantes',
    texto:
      'Nació como respuesta al aumento exponencial del turismo. Es el punto donde se informa, se registra y se educa a quien entra al valle.',
    estado: 'activo',
  },
  {
    titulo: 'Sendero interpretativo',
    texto:
      '11,5 km de sendero con señalética que explica el bosque, el río y la historia arriera a lo largo del recorrido.',
    estado: 'activo',
  },
  {
    titulo: 'Trabajos de senderos',
    texto:
      'Reparación de tramos erosionados e infraestructura para encauzar el tránsito y evitar que el barro siga ensanchando la huella.',
    estado: 'activo',
  },
  {
    titulo: 'Equipo de rescate',
    texto:
      'Formación de un equipo con insumos de primeros auxilios. Hoy el valle no cuenta con servicios de emergencia.',
    estado: 'activo',
  },
  {
    titulo: 'Video informativo',
    texto:
      'Material audiovisual para que cada visitante llegue sabiendo qué esperar, qué llevar y cómo comportarse.',
    estado: 'activo',
  },
]

export const logros: { icono: IconName; label: string; href: string }[] = [
  { icono: 'edificio', label: 'Centro de Visitantes', href: externos.centroVisitantes },
  { icono: 'sendero', label: 'Trabajos de senderos', href: 'https://vallecochamo.org/trabajos-de-senderos/' },
  { icono: 'cartel', label: 'Señalética', href: 'https://vallecochamo.org/senaletica/' },
  { icono: 'hoja', label: 'Centro de reciclaje', href: 'https://vallecochamo.org/centro-de-reclaje/' },
  { icono: 'montana', label: 'Mantención de rutas de escalada', href: 'https://vallecochamo.org/mantencion-de-rutas-de-escalada/' },
]

export const introColaborar = {
  eyebrow: 'Colaborar',
  titulo: 'Protege los lugares que amas',
  bajada:
    'La mayor parte del valle son tierras privadas cuyos dueños permiten el acceso público. Mantener los senderos, los ecosistemas y la cultura local cuesta trabajo y dinero.',
}

export const aportes: Aporte[] = [
  {
    icono: 'gente',
    titulo: 'Hazte socio o socia',
    texto:
      'Un aporte periódico que da continuidad al trabajo: lo que permite planificar más allá de la próxima temporada.',
    cta: { label: 'Quiero ser socio', href: externos.socio },
  },
  {
    icono: 'corazon',
    titulo: 'Dona',
    texto:
      'El 50% activa programas de conservación de largo plazo y el 50% financia la infraestructura que permite visitar el valle minimizando el impacto.',
    cta: { label: 'Donar ahora', href: externos.donar },
    destacado: true,
  },
  {
    icono: 'botiquin',
    titulo: 'Postula como voluntario',
    texto:
      'Jornadas de trabajo en senderos, señalética, reciclaje y educación ambiental, junto a la comunidad local.',
    cta: { label: 'Postular', href: externos.voluntariado },
  },
]

export const llamadoProyectos: { titulo: string; texto: string; cta: Enlace } = {
  titulo: '¿Quieres que ocurran?',
  texto: 'Estos proyectos se financian con donaciones y con el aporte de socios y socias.',
  cta: { label: 'Aportar', href: externos.donar },
}

export const boletin = {
  titulo: 'Entérate antes que nadie',
  texto: 'Noticias del santuario, avances de los proyectos y avisos de temporada. Sin spam, pocas veces al año.',
  nota: 'Al suscribirte aceptas recibir correos de la Corporación Valle Cochamó.',
}

export const aliados: Aliado[] = [
  { nombre: 'Mammut Chile', href: 'https://www.mammut.com/', logo: { src: '/img/partner-mammut.png', alt: 'Mammut Chile', width: 284, height: 177 } },
  { nombre: 'Andesgear', href: 'https://www.andesgear.cl/', logo: { src: '/img/partner-andesgear.png', alt: 'Andesgear', width: 301, height: 201 } },
  { nombre: 'Puelo Patagonia', href: 'https://www.puelopatagonia.cl/', logo: { src: '/img/partner-puelo.png', alt: 'Puelo Patagonia', width: 800, height: 221 } },
  { nombre: 'Agrupación de Arrieros de Cochamó', href: externos.reservas, logo: { src: '/img/partner-arrieros.jpg', alt: 'Agrupación de Arrieros de Cochamó', width: 279, height: 174 } },
  { nombre: 'Acceso PanAm', href: 'https://accesopanam.org/', logo: { src: '/img/partner-accesopanam.png', alt: 'Acceso PanAm', width: 318, height: 159 } },
  { nombre: 'Friends of Cochamó', href: 'https://vallecochamo.org/' },
]
