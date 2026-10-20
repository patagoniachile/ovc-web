import { externos } from '../externos'
import { imagenes } from '../imagenes'
import { donarPagina, resultadoPago, sociosPagina } from './colaborar'
import * as nuevo from './estructura'
import { sectoresDetalle } from './sectores'
import type { Contenido } from '../types'

/**
 * English content.
 *
 * Place names (Inicio Sendero, La Junta) are kept in Spanish on
 * purpose: that is what the signage, the trailhead register and the booking
 * site use, so translating them would send visitors looking for something
 * that is not written anywhere on the ground.
 */

/** La portada del idioma. El menú y el pie se ven en todas las páginas, así
 *  que sus anclas tienen que ser absolutas: una `#ancla` suelta se cuelga de
 *  la URL actual y desde /como-visitar no llevaba a ninguna parte. */
const PORTADA = '/en'

const organizacion = {
  corporacion: 'Corporación',
  nombre: 'Valle Cochamó',
  nombreCompleto: 'Corporación Valle Cochamó',
  alias: 'Valle Cochamó Organisation (OVC)',
  fundacion: '2017',
  ubicacion: 'Cochamó, Los Lagos Region, Chile',
  descripcion:
    'A non-profit community organisation working for responsible tourism, land-use planning and the conservation of the Cochamó Valley, Los Lagos Region, Chile.',
  avisoTemporada: 'Season open — book before heading up to the La Junta sector',
}

export const contenido: Contenido = {
  organizacion,

  meta: {
    titulo: `${organizacion.nombreCompleto} — Visit the valley, protect it`,
    descripcion:
      'Corporación Valle Cochamó brings together neighbours, landowners, muleteers and tour operators to conserve the Cochamó Valley and manage how it is visited. Book your stay, learn about the proposed Nature Sanctuary and get involved.',
    descripcionOg:
      'Book your stay, plan your trip and help conserve one of the most valuable granite and native-forest valleys in Chilean Patagonia.',
  },

  textos: {
    saltarAlContenido: 'Skip to main content',
    navegacionPrincipal: 'Main navigation',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    inicio: 'Home',
    volverArriba: 'Back to top',
    reservar: 'Book',
    reservarEstadia: 'Book my stay',
    donar: 'Donate',
    hazteSocio: 'Become a member',
    hazteSocioCorto: 'Member',
    conocerHistoria: 'Read our story',
    enCurso: 'In progress',
    logrado: 'Completed',
    nombre: 'Name',
    correo: 'Email address',
    suscribirme: 'Subscribe',
    faltaNombre: 'Tell us your name so we can greet you properly.',
    correoInvalido: 'Please check your email address: something seems to be missing.',
    graciasPorSuscribirte: (nombre) => `Thanks, ${nombre}! We'll be in touch soon.`,
    repartoDonacion: 'How your donation is split',
    directorioAmpliado: 'Members of the extended board',
    pagoSeguroPor: 'Secure payment processed by',
    abrirFormulario: 'Open the subscription form',
    cargandoMapa: 'Loading the map…',
    tocaParaMoverMapa: 'Tap to move the map',
    mapaDe: 'Map of the Cochamó Valley',
    dondeDormir: 'Where to stay',
    servicios: 'Facilities',
    contacto: 'Contact',
    reservarEn: (nombre) => `Book at ${nombre}`,
    volverAPortada: 'Back to the home page',
    verMas: 'See more',
    cerrar: 'Close',
    areaSantuario: 'Nature Sanctuary area · 11,432.8 ha',
    paraQuienEs: 'Who it is for',
    opcional: 'Optional',
    fotoElValle: 'The valley’s granite walls rising above the forest',
    fotoComoVisitar: 'Visitors registering at the start of the trail',
    fotoHistoria: 'Valley residents marching across the Cochamó bridge with banners calling for protection',
    fotoComoAyudar: 'Members of the organisation during a work day in the valley',
    fotoReservar: 'Aerial view of the La Junta campsites beside the bend in the river',
    lineaDeTiempo: 'How we got here',
    sobreElSector: 'About this sector',
    datosClave: 'Key facts',
    tenEnCuenta: 'Bear in mind',
    verTodosLosSectores: 'See all three sectors',
    masInfoEn: 'More information',
    lugaresParaDormir: (n) => `${n} ${n === 1 ? 'place' : 'places'} to stay in this sector. You book with each operator; everything you need to decide is here.`,
    verEnElMapa: 'See it on the map',
    copiar: 'Copy',
    copiado: 'Copied',
    copiarTodo: 'Copy all the details',
    copiadoTodo: 'Details copied',
    enviar: 'Send',
    enviando: 'Sending…',
    enviado: 'Sent',
    errorEnvio: 'We could not send the form. Write to us directly at',
    camposRequeridos: 'Please fill in your name and a valid email address.',
    correoDirecto: 'Or write to us at',
    quieroIr: 'I want to go',
    conocerElValle: 'Explore the valley',
    comoVisitar: 'How to visit',
    flora: 'Flora',
    fauna: 'Fauna',
    geologia: 'Geology',
    verComoVisitar: 'See how to visit',
    quienesSomos: 'Who we are',
    verHistoria: 'Read our story',
  },

  menu: [
    {
      label: 'The Valley',
      href: `${PORTADA}/el-valle`,
      items: [
        { label: 'What it is', href: `${PORTADA}/el-valle`, detalle: 'The Cochamó Valley' },
        { label: 'Where it is', href: `${PORTADA}/el-valle#mapa`, detalle: 'Location' },
        { label: 'Flora and fauna', href: `${PORTADA}/el-valle#flora-fauna`, detalle: 'Who lives here' },
        { label: 'Conservation', href: `${PORTADA}/el-valle#santuario`, detalle: 'The Sanctuary' },
        { label: 'What is at stake', href: `${PORTADA}/el-valle#amenazas`, detalle: 'Threats' },
        { label: 'Activities', href: `${PORTADA}/el-valle#que-hacer`, detalle: 'What to do' },
      ],
    },
    {
      label: 'How to visit',
      href: `${PORTADA}/como-visitar`,
      items: [
        { label: 'Getting here', href: `${PORTADA}/como-visitar#como-llegar`, detalle: 'By car or by bus' },
        { label: 'What it costs', href: `${PORTADA}/como-visitar#cuanto-cuesta`, detalle: 'What you pay and to whom' },
        { label: 'Day trip vs. several days', href: `${PORTADA}/como-visitar#dia-vs-semana`, detalle: 'Two different trips' },
        { label: 'What to know', href: `${PORTADA}/como-visitar#normas`, detalle: 'Rules and safety' },
        { label: 'Times and contact', href: `${PORTADA}/como-visitar#horarios`, detalle: 'Entry windows and who to ask' },
        { label: 'Where to stay', href: `${PORTADA}/como-visitar#dormir`, detalle: 'Places to sleep in the valley' },
      ],
    },
    {
      label: 'History',
      href: `${PORTADA}/historia`,
      items: [
        { label: 'Timeline', href: `${PORTADA}/historia#historia`, detalle: 'From 2016 to today' },
        { label: 'Who runs it and why', href: `${PORTADA}/historia#nosotros`, detalle: 'The valley community' },
        { label: 'Mission and vision', href: `${PORTADA}/historia#mision`, detalle: 'Where we are heading' },
        { label: 'What we have done', href: `${PORTADA}/historia#logros`, detalle: 'Completed work' },
        { label: 'What we want to do', href: `${PORTADA}/historia#proyectos`, detalle: 'The open challenges' },
      ],
    },
  ],

  enlacesPie: [
    {
      titulo: 'The Valley',
      items: [
        { label: 'Where it is', href: `${PORTADA}/el-valle#mapa` },
        { label: 'Flora and fauna', href: `${PORTADA}/el-valle#flora-fauna` },
        { label: 'What you can do', href: `${PORTADA}/el-valle#que-hacer` },
        { label: 'The Sanctuary', href: `${PORTADA}/el-valle#santuario` },
      ],
    },
    {
      titulo: 'How to visit',
      items: [
        { label: 'Getting here', href: '/en/como-visitar#como-llegar' },
        { label: 'What it costs', href: '/en/como-visitar#cuanto-cuesta' },
        { label: 'How to book', href: `${PORTADA}/reservar` },
        { label: 'What to know', href: '/en/como-visitar#normas' },
        { label: 'Where to stay', href: `${PORTADA}/como-visitar#dormir` },
      ],
    },
    {
      titulo: 'Organisation',
      items: [
        { label: 'Timeline', href: `${PORTADA}/historia#historia` },
        { label: 'Who we are', href: `${PORTADA}/historia#nosotros` },
        { label: 'News', href: externos.noticias },
        { label: 'Donations', href: `${PORTADA}/como-ayudar#donaciones` },
        { label: 'Members', href: `${PORTADA}/como-ayudar#socios` },
      ],
    },
  ],

  hero: {
    titulo: ['Cochamó, a story', 'we are still building'],
    bajada:
      'The Cochamó Valley is shared ground: much of it is private land whose owners opened the way in so you can get to know it. Since 2023 it has been a Nature Sanctuary, and its protection depends on all of us looking after it: book ahead, stay on the trails and leave the place better than you found it.',
    alt: 'Granite walls of the Cochamó Valley with the valley’s native forest in the background',
  },

  cifrasTitulo: 'Some numbers',
  cierrePortada: {
    titulo: 'But there are many others that',
    destacado: 'still need your support',
    donar: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    proyectos: { label: 'See the projects', href: `${PORTADA}/historia#proyectos` },
  },
  cifras: [
    { valor: 11432, sufijo: '.8 ha', texto: 'Protected as a Nature Sanctuary' },
    { valor: 8000, sufijo: ' ha', texto: 'Of alerce forest, with trees close to 1,000 years old' },
    { valor: 17000, prefijo: '+', texto: 'Visitors a year walk the muleteers’ trail' },
    { valor: 1000, sufijo: ' m', texto: 'Of granite walls of the North Patagonian Batholith' },
  ],

  introHistoria: {
    eyebrow: 'Our story',
    titulo: 'A story that inspires: how this valley became a sanctuary',
    bajada:
      'What began as a conversation between worried neighbours ended in a community organisation that today orders the visit, repairs trails and runs the sanctuary it won. This is what happened in between.',
    cita: 'The decisions we make today determine the consequences of tomorrow.',
    citaFuente: 'Motto of the Cochamó Valley booking system',
    entrada:
      'Cochamó is thousand-metre granite walls above evergreen forest, thousand-year-old alerces and meltwater rivers, at the end of a trail the arrieros opened more than a century ago. It is not a park: it is land whose owners opened the way in, and that openness is both its grace and its fragility. In a few years it has faced hydroelectric schemes, property developments and, less obviously but just as really, the very tourism that made it known.',
  },

  hitos: [
    {
      anio: '2016',
      titulo: 'The neighbours sit down to talk',
      texto:
        'Word of the valley had spread, and every summer more people arrived than the year before. With no rules and no limits, the trail and the campsites began to show the strain. That year the neighbours met for the first time to work out what to do, and the first concrete measure came out of that conversation: to enter La Junta, where people sleep, you have to book.',
      destacado: true,
    },
    {
      anio: '2017',
      titulo: 'The Organización Valle Cochamó is founded',
      texto:
        'The conversation became formal. Neighbours, landowners, tour operators and people who love this place created the first organisation to sit every actor in the valley at the same table. Not outsiders passing through: the people who live and work here.',
      destacado: true,
    },
    {
      anio: '2019',
      titulo: 'Shared governance with the neighbouring valleys',
      texto:
        'The work widened to the organisations of the territories next door. Together they agreed on shared governance and on the parameters that let tourism operate without taking apart what it comes to see. It was also the year it became clear that something more was needed: a layer of protection for the valley.',
    },
    {
      anio: '2022 · May',
      titulo: 'A property development is stopped',
      texto:
        'With tourism better organised, another threat appeared, this one made of bricks: a property development over the valley. The aligned work of several organisations, with the OVC leading, kept it from going ahead.',
    },
    {
      anio: '2022 · July',
      titulo: 'The sanctuary is requested',
      texto:
        'After three years of work alongside other organisations, the request to declare a large part of the valley a nature sanctuary was filed with the Ministry of the Environment.',
    },
    {
      anio: '2023',
      titulo: 'The Cochamó Valley becomes a Nature Sanctuary',
      texto:
        'That year the decree was signed, protecting 11,432.8 hectares of the valley. The status does not expropriate anything or close the valley —life and the activities of always carry on— but no works or activity that would alter the natural state of the place can go ahead without prior authorisation, and hunting is banned. Administration was placed in the hands of the valley’s own organisation.',
      destacado: true,
    },
    {
      anio: '2025',
      titulo: 'The organisation becomes a corporation',
      texto:
        'With the sanctuary declared, the roles and responsibilities grew. So that individuals and companies can join in sustaining this work, the Organización Valle Cochamó became the Corporación Valle Cochamó.',
    },
    {
      anio: 'Today',
      titulo: 'The work of conservation has no finish line',
      texto:
        'A declared sanctuary is not a goal achieved: it is a commitment to be kept every season. We keep looking after this place so that those who come after us find it as we found it.',
    },
  ],

  nosotros: {
    eyebrow: 'Who we are',
    titulo: 'Neighbours, muleteers, landowners and friends of the valley',
    bajada:
      'We are a non-profit, cross-cutting community organisation working for responsible tourism and land-use planning in the Cochamó Valley.',
    parrafos: [
      'The valley is a patchwork of mostly private land, linked by a trail that Andean muleteers have used for generations. Today that same trail is shared by more than 17,000 visitors a year. That is why tour operators, landowners and people who love the valley began working towards a **collaborative protected area**: a model where those who live and work here remain the ones who manage it.',
      'We are driven by our affection for this place and by concern over the environmental effects of growing visitor numbers. We safeguard traditional ways of life, local culture and identity, and we want the valley’s natural and cultural heritage to reach the next generations intact.',
    ],
    foto: {
      ...imagenes.equipo,
      alt: 'Members of the extended board of Organización Valle Cochamó sitting on the steps of a wooden house',
    },
    pieFoto: 'Part of the organisation’s extended board during a work session at Llanada Grande, 2019.',
    directorio: [
      'Andrés Amengual', 'Silvina Verdún', 'Patricio Almonacid', 'Aurelia Barrio', 'Daniel Seeliger',
      'Rodrigo Condezza', 'Tatiana Sandoval', 'Paula Sanza', 'Daniel Pastene', 'Paty Almonacid',
    ],
  },


  sectoresDetalle,

  sectoresEncabezado: {
    eyebrow: 'Visiting',
    titulo: 'Two sectors, two ways to get to know the valley',
    bajada:
      'Both are booked before you arrive. Read up, plan and prepare: the trail is long, there is a lot of mud and the weather is unpredictable.',
  },
  sectores: [
    {
      id: 'inicio-sendero',
      nombre: 'Trailhead',
      insignia: 'Trailhead',
      descripcion:
        'The way into the valley begins where the Cochamó River meets the sea. From the bridge you get your first view of Cerro Arcoíris and the native forest.',
      datos: [
        { icono: 'pin', texto: 'Campsites and lodging in the sector' },
        { icono: 'edificio', texto: 'Visitor Centre and mandatory registration' },
        { icono: 'caballo', texto: 'Pack horses and horseback rides' },
      ],
      foto: {
        ...imagenes.registroSendero,
        alt: 'Visitors signing in at the information panel at the start of the trail',
      },
      cta: { label: 'Explore Inicio Sendero', href: '/en/sectores/inicio-sendero' },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      insignia: 'Heart of the valley',
      descripcion:
        'The valley’s tourism hub, reachable only on foot or on horseback. This is where the campsites and lodging are, and the waterslides are nearby.',
      datos: [
        { icono: 'sendero', texto: '13 km from the trailhead' },
        { icono: 'carpa', texto: 'Playa Los Manzanos, Vista Hermosa and La Junta campsites' },
        { icono: 'agua', texto: 'Granite waterslides a short walk away' },
      ],
      foto: {
        ...imagenes.campingLaJunta,
        alt: 'View from inside a tent towards the granite mountains of the La Junta sector',
      },
      cta: { label: 'Explore La Junta', href: '/en/sectores/la-junta', destacado: true },
    },
  ],

  dondeDormir: {
    eyebrow: 'Where to stay',
    titulo: 'Where to stay in the valley',
    bajada:
      'Every place is run by a family from the valley and is booked directly with them. Hover over a card to see where it is.',
    bloques: [
      {
        slug: 'la-junta',
        foto: {
          ...imagenes.laJuntaAerea,
          alt: 'Aerial view of the La Junta meadow, with the campsites beside the bend in the river',
        },
      },
      {
        slug: 'inicio-sendero',
        titulo: 'Before you start the trail',
        texto:
          'Places to sleep near the village of Cochamó, in case you cannot make it within the allowed entry times.',
        enlace: { label: 'See the entry times', href: `${PORTADA}/como-visitar#dia-vs-semana` },
      },
    ],
  },

  mapa: {
    encabezado: {
      eyebrow: 'Where it is',
      titulo: 'A hidden corner of northern Patagonia',
      bajada:
        'In the Los Lagos Region, deep in the Andes, the Cochamó Valley stands out for its towering granite walls, temperate rainforest and crystal-clear rivers. An extraordinary place that can only be reached on foot or on horseback.',
    },
    centroInicial: { lat: -41.4495, lon: -72.115, zoom: 10 },
  },

  puntosMapa: [
    {
      id: 'inicio-sendero',
      nombre: 'Visitor Centre',
      tipo: 'sector',
      lat: -41.455073,
      lon: -72.219495,
      descripcion: 'Visitor Centre and mandatory registration. The trail starts here and this is where you show your booking.',
      enlace: { label: 'Where to stay', href: `${PORTADA}/sectores/inicio-sendero#dormir` },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      tipo: 'sector',
      lat: -41.411358,
      lon: -72.126878,
      descripcion: 'The valley’s tourism hub, 13 km from the trailhead. Campsites and lodging.',
      enlace: { label: 'Where to stay', href: `${PORTADA}/sectores/la-junta#dormir` },
    },
    {
      id: 'cochamo',
      nombre: 'Cochamó (town)',
      tipo: 'referencia',
      lat: -41.493527,
      lon: -72.308176,
      descripcion: 'The nearest town and the last place with services before entering the valley.',
    },
    {
      id: 'cerro-trinidad',
      nombre: 'Cerro Trinidad',
      tipo: 'referencia',
      lat: -41.426866,
      lon: -72.096488,
      descripcion: 'The granite wall towering over La Junta, one of the valley’s landmarks.',
    },
    {
      id: 'toboganes',
      nombre: 'Toboganes',
      tipo: 'referencia',
      lat: -41.40869,
      lon: -72.125317,
      descripcion: 'The pools and natural slides the river carved into polished rock, a short walk from La Junta.',
    },
    {
      id: 'cerro-arcoiris',
      nombre: 'Cerro Arcoíris',
      tipo: 'referencia',
      lat: -41.403911,
      lon: -72.159243,
      descripcion: 'A granite wall north-west of the valley, one of the classic climbing sectors.',
    },
    {
      id: 'la-paloma',
      nombre: 'La Paloma',
      tipo: 'referencia',
      lat: -41.403194,
      lon: -72.119583,
      descripcion: 'A sector of walls north of the La Junta river, with an open view over the valley.',
    },
    {
      id: 'puerto-varas',
      nombre: 'Puerto Varas',
      tipo: 'referencia',
      lat: -41.317802,
      lon: -72.982907,
      descripcion: 'The nearest city with an airport and bus terminal. Cochamó is reached from here.',
    },
    {
      id: 'mapa-camping-la-junta',
      nombre: 'Camping La Junta',
      tipo: 'camping',
      lat: -41.412074,
      lon: -72.12758,
      descripcion: 'Accommodation in the La Junta sector, booking required.',
    },
    {
      id: 'mapa-playa-los-manzanos',
      nombre: 'Playa Los Manzanos',
      tipo: 'camping',
      lat: -41.419148,
      lon: -72.14301,
      descripcion: 'Accommodation in the La Junta sector, booking required.',
    },
    {
      id: 'mapa-vista-hermosa',
      nombre: 'Vista Hermosa',
      tipo: 'camping',
      lat: -41.412606,
      lon: -72.121787,
      descripcion: 'Accommodation in the La Junta sector, booking required.',
    },
    {
      id: 'mapa-refugio-cochamo',
      nombre: 'Refugio Cochamó',
      tipo: 'camping',
      lat: -41.412549,
      lon: -72.122871,
      descripcion: 'Accommodation in the La Junta sector, booking required.',
    },
  ],

  planificaEncabezado: {
    eyebrow: 'Before you go',
    titulo: 'Know before you set out',
    bajada:
      'There are no rescue teams and no emergency services in the valley. What you carry and what you know is all the safety you have.',
  },

  fichasPlanificacion: [
    {
      icono: 'sendero',
      titulo: 'La Junta as a day trip',
      texto: 'This is not an easy outing: it is long and hard. If you are not sleeping up there, work out your timings carefully.',
      datos: [
        { etiqueta: 'Entry', valor: '7:00 to 9:00 am' },
        { etiqueta: 'Distance', valor: '13 km (26 km return)' },
        { etiqueta: 'Duration', valor: '10 to 12 hours depending on your pace' },
      ],
    },
    {
      icono: 'alerta',
      titulo: 'The Cochamó waterslides',
      texto:
        'They are named after their natural waterslide shape, which tempts people to slide down them. They are **extremely dangerous**: most of the serious accidents in the valley happen there.',
      alerta: true,
    },
    {
      icono: 'montana',
      titulo: 'High-country trails',
      texto:
        'Most treks into the high valleys are very demanding and dangerous. Always go in a group, with a torch, warm clothing, food and water.',
    },
    {
      icono: 'caballo',
      titulo: 'Muleteers',
      texto:
        'Do you need horses to carry your gear, or would you rather ride to La Junta? Contact the Cochamó muleteers’ association directly.',
      enlace: { label: 'See rates and contact', href: '/en/sectores/inicio-sendero#arrieros' },
    },
    {
      icono: 'reloj',
      titulo: 'Trail opening times',
      texto:
        'Entry times are fixed and enforced without exception. Check them before you travel and allow for the journey to the trailhead.',
      enlace: { label: 'See opening times', href: '/en/sectores/la-junta' },
    },
    {
      icono: 'pin',
      titulo: 'Getting there',
      texto:
        'The valley is in the commune of Cochamó, Los Lagos Region. The trail starts where the Cochamó River flows into the Reloncaví estuary.',
      enlace: { label: 'See the route', href: `${PORTADA}/el-valle#mapa` },
    },
  ],

  normasEncabezado: { eyebrow: 'Basic rules', titulo: 'Six rules that are not up for negotiation' },

  normas: [
    { titulo: 'Book before entering the valley.', detalle: 'No booking, no entry — in any of the sectors.' },
    { titulo: 'Show your booking and sign in.', detalle: 'The register is at the start of the trail and signing in is mandatory.' },
    { titulo: 'Respect the entry times.', detalle: 'They exist for safety and for carrying capacity.' },
    { titulo: 'Camp only at authorised campsites.', detalle: 'Outside them, the impact on soil and water is irreversible.' },
    { titulo: 'Carry your rubbish back out.', detalle: 'Everything you take up comes back down with you. Nothing is burned or buried.' },
    { titulo: 'There are no emergency services.', detalle: 'There are no rescue teams in the valley. Assess your abilities honestly.' },
  ],

  fotoNormas: {
    ...imagenes.senaletica,
    alt: 'Trail signage asking visitors to help look after the Cochamó Valley',
  },

  porQueReservar: {
    eyebrow: 'Why book?',
    titulo: 'Limiting entry is the simplest way to look after the valley',
    bajada:
      'Since 2016, visiting the La Junta sector requires a booking. It is not red tape: it is the mechanism that lets us respect the carrying capacity of the trail and the campsites. When they fill up — which is normal in high season — you have to wait to get in.',
    parrafo:
      'Bookings are handled on a shared platform run by tour operators, landowners and friends of the valley. The valley is not a park or a public reserve: it is private land whose owners opened up access.',
    fondoAlt: '',
    reparto: {
      conservacion: '50% long-term conservation programmes',
      infraestructura: '50% visitor infrastructure',
      etiquetaGrafico: '50% conservation, 50% visitor infrastructure',
    },
  },

  pasosReserva: [
    {
      titulo: 'Choose a sector and dates',
      texto:
        'Inicio Sendero or La Junta. At La Junta you choose between the Playa Los Manzanos, Vista Hermosa and La Junta campsites.',
    },
    {
      titulo: 'Confirm your booking',
      texto: 'You will receive the confirmation you must show on arrival. If the quota is full, you will have to wait.',
    },
    {
      titulo: 'Sign in at the trailhead',
      texto: 'Show your booking at the register and keep to the entry time you were given.',
    },
    {
      titulo: 'Walk without leaving a trace',
      texto: 'Camp only where it is authorised and carry all your rubbish back out. The valley depends on it.',
    },
  ],

  santuario: {
    eyebrow: 'Conservation',
    titulo: 'The sanctuary',
    bajada:
      'The Cochamó Valley has been a Nature Sanctuary since 2023, a status that protects more than 11,400 hectares of ancient forest, rivers, mountains and biodiversity.',
    parrafo:
      'This major achievement is the fruit of joint work by local communities and organisations committed to its conservation, seeking to safeguard not only its natural heritage but also the traditions and ways of life that give it its identity. Because protecting Cochamó also means preserving its history and its future.',
    hectareas: '11,432.8',
    hectareasPie: 'hectares protected',
    foto: {
      ...imagenes.conservacionLienzos,
      alt: 'Community banners at the entrance to the valley: “We want more protected areas” and “Patagonia without land subdivision”',
    },
    enlace: { label: 'About the sanctuary', href: `${PORTADA}/santuario` },
  },

  queProtege: [
    { icono: 'hoja', texto: 'Primary forests and alerce stands' },
    { icono: 'agua', texto: 'The Cochamó River and riparian wetlands' },
    { icono: 'montana', texto: 'The North Patagonian Batholith' },
    { icono: 'check', texto: 'Pudú deer and monito del monte' },
    { icono: 'check', texto: 'Darwin’s frog and puma' },
    { icono: 'check', texto: 'Andean condor' },
    { icono: 'caballo', texto: 'The trail and the muleteer culture' },
    { icono: 'gente', texto: 'Indigenous peoples and local life' },
  ],

  loQueEstaEnJuego: {
    eyebrow: 'What is at stake',
    titulo: 'That Cochamó keeps being Cochamó',
    bajada:
      'They call it the “Yosemite of South America”. But its real value is not in resembling somewhere else: it is in everything that makes it unique. Despite the progress in its conservation, the valley still faces threats to its ecosystems, its landscapes and the traditions of those who live there.',
    cierre: 'Protecting Cochamó means making sure its future does not compromise what makes it extraordinary.',
    cta: { label: 'Find out more', href: `${PORTADA}/conservacion` },
    ctaProteger: { label: 'Protect the valley', href: `${PORTADA}/como-ayudar#donaciones` },
  },

  amenazas: [
    {
      icono: 'camino',
      titulo: 'A road that threatens its essence',
      texto:
        'The possible construction of a vehicle road threatens to transform the valley, altering its ecosystems, increasing the risk of fire and endangering the tradition of the arrieros, a fundamental part of its cultural identity.',
    },
    {
      icono: 'edificio',
      titulo: 'Property pressure and development projects',
      texto:
        'Property interest and hydroelectric projects put pressure on the territory, threatening its landscapes, its biodiversity and the ways of life of local communities.',
    },
    {
      icono: 'gente',
      titulo: 'Unplanned tourism',
      texto:
        'More visitors, without proper management, can bring pollution, waste build-up, damage to flora and fauna and a greater risk of fire. Responsible tourism is essential to conserving the valley.',
    },
  ],

  introProyectos: {
    eyebrow: 'Our challenges',
    titulo: 'What we are working on right now',
    bajada:
      'Five concrete goals that need funding. Each one directly improves the experience of those who visit and reduces the impact on the valley.',
  },

  proyectos: [
    {
      titulo: 'Visitor Centre',
      texto:
        'It came about as a response to the exponential growth in tourism. It is where anyone entering the valley is informed, registered and educated.',
      estado: 'activo',
    },
    {
      titulo: 'Interpretive trail',
      texto: '11.5 km of trail with signage explaining the forest, the river and the muleteer history along the way.',
      estado: 'activo',
    },
    {
      titulo: 'Trail work',
      texto:
        'Repairing eroded sections and building infrastructure to channel foot traffic and stop the mud widening the path further.',
      estado: 'activo',
    },
    {
      titulo: 'Rescue team',
      texto: 'Training a team with first-aid supplies. Today the valley has no emergency services at all.',
      estado: 'activo',
    },
    {
      titulo: 'Information video',
      texto: 'Audiovisual material so every visitor arrives knowing what to expect, what to bring and how to behave.',
      estado: 'activo',
    },
  ],

  llamadoProyectos: {
    titulo: 'Want to see them happen?',
    texto: 'These projects are funded by donations and by the contributions of members.',
    cta: { label: 'Contribute', href: `${PORTADA}/como-ayudar#donaciones` },
  },

  logrosEncabezado: { eyebrow: 'What we have achieved', titulo: 'Work already standing in the valley' },

  logros: [
    {
      icono: 'edificio',
      label: 'Visitor Centre',
      texto: 'Where everyone entering the valley registers, gets information and asks what they need before heading up.',
      href: externos.centroVisitantes,
      imagen: 'logroCentroVisitantes',
      alt: 'Visitors registering at the valley’s Visitor Centre',
    },
    {
      icono: 'sendero',
      label: 'Trail work',
      texto: 'Boardwalks and drainage on the stretches that mud and water were pulling apart.',
      href: externos.trabajosSenderos,
      imagen: 'logroSenderos',
      alt: 'Newly built wooden boardwalk over a wet stretch of trail',
    },
    {
      icono: 'cartel',
      label: 'Signage',
      texto: 'Welcome and wayfinding signs, so nobody has to guess which way to go.',
      href: externos.senaletica,
      imagen: 'logroSenaletica',
      alt: 'Welcome sign for the Cochamó Valley beside the road',
    },
    {
      icono: 'hoja',
      label: 'Recycling centre',
      texto: 'Separated bins at the entrance: whatever comes into the valley has to leave again.',
      href: externos.reciclaje,
      imagen: 'logroReciclaje',
      alt: 'A visitor putting a bottle into the recycling bins',
    },
    {
      icono: 'montana',
      label: 'Climbing route maintenance',
      texto: 'Checking and replacing anchors on the granite walls, for the safety of everyone who climbs.',
      href: externos.rutasEscalada,
      imagen: 'logroEscalada',
      alt: 'A climber on one of the valley’s granite walls',
    },
  ],

  boletin: {
    titulo: 'Hear about it first',
    texto: 'Sanctuary news, project updates and seasonal notices. No spam, just a few times a year.',
    nota: 'By subscribing you agree to receive emails from Corporación Valle Cochamó.',
  },

  aliadosEncabezado: { eyebrow: 'Partners', titulo: 'Those walking alongside us' },

  aliados: [
    { nombre: 'Mammut Chile', href: externos.mammut, logo: { ...imagenes.mammut, alt: 'Mammut Chile' } },
    { nombre: 'Andesgear', href: externos.andesgear, logo: { ...imagenes.andesgear, alt: 'Andesgear' } },
    { nombre: 'Puelo Patagonia', href: externos.pueloPatagonia, logo: { ...imagenes.pueloPatagonia, alt: 'Puelo Patagonia' } },
    { nombre: 'Cochamó Muleteers’ Association', href: externos.reservas, logo: { ...imagenes.arrierosLogo, alt: 'Cochamó Muleteers’ Association' } },
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
  reservarPagina: nuevo.reservarPagina,
  comoLlegar: nuevo.comoLlegar,
  cuantoCuesta: nuevo.cuantoCuesta,
  diaVsSemana: nuevo.diaVsSemana,
  horariosYContacto: nuevo.horariosYContacto,
}
