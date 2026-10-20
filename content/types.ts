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
  /** El sector al que va casi todo el mundo: se muestra grande y primero. */
  principal?: boolean
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
  tipo: 'sector' | 'referencia' | 'camping'
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
  /** Para señalarlo en el mapa. Los que no la tienen no se marcan. */
  lat?: number
  lon?: number
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
  imagen?: keyof typeof import('./imagenes').imagenes
  alt?: string
}

/**
 * Un grupo de especies o rasgos del valle, con su tarjeta y su ficha.
 *
 * Van agrupados y no uno por uno porque siete tarjetas sueltas no cuentan
 * nada: el bosque, el sotobosque, las alturas y la roca son cuatro historias
 * distintas, y cada una se lee entera al abrirla.
 */
export interface GrupoEspecies {
  id: string
  titulo: string
  /** Lo que lista la tarjeta: «Alerce · Coihue · Mañío» */
  subtitulo: string
  intro: string
  imagen?: keyof typeof import('./imagenes').imagenes
  alt?: string
  fichas: { nombre: string; cientifico?: string; texto: string }[]
  cierre: string
}

/** Una forma de recorrer el valle, con su ficha al abrirla. */
export interface Actividad {
  id: string
  icono: IconName
  titulo: string
  texto: string
  dato?: string
  imagen?: keyof typeof import('./imagenes').imagenes
  alt?: string
  /** Lo que se lee al abrir la tarjeta. El último suele ser el aviso. */
  bloques: { titulo?: string; texto: string; aviso?: boolean }[]
}

/** Columna de la comparación "día vs. semana". */
/** Una de las dos formas de visitar, como columna de la comparativa. */
export interface Modalidad {
  titulo: string
  resumen: string
  paraQuien: string
  destacada?: boolean
}

/**
 * Una fila de la comparativa, con un valor por modalidad y en el mismo orden.
 * Las filas son comunes a propósito: antes cada columna traía las suyas y no
 * había nada que comparar, solo dos listas puestas una al lado de la otra.
 */
export interface FilaComparativa {
  etiqueta: string
  valores: string[]
}

/** Partida de la sección "cuánto cuesta". */
export interface Costo {
  concepto: string
  valor: string
  /** Lo que va en pequeño tras el monto: «por día y caballo». */
  unidad?: string
  detalle: string
  /** La entrada al valle, que es la respuesta que más gente viene buscando. */
  destacado?: boolean
  /** Servicios que se contratan si se quieren, no para entrar al valle. */
  opcional?: boolean
  enlace?: Enlace
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

/**
 * Un plan de suscripción dado de alta en el panel de Payku.
 *
 * El panel entrega, por cada plan, un enlace público con estos dos datos:
 * `app.payku.cl/suscripcion/index?idplan=…&verif=…`. Esa página muestra el
 * nombre del plan, el monto, la periodicidad y las fechas de cobro, pide
 * nombre, correo y teléfono, y recién después pasa a la tarjeta. No hay que
 * firmar nada ni usar la API: basta pegar los dos valores aquí.
 *
 * `verif` no es un secreto —viaja en una URL que se publica— sino la firma con
 * que Payku comprueba que el plan se abrió desde donde corresponde.
 */
export interface EnlacePayku {
  idplan: string
  verif: string
}

/**
 * Una página larga de texto, como las de santuario y conservación.
 *
 * No están en ningún menú: se llega a ellas desde los botones de El Valle.
 * Son las dos páginas que la corporación ya tenía en vallecochamo.org y que
 * quedaban fuera del sitio nuevo.
 */
export interface PaginaLarga {
  eyebrow: string
  titulo: string
  bajada: string
  foto: { imagen: keyof typeof import('./imagenes').imagenes; alt: string }
  intro: string[]
  cifras?: { valor: string; texto: string }[]
  bloques: {
    titulo: string
    parrafos?: string[]
    lista?: string[]
    grupos?: { titulo: string; items: string[] }[]
  }[]
  cierre: { titulo: string; texto: string; cta: Enlace }
}

/** Un nivel de socio, con su precio anual y mensual. */
export interface PlanSocio {
  /** Llave con la que se busca su plan de Payku en `planesPayku`. */
  id: string
  nombre: string
  /** De dónde viene el nombre: el chucao, el alerce, el cerro… */
  subtitulo: string
  /** Pesos chilenos, sin separadores: se formatean según el idioma. */
  anual: number
  mensual: number
  beneficios: string[]
  /** El nivel mecenas, que se muestra distinto */
  mecenas?: boolean
  destacado?: boolean
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
  hazteSocio: string
  comoAyudar: string
  hazteSocioCorto: string
  conocerHistoria: string
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
  pagoSeguroPor: string
  abrirFormulario: string
  cargandoMapa: string
  tocaParaMoverMapa: string
  mapaDe: string
  dondeDormir: string
  servicios: string
  contacto: string
  reservarEn: (nombre: string) => string
  volverAPortada: string
  verMas: string
  cerrar: string
  areaSantuario: string
  paraQuienEs: string
  opcional: string
  fotoElValle: string
  fotoComoVisitar: string
  fotoHistoria: string
  fotoComoAyudar: string
  fotoReservar: string
  lineaDeTiempo: string
  sobreElSector: string
  datosClave: string
  tenEnCuenta: string
  verTodosLosSectores: string
  masInfoEn: string
  lugaresParaDormir: (n: number) => string
  verEnElMapa: string
  copiar: string
  copiado: string
  copiarTodo: string
  copiadoTodo: string
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
  quienesSomos: string
  verHistoria: string
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
    titulo: string[]
    bajada: string
    alt: string
  }
  cifrasTitulo: string
  cierrePortada: { titulo: string; destacado: string; donar: Enlace; proyectos: Enlace }
  cifras: Cifra[]
  introHistoria: Encabezado & { entrada: string; cita: string; citaFuente: string }
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
  loQueEstaEnJuego: Encabezado & { cierre: string; cta: Enlace; ctaProteger: Enlace }
  amenazas: { icono: IconName; titulo: string; texto: string }[]
  introProyectos: Encabezado
  proyectos: Proyecto[]
  llamadoProyectos: { titulo: string; texto: string; cta: Enlace }
  logrosEncabezado: Encabezado
  logros: { icono: IconName; label: string; texto: string; href: string; imagen: keyof typeof import('./imagenes').imagenes; alt: string }[]
  boletin: { titulo: string; texto: string; nota: string }
  aliadosEncabezado: Encabezado
  aliados: Aliado[]

  /* ----- Estructura nueva ----- */

  /** Hero: resumen de qué es, dónde y qué se hace */

  elValle: Encabezado
  elVallePagina: Encabezado & { cierre: string; cta1: Enlace; cta2: Enlace }
  quienesSomosPagina: Encabezado
  rasgos: Rasgo[]

  floraFauna: Encabezado & { cierre: string }
  gruposEspecies: GrupoEspecies[]

  queHacer: Encabezado & { cierre: string; cta: Enlace }
  actividades: Actividad[]

  impacto: Encabezado
  logroImportante: { cifra: string; unidad: string; titulo: string; texto: string; cta: Enlace }
  misionVision: { mision: { titulo: string; texto: string }; vision: { titulo: string; texto: string } }

  destinoAportes: {
    titulo: string
    texto: string
    reparto: { conservacion: string; infraestructura: string; etiquetaGrafico: string }
    items: { icono: IconName; dato: string; titulo: string; texto: string }[]
  }

  /* ----- Donar y socios ----- */
  donarPagina: Encabezado & {
    intro: string
    metodos: MetodoDonacion[]
    tituloCuenta: string
    otraVia: { titulo: string; texto: string; cta: Enlace }
    reparto: { titulo: string; conservacion: string; infraestructura: string }
  }
  sociosPagina: Encabezado & {
    intro: string
    porQue: { titulo: string; texto: string }[]
    tituloSuscripcion: string
    planes: { encabezado: Encabezado; mensual: string; anual: string; equivaleA: string; alMes: string; alAnio: string; elegir: string; respaldo: string; lista: PlanSocio[] }
    introSuscripcion: string
    notaSuscripcion: string
    tarjeta: { alt: string; pasos: string[]; libre: string; ctaLibre: string }
    tituloFormulario: string
    introFormulario: string
    campos: CampoFormulario[]
    nota: string
    gracias: string
  }

  /** Las dos páginas a las que Payku devuelve a la persona tras pagar. */
  resultadoPago: {
    gracias: Encabezado & { pasos: string[]; volver: Enlace; otra: Enlace }
    problema: Encabezado & { tranquiliza: string; motivos: string[]; reintentar: Enlace; transferir: Enlace }
  }

  /* ----- Página Cómo visitar ----- */
  comoVisitarPagina: Encabezado & { intro: string }
  dondeDormir: Encabezado & {
    bloques: { slug: string; titulo?: string; texto?: string; enlace?: Enlace; foto?: Foto }[]
  }
  comoAyudarPagina: Encabezado & { intro: string }
  santuarioPagina: PaginaLarga
  conservacionPagina: PaginaLarga
  reservarPagina: Encabezado & { intro: string; tituloSectores: string; tituloDormir: string }
  comoLlegar: Encabezado & {
    auto: { titulo: string; texto: string }
    bus: {
      titulo: string
      advertencia: { titulo: string; puntos: string[] }
      planificacion: { titulo: string; pasos: string[]; nota: string }
      contactosTitulo: string
      contactos: Contacto[]
    }
  }
  cuantoCuesta: Encabezado & { costos: Costo[]; nota: string }
  diaVsSemana: Encabezado & { modalidades: Modalidad[]; filas: FilaComparativa[] }
  horariosYContacto: Encabezado & {
    horarios: { franja: string; detalle: string }[]
    contactos: Contacto[]
    nota: string
  }
}
