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

export type TipoContacto = 'telefono' | 'whatsapp' | 'email' | 'web' | 'instagram' | 'facebook'

export interface Contacto {
  tipo: TipoContacto
  /** Texto visible */
  valor: string
  href: string
}

/** Camping, refugio, hostal o cabaña de un sector. */
export interface Alojamiento {
  id: string
  nombre: string
  /** Camping, Refugio, Hostal… */
  tipo: string
  descripcion: string
  servicios: string[]
  contactos: Contacto[]
  /** Dónde se reserva este alojamiento en concreto */
  reserva?: Enlace
  nota?: string
}

/** Página propia de un sector, con toda su información. */
export interface SectorDetalle {
  slug: string
  nombre: string
  titular: string
  intro: string
  parrafos: string[]
  foto: Foto
  datosClave: { etiqueta: string; valor: string }[]
  alojamientos: Alojamiento[]
  /** Avisos de seguridad propios del sector */
  avisos: string[]
  /** Bloque de arrieros, solo donde se contratan */
  arrieros?: {
    titulo: string
    texto: string
    datos: { etiqueta: string; valor: string }[]
    contacto: Contacto
  }
}

/** Tarjeta visual de "por qué el valle es especial". */
export interface Rasgo {
  icono: IconName
  titulo: string
  texto: string
  foto?: Foto
}

/** Especie o formación destacada en Flora y fauna. */
export interface Especie {
  nombre: string
  nombreCientifico?: string
  grupo: 'flora' | 'fauna' | 'geologia'
  texto: string
}

/** Actividad posible en el valle. */
export interface Actividad {
  icono: IconName
  titulo: string
  texto: string
  dato?: string
}

/** Columna de la comparación "día vs. semana". */
export interface Modalidad {
  titulo: string
  resumen: string
  filas: { etiqueta: string; valor: string }[]
  paraQuien: string
  destacada?: boolean
}

/** Forma de llegar al valle. */
export interface MedioDeTransporte {
  icono: IconName
  titulo: string
  texto: string
  contactos?: Contacto[]
}

/** Partida de la sección "cuánto cuesta". */
export interface Costo {
  concepto: string
  valor: string
  detalle: string
}

/** Una vía para aportar dinero. */
export interface MetodoDonacion {
  id: 'transferencia' | 'payku'
  icono: IconName
  titulo: string
  texto: string
  ventaja: string
  /** Lo que cobra el intermediario, si cobra */
  comision: string
}

/** Campo del formulario de socios. */
export interface CampoFormulario {
  nombre: 'nombre' | 'email' | 'telefono' | 'direccion' | 'mensaje'
  etiqueta: string
  tipo: 'text' | 'email' | 'tel' | 'textarea'
  requerido: boolean
  ayuda?: string
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
  abrirFormulario: string
  cargandoFormulario: string
  formularioTarda: string
  abrirEnPestana: string
  cargandoMapa: string
  tocaParaMoverMapa: string
  mapaDe: string
  dondeDormir: string
  servicios: string
  contacto: string
  reservarEn: (nombre: string) => string
  volverAPortada: string
  sobreElSector: string
  datosClave: string
  tenEnCuenta: string
  verTodosLosSectores: string
  masInfoEn: string
  lugaresParaDormir: (n: number) => string
  verEnElMapa: string
  copiar: string
  copiado: string
  enviar: string
  enviando: string
  enviado: string
  errorEnvio: string
  camposRequeridos: string
  correoDirecto: string
  quieroIr: string
  conocerElValle: string
  comoVisitar: string
  flora: string
  fauna: string
  geologia: string
  verComoVisitar: string
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
  /** Páginas propias, una por sector */
  sectoresDetalle: SectorDetalle[]
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
  boletin: { titulo: string; texto: string; nota: string }
  aliadosEncabezado: Encabezado
  aliados: Aliado[]

  /* ----- Estructura nueva ----- */

  /** Hero: resumen de qué es, dónde y qué se hace */
  heroResumen: { etiqueta: string; valor: string }[]

  elValle: Encabezado
  elVallePagina: Encabezado
  quienesSomosPagina: Encabezado
  rasgos: Rasgo[]

  floraFauna: Encabezado
  especies: Especie[]

  queHacer: Encabezado
  actividades: Actividad[]

  impacto: Encabezado
  logroImportante: { cifra: string; unidad: string; titulo: string; texto: string; cta: Enlace }
  misionVision: { mision: { titulo: string; texto: string }; vision: { titulo: string; texto: string } }

  futuro: Encabezado
  necesitamosTuAyuda: { titulo: string; texto: string; cta: Enlace }

  /* ----- Donar y socios ----- */
  donarPagina: Encabezado & {
    intro: string
    metodos: MetodoDonacion[]
    tituloCuenta: string
    tituloPayku: string
    notaPayku: string
    reparto: { titulo: string; conservacion: string; infraestructura: string }
  }
  sociosPagina: Encabezado & {
    intro: string
    porQue: { titulo: string; texto: string }[]
    tituloSuscripcion: string
    montosSuscripcion: string[]
    introSuscripcion: string
    notaSuscripcion: string
    tituloFormulario: string
    introFormulario: string
    campos: CampoFormulario[]
    nota: string
    gracias: string
  }

  /* ----- Página Cómo visitar ----- */
  comoVisitarPagina: Encabezado & { intro: string }
  comoLlegar: Encabezado & { medios: MedioDeTransporte[] }
  cuantoCuesta: Encabezado & { costos: Costo[]; nota: string }
  diaVsSemana: Encabezado & { modalidades: Modalidad[] }
  horariosYContacto: Encabezado & {
    horarios: { franja: string; detalle: string }[]
    contactos: Contacto[]
    nota: string
  }
}
