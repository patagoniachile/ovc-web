import { externos } from '../externos'
import { imagenes } from '../imagenes'
import { donarPagina, resultadoPago, sociosPagina } from './colaborar'
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
      'La Corporación Valle Cochamó reúne a vecinos, propietarios, arrieros y operadores turísticos para conservar el Valle Cochamó y ordenar su visita. Reserva tu estadía, conoce el Santuario de la Naturaleza y colabora.',
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
    comoAyudar: 'Cómo ayudar',
    hazteSocioCorto: 'Socio',
    conocerHistoria: 'Conoce nuestra historia',
    nombre: 'Nombre',
    correo: 'Correo electrónico',
    suscribirme: 'Suscribirse',
    correoInvalido: 'Revisa tu correo: parece que falta algo.',
    graciasPorSuscribirte: '¡Gracias! Te escribiremos pronto.',
    repartoDonacion: 'Cómo se reparte tu donación',
    directorioAmpliado: 'Integrantes del directorio ampliado',
    pagoSeguroPor: 'Pago seguro procesado por',
    abrirFormulario: 'Abrir el formulario de suscripción',
    cargandoMapa: 'Cargando el mapa…',
    tocaParaMoverMapa: 'Toca para mover el mapa',
    mapaDe: 'Mapa del Valle Cochamó',
    dondeDormir: 'Dónde dormir',
    servicios: 'Servicios',
    contacto: 'Contacto',
    reservarEn: (nombre) => `Reservar en ${nombre}`,
    volverAPortada: 'Volver a la portada',
    verMas: 'Ver más',
    anterior: 'Anterior',
    siguiente: 'Siguiente',
    cerrar: 'Cerrar',
    areaSantuario: 'Área del Santuario de la Naturaleza · 11.432,8 ha',
    paraQuienEs: 'Para quién es',
    opcional: 'Opcional',
    fotoElValle: 'Paredes de granito del valle entre el bosque',
    fotoComoVisitar: 'Visitantes registrándose en el inicio del sendero',
    fotoHistoria: 'Vecinos del valle marchando sobre el puente de Cochamó con lienzos por la protección del territorio',
    fotoComoAyudar: 'Integrantes de la corporación en una jornada de trabajo en el valle',
    fotoReservar: 'Vista aérea de los campings de La Junta junto al recodo del río',
    lineaDeTiempo: 'Cómo llegamos hasta aquí',
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
    conocerElValle: 'Conoce el valle',
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
      label: 'Cómo visitar',
      href: `${PORTADA}/como-visitar`,
      items: [
        { label: 'Cómo llegar', href: `${PORTADA}/como-visitar#como-llegar`, detalle: 'En auto o en bus' },
        { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir`, detalle: 'Los alojamientos del valle' },
        { label: 'Cuánto cuesta', href: `${PORTADA}/como-visitar#cuanto-cuesta`, detalle: 'Qué se paga y a quién' },
        { label: 'Día vs. varios días', href: `${PORTADA}/como-visitar#dia-vs-semana`, detalle: 'Dos viajes distintos' },
        { label: 'Qué debo saber', href: `${PORTADA}/como-visitar#normas`, detalle: 'Normas y seguridad' },
        { label: 'Horarios y contacto', href: `${PORTADA}/como-visitar#horarios`, detalle: 'Ingresos y a quién escribir' },
      ],
    },
    {
      label: 'El Valle',
      href: `${PORTADA}/el-valle`,
      items: [
        { label: 'Qué es', href: `${PORTADA}/el-valle`, detalle: 'El Valle Cochamó' },
        { label: 'Dónde queda', href: `${PORTADA}/el-valle#mapa`, detalle: 'Locación' },
        { label: 'Flora y fauna', href: `${PORTADA}/el-valle#flora-fauna`, detalle: 'Los habitantes' },
        { label: 'Conservación', href: `${PORTADA}/santuario`, detalle: 'El Santuario' },
        { label: 'Lo que está en juego', href: `${PORTADA}/el-valle#amenazas`, detalle: 'Amenazas' },
        { label: 'Actividades', href: `${PORTADA}/el-valle#que-hacer`, detalle: 'Qué hacer' },
      ],
    },
    {
      label: 'Historia',
      href: `${PORTADA}/historia`,
      items: [
        { label: 'Línea de tiempo', href: `${PORTADA}/historia#historia`, detalle: 'De 2016 a hoy' },
        { label: 'Quién administra y por qué', href: `${PORTADA}/historia#nosotros`, detalle: 'La comunidad del valle' },
        { label: 'Misión y visión', href: `${PORTADA}/historia#mision`, detalle: 'Hacia dónde vamos' },
        { label: 'Qué hemos hecho', href: `${PORTADA}/historia#logros`, detalle: 'Obras terminadas' },
        { label: 'Qué queremos hacer', href: `${PORTADA}/historia#proyectos`, detalle: 'Los desafíos abiertos' },
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
        { label: 'El Santuario', href: `${PORTADA}/santuario` },
      ],
    },
    {
      titulo: 'Cómo visitar',
      items: [
        { label: 'Cómo llegar', href: '/es/como-visitar#como-llegar' },
        { label: 'Cuánto cuesta', href: '/es/como-visitar#cuanto-cuesta' },
        { label: 'Cómo reservar', href: `${PORTADA}/reservar` },
        { label: 'Qué debo saber', href: '/es/como-visitar#normas' },
        { label: 'Dónde dormir', href: `${PORTADA}/como-visitar#dormir` },
      ],
    },
    {
      titulo: 'Organización',
      items: [
        { label: 'Línea de tiempo', href: `${PORTADA}/historia#historia` },
        { label: 'Quiénes somos', href: `${PORTADA}/historia#nosotros` },
        { label: 'Noticias', href: externos.noticias },
        { label: 'Donaciones', href: `${PORTADA}/como-ayudar#donaciones` },
        { label: 'Socios', href: `${PORTADA}/como-ayudar#socios` },
      ],
    },
  ],

  hero: {
    titulo: ['Valle Cochamó, una historia', 'que seguimos construyendo'],
    bajada:
      'Un valle de naturaleza extraordinaria, historia y comunidad. Conoce el trabajo que hacemos para cuidar este territorio y descubre cómo visitarlo de manera responsable.',
    visitar: { label: 'Planifica tu visita', href: `${PORTADA}/como-visitar` },
    conocer: { label: 'Conoce el valle', href: '#el-valle' },
    alt: 'Paredes de granito del Valle Cochamó con el bosque nativo del valle al fondo',
  },

  cifrasTitulo: 'Algunas cifras',
  cierrePortada: {
    titulo: 'Pero aún hay muchos otros que',
    destacado: 'necesitan de tu apoyo',
    donar: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    proyectos: { label: 'Ver proyectos', href: `${PORTADA}/historia#proyectos` },
  },
  cifras: [
    { valor: 11432, sufijo: ',8 ha', texto: 'Protegidas como Santuario de la Naturaleza' },
    { valor: 8000, sufijo: ' ha', texto: 'De bosque de alerce, con ejemplares de cerca de 1.000 años' },
    { valor: 17000, prefijo: '+', texto: 'Visitantes al año recorren el sendero de los arrieros' },
    { valor: 1000, sufijo: ' m', texto: 'De paredes de granito del Batolito Norpatagónico' },
  ],

  introHistoria: {
    eyebrow: 'Nuestra historia',
    titulo: 'Una historia que inspira: cómo este valle llegó a ser santuario',
    bajada:
      'Lo que empezó como una conversación entre vecinos preocupados terminó en una organización comunitaria que hoy ordena la visita, repara senderos y administra el santuario que consiguió. Esto es lo que pasó en el medio.',
    cita: 'Las decisiones de hoy determinan las consecuencias de mañana.',
    citaFuente: 'Lema del sistema de reservas del Valle Cochamó',
    entrada:
      'Cochamó son paredes de granito de mil metros sobre bosque siempreverde, alerces de mil años y ríos de deshielo, al final de un sendero que los arrieros abrieron hace más de un siglo. No es un parque: son tierras cuyos dueños abrieron el acceso, y esa apertura es a la vez su gracia y su fragilidad. En pocos años ha tenido enfrente hidroeléctricas, proyectos inmobiliarios y, de forma menos evidente pero igual de real, el propio turismo que lo hizo conocido.',
  },

  hitos: [
    {
      anio: '2016',
      titulo: 'Los vecinos se sientan a conversar',
      texto:
        'El valle se había corrido de boca en boca y cada verano llegaba más gente que el anterior. Sin reglas ni cupos, el sendero y los campings empezaron a acusar el peso. Ese año los vecinos se juntaron por primera vez a ver qué hacer, y de esa conversación salió la primera medida concreta: para entrar a La Junta, donde se duerme, hay que reservar.',
      destacado: true,
    },
    {
      anio: '2017',
      titulo: 'Nace la Organización Valle Cochamó',
      texto:
        'La conversación se formalizó. Vecinos, propietarios, operadores turísticos y gente que quiere este lugar crearon la primera organización que sentó a todos los actores del valle en la misma mesa. No es gente de paso: son quienes viven y trabajan aquí.',
      destacado: true,
    },
    {
      anio: '2019',
      titulo: 'Una gobernanza común con los valles vecinos',
      texto:
        'El trabajo se amplió a las organizaciones de los territorios de al lado. Juntas acordaron una gobernanza común y los parámetros que permiten que el turismo opere sin desarmar lo que viene a ver. Fue también el año en que quedó claro que hacía falta algo más: una capa de protección para el valle.',
    },
    {
      anio: '2022 · Mayo',
      titulo: 'Se frena un proyecto inmobiliario',
      texto:
        'Con el turismo ya más ordenado apareció otra amenaza, esta vez de ladrillo: un proyecto inmobiliario sobre el valle. El trabajo alineado de varias organizaciones, con la OVC a la cabeza, consiguió que no se llevara a cabo.',
    },
    {
      anio: '2022 · Julio',
      titulo: 'Se pide el santuario',
      texto:
        'Tras tres años de trabajo junto a otras organizaciones, se presentó al Ministerio del Medio Ambiente la solicitud de declarar santuario de la naturaleza a una parte importante del valle.',
    },
    {
      anio: '2023',
      titulo: 'El Valle de Cochamó es Santuario de la Naturaleza',
      texto:
        'Ese año se firmó el decreto que deja protegidas 11.432,8 hectáreas del valle. La figura no expropia ni cierra el valle —la vida y las actividades de siempre continúan—, pero ninguna obra ni actividad que altere el estado natural del lugar puede hacerse sin autorización previa, y la caza queda prohibida. La administración quedó en manos de la organización del valle.',
      destacado: true,
    },
    {
      anio: '2025',
      titulo: 'La organización se hace corporación',
      texto:
        'Con el santuario declarado, los roles y las responsabilidades crecieron. Para que personas y empresas puedan sumarse a sostener este trabajo, la Organización Valle Cochamó pasó a ser Corporación Valle Cochamó.',
    },
    {
      anio: 'Hoy',
      titulo: 'El viaje de la conservación no se termina',
      texto:
        'Un santuario declarado no es una meta cumplida: es un compromiso que hay que sostener cada temporada. Seguimos cuidando este lugar para que quienes vengan después lo encuentren como lo encontramos nosotros.',
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

  sectoresDetalle,

  sectoresEncabezado: {
    eyebrow: 'Visitar',
    titulo: 'Lo que tienes que saber',
    bajada:
      'El valle tiene dos sectores para alojar. Inicio Sendero está pensado para quienes llegan después del horario límite de ingreso o prefieren tomárselo con calma: duermes ahí y subes al día siguiente. La Junta es el destino principal, para quienes llegan preparados para subir dentro del horario y siguiendo las recomendaciones de esta guía.',
  },
  sectores: [
    {
      id: 'inicio-sendero',
      nombre: 'Inicio Sendero',
      insignia: 'Punto de partida',
      descripcion:
        'Donde empieza el sendero y está el registro. Sirve para dormir la noche antes de subir, o si llegas tarde y ya cerró el ingreso.',
      datos: [
        { icono: 'pin', texto: 'Campings y hospedajes en el sector' },
        { icono: 'edificio', texto: 'Centro de Visitantes y registro obligatorio' },
        { icono: 'caballo', texto: 'Pilcheros y cabalgatas' },
      ],
      foto: {
        ...imagenes.registroSendero,
        alt: 'Visitantes registrándose en el panel informativo del inicio del sendero',
      },
      cta: { label: 'Conocer Inicio Sendero', href: '/es/como-visitar#dormir-inicio-sendero' },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      insignia: 'Destino principal',
      descripcion:
        'Adonde sube casi todo el que visita el valle. Se llega solo a pie o a caballo, tras 13 km de sendero, y aquí están los campings, el hospedaje y, cerca, los Toboganes.',
      datos: [
        { icono: 'sendero', texto: '13 km desde el inicio del sendero' },
        { icono: 'carpa', texto: 'Campings Playa Los Manzanos, Vista Hermosa y La Junta' },
        { icono: 'agua', texto: 'Toboganes de granito a corta distancia' },
      ],
      foto: {
        ...imagenes.campingLaJunta,
        alt: 'Vista desde el interior de una carpa hacia las montañas de granito del sector La Junta',
      },
      cta: { label: 'Conocer La Junta', href: '/es/como-visitar#dormir-la-junta', destacado: true },
      principal: true,
    },
  ],

  dondeDormir: {
    eyebrow: 'Dónde dormir',
    titulo: 'Dónde dormir en el valle',
    bajada:
      'En La Junta, el corazón del valle, hay 4 alojamientos donde quedarse. Cada uno lo gestiona una familia o un operador del valle y se reserva directamente con ellos. **Es necesario tener la reserva confirmada antes de ir.**',
    bloques: [
      {
        slug: 'la-junta',
        titulo: 'Alojamientos en La Junta',
      },
      {
        slug: 'inicio-sendero',
        titulo: 'Previo a iniciar el sendero',
        texto:
          'Lugares donde dormir cerca del pueblo de Cochamó, por si no alcanzas a llegar dentro de los horarios permitidos de subida.',
        enlace: { label: 'Ver horarios de ingreso', href: `${PORTADA}/como-visitar#dia-vs-semana` },
      },
    ],
  },

  mapa: {
    encabezado: {
      eyebrow: 'Dónde queda',
      titulo: 'Un rincón escondido de la Patagonia norte',
      bajada:
        'Ubicado en la Región de Los Lagos, en plena cordillera de los Andes, el Valle de Cochamó destaca por sus imponentes paredes de granito, bosques templados lluviosos y ríos de aguas cristalinas. Un lugar extraordinario al que solo se puede acceder a pie o a caballo.',
    },
    centroInicial: { lat: -41.4495, lon: -72.115, zoom: 10 },
  },

  puntosMapa: [
    {
      id: 'inicio-sendero',
      nombre: 'Centro de Visitantes',
      tipo: 'sector',
      lat: -41.455073,
      lon: -72.219495,
      descripcion: 'Centro de Visitantes y registro obligatorio. Aquí empieza el sendero y se presenta la reserva.',
      enlace: { label: 'Dónde dormir', href: `${PORTADA}/sectores/inicio-sendero#dormir` },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      tipo: 'sector',
      lat: -41.411358,
      lon: -72.126878,
      descripcion: 'El centro turístico del valle, a 13 km del inicio del sendero. Campings y hospedaje.',
      enlace: { label: 'Dónde dormir', href: `${PORTADA}/sectores/la-junta#dormir` },
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
    {
      id: 'toboganes',
      nombre: 'Toboganes',
      tipo: 'referencia',
      lat: -41.40869,
      lon: -72.125317,
      descripcion: 'Los pozones y resbalines que el río labró en la roca pulida, a un rato de La Junta.',
    },
    {
      id: 'cerro-arcoiris',
      nombre: 'Cerro Arcoíris',
      tipo: 'referencia',
      lat: -41.403911,
      lon: -72.159243,
      descripcion: 'Pared de granito al noroeste del valle, uno de los sectores clásicos de escalada.',
    },
    {
      id: 'la-paloma',
      nombre: 'La Paloma',
      tipo: 'referencia',
      lat: -41.403194,
      lon: -72.119583,
      descripcion: 'Sector de paredes al norte del río La Junta, con vista abierta sobre el valle.',
    },
    {
      id: 'puerto-varas',
      nombre: 'Puerto Varas',
      tipo: 'referencia',
      lat: -41.317802,
      lon: -72.982907,
      descripcion: 'La ciudad más cercana con aeropuerto y terminal. Desde aquí se llega a Cochamó.',
    },
    {
      id: 'mapa-camping-la-junta',
      nombre: 'Camping La Junta',
      tipo: 'camping',
      lat: -41.412074,
      lon: -72.12758,
      descripcion: 'Alojamiento en el sector La Junta, con reserva previa.',
    },
    {
      id: 'mapa-playa-los-manzanos',
      nombre: 'Playa Los Manzanos',
      tipo: 'camping',
      lat: -41.419148,
      lon: -72.14301,
      descripcion: 'Alojamiento en el sector La Junta, con reserva previa.',
    },
    {
      id: 'mapa-vista-hermosa',
      nombre: 'Vista Hermosa',
      tipo: 'camping',
      lat: -41.412606,
      lon: -72.121787,
      descripcion: 'Alojamiento en el sector La Junta, con reserva previa.',
    },
    {
      id: 'mapa-refugio-cochamo',
      nombre: 'Refugio Cochamó',
      tipo: 'camping',
      lat: -41.412549,
      lon: -72.122871,
      descripcion: 'Alojamiento en el sector La Junta, con reserva previa.',
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
        'Inicio Sendero o La Junta. En La Junta eliges entre los campings Playa Los Manzanos, Vista Hermosa y La Junta.',
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
    titulo: 'El santuario',
    bajada:
      'El Valle de Cochamó es un Santuario de la Naturaleza desde 2023, un reconocimiento que protege más de 11.400 hectáreas de bosques milenarios, ríos, montañas y biodiversidad.',
    parrafo:
      'Este importante logro es fruto del trabajo conjunto de comunidades locales y organizaciones comprometidas con su conservación, buscando resguardar no solo su patrimonio natural, sino también las tradiciones y formas de vida que le dan identidad. Porque proteger Cochamó es también preservar su historia y su futuro.',
    hectareas: '11.432,8',
    hectareasPie: 'hectáreas protegidas',
    foto: {
      ...imagenes.conservacionLienzos,
      alt: 'Lienzos de la comunidad en el acceso al valle: «Queremos + áreas protegidas» y «Patagonia sin loteos»',
    },
    enlace: { label: 'Conoce el santuario', href: `${PORTADA}/santuario` },
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
    eyebrow: 'Lo que está en juego',
    titulo: 'Que Cochamó siga siendo Cochamó',
    bajada:
      'Lo llaman el “Yosemite de Sudamérica”. Pero su verdadero valor no está en parecerse a otro lugar, sino en todo aquello que lo hace único. A pesar de los avances en su conservación, el valle continúa enfrentando amenazas que ponen en riesgo sus ecosistemas, sus paisajes y las tradiciones de quienes lo habitan.',
    cierre: 'Proteger Cochamó es asegurar que su futuro no comprometa aquello que lo hace extraordinario.',
    cta: { label: 'Saber más', href: `${PORTADA}/conservacion` },
    ctaProteger: { label: 'Protege el valle', href: `${PORTADA}/como-ayudar#donaciones` },
  },

  amenazas: [
    {
      icono: 'camino',
      titulo: 'Un camino que amenaza su esencia',
      texto:
        'La posible construcción de un camino vehicular amenaza con transformar el valle, alterando sus ecosistemas, aumentando el riesgo de incendios y poniendo en peligro la tradición de los arrieros, parte fundamental de su identidad cultural.',
    },
    {
      icono: 'edificio',
      titulo: 'Presión inmobiliaria y proyectos de desarrollo',
      texto:
        'El interés inmobiliario y los proyectos hidroeléctricos representan una presión sobre el territorio, amenazando sus paisajes, biodiversidad y las formas de vida de las comunidades locales.',
    },
    {
      icono: 'gente',
      titulo: 'Turismo sin planificación',
      texto:
        'El aumento de visitantes, sin una gestión adecuada, puede generar contaminación, acumulación de residuos, daños a la flora y fauna y mayor riesgo de incendios. Un turismo responsable es fundamental para conservar el valle.',
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
    cta: { label: 'Donar', href: `${PORTADA}/como-ayudar#donaciones` },
  },

  logrosEncabezado: { eyebrow: 'Lo que hemos logrado', titulo: 'Obras que ya están en el valle' },
  logrosPortadaTitulo: 'Otros proyectos realizados',

  logros: [
    {
      icono: 'hoja',
      label: 'Santuario de la Naturaleza',
      texto: 'El mayor logro de todos: desde 2023, 11.432,8 hectáreas del valle están protegidas por decreto.',
      href: `${PORTADA}/santuario`,
      imagen: 'conservacionLienzos',
      alt: 'Lienzos de la comunidad en el acceso al valle pidiendo más áreas protegidas',
    },
    {
      icono: 'edificio',
      label: 'Centro de visitantes',
      texto: 'El punto donde se registra quien entra al valle, se informa y se resuelven dudas antes de subir.',
      href: `${PORTADA}/obras/centro-de-visitantes`,
      imagen: 'logroCentroVisitantes',
      alt: 'Visitantes registrándose en el Centro de Visitantes del valle',
    },
    {
      icono: 'sendero',
      label: 'Trabajo en senderos',
      texto: 'Pasarelas y drenajes sobre los tramos que el barro y el agua estaban deshaciendo.',
      href: `${PORTADA}/obras/trabajos-de-senderos`,
      imagen: 'logroSenderos',
      alt: 'Pasarela de madera recién construida sobre un tramo húmedo del sendero',
    },
    {
      icono: 'hoja',
      label: 'Centro de reciclaje',
      texto: 'Contenedores separados en el ingreso: lo que entra al valle tiene que volver a salir.',
      href: `${PORTADA}/obras/centro-de-reciclaje`,
      imagen: 'logroReciclaje',
      alt: 'Visitante depositando una botella en los contenedores de reciclaje',
    },
    {
      icono: 'cartel',
      label: 'Nuevas señaléticas',
      texto: 'Carteles de bienvenida y de ruta, para que nadie tenga que adivinar por dónde va.',
      href: `${PORTADA}/obras/senaletica`,
      imagen: 'logroSenaletica',
      alt: 'Cartel de bienvenida al Valle Cochamó junto al camino',
    },
    {
      icono: 'montana',
      label: 'Mantención de rutas de escalada',
      texto: 'Revisión y reposición de anclajes en las paredes de granito, por seguridad de quien escala.',
      href: `${PORTADA}/obras/rutas-de-escalada`,
      imagen: 'logroEscalada',
      alt: 'Escalador en una pared de granito del valle',
    },
  ],

  boletin: {
    titulo: 'Mantenerse informado también es una forma de ayudar',
    texto:
      'Suscríbete para recibir noticias del valle, próximos voluntariados, actividades, programas y proyectos de conservación. Así podrás seguir de cerca el impacto de esta comunidad y encontrar nuevas maneras de involucrarte en el cuidado de Cochamó.',
    ejemploCorreo: 'ejemplo@correo.com',
    alt: 'El valle visto desde lo alto, entre paredes de granito',
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
  elValle: nuevo.elValle,
  elVallePagina: nuevo.elVallePagina,
  quienesSomosPagina: nuevo.quienesSomosPagina,
  rasgos: nuevo.rasgos,
  floraFauna: nuevo.floraFauna,
  gruposEspecies: nuevo.gruposEspecies,
  queHacer: nuevo.queHacer,
  actividades: nuevo.actividades,
  impacto: nuevo.impacto,
  logroImportante: nuevo.logroImportante,
  misionVision: nuevo.misionVision,
  destinoAportes: nuevo.destinoAportes,
  donarPagina,
  sociosPagina,
  resultadoPago,
  comoVisitarPagina: nuevo.comoVisitarPagina,
  comoAyudarPagina: nuevo.comoAyudarPagina,
  santuarioPagina: nuevo.santuarioPagina,
  conservacionPagina: nuevo.conservacionPagina,
  obras: nuevo.obras,
  reservarPagina: nuevo.reservarPagina,
  comoLlegar: nuevo.comoLlegar,
  cuantoCuesta: nuevo.cuantoCuesta,
  diaVsSemana: nuevo.diaVsSemana,
  horariosYContacto: nuevo.horariosYContacto,
}
