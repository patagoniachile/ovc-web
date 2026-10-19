import { externos } from '../externos'
import { imagenes } from '../imagenes'
import { donarPagina, sociosPagina } from './colaborar'
import * as nuevo from './estructura'
import { sectoresDetalle } from './sectores'
import type { Contenido } from '../types'

/**
 * English content.
 *
 * Place names (Inicio Sendero, La Junta, Lago Vidal) are kept in Spanish on
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
    conocerHistoria: 'Read our story',
    irAReservas: 'Go to bookings',
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
    cargandoMapa: 'Loading the map…',
    tocaParaMoverMapa: 'Tap to move the map',
    mapaDe: 'Map of the Cochamó Valley',
    dondeDormir: 'Where to stay',
    servicios: 'Facilities',
    contacto: 'Contact',
    reservarEn: (nombre) => `Book at ${nombre}`,
    volverAPortada: 'Back to the home page',
    sobreElSector: 'About this sector',
    datosClave: 'Key facts',
    tenEnCuenta: 'Bear in mind',
    verTodosLosSectores: 'See all three sectors',
    masInfoEn: 'More information',
    lugaresParaDormir: (n) => `${n} ${n === 1 ? 'place' : 'places'} to stay in this sector. You book with each operator; everything you need to decide is here.`,
    verEnElMapa: 'See it on the map',
    copiar: 'Copy',
    copiado: 'Copied',
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
  },

  menu: [
    {
      label: 'The Valley',
      href: `${PORTADA}#el-valle`,
      items: [
        { label: 'Where it is', href: `${PORTADA}#mapa`, detalle: 'Map of the sectors' },
        { label: 'Flora and fauna', href: `${PORTADA}#flora-fauna`, detalle: 'What lives in the Valdivian forest' },
        { label: 'What you can do', href: `${PORTADA}#que-hacer`, detalle: 'Trekking, climbing, horseback riding' },
        { label: 'The Sanctuary', href: `${PORTADA}#santuario`, detalle: '11,432.8 ha proposed' },
      ],
    },
    {
      label: 'How to visit',
      href: '/en/como-visitar',
      items: [
        { label: 'Getting here', href: '/en/como-visitar#como-llegar', detalle: 'By car or by bus' },
        { label: 'What it costs', href: '/en/como-visitar#cuanto-cuesta', detalle: 'What you pay and to whom' },
        { label: 'How to book', href: '/en/como-visitar#reservar', detalle: 'The four steps' },
        { label: 'What to know', href: '/en/como-visitar#normas', detalle: 'Rules and safety' },
        { label: 'Times and contact', href: '/en/como-visitar#horarios', detalle: 'Entry windows and who to ask' },
        { label: 'Day trip vs. several days', href: '/en/como-visitar#dia-vs-semana', detalle: 'Two different trips' },
        { label: 'Where to stay', href: '/en/sectores/la-junta', detalle: 'Campsites, lodges and guesthouses' },
      ],
    },
    {
      label: 'History',
      href: `${PORTADA}#historia`,
      items: [
        { label: 'What happened', href: `${PORTADA}#historia`, detalle: 'From 2009 to today' },
        { label: 'Who runs it and why', href: `${PORTADA}#nosotros`, detalle: 'The valley community' },
        { label: 'Mission and vision', href: `${PORTADA}#mision`, detalle: 'Where we are heading' },
        { label: 'What we have done', href: `${PORTADA}#logros`, detalle: 'Completed work' },
        { label: 'What we want to do', href: `${PORTADA}#proyectos`, detalle: 'The open challenges' },
      ],
    },
    {
      label: 'How to help',
      href: `${PORTADA}#ayudar`,
      items: [
        { label: 'Donations', href: `${PORTADA}/donar`, detalle: '50% conservation · 50% infrastructure' },
        { label: 'Members', href: `${PORTADA}/socios`, detalle: 'Regular contribution' },
      ],
    },
  ],

  enlacesPie: [
    {
      titulo: 'The Valley',
      items: [
        { label: 'Where it is', href: `${PORTADA}#mapa` },
        { label: 'Flora and fauna', href: `${PORTADA}#flora-fauna` },
        { label: 'What you can do', href: `${PORTADA}#que-hacer` },
        { label: 'The Sanctuary', href: `${PORTADA}#santuario` },
      ],
    },
    {
      titulo: 'How to visit',
      items: [
        { label: 'Getting here', href: '/en/como-visitar#como-llegar' },
        { label: 'What it costs', href: '/en/como-visitar#cuanto-cuesta' },
        { label: 'How to book', href: '/en/como-visitar#reservar' },
        { label: 'What to know', href: '/en/como-visitar#normas' },
        { label: 'Book', href: externos.reservas },
      ],
    },
    {
      titulo: 'Organisation',
      items: [
        { label: 'What happened', href: `${PORTADA}#historia` },
        { label: 'Who we are', href: `${PORTADA}#nosotros` },
        { label: 'News', href: externos.noticias },
        { label: 'Donations', href: `${PORTADA}/donar` },
        { label: 'Members', href: `${PORTADA}/socios` },
      ],
    },
  ],

  hero: {
    sobretitulo: 'Patagonia · Chile',
    titulo: ['Visit the valley.', 'Protect it.'],
    bajada:
      'The Cochamó Valley is not a park or a public reserve: it is private land whose owners opened it to the public. We look after it together, with an orderly visit and a real commitment to its conservation.',
    alt: 'Granite walls of the Cochamó Valley with the valley’s native forest in the background',
    pieIzquierda: 'La Junta sector · Cochamó, Los Lagos Region',
    pieDerecha: 'Booking required since 2016 · Organised since 2017',
  },

  cifras: [
    { valor: 11432, sufijo: '.8 ha', texto: 'Area proposed as a Nature Sanctuary' },
    { valor: 8000, sufijo: ' ha', texto: 'Of alerce forest, with trees close to 1,000 years old' },
    { valor: 17000, prefijo: '+', texto: 'Visitors a year walk the muleteers’ trail' },
    { valor: 1000, sufijo: ' m', texto: 'Of granite walls of the North Patagonian Batholith' },
  ],

  introHistoria: {
    eyebrow: 'Our story',
    titulo: 'Fifteen years defending a valley that was never a park',
    bajada:
      'The story of conserving the Cochamó Valley goes back decades of scattered efforts. What began as resistance to a hydroelectric project became a community organisation that today manages visits, repairs trails and pushes for a protected area.',
    cita: 'The decisions we make today determine the consequences of tomorrow.',
    citaFuente: 'Motto of the Cochamó Valley booking system',
  },

  hitos: [
    {
      anio: '2009 — 2012',
      titulo: 'Conservación Cochamó is born',
      texto:
        'A citizens’ group organises against a hydroelectric project that aimed to exploit the Cochamó River and its main tributaries.',
    },
    {
      anio: 'Bachelet’s first government',
      titulo: 'A reserve decree for the river basin',
      texto:
        'Together with the local community, a presidential decree is secured creating a reserve for the Cochamó River basin, aimed at conservation and local development.',
    },
    {
      anio: '2016',
      titulo: 'Booking becomes mandatory for La Junta',
      texto:
        'The booking system starts running: a concrete way to respect the carrying capacity of the trail and the campsites, and to reduce the impact on the valley.',
      destacado: true,
    },
    {
      anio: '2017',
      titulo: 'Organización Valle Cochamó is founded',
      texto:
        'People from Conservación Cochamó, members of Puelo Patagonia, landowners, tour operators and international allies — among them Friends of Cochamó — bring the OVC to life.',
      destacado: true,
    },
    {
      anio: '2019',
      titulo: 'The extended board meets at Llanada Grande',
      texto: 'Neighbours, muleteers, landowners and operators consolidate shared governance for the destination.',
    },
    {
      anio: 'July 2022',
      titulo: 'The Nature Sanctuary proposal is submitted',
      texto:
        'The 11,432.8-hectare proposal reaches the Ministry of National Assets, covering state land — Hijuela 5 — and private estates that joined voluntarily.',
      destacado: true,
    },
    {
      anio: 'October 2022',
      titulo: 'The community speaks up',
      texto:
        'A community forum at Lago Vidal and Torrentoso, and participation in the 2nd Protected Areas Gathering in Santiago.',
    },
    {
      anio: 'Today',
      titulo: 'The valley is still unprotected',
      texto:
        'The threats never stopped: real-estate projects, power plants and, above all, a road creeping ever closer. We keep working to get the sanctuary declared.',
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

  sectoresEncabezado: {
    eyebrow: 'Visit',
    titulo: 'Three sectors, three ways to see the valley',
    bajada:
      'All of them must be booked before you arrive. Get informed, plan and prepare: the trail is long, there is a lot of mud and the weather is unpredictable.',
  },

  sectoresDetalle,

  sectores: [
    {
      id: 'inicio-sendero',
      nombre: 'Inicio Sendero',
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
    {
      id: 'lago-vidal',
      nombre: 'Lago Vidal',
      insignia: 'Alternative',
      descripcion:
        'A cultural identity of its own, tied to the rural gaucho culture of Chilean and Argentine Patagonia. An excellent alternative to the much-visited Cochamó Valley.',
      datos: [
        { icono: 'montana', texto: 'Reachable on foot or on horseback' },
        { icono: 'pin', texto: 'Via the valley, the Argentine border or the east side of Lago Tagua Tagua' },
        { icono: 'sendero', texto: 'La Herradura circuit' },
      ],
      foto: {
        ...imagenes.arrieros,
        alt: 'A muleteer on horseback leading a string of loaded mules along the valley trail',
      },
      cta: { label: 'Explore Lago Vidal', href: '/en/sectores/lago-vidal' },
    },
  ],

  mapa: {
    encabezado: {
      eyebrow: 'Where it is',
      titulo: 'Get your bearings before you travel',
      bajada:
        'The valley lies in the commune of Cochamó, Los Lagos Region. From the trailhead, La Junta and Lago Vidal can only be reached on foot or on horseback.',
    },
    aviso:
      'An orientation map, not a navigation one. There is no phone coverage and no emergency services in the valley: bring your own map and compass or GPS.',
    centroInicial: { lat: -41.4495, lon: -72.115, zoom: 10 },
  },

  puntosMapa: [
    {
      id: 'inicio-sendero',
      nombre: 'Inicio Sendero',
      tipo: 'sector',
      lat: -41.455073,
      lon: -72.219495,
      descripcion: 'Visitor Centre and mandatory registration. The trail starts here and this is where you show your booking.',
      enlace: { label: 'Book', href: externos.reservas },
    },
    {
      id: 'la-junta',
      nombre: 'La Junta',
      tipo: 'sector',
      lat: -41.411358,
      lon: -72.126878,
      descripcion: 'The valley’s tourism hub, 13 km from the trailhead. Campsites and lodging.',
      enlace: { label: 'Book', href: externos.reservas },
    },
    {
      id: 'lago-vidal',
      nombre: 'Lago Vidal Gormaz',
      tipo: 'sector',
      lat: -41.483506,
      lon: -71.940878,
      descripcion: 'An alternative to the main valley, with a rural gaucho identity of its own.',
      enlace: { label: 'Book', href: externos.reservas },
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
      enlace: { label: 'See the route', href: `${PORTADA}#mapa` },
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
        'Inicio Sendero, La Junta or Lago Vidal. At La Junta you choose between the Playa Los Manzanos, Vista Hermosa and La Junta campsites.',
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
    titulo: 'A Nature Sanctuary for the Cochamó Valley',
    bajada:
      'The valley is not officially protected by the Chilean state. In July 2022 we submitted a proposal to the Ministry of National Assets to declare it a Nature Sanctuary, covering state land — Hijuela 5 — and private estates that joined voluntarily.',
    parrafo:
      'A sanctuary recognises the environmental value of the territory and sits well with local culture and ways of life: the community remains the one managing it.',
    hectareas: '11,432.8',
    hectareasPie: 'hectares proposed',
    foto: {
      ...imagenes.alerce,
      alt: 'A person leaning against the trunk of a thousand-year-old alerce in the Cochamó Valley forest',
    },
    enlace: { label: 'Read the full proposal', href: externos.santuario },
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
    eyebrow: 'The threats never stopped',
    titulo: 'What’s at stake',
    bajada:
      'People call the valley “the Yosemite of South America”. The question is whether we want it to end up like Yosemite, or to stay Cochamó.',
    cta: { label: 'Read about conservation', href: externos.conservacion },
  },

  amenazas: [
    {
      icono: 'camino',
      titulo: 'A road creeping closer',
      texto:
        'This is the most urgent threat. It is driven by the same developers who cleared forest in the neighbouring El Manso valley. A road would end the living tradition of the muleteers and bring pollution and fire risk.',
    },
    {
      icono: 'edificio',
      titulo: 'Real-estate pressure',
      texto:
        'Investors with real-estate ambitions and hydroelectric projects keep targeting the Cochamó and the Puelo, affecting rural communities and biodiversity.',
    },
    {
      icono: 'gente',
      titulo: 'Unregulated tourism',
      texto:
        'Rapid growth brought waste problems, impact on flora and fauna, more accidents, water pollution and fire risk. It needs long-term planning.',
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
    cta: { label: 'Contribute', href: `${PORTADA}/donar` },
  },

  logrosEncabezado: { eyebrow: 'What we have achieved', titulo: 'Work already standing in the valley' },

  logros: [
    { icono: 'edificio', label: 'Visitor Centre', href: externos.centroVisitantes },
    { icono: 'sendero', label: 'Trail work', href: externos.trabajosSenderos },
    { icono: 'cartel', label: 'Signage', href: externos.senaletica },
    { icono: 'hoja', label: 'Recycling centre', href: externos.reciclaje },
    { icono: 'montana', label: 'Climbing route maintenance', href: externos.rutasEscalada },
  ],

  introColaborar: {
    eyebrow: 'Get involved',
    titulo: 'Protect the places you love',
    bajada:
      'Most of the valley is private land whose owners allow public access. Maintaining the trails, the ecosystems and the local culture takes work and money.',
  },

  aportes: [
    {
      icono: 'gente',
      titulo: 'Become a member',
      texto: 'A regular contribution that gives the work continuity: it is what lets us plan beyond the next season.',
      cta: { label: 'I want to join', href: '/en/socios' },
    },
    {
      icono: 'corazon',
      titulo: 'Donate',
      texto:
        '50% goes to long-term conservation programmes and 50% funds the infrastructure that lets people visit the valley with minimal impact.',
      cta: { label: 'Donate now', href: '/en/donar' },
      destacado: true,
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
  heroResumen: nuevo.heroResumen,
  elValle: nuevo.elValle,
  rasgos: nuevo.rasgos,
  floraFauna: nuevo.floraFauna,
  especies: nuevo.especies,
  queHacer: nuevo.queHacer,
  actividades: nuevo.actividades,
  impacto: nuevo.impacto,
  logroImportante: nuevo.logroImportante,
  misionVision: nuevo.misionVision,
  futuro: nuevo.futuro,
  necesitamosTuAyuda: nuevo.necesitamosTuAyuda,
  donarPagina,
  sociosPagina,
  comoVisitarPagina: nuevo.comoVisitarPagina,
  comoLlegar: nuevo.comoLlegar,
  cuantoCuesta: nuevo.cuantoCuesta,
  diaVsSemana: nuevo.diaVsSemana,
  horariosYContacto: nuevo.horariosYContacto,
}
