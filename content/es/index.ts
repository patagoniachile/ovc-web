import { externos } from '../externos'
import { imagenes } from '../imagenes'
import { donarPagina, sociosPagina } from './colaborar'
import * as nuevo from './estructura'
import { sectoresDetalle } from './sectores'
import type { Contenido } from '../types'

/** La portada del idioma. El menú y el pie se ven en todas las páginas, así
 *  que sus anclas tienen que ser absolutas: una `#ancla` suelta se cuelga de
 *  la URL actual y desde /como-visitar no llevaba a ninguna parte. */
const PORTADA = '/es'

const organizacion = {
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

export const contenido: Contenido = {
  organizacion,

  meta: {
    titulo: `${organizacion.nombreCompleto} — Visita y protege el valle`,
    descripcion:
      'La Corporación Valle Cochamó reúne a vecinos, propietarios, arrieros y operadores turísticos para conservar el Valle Cochamó y ordenar su visita. Reserva tu estadía, conoce el Santuario de la Naturaleza propuesto y colabora.',
    descripcionOg:
      'Reserva tu estadía, prepara tu viaje y súmate a conservar uno de los valles de granito y bosque nativo más valiosos de la Patagonia chilena.',
  },

  textos: {
    saltarAlContenido: 'Saltar al contenido principal',
    navegacionPrincipal: 'Navegación principal',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    inicio: 'Inicio',
    volverArriba: 'Volver arriba',
    reservar: 'Reservar',
    reservarEstadia: 'Reservar mi estadía',
    donar: 'Donar',
    hazteSocio: 'Hazte socio',
    hazteSocioCorto: 'Socio',
    conocerHistoria: 'Conoce nuestra historia',
    irAReservas: 'Ir a reservas',
    enCurso: 'En curso',
    logrado: 'Logrado',
    nombre: 'Nombre',
    correo: 'Correo electrónico',
    suscribirme: 'Suscribirme',
    faltaNombre: 'Cuéntanos tu nombre para saludarte bien.',
    correoInvalido: 'Revisa tu correo: parece que falta algo.',
    graciasPorSuscribirte: (nombre) => `¡Gracias, ${nombre}! Te escribiremos pronto.`,
    repartoDonacion: 'Cómo se reparte tu donación',
    directorioAmpliado: 'Integrantes del directorio ampliado',
    pagoSeguroPor: 'Pago seguro procesado por',
    abrirFormulario: 'Abrir el formulario de suscripción',
    cargandoFormulario: 'Cargando el formulario de Payku…',
    formularioTarda: 'El formulario está tardando más de lo normal.',
    abrirEnPestana: 'Abrir en una pestaña nueva',
    cargandoMapa: 'Cargando el mapa…',
    tocaParaMoverMapa: 'Toca para mover el mapa',
    mapaDe: 'Mapa del Valle Cochamó',
    dondeDormir: 'Dónde dormir',
    servicios: 'Servicios',
    contacto: 'Contacto',
    reservarEn: (nombre) => `Reservar en ${nombre}`,
    volverAPortada: 'Volver a la portada',
    sobreElSector: 'Sobre el sector',
    datosClave: 'Datos clave',
    tenEnCuenta: 'Ten en cuenta',
    verTodosLosSectores: 'Ver los tres sectores',
    masInfoEn: 'Más información',
    lugaresParaDormir: (n) => `${n} ${n === 1 ? 'lugar' : 'lugares'} para alojar en este sector. La reserva se hace con cada operador; acá tienes todo para decidir.`,
    verEnElMapa: 'Ver en el mapa',
    copiar: 'Copiar',
    copiado: 'Copiado',
    copiarTodo: 'Copiar todos los datos',
    copiadoTodo: 'Datos copiados',
    enviar: 'Enviar',
    enviando: 'Enviando…',
    enviado: 'Enviado',
    errorEnvio: 'No pudimos enviar el formulario. Escríbenos directo a',
    camposRequeridos: 'Completa tu nombre y un correo válido.',
    correoDirecto: 'O escríbenos a',
    quieroIr: 'Quiero ir',
    conocerElValle: 'Conocer el valle',
    comoVisitar: 'Cómo visitar',
    flora: 'Flora',
    fauna: 'Fauna',
    geologia: 'Geología',
    verComoVisitar: 'Ver cómo visitar',
    quienesSomos: 'Quiénes somos',
    verHistoria: 'Ver nuestra historia',
  },

  menu: [
    {
      label: 'El Valle',
      href: `${PORTADA}/el-valle`,
      items: [
        { label: 'Dónde queda', href: `${PORTADA}/el-valle#mapa`, detalle: 'Mapa de los sectores' },
        { label: 'Flora y fauna', href: `${PORTADA}/el-valle#flora-fauna`, detalle: 'Qué vive en el bosque valdiviano' },
        { label: 'Qué se puede hacer', href: `${PORTADA}/el-valle#que-hacer`, detalle: 'Trekking, escalada, cabalgatas' },
        { label: 'El Santuario', href: `${PORTADA}/el-valle#santuario`, detalle: '11.432,8 ha propuestas' },
        { label: 'Lo que está en juego', href: `${PORTADA}/el-valle#amenazas`, detalle: 'Las amenazas sobre el valle' },
      ],
    },
    {
      label: 'Cómo visitar',
      href: `${PORTADA}/como-visitar`,
      items: [
        { label: 'Cómo llegar', href: `${PORTADA}/como-visitar#como-llegar`, detalle: 'En auto o en bus' },
        { label: 'Cuánto cuesta', href: `${PORTADA}/como-visitar#cuanto-cuesta`, detalle: 'Qué se paga y a quién' },
        { label: 'Cómo reservar', href: `${PORTADA}/como-visitar#reservar`, detalle: 'Los cuatro pasos' },
        { label: 'Día vs. varios días', href: `${PORTADA}/como-visitar#dia-vs-semana`, detalle: 'Dos viajes distintos' },
        { label: 'Qué debo saber', href: `${PORTADA}/como-visitar#normas`, detalle: 'Normas y seguridad' },
        { label: 'Horarios y contacto', href: `${PORTADA}/como-visitar#horarios`, detalle: 'Ingresos y a quién escribir' },
        { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir`, detalle: 'Los quince, con su contacto' },
      ],
    },
    {
      label: 'Historia',
      href: `${PORTADA}/historia`,
      items: [
        { label: 'Qué pasó', href: `${PORTADA}/historia#historia`, detalle: 'De 2009 a hoy' },
        { label: 'Quién administra y por qué', href: `${PORTADA}/historia#nosotros`, detalle: 'La comunidad del valle' },
        { label: 'Misión y visión', href: `${PORTADA}/historia#mision`, detalle: 'Hacia dónde vamos' },
        { label: 'Qué hemos hecho', href: `${PORTADA}/historia#logros`, detalle: 'Obras terminadas' },
        { label: 'Qué queremos hacer', href: `${PORTADA}/historia#proyectos`, detalle: 'Los desafíos abiertos' },
      ],
    },
    {
      label: 'Cómo ayudar',
      href: `${PORTADA}/como-ayudar`,
      items: [
        { label: 'Donaciones', href: `${PORTADA}/como-ayudar#donaciones`, detalle: 'Transferencia, sin comisión' },
        { label: 'Socios', href: `${PORTADA}/como-ayudar#socios`, detalle: 'Aporte mensual o anual' },
      ],
    },
  ],

  enlacesPie: [
    {
      titulo: 'El Valle',
      items: [
        { label: 'Dónde queda', href: `${PORTADA}/el-valle#mapa` },
        { label: 'Flora y fauna', href: `${PORTADA}/el-valle#flora-fauna` },
        { label: 'Qué se puede hacer', href: `${PORTADA}/el-valle#que-hacer` },
        { label: 'El Santuario', href: `${PORTADA}/el-valle#santuario` },
      ],
    },
    {
      titulo: 'Cómo visitar',
      items: [
        { label: 'Cómo llegar', href: '/es/como-visitar#como-llegar' },
        { label: 'Cuánto cuesta', href: '/es/como-visitar#cuanto-cuesta' },
        { label: 'Cómo reservar', href: `${PORTADA}/como-visitar#reservar` },
        { label: 'Qué debo saber', href: '/es/como-visitar#normas' },
        { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir` },
      ],
    },
    {
      titulo: 'Organización',
      items: [
        { label: 'Qué pasó', href: `${PORTADA}/historia` },
        { label: 'Quiénes somos', href: `${PORTADA}/historia#nosotros` },
        { label: 'Noticias', href: externos.noticias },
        { label: 'Donaciones', href: `${PORTADA}/como-ayudar#donaciones` },
        { label: 'Socios', href: `${PORTADA}/como-ayudar#socios` },
      ],
    },
  ],

  hero: {
    sobretitulo: 'Patagonia · Chile',
    titulo: ['Visita el valle.', 'Protégelo.'],
    bajada:
      'El Valle Cochamó no es un parque ni una reserva pública: son tierras privadas que sus dueños abrieron al público. Lo cuidamos entre todos, con una visita ordenada y un compromiso real con su conservación.',
    alt: 'Paredes de granito del Valle Cochamó con el bosque nativo del valle al fondo',
    pieIzquierda: 'Sector La Junta · Comuna de Cochamó, Región de Los Lagos',
    pieDerecha: 'Desde 2016 se reserva para entrar · Desde 2017 nos organizamos',
  },

  cifras: [
    { valor: 11432, sufijo: ',8 ha', texto: 'Superficie propuesta como Santuario de la Naturaleza' },
    { valor: 8000, sufijo: ' ha', texto: 'De bosque de alerce, con ejemplares de cerca de 1.000 años' },
    { valor: 17000, prefijo: '+', texto: 'Visitantes al año recorren el sendero de los arrieros' },
    { valor: 1000, sufijo: ' m', texto: 'De paredes de granito del Batolito Norpatagónico' },
  ],

  introHistoria: {
    eyebrow: 'Nuestra historia',
    titulo: 'Quince años defendiendo un valle que nunca fue parque',
    bajada:
      'La historia de la conservación del Valle Cochamó se remonta a décadas de esfuerzos dispersos. Lo que empezó como la resistencia a un proyecto hidroeléctrico terminó convirtiéndose en una organización comunitaria que hoy ordena la visita, repara senderos y empuja la creación de un área protegida.',
    cita: 'Las decisiones de hoy determinan las consecuencias de mañana.',
    citaFuente: 'Lema del sistema de reservas del Valle Cochamó',
  },

  hitos: [
    {
      anio: '2009 — 2012',
      titulo: 'Nace Conservación Cochamó',
      texto:
        'Un grupo ciudadano se organiza para enfrentar un proyecto hidroeléctrico que pretendía explotar el río Cochamó y sus principales afluentes.',
    },
    {
      anio: 'Primer gobierno de Bachelet',
      titulo: 'Decreto de reserva para la cuenca',
      texto:
        'Junto a la comunidad local se consigue un decreto presidencial que crea una reserva para la cuenca del río Cochamó, orientada a la conservación y al desarrollo local.',
    },
    {
      anio: '2016',
      titulo: 'Se exige reserva para entrar a La Junta',
      texto:
        'Comienza a funcionar el sistema de reservas: una forma concreta de respetar la capacidad de carga del sendero y de los campings, y de reducir el impacto sobre el valle.',
      destacado: true,
    },
    {
      anio: '2017',
      titulo: 'Se funda la Organización Valle Cochamó',
      texto:
        'Personas de Conservación Cochamó, miembros de Puelo Patagonia, propietarios, operadores turísticos y aliados internacionales —entre ellos Friends of Cochamó— dan vida a la OVC.',
      destacado: true,
    },
    {
      anio: '2019',
      titulo: 'El directorio ampliado se reúne en Llanada Grande',
      texto: 'Vecinos, arrieros, propietarios y operadores consolidan una gobernanza común para el destino.',
    },
    {
      anio: 'Julio 2022',
      titulo: 'Se presenta el Santuario de la Naturaleza',
      texto:
        'La propuesta de 11.432,8 hectáreas llega al Ministerio de Bienes Nacionales, sobre terrenos fiscales —la Hijuela 5— y predios privados que se sumaron de forma voluntaria.',
      destacado: true,
    },
    {
      anio: 'Octubre 2022',
      titulo: 'La comunidad toma la palabra',
      texto:
        'Conversatorio comunitario en Lago Vidal y Torrentoso, y participación en el 2.º Encuentro de Áreas Protegidas en Santiago.',
    },
    {
      anio: 'Hoy',
      titulo: 'El valle sigue sin protección oficial',
      texto:
        'Las amenazas no cesaron: proyectos inmobiliarios, centrales y, sobre todo, un camino que avanza cada vez más cerca. Seguimos trabajando para que el santuario sea declarado.',
    },
  ],

  nosotros: {
    eyebrow: 'Quiénes somos',
    titulo: 'Vecinos, arrieros, propietarios y amigos del valle',
    bajada:
      'Somos una organización comunitaria y transversal, sin fines de lucro, que trabaja por el turismo responsable y el ordenamiento territorial del Valle Cochamó.',
    parrafos: [
      'El valle es un conjunto de tierras mayoritariamente privadas, unidas por un sendero que los arrieros andinos han usado durante generaciones. Hoy ese mismo sendero lo comparten más de 17.000 visitantes al año. Por eso operadores turísticos, propietarios y amantes del valle empezamos a trabajar en un **área protegida colaborativa**: un modelo donde quienes viven y trabajan aquí siguen siendo quienes lo administran.',
      'Nos mueve el cariño por este lugar y la preocupación por los efectos ambientales del aumento de visitantes. Resguardamos los estilos de vida tradicionales, la cultura y la identidad local, y buscamos que el patrimonio natural y cultural del valle llegue entero a las próximas generaciones.',
    ],
    foto: {
      ...imagenes.equipo,
      alt: 'Integrantes del directorio ampliado de la Organización Valle Cochamó sentados en la escalera de una casa de madera',
    },
    pieFoto:
      'Parte del directorio ampliado de la organización durante una jornada de trabajo en Llanada Grande, 2019.',
    directorio: [
      'Andrés Amengual', 'Silvina Verdún', 'Patricio Almonacid', 'Aurelia Barrio', 'Daniel Seeliger',
      'Rodrigo Condezza', 'Tatiana Sandoval', 'Paula Sanza', 'Daniel Pastene', 'Paty Almonacid',
    ],
  },

  sectoresEncabezado: {
    eyebrow: 'Visita',
    titulo: 'Tres sectores, tres formas de conocer el valle',
    bajada:
      'Todos se reservan antes de llegar. Infórmate, programa y prepárate: el sendero es largo, hay mucho barro y el tiempo es impredecible.',
  },

  sectoresDetalle,

  sectores: [
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
        ...imagenes.registroSendero,
        alt: 'Visitantes registrándose en el panel informativo del inicio del sendero',
      },
      cta: { label: 'Conocer Inicio Sendero', href: '/es/sectores/inicio-sendero' },
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
        ...imagenes.campingLaJunta,
        alt: 'Vista desde el interior de una carpa hacia las montañas de granito del sector La Junta',
      },
      cta: { label: 'Conocer La Junta', href: '/es/sectores/la-junta', destacado: true },
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
        ...imagenes.arrieros,
        alt: 'Arriero a caballo guiando una tropilla de mulas cargadas por el sendero del valle',
      },
      cta: { label: 'Conocer Lago Vidal', href: '/es/sectores/lago-vidal' },
    },
  ],

  mapa: {
    encabezado: {
      eyebrow: 'Dónde queda',
      titulo: 'Ubícate antes de viajar',
      bajada:
        'El valle está en la comuna de Cochamó, Región de Los Lagos. Desde el inicio del sendero, La Junta y Lago Vidal solo se alcanzan a pie o a caballo.',
    },
    aviso:
      'Mapa de orientación, no de navegación. No hay cobertura ni servicios de emergencia en el valle: lleva mapa y brújula o GPS propios.',
    centroInicial: { lat: -41.4495, lon: -72.115, zoom: 10 },
  },

  puntosMapa: [
    {
      id: 'inicio-sendero',
      nombre: 'Inicio Sendero',
      tipo: 'sector',
      lat: -41.455073,
      lon: -72.219495,
      descripcion: 'Centro de Visitantes y registro obligatorio. Aquí empieza el sendero y se presenta la reserva.',
      enlace: { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir` },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      tipo: 'sector',
      lat: -41.411358,
      lon: -72.126878,
      descripcion: 'El centro turístico del valle, a 13 km del inicio del sendero. Campings y hospedaje.',
      enlace: { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir` },
    },
    {
      id: 'lago-vidal',
      nombre: 'Lago Vidal Gormaz',
      tipo: 'sector',
      lat: -41.483506,
      lon: -71.940878,
      descripcion: 'Alternativa al valle principal, con identidad gaucha campesina propia.',
      enlace: { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir` },
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
  ],

  planificaEncabezado: {
    eyebrow: 'Antes de ir',
    titulo: 'Saber antes de salir',
    bajada:
      'No hay rescatistas ni servicios de emergencia en el valle. Lo que lleves y lo que sepas es toda la seguridad con la que cuentas.',
  },

  fichasPlanificacion: [
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
      enlace: { label: 'Ver tarifas y contacto', href: '/es/sectores/inicio-sendero#arrieros' },
    },
    {
      icono: 'reloj',
      titulo: 'Horarios del sendero',
      texto:
        'El ingreso tiene horarios definidos y se respetan sin excepción. Revísalos antes de viajar y considera el tiempo de traslado hasta el inicio del sendero.',
      enlace: { label: 'Ver horarios', href: '/es/sectores/la-junta' },
    },
    {
      icono: 'pin',
      titulo: 'Cómo llegar',
      texto:
        'El valle está en la comuna de Cochamó, Región de Los Lagos. El sendero comienza donde el río Cochamó desemboca en el estuario de Reloncaví.',
      enlace: { label: 'Ver la ruta', href: `${PORTADA}/el-valle#mapa` },
    },
  ],

  normasEncabezado: { eyebrow: 'Normas básicas', titulo: 'Seis reglas que no se negocian' },

  normas: [
    { titulo: 'Reserva para ingresar al valle.', detalle: 'Sin reserva no hay ingreso, en ninguno de los sectores.' },
    { titulo: 'Presenta tu reserva y regístrate.', detalle: 'El registro está al inicio del sendero y es obligatorio.' },
    { titulo: 'Respeta los horarios de ingreso.', detalle: 'Están definidos por seguridad y por capacidad de carga.' },
    { titulo: 'Acampa solo en campings habilitados.', detalle: 'Fuera de ellos el impacto sobre el suelo y el agua es irreversible.' },
    { titulo: 'Baja tu basura.', detalle: 'Todo lo que subes, vuelve a bajar contigo. No se quema ni se entierra.' },
    { titulo: 'No hay servicios de emergencia.', detalle: 'No existen rescatistas en el valle. Evalúa tus capacidades con honestidad.' },
  ],

  fotoNormas: {
    ...imagenes.senaletica,
    alt: 'Señalética instalada en el sendero pidiendo ayudar a cuidar el Valle Cochamó',
  },

  porQueReservar: {
    eyebrow: '¿Por qué reservar?',
    titulo: 'Limitar la entrada es la forma más simple de cuidar el valle',
    bajada:
      'Desde 2016, para visitar el sector La Junta hay que reservar. No es un trámite: es el mecanismo que permite respetar la capacidad de carga del sendero y de los campings. Cuando se llenan —algo habitual en temporada alta— hay que esperar para entrar.',
    parrafo:
      'Las reservas se gestionan en una plataforma común de operadores turísticos, propietarios y amigos del valle. El valle no es un parque ni una reserva pública: son terrenos privados cuyos dueños abrieron el acceso.',
    fondoAlt: '',
    reparto: {
      conservacion: '50% programas de conservación de largo plazo',
      infraestructura: '50% infraestructura para visitantes',
      etiquetaGrafico: '50% conservación, 50% infraestructura para visitantes',
    },
  },

  pasosReserva: [
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
  ],

  santuario: {
    eyebrow: 'Conservación',
    titulo: 'Un Santuario de la Naturaleza para el Valle Cochamó',
    bajada:
      'El valle no está protegido oficialmente por el Estado chileno. En julio de 2022 presentamos al Ministerio de Bienes Nacionales la propuesta de declararlo Santuario de la Naturaleza, sobre terrenos fiscales —la Hijuela 5— y predios privados que se sumaron voluntariamente.',
    parrafo:
      'Un santuario reconoce los valores ambientales del territorio y es conciliador con la cultura y las formas de vida locales: la comunidad sigue siendo quien lo administra.',
    hectareas: '11.432,8',
    hectareasPie: 'hectáreas propuestas',
    foto: {
      ...imagenes.alerce,
      alt: 'Persona apoyada en el tronco de un alerce milenario en el bosque del Valle Cochamó',
    },
    enlace: { label: 'Conocer la propuesta completa', href: externos.santuario },
  },

  queProtege: [
    { icono: 'hoja', texto: 'Bosques primarios y alerzales' },
    { icono: 'agua', texto: 'Río Cochamó y humedales ribereños' },
    { icono: 'montana', texto: 'Batolito Norpatagónico' },
    { icono: 'check', texto: 'Pudú y monito del monte' },
    { icono: 'check', texto: 'Ranita de Darwin y puma' },
    { icono: 'check', texto: 'Cóndor andino' },
    { icono: 'caballo', texto: 'El sendero y la cultura arriera' },
    { icono: 'gente', texto: 'Pueblos originarios y vida local' },
  ],

  loQueEstaEnJuego: {
    eyebrow: 'Las amenazas no cesaron',
    titulo: 'Lo que está en juego',
    bajada:
      'Llaman al valle “el Yosemite de Sudamérica”. La pregunta es si queremos que se parezca a Yosemite o que siga siendo Cochamó.',
    cta: { label: 'Leer sobre conservación', href: externos.conservacion },
  },

  amenazas: [
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
  ],

  introProyectos: {
    eyebrow: 'Nuestros desafíos',
    titulo: 'En qué estamos trabajando ahora',
    bajada:
      'Cinco metas concretas que necesitan financiamiento. Cada una mejora directamente la experiencia de quienes visitan y reduce el impacto sobre el valle.',
  },

  proyectos: [
    {
      titulo: 'Centro de Visitantes',
      texto:
        'Nació como respuesta al aumento exponencial del turismo. Es el punto donde se informa, se registra y se educa a quien entra al valle.',
      estado: 'activo',
    },
    {
      titulo: 'Sendero interpretativo',
      texto: '11,5 km de sendero con señalética que explica el bosque, el río y la historia arriera a lo largo del recorrido.',
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
      texto: 'Formación de un equipo con insumos de primeros auxilios. Hoy el valle no cuenta con servicios de emergencia.',
      estado: 'activo',
    },
    {
      titulo: 'Video informativo',
      texto: 'Material audiovisual para que cada visitante llegue sabiendo qué esperar, qué llevar y cómo comportarse.',
      estado: 'activo',
    },
  ],

  llamadoProyectos: {
    titulo: '¿Quieres que ocurran?',
    texto: 'Estos proyectos se financian con donaciones y con el aporte de socios y socias.',
    cta: { label: 'Aportar', href: `${PORTADA}/como-ayudar#donaciones` },
  },

  logrosEncabezado: { eyebrow: 'Lo que hemos logrado', titulo: 'Obras que ya están en el valle' },

  logros: [
    { icono: 'edificio', label: 'Centro de Visitantes', href: externos.centroVisitantes },
    { icono: 'sendero', label: 'Trabajos de senderos', href: externos.trabajosSenderos },
    { icono: 'cartel', label: 'Señalética', href: externos.senaletica },
    { icono: 'hoja', label: 'Centro de reciclaje', href: externos.reciclaje },
    { icono: 'montana', label: 'Mantención de rutas de escalada', href: externos.rutasEscalada },
  ],

  boletin: {
    titulo: 'Entérate antes que nadie',
    texto: 'Noticias del santuario, avances de los proyectos y avisos de temporada. Sin spam, pocas veces al año.',
    nota: 'Al suscribirte aceptas recibir correos de la Corporación Valle Cochamó.',
  },

  aliadosEncabezado: { eyebrow: 'Colaboradores', titulo: 'Quienes caminan con nosotros' },

  aliados: [
    { nombre: 'Mammut Chile', href: externos.mammut, logo: { ...imagenes.mammut, alt: 'Mammut Chile' } },
    { nombre: 'Andesgear', href: externos.andesgear, logo: { ...imagenes.andesgear, alt: 'Andesgear' } },
    { nombre: 'Puelo Patagonia', href: externos.pueloPatagonia, logo: { ...imagenes.pueloPatagonia, alt: 'Puelo Patagonia' } },
    { nombre: 'Agrupación de Arrieros de Cochamó', href: externos.reservas, logo: { ...imagenes.arrierosLogo, alt: 'Agrupación de Arrieros de Cochamó' } },
    { nombre: 'Acceso PanAm', href: externos.accesoPanam, logo: { ...imagenes.accesoPanam, alt: 'Acceso PanAm' } },
    { nombre: 'Friends of Cochamó', href: externos.sitio },
  ],

  /* ----- Estructura nueva ----- */
  heroResumen: nuevo.heroResumen,
  elValle: nuevo.elValle,
  elVallePagina: nuevo.elVallePagina,
  quienesSomosPagina: nuevo.quienesSomosPagina,
  rasgos: nuevo.rasgos,
  floraFauna: nuevo.floraFauna,
  especies: nuevo.especies,
  queHacer: nuevo.queHacer,
  actividades: nuevo.actividades,
  impacto: nuevo.impacto,
  logroImportante: nuevo.logroImportante,
  misionVision: nuevo.misionVision,
  futuro: nuevo.futuro,
  viasDeAporte: nuevo.viasDeAporte,
  destinoAportes: nuevo.destinoAportes,
  necesitamosTuAyuda: nuevo.necesitamosTuAyuda,
  donarPagina,
  sociosPagina,
  comoVisitarPagina: nuevo.comoVisitarPagina,
  comoAyudarPagina: nuevo.comoAyudarPagina,
  reservarPagina: nuevo.reservarPagina,
  comoLlegar: nuevo.comoLlegar,
  cuantoCuesta: nuevo.cuantoCuesta,
  diaVsSemana: nuevo.diaVsSemana,
  horariosYContacto: nuevo.horariosYContacto,
}
