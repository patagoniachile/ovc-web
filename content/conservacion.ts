import { externos } from './site'
import type { Foto, IconName } from './types'

export const santuario = {
  eyebrow: 'Conservación',
  titulo: 'Un Santuario de la Naturaleza para el Valle Cochamó',
  bajada:
    'El valle no está protegido oficialmente por el Estado chileno. En julio de 2022 presentamos al Ministerio de Bienes Nacionales la propuesta de declararlo Santuario de la Naturaleza, sobre terrenos fiscales —la Hijuela 5— y predios privados que se sumaron voluntariamente.',
  parrafo:
    'Un santuario reconoce los valores ambientales del territorio y es conciliador con la cultura y las formas de vida locales: la comunidad sigue siendo quien lo administra.',
  hectareas: '11.432,8',
  hectareasPie: 'hectáreas propuestas',
  foto: {
    src: '/img/alerce.jpg',
    alt: 'Persona apoyada en el tronco de un alerce milenario en el bosque del Valle Cochamó',
    width: 1200,
    height: 899,
  } satisfies Foto,
  enlace: { label: 'Conocer la propuesta completa', href: externos.santuario },
}

export const queProtege: { icono: IconName; texto: string }[] = [
  { icono: 'hoja', texto: 'Bosques primarios y alerzales' },
  { icono: 'agua', texto: 'Río Cochamó y humedales ribereños' },
  { icono: 'montana', texto: 'Batolito Norpatagónico' },
  { icono: 'check', texto: 'Pudú y monito del monte' },
  { icono: 'check', texto: 'Ranita de Darwin y puma' },
  { icono: 'check', texto: 'Cóndor andino' },
  { icono: 'caballo', texto: 'El sendero y la cultura arriera' },
  { icono: 'gente', texto: 'Pueblos originarios y vida local' },
]

export const amenazas: { icono: IconName; titulo: string; texto: string }[] = [
  {
    icono: 'camino',
    titulo: 'Un camino que avanza',
    texto:
      'Es la amenaza más urgente. Lo impulsan los mismos desarrolladores que deforestaron en el vecino Valle El Manso. Un camino terminaría con la tradición viva de los arrieros y traería contaminación y riesgo de incendios.',
  },
  {
    icono: 'edificio',
    titulo: 'Presión inmobiliaria',
    texto:
      'Empresarios con afanes inmobiliarios y proyectos de centrales hidroeléctricas siguen apuntando al Cochamó y al Puelo, afectando a las comunidades rurales y a la biodiversidad.',
  },
  {
    icono: 'gente',
    titulo: 'Turismo sin regulación',
    texto:
      'El crecimiento acelerado trajo problemas de residuos, impacto sobre flora y fauna, más accidentes, contaminación de las aguas y peligro de incendios. Necesita planificación de largo plazo.',
  },
]

export const loQueEstaEnJuego = {
  eyebrow: 'Las amenazas no cesaron',
  titulo: 'Lo que está en juego',
  bajada:
    'Llaman al valle “el Yosemite de Sudamérica”. La pregunta es si queremos que se parezca a Yosemite o que siga siendo Cochamó.',
  cta: { label: 'Leer sobre conservación', href: externos.conservacion },
}
