import { externos } from './site'
import type { Ficha, Foto, Norma, Paso, PuntoMapa, Sector } from './types'

/** Las dos puertas de entrada que fusionan los dos sitios actuales. */
export const caminos = [
  {
    etiqueta: 'Voy a visitar',
    titulo: 'Planifica y reserva tu viaje',
    texto:
      'Elige tu sector, revisa horarios y distancias, conoce las normas y asegura tu lugar antes de llegar.',
    foto: {
      src: '/img/toboganes.jpg',
      alt: 'Toboganes de granito y aguas turquesas del Valle Cochamó, con el Cerro Trinidad al fondo',
      width: 1400,
      height: 1050,
    } satisfies Foto,
    enlaces: [
      { label: 'Sectores', href: '#sectores' },
      { label: 'Trekking', href: '#planifica' },
      { label: 'Normas', href: '#normas' },
      { label: 'Reservar →', href: externos.reservas },
    ],
  },
  {
    etiqueta: 'Quiero ayudar',
    titulo: 'Suma fuerzas a la conservación',
    texto:
      'El valle aún no está protegido oficialmente. Hazte socio, postula como voluntario o dona para sostener el trabajo.',
    foto: {
      src: '/img/cascada-aerea.jpg',
      alt: 'Vista aérea de una cascada rodeada de bosque siempreverde en el Valle Cochamó',
      width: 1400,
      height: 786,
    } satisfies Foto,
    enlaces: [
      { label: 'Santuario', href: '#santuario' },
      { label: 'Amenazas', href: '#amenazas' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Donar →', href: externos.donar },
    ],
  },
]

export const sectores: Sector[] = [
  {
    id: 'inicio-sendero',
    nombre: 'Inicio Sendero',
    insignia: 'Acceso',
    descripcion:
      'La entrada al valle comienza donde el río Cochamó se junta con el mar. Desde el puente tienes la primera vista del Cerro Arcoíris y del bosque nativo.',
    datos: [
      { icono: 'pin', texto: 'Campings y hospedajes en el sector' },
      { icono: 'edificio', texto: 'Centro de Visitantes y registro obligatorio' },
      { icono: 'caballo', texto: 'Pilcheros y cabalgatas' },
    ],
    foto: {
      src: '/img/registro-sendero.jpg',
      alt: 'Visitantes registrándose en el panel informativo del inicio del sendero',
      width: 1400,
      height: 787,
    },
    cta: { label: 'Reservar Inicio Sendero', href: externos.reservas },
  },
  {
    id: 'la-junta',
    nombre: 'La Junta',
    insignia: 'Centro del valle',
    descripcion:
      'El centro turístico del valle, accesible solo a pie o a caballo. Aquí están los campings, el hospedaje y, cerca, los Toboganes.',
    datos: [
      { icono: 'sendero', texto: '13 km desde el inicio del sendero' },
      { icono: 'carpa', texto: 'Campings Playa Los Manzanos, Vista Hermosa y La Junta' },
      { icono: 'agua', texto: 'Toboganes de granito a corta distancia' },
    ],
    foto: {
      src: '/img/camping-la-junta.jpg',
      alt: 'Vista desde el interior de una carpa hacia las montañas de granito del sector La Junta',
      width: 1400,
      height: 933,
    },
    cta: { label: 'Reservar La Junta', href: externos.reservas, destacado: true },
  },
  {
    id: 'lago-vidal',
    nombre: 'Lago Vidal',
    insignia: 'Alternativa',
    descripcion:
      'Identidad cultural propia, ligada a la cultura gaucha campesina de la Patagonia chilena y argentina. Una excelente alternativa al muy visitado Valle Cochamó.',
    datos: [
      { icono: 'montana', texto: 'Acceso a pie o a caballo' },
      { icono: 'pin', texto: 'Por el valle, la frontera con Argentina o el este del Lago Tagua Tagua' },
      { icono: 'sendero', texto: 'Circuito La Herradura' },
    ],
    foto: {
      src: '/img/arrieros.jpg',
      alt: 'Arriero a caballo guiando una tropilla de mulas cargadas por el sendero del valle',
      width: 1200,
      height: 617,
    },
    cta: { label: 'Reservar Lago Vidal', href: externos.reservas },
  },
]

export const fichasPlanificacion: Ficha[] = [
  {
    icono: 'sendero',
    titulo: 'La Junta por el día',
    texto: 'No es un paseo fácil: es larga y difícil. Si no vas a dormir arriba, calcula bien tus tiempos.',
    datos: [
      { etiqueta: 'Acceso', valor: '7:00 a 9:00 h' },
      { etiqueta: 'Distancia', valor: '13 km (26 km ida y vuelta)' },
      { etiqueta: 'Duración', valor: '10 a 12 horas según tu ritmo' },
    ],
  },
  {
    icono: 'alerta',
    titulo: 'Toboganes de Cochamó',
    texto:
      'Su nombre viene de su aspecto de tobogán natural y atrae a la gente a deslizarse por ellos. Son **extremadamente peligrosos**: la mayoría de los accidentes graves del valle ocurren allí.',
    alerta: true,
  },
  {
    icono: 'montana',
    titulo: 'Senderos de altura',
    texto:
      'La mayoría de los trekkings hacia los valles de altura son muy demandantes y peligrosos. Anda siempre en grupo, con linterna, abrigo, comida y agua.',
  },
  {
    icono: 'caballo',
    titulo: 'Arrieros y arrieras',
    texto:
      '¿Necesitas caballos para subir tus cosas o quieres llegar a La Junta cabalgando? Contacta directamente a la agrupación de arrieros de Cochamó.',
    enlace: { label: 'Ver contacto', href: externos.reservas },
  },
  {
    icono: 'reloj',
    titulo: 'Horarios del sendero',
    texto:
      'El ingreso tiene horarios definidos y se respetan sin excepción. Revísalos antes de viajar y considera el tiempo de traslado hasta el inicio del sendero.',
    enlace: { label: 'Ver horarios', href: externos.reservas },
  },
  {
    icono: 'pin',
    titulo: 'Cómo llegar',
    texto:
      'El valle está en la comuna de Cochamó, Región de Los Lagos. El sendero comienza donde el río Cochamó desemboca en el estuario de Reloncaví.',
    enlace: { label: 'Ver la ruta', href: externos.reservas },
  },
]

export const normas: Norma[] = [
  { titulo: 'Reserva para ingresar al valle.', detalle: 'Sin reserva no hay ingreso, en ninguno de los sectores.' },
  { titulo: 'Presenta tu reserva y regístrate.', detalle: 'El registro está al inicio del sendero y es obligatorio.' },
  { titulo: 'Respeta los horarios de ingreso.', detalle: 'Están definidos por seguridad y por capacidad de carga.' },
  { titulo: 'Acampa solo en campings habilitados.', detalle: 'Fuera de ellos el impacto sobre el suelo y el agua es irreversible.' },
  { titulo: 'Baja tu basura.', detalle: 'Todo lo que subes, vuelve a bajar contigo. No se quema ni se entierra.' },
  { titulo: 'No hay servicios de emergencia.', detalle: 'No existen rescatistas en el valle. Evalúa tus capacidades con honestidad.' },
]

export const fotoNormas: Foto = {
  src: '/img/senaletica.jpg',
  alt: 'Señalética instalada en el sendero pidiendo ayudar a cuidar el Valle Cochamó',
  width: 1400,
  height: 933,
}

export const porQueReservar = {
  eyebrow: '¿Por qué reservar?',
  titulo: 'Limitar la entrada es la forma más simple de cuidar el valle',
  bajada:
    'Desde 2016, para visitar el sector La Junta hay que reservar. No es un trámite: es el mecanismo que permite respetar la capacidad de carga del sendero y de los campings. Cuando se llenan —algo habitual en temporada alta— hay que esperar para entrar.',
  parrafo:
    'Las reservas se gestionan en una plataforma común de operadores turísticos, propietarios y amigos del valle. El valle no es un parque ni una reserva pública: son terrenos privados cuyos dueños abrieron el acceso.',
  fondo: {
    src: '/img/camping-la-junta.jpg',
    alt: '',
    width: 1400,
    height: 933,
  } satisfies Foto,
  reparto: {
    titulo: 'Cómo se reparte tu donación',
    conservacion: '50% programas de conservación de largo plazo',
    infraestructura: '50% infraestructura para visitantes',
  },
}

export const pasosReserva: Paso[] = [
  {
    titulo: 'Elige sector y fechas',
    texto:
      'Inicio Sendero, La Junta o Lago Vidal. En La Junta eliges entre los campings Playa Los Manzanos, Vista Hermosa y La Junta.',
  },
  {
    titulo: 'Confirma tu reserva',
    texto: 'Recibirás el comprobante que deberás mostrar al llegar. Si el cupo está completo, tendrás que esperar.',
  },
  {
    titulo: 'Regístrate al inicio del sendero',
    texto: 'Presenta tu reserva en el registro y respeta el horario de ingreso que te corresponde.',
  },
  {
    titulo: 'Camina sin dejar rastro',
    texto: 'Acampa solo donde está habilitado y baja toda tu basura. El valle depende de eso.',
  },
]

/**
 * Mapa de orientación.
 *
 * Las coordenadas vienen de OpenStreetMap (consultadas vía Nominatim y
 * Overpass). No dibujamos el trazado del sendero: la huella "Valle Cochamó -
 * La Junta" ya está mapeada en OSM y se ve sobre las teselas, así que no hace
 * falta inventar una línea aproximada en un sitio donde la gente planifica
 * caminatas de 13 km.
 */
export const mapa = {
  eyebrow: 'Dónde queda',
  titulo: 'Ubícate antes de viajar',
  bajada:
    'El valle está en la comuna de Cochamó, Región de Los Lagos. Desde el inicio del sendero, La Junta y Lago Vidal solo se alcanzan a pie o a caballo.',
  aviso:
    'Mapa de orientación, no de navegación. No hay cobertura ni servicios de emergencia en el valle: lleva mapa y brújula o GPS propios.',
  atribucion: 'Mapa © colaboradores de OpenStreetMap',
  centroInicial: { lat: -41.4495, lon: -72.115, zoom: 10 },
}

export const puntosMapa: PuntoMapa[] = [
  {
    id: 'inicio-sendero',
    nombre: 'Inicio Sendero',
    tipo: 'sector',
    lat: -41.455073,
    lon: -72.219495,
    descripcion:
      'Centro de Visitantes y registro obligatorio. Aquí empieza el sendero y se presenta la reserva.',
    enlace: { label: 'Reservar', href: externos.reservas },
  },
  {
    id: 'la-junta',
    nombre: 'La Junta',
    tipo: 'sector',
    lat: -41.411358,
    lon: -72.126878,
    descripcion: 'El centro turístico del valle, a 13 km del inicio del sendero. Campings y hospedaje.',
    enlace: { label: 'Reservar', href: externos.reservas },
  },
  {
    id: 'lago-vidal',
    nombre: 'Lago Vidal Gormaz',
    tipo: 'sector',
    lat: -41.483506,
    lon: -71.940878,
    descripcion: 'Alternativa al valle principal, con identidad gaucha campesina propia.',
    enlace: { label: 'Reservar', href: externos.reservas },
  },
  {
    id: 'cochamo',
    nombre: 'Cochamó (pueblo)',
    tipo: 'referencia',
    lat: -41.493527,
    lon: -72.308176,
    descripcion: 'El pueblo más cercano y el último punto con servicios antes de entrar al valle.',
  },
  {
    id: 'cerro-trinidad',
    nombre: 'Cerro Trinidad',
    tipo: 'referencia',
    lat: -41.426866,
    lon: -72.096488,
    descripcion: 'La pared de granito que domina La Junta, uno de los hitos del valle.',
  },
]
