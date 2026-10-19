/**
 * Tipos del contenido del sitio.
 *
 * Todo el contenido editable vive en `content/<idioma>/` como módulos tipados.
 * Es a propósito: el día que se conecte un CMS (Decap, Sanity, lo que sea),
 * basta con reemplazar el cuerpo de cada módulo por una consulta que devuelva
 * estos mismos tipos. Los componentes no se tocan.
 *
 * Cada idioma debe cumplir el tipo `Contenido`, así que si se agrega un texto
 * en español y falta en inglés, falla el typecheck y no se publica a medias.
 */

export type IconName =
  | 'chevron' | 'arriba' | 'instagram' | 'facebook' | 'youtube' | 'mail'
  | 'corazon' | 'carpa' | 'montana' | 'caballo' | 'reloj' | 'pin'
  | 'alerta' | 'sendero' | 'check' | 'hoja' | 'camino' | 'edificio'
  | 'gente' | 'video' | 'botiquin' | 'agua' | 'cartel' | 'flecha'

/** Archivo de imagen sin texto: lo que no se traduce. */
export interface Imagen {
  src: string
  width: number
  height: number
}

/** Imagen con su texto alternativo, que sí se traduce. */
export interface Foto extends Imagen {
  alt: string
}

export interface Enlace {
  label: string
  /** Ruta interna (#ancla o /ruta) o URL absoluta */
  href: string
  /** Línea de apoyo en los submenús */
  detalle?: string
}

export interface GrupoMenu {
  label: string
  href: string
  items: Enlace[]
}

export interface Cifra {
  valor: number
  sufijo?: string
  prefijo?: string
  texto: string
}

export interface Hito {
  anio: string
  titulo: string
  texto: string
  destacado?: boolean
}

export interface Sector {
  id: string
  nombre: string
  insignia: string
  descripcion: string
  datos: { icono: IconName; texto: string }[]
  foto: Foto
  cta: { label: string; href: string; destacado?: boolean }
}

export interface Ficha {
  icono: IconName
  titulo: string
  texto: string
  datos?: { etiqueta: string; valor: string }[]
  enlace?: Enlace
  alerta?: boolean
}

export interface Norma {
  titulo: string
  detalle: string
}

export interface Paso {
  titulo: string
  texto: string
}

export interface Proyecto {
  titulo: string
  texto: string
  estado: 'activo' | 'logrado'
}

export interface Aporte {
  icono: IconName
  titulo: string
  texto: string
  cta: Enlace
  destacado?: boolean
}

export interface Aliado {
  nombre: string
  href: string
  logo?: Foto
}

export interface PuntoMapa {
  id: string
  nombre: string
  /** Los sectores se reservan; las referencias solo ubican. */
  tipo: 'sector' | 'referencia'
  /** Coordenadas tomadas de OpenStreetMap. */
  lat: number
  lon: number
  descripcion: string
  enlace?: Enlace
}

export interface Camino {
  etiqueta: string
  titulo: string
  texto: string
  foto: Foto
  enlaces: Enlace[]
}

export interface Encabezado {
  eyebrow: string
  titulo: string
  bajada?: string
}

/** Textos de interfaz: botones, etiquetas y rótulos de accesibilidad. */
export interface Textos {
  saltarAlContenido: string
  navegacionPrincipal: string
  abrirMenu: string
  cerrarMenu: string
  inicio: string
  volverArriba: string
  reservar: string
  reservarEstadia: string
  donar: string
  conocerHistoria: string
  irAReservas: string
  enCurso: string
  logrado: string
  nombre: string
  correo: string
  suscribirme: string
  faltaNombre: string
  correoInvalido: string
  graciasPorSuscribirte: (nombre: string) => string
  repartoDonacion: string
  directorioAmpliado: string
  cargandoMapa: string
  tocaParaMoverMapa: string
  mapaDe: string
}

/** Todo lo que un idioma debe proveer. */
export interface Contenido {
  organizacion: {
    corporacion: string
    nombre: string
    nombreCompleto: string
    alias: string
    fundacion: string
    ubicacion: string
    descripcion: string
    avisoTemporada: string
  }
  meta: { titulo: string; descripcion: string; descripcionOg: string }
  textos: Textos
  menu: GrupoMenu[]
  enlacesPie: { titulo: string; items: Enlace[] }[]
  hero: {
    sobretitulo: string
    titulo: string[]
    bajada: string
    alt: string
    pieIzquierda: string
    pieDerecha: string
  }
  cifras: Cifra[]
  caminosEncabezado: Encabezado
  caminos: Camino[]
  introHistoria: Encabezado & { cita: string; citaFuente: string }
  hitos: Hito[]
  nosotros: Encabezado & {
    parrafos: string[]
    foto: Foto
    pieFoto: string
    directorio: string[]
  }
  sectoresEncabezado: Encabezado
  sectores: Sector[]
  mapa: {
    encabezado: Encabezado
    aviso: string
    centroInicial: { lat: number; lon: number; zoom: number }
  }
  puntosMapa: PuntoMapa[]
  planificaEncabezado: Encabezado
  fichasPlanificacion: Ficha[]
  normasEncabezado: Encabezado
  normas: Norma[]
  fotoNormas: Foto
  porQueReservar: Encabezado & {
    parrafo: string
    fondoAlt: string
    reparto: { conservacion: string; infraestructura: string; etiquetaGrafico: string }
  }
  pasosReserva: Paso[]
  santuario: Encabezado & {
    parrafo: string
    hectareas: string
    hectareasPie: string
    foto: Foto
    enlace: Enlace
  }
  queProtege: { icono: IconName; texto: string }[]
  loQueEstaEnJuego: Encabezado & { cta: Enlace }
  amenazas: { icono: IconName; titulo: string; texto: string }[]
  introProyectos: Encabezado
  proyectos: Proyecto[]
  llamadoProyectos: { titulo: string; texto: string; cta: Enlace }
  logrosEncabezado: Encabezado
  logros: { icono: IconName; label: string; href: string }[]
  introColaborar: Encabezado
  aportes: Aporte[]
  boletin: { titulo: string; texto: string; nota: string }
  aliadosEncabezado: Encabezado
  aliados: Aliado[]
}
