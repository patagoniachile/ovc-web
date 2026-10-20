import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Enlace, FilaComparativa, GrupoEspecies, Modalidad, Rasgo,
} from '../types'

/** Portada del idioma: las anclas van absolutas, nunca sueltas. */
const PORTADA = '/en'

export const heroResumen = [
  { etiqueta: 'Where', valor: 'Commune of Cochamó, Los Lagos Region' },
  { etiqueta: 'What it is', valor: 'Private land opened to the public, with no park status' },
  { etiqueta: 'What you do', valor: 'Trekking, climbing, horseback riding and river swimming' },
]

export const elValle: Encabezado = {
  eyebrow: 'The Valley',
  titulo: 'Why this valley is like no other',
  bajada:
    'Thousand-metre granite walls above evergreen forest, a trail the muleteers opened more than a century ago, and a community that decided to look after it before the road arrived.',
}

export const rasgos: Rasgo[] = [
  {
    icono: 'montana',
    titulo: 'A thousand metres of granite',
    texto:
      'The North Patagonian Batholith left walls that glaciers carved over millions of years. More than 100 climbing routes opened, and rock for many more.',
    imagen: 'heroAnterior',
    alt: 'The valley’s granite walls above the forest',
  },
  {
    icono: 'hoja',
    titulo: 'Forest nobody planted',
    texto:
      'Close to 8,000 hectares of alerce stands with trees around a thousand years old, alongside coihues, mañíos and an understorey of moss and fungi in its original state.',
    imagen: 'alerce',
    alt: 'Thousand-year-old alerces in the valley’s forest',
  },
  {
    icono: 'caballo',
    titulo: 'The Historic Road',
    texto:
      'The path linking the Reloncaví estuary with the Argentine pampa is still alive: the muleteers use it as their great-grandparents did, with pack horses.',
    imagen: 'arrieros',
    alt: 'Arrieros with their horses on the historic trail',
  },
  {
    icono: 'agua',
    titulo: 'Water you can drink',
    texto:
      'Meltwater rivers, turquoise pools and waterfalls over polished rock. The Cochamó River and its riparian wetlands are part of what the sanctuary aims to protect.',
    imagen: 'cascada',
    alt: 'A waterfall over polished rock in the valley',
  },
]





export const impacto: Encabezado = {
  eyebrow: 'Our impact',
  titulo: 'What changed once we organised',
  bajada: 'A non-profit community organisation running a destination with no single owner and no public budget.',
}

export const logroImportante = {
  cifra: '11,432.8',
  unidad: 'hectares',
  titulo: 'The Nature Sanctuary',
  texto:
    'In 2023 the decree protecting 11,432.8 hectares of the valley was signed. It is the organisation’s greatest achievement, and also where the work begins: running a sanctuary is a commitment kept season after season.',
  cta: { label: 'About the sanctuary', href: `${PORTADA}/el-valle#santuario` },
}

export const misionVision = {
  mision: {
    titulo: 'Our mission',
    texto:
      'To conserve the natural and cultural heritage of the Cochamó Valley and promote responsible, sustainable tourism, safeguarding the traditional ways of life of those who live here.',
  },
  vision: {
    titulo: 'Our vision',
    texto:
      'A collaborative protected area, recognised by the state and run by its own community, where visiting the valley and caring for it are the same thing.',
  },
}

/* ---------------------------------------------------------------------------
   How to visit page
   --------------------------------------------------------------------------- */

export const comoVisitarPagina = {
  eyebrow: 'How to visit',
  titulo: 'Everything you need before you come',
  bajada: 'How to get here, what it costs, how booking works and what you need to know to get in and out without trouble.',
  intro:
    'The Cochamó Valley is not a park: it is private land whose owners opened up access, and the visit is managed collectively. Since 2016 you must book to enter the La Junta sector.',
}

export const comoLlegar = {
  eyebrow: 'Getting here',
  titulo: 'To the start of the trail',
  bajada: 'The valley is in the Cochamó district. From the village to the trailhead there are 10 km of gravel road.',
  auto: {
    titulo: 'By car',
    texto:
      'Drive towards Ensenada on Route 225 and take the turning to Cochamó, Route V-69. There is parking at the end of the road.',
  },
  bus: {
    titulo: 'By bus',
    advertencia: {
      titulo: 'Before you buy your ticket',
      puntos: [
        'Have your campsite booking confirmed. Without it you cannot enter.',
        'Tickets are sold in person only, at the Puerto Montt terminal.',
        'The last bus from Puerto Montt to Cochamó leaves at 15:00. Times can change: confirm them with the company.',
      ],
    },
    planificacion: {
      titulo: 'A sample plan',
      pasos: [
        'Book your campsite on the platform.',
        'Buy your ticket at the Puerto Montt terminal.',
        'Arrive in Cochamó and transfer to the start of the trail.',
        'Register at the Visitor Centre before 15:00 (14:00 in March and April).',
      ],
      nota: 'Bus departure and arrival times vary. Confirm them with the company before travelling.',
    },
    contactosTitulo: 'Bus company contacts',
    contactos: [
      { tipo: 'telefono', valor: 'Buses Trans HAR · +56 9 9530 6867', href: 'tel:+56995306867' },
      { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 9123 0838', href: 'tel:+56991230838' },
      { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 7408 9199', href: 'tel:+56974089199' },
    ] satisfies Contacto[],
  },
}

export const cuantoCuesta = {
  eyebrow: 'What it costs',
  titulo: 'What you pay for, and to whom',
  bajada:
    'There is no single entrance fee for the valley. Each place to stay and each service is charged directly by whoever provides it, which in almost every case is a family from the valley.',
  costos: [
    {
      concepto: 'Entry to the valley',
      valor: 'No charge',
      detalle: 'What is required is the booking and the registration, not a ticket. Remember: no booking, no entry.',
      destacado: true,
    },
    {
      concepto: 'Accommodation',
      valor: 'Set by each operator',
      detalle: 'Every campsite, refuge and guesthouse sets its own rate. You have direct contacts for all fifteen on each sector’s page.',
    },
    {
      concepto: 'Pack horse',
      valor: 'CLP 45,000',
      unidad: 'per day and horse',
      detalle: 'There and back is CLP 90,000. Maximum 60 kg split into two equal sacks. Paid in cash at the start of the trail.',
      opcional: true,
    },
    {
      concepto: 'Horse ride',
      valor: 'On request',
      detalle: 'Ask the arrieros’ association. Maximum 10 kg of extra luggage per person. Tell them if you weigh more than 85 kg so they pick a suitable horse.',
      opcional: true,
    },
    {
      concepto: 'Donation to the organisation',
      valor: 'Voluntary',
      detalle: 'An optional contribution to look after the valley. Below you can see how it is split.',
    },
  ] satisfies Costo[],
  nota:
    'The muleteer rates are those published for the latest season. Always confirm with the operator before you travel.',
}

export const diaVsSemana = {
  eyebrow: 'A day vs. several days',
  titulo: 'Up and back, or do you stay?',
  bajada: 'The difference is not about comfort: they are two different trips, with different times, effort and permits.',
  modalidades: [
    {
      titulo: 'Going for the day',
      resumen: 'Walk up to La Junta and come back the same day. Long and hard: it is not a stroll.',
      paraQuien: 'For anyone who is fit, sets off early and accepts walking for most of the day.',
    },
    {
      titulo: 'Staying at La Junta',
      resumen: 'Book a campsite and use the valley as a base for several days.',
      paraQuien: 'For anyone who wants to really know the valley: the high valleys and the climbing need days, not hours.',
      destacada: true,
    },
  ] satisfies Modalidad[],
  filas: [
    {
      etiqueta: 'Entry window',
      valores: ['7:00 to 9:00, no exceptions', '7:00 to 15:00 (8:00 to 14:00 in March and April)'],
    },
    {
      etiqueta: 'Distance',
      valores: ['26 km there and back', '13 km uphill, at your own pace'],
    },
    {
      etiqueta: 'How long',
      valores: ['10 to 12 hours depending on your pace', 'As many days as you booked'],
    },
    {
      etiqueta: 'Daily limit',
      valores: ['Maximum 90 people per day', 'Limited by each campsite’s places'],
    },
    {
      etiqueta: 'Where you sleep',
      valores: ['You do not: you walk back down the same day', 'At a campsite in La Junta, with a booking'],
    },
    {
      etiqueta: 'How far you get',
      valores: ['La Junta and the Toboganes', 'High trails, climbing, pools and the Toboganes'],
    },
  ] satisfies FilaComparativa[],
}

export const horariosYContacto = {
  eyebrow: 'Times and contact',
  titulo: 'When you can enter and who to talk to',
  bajada:
    'For your own safety you must sign in on the way up (check-in) and on the way down (check-out) at the Visitor Centre. If there is an accident or someone goes missing, that register is what makes a search possible.',
  horarios: [
    { franja: '7:00 am — 3:00 pm', detalle: 'Camping at the La Junta campsites, booking required' },
    { franja: '8:00 am — 2:00 pm', detalle: 'The same, during March and April' },
    { franja: '7:00 — 9:00 am', detalle: 'Day trips to La Junta or the waterslides · maximum 90 people' },
    { franja: '12:00 — 4:00 pm', detalle: 'Río Piedra' },
    { franja: '7:00 and 9:00 am', detalle: 'El Arco or the La Herradura circuit · requires very good fitness' },
  ],
  contactos: [
    { tipo: 'email', valor: 'arrierosvallecochamo@gmail.com', href: 'mailto:arrierosvallecochamo@gmail.com' },
    { tipo: 'instagram', valor: '@org.vallecochamo', href: externos.instagram },
    { tipo: 'facebook', valor: 'Reservas Valle Cochamó', href: externos.facebook },
  ] satisfies Contacto[],
  nota:
    'There is no phone coverage and no emergency services inside the valley. Tell someone outside what time you expect to be back.',
}

export const elVallePagina = {
  eyebrow: 'The Cochamó Valley',
  titulo: 'A place that deserves protecting',
  bajada:
    'In the heart of northern Chilean Patagonia, the Cochamó Valley holds an extraordinary landscape of temperate rainforest, crystal-clear rivers and towering granite walls. A territory of great natural and cultural richness, where nature, communities and traditions have lived side by side for generations.',
  cierre: 'A place to discover, to value and to conserve.',
  cta1: { label: 'Find out more', href: `${PORTADA}/el-valle#mapa` },
  cta2: { label: 'How to visit', href: `${PORTADA}/como-visitar` },
}

export const quienesSomosPagina = {
  eyebrow: 'Who runs it',
  titulo: 'Who looks after the valley, and why',
  bajada:
    'The valley has no single owner and no public budget. It is run by a community organisation made up of the people who live and work here.',
}

export const reservarPagina = {
  eyebrow: 'Booking',
  titulo: 'Secure your place before heading up',
  bajada:
    'Since 2016 you must book to enter the La Junta sector. It is not red tape: it is what makes it possible to respect the carrying capacity of the trail and the campsites.',
  intro:
    'Each place to stay is run by a family from the valley and is booked directly with them. Below are the three sectors and the fifteen places to stay, with their contact details.',
  tituloSectores: 'Choose your sector',
  tituloDormir: 'Where to stay, sector by sector',
}

export const destinoAportes = {
  titulo: 'Where your contribution goes',
  texto:
    'There is no public budget behind the valley. This is what donations and membership fees sustain — what is already done and what is still missing.',
  reparto: {
    conservacion: '50% long-term conservation programmes',
    infraestructura: '50% visitor infrastructure',
    etiquetaGrafico: '50% conservation, 50% visitor infrastructure',
  },
  items: [
    {
      icono: 'edificio' as const,
      dato: '+12,000',
      titulo: 'Visitors received each season',
      texto:
        'The Visitor Centre runs from December to March: it informs, registers people in and out, and coordinates with the campsites, the muleteers and the police whenever someone is lost or injured.',
    },
    {
      icono: 'sendero' as const,
      dato: '11.5 km',
      titulo: 'Of interpretive trail under way',
      texto:
        'Signage explaining the forest, the river and the muleteer history, plus repairs to the eroded sections so the mud stops widening the path.',
    },
    {
      icono: 'botiquin' as const,
      dato: 'Pending',
      titulo: 'A rescue team of our own',
      texto:
        'The valley has no emergency services today. Training a team with first-aid supplies is the most urgent of the challenges still unfunded.',
    },
    {
      icono: 'hoja' as const,
      dato: 'Done',
      titulo: 'Recycling centre and signage',
      texto:
        'Rubbish comes down from the valley and is sorted below, and the trail signs orient visitors and ask for care at the points where the impact was worst.',
    },
  ],
}

export const comoAyudarPagina = {
  eyebrow: 'How to help',
  titulo: 'Sustaining the valley',
  bajada:
    'The valley has no public budget. The trails, the Visitor Centre and the conservation programmes are funded by donations and by the fees of those who become members.',
  intro:
    'Two ways to contribute: a transfer whenever you want, or a monthly contribution that gives the work continuity.',
}

export const floraFauna: Encabezado & { cierre: string } = {
  eyebrow: 'Flora and fauna',
  titulo: 'A valley full of life',
  bajada:
    'Among ancient forests, rivers and mountains, the Cochamó Valley holds an extraordinary diversity of species. From towering alerces and coihues to small inhabitants such as Darwin’s frog and the monito del monte, each plays a fundamental role in the balance of this ecosystem.',
  cierre: 'Meet those who live in this territory.',
}

export const gruposEspecies: GrupoEspecies[] = [
  {
    id: 'guardianes',
    titulo: 'Guardians of the forest',
    subtitulo: 'Alerce · Coihue · Mañío',
    intro:
      'The temperate rainforests of the Cochamó Valley hold native trees that give life, structure and shelter to an extraordinary ecosystem.',
    imagen: 'bosqueDosel',
    alt: 'The canopy of the evergreen forest seen from the valley floor',
    fichas: [
      {
        nombre: 'Alerce',
        cientifico: 'Fitzroya cupressoides',
        texto:
          'One of the longest-lived trees on the planet. Its extremely slow growth allows some specimens to live for thousands of years. In Cochamó, the alerce stands are a natural heritage of enormous value and a living memory of the forest.',
      },
      {
        nombre: 'Coihue and mañío',
        cientifico: 'Nothofagus dombeyi · native Podocarpaceae',
        texto:
          'The coihue stands out for its great size and its dominant presence in the temperate forest. The mañíos add diversity to the landscape. Together with mosses, ferns, fungi and vines, these trees form a complex ecosystem that offers food and shelter to many species.',
      },
    ],
    cierre: 'Protecting these forests means conserving ecosystems that take centuries to develop.',
  },
  {
    id: 'pequenos',
    titulo: 'Small inhabitants',
    subtitulo: 'Darwin’s frog · Monito del monte · Pudú',
    intro:
      'Among the leaves, the trunks and the understorey hide some of the most surprising inhabitants of northern Patagonia. Small in size, but fundamental to the life of the forest.',
    imagen: 'ranitaDarwin',
    alt: 'A Darwin’s frog on a leaf in the damp understorey',
    fichas: [
      {
        nombre: 'Darwin’s frog',
        cientifico: 'Rhinoderma darwinii',
        texto:
          'This small native amphibian is known for an exceptional trait: the male protects his tadpoles inside his vocal sac while they develop. It is threatened by habitat loss and disease.',
      },
      {
        nombre: 'Monito del monte',
        cientifico: 'Dromiciops gliroides',
        texto:
          'This tiny nocturnal marsupial belongs to a unique evolutionary lineage. It lives mainly among the forest vegetation and performs an important ecological role by dispersing the seeds of native plants.',
      },
      {
        nombre: 'Pudú',
        cientifico: 'Pudu puda',
        texto:
          'One of the smallest deer in the world. Shy and hard to spot, it lives in the dense understorey, where it finds shelter and food. Conserving the native vegetation is essential for its survival.',
      },
    ],
    cierre: 'The life of the forest also depends on its smallest inhabitants.',
  },
  {
    id: 'alturas',
    titulo: 'Inhabitants of the heights',
    subtitulo: 'Puma · Condor',
    intro:
      'In the mountains and skies of the valley live two emblematic Andean species, fundamental to the balance of the ecosystems.',
    imagen: 'condorAlturas',
    alt: 'A condor flying over the valley’s snow-covered peaks',
    fichas: [
      {
        nombre: 'Puma',
        cientifico: 'Puma concolor',
        texto:
          'One of the main land predators in the region. Its presence helps regulate the populations of its prey and is an indicator of how important it is to conserve large, connected territories.',
      },
      {
        nombre: 'Andean condor',
        cientifico: 'Vultur gryphus',
        texto:
          'With one of the largest wingspans among land birds, the condor rides air currents to travel great distances. As a scavenger, it plays an essential role by consuming animal remains and contributing to the natural recycling of nutrients.',
      },
    ],
    cierre: 'Their presence reminds us that nature needs space and connectivity to stay in balance.',
  },
  {
    id: 'granito',
    titulo: 'Granite giants',
    subtitulo: 'North Patagonian Batholith',
    intro:
      'Long before the forests we know today existed, geological processes spanning millions of years began to shape the landscape of Cochamó.',
    imagen: 'granitoParedes',
    alt: 'The valley’s great granite walls above the forest',
    fichas: [
      {
        nombre: 'North Patagonian Batholith',
        cientifico: 'The origin of the great granite walls',
        texto:
          'The valley’s towering rock walls are part of the North Patagonian Batholith, a vast body of igneous rock formed by magma cooling at depth over different geological periods.',
      },
      {
        nombre: 'A landscape shaped by ice',
        cientifico: 'The mark of the glaciers',
        texto:
          'Over time, erosion and glaciations sculpted the relief, giving rise to deep valleys, great rock walls and the landscapes that characterise Cochamó today.',
      },
    ],
    cierre: 'The mountains of Cochamó tell a story written over millions of years.',
  },
]

export const queHacer: Encabezado & { cierre: string; cta: Enlace } = {
  eyebrow: 'Activities',
  titulo: 'A valley to explore at your own pace',
  bajada:
    'Among ancient forests, crystal-clear rivers and towering granite walls, the Cochamó Valley invites you to discover nature in a way all of its own.',
  cierre:
    'Hiking, climbing, horse riding and simply watching nature are some of the experiences that connect you with this extraordinary territory, always with respect and care for its surroundings.',
  cta: { label: 'Plan your trip', href: `${PORTADA}/como-visitar` },
}

export const actividades: Actividad[] = [
  {
    id: 'senderismo',
    icono: 'sendero',
    titulo: 'Hiking',
    texto: 'Anfiteatro · Trinidad · La Paloma',
    imagen: 'actSenderismo',
    alt: 'A walker beneath the trees of the valley’s evergreen forest',
    bloques: [
      {
        titulo: 'Anfiteatro',
        texto:
          'A breathtaking natural amphitheatre ringed by giant granite walls. One of the valley’s most emblematic landscapes, where the scale of the mountains is felt from a unique perspective.',
      },
      {
        titulo: 'Trinidad',
        texto:
          'A mountain sector that stands out for its imposing rock formations and high-altitude landscapes. A destination for those looking to explore the most remote and demanding corners of the valley.',
      },
      {
        titulo: 'La Paloma',
        texto:
          'A route that takes you into the mountain landscape and opens up new perspectives on the natural surroundings of Cochamó.',
      },
      {
        titulo: 'Explore responsibly',
        texto:
          'Plan your route, find out about trail conditions and always respect the natural surroundings. Some sectors require mountain experience and proper preparation.',
        aviso: true,
      },
    ],
  },
  {
    id: 'escalada',
    icono: 'montana',
    titulo: 'Climbing',
    texto: 'A granite paradise in the heart of Patagonia',
    imagen: 'actEscalada',
    alt: 'A climber in a crack on the valley’s granite walls',
    bloques: [
      {
        titulo: 'A granite paradise in the heart of Patagonia',
        texto:
          'The Cochamó Valley is one of the best-known rock climbing destinations in South America. Its towering granite walls, surrounded by native forest and mountain landscapes, offer a unique experience for climbers from all over the world. With multi-pitch routes and big walls that can rise hundreds of metres, Cochamó invites you to discover the mountain from a different perspective.',
      },
      {
        titulo: 'An adventure that demands preparation',
        texto:
          'Climbing in Cochamó happens in a remote natural setting, where many routes require traditional climbing experience, technical knowledge and self-sufficiency. Respecting the rock, the vegetation and the conditions of the place is essential to preserving this extraordinary setting.',
        aviso: true,
      },
    ],
  },
  {
    id: 'cabalgatas',
    icono: 'caballo',
    titulo: 'Horse riding',
    texto: 'A tradition that keeps the valley alive',
    imagen: 'actCabalgatas',
    alt: 'An arriero on horseback along the historic trail, through the forest',
    bloques: [
      {
        titulo: 'A tradition that keeps the valley alive',
        texto:
          'Riding through the Cochamó Valley on horseback is a way to discover its landscapes and connect with a tradition deeply rooted in its history. For generations, local arrieros have travelled these trails, carrying people, animals and supplies through forests, rivers and mountains. Their knowledge of the territory and their craft are an essential part of Cochamó’s cultural identity.',
      },
      {
        texto:
          'Today, horse rides let you see the valley from another perspective, keeping alive a way of travelling through it that has lasted over time.',
      },
      {
        titulo: 'An experience with local identity',
        texto:
          'Choosing local arrieros helps preserve their traditions and supports the communities that live in and look after this territory.',
        aviso: true,
      },
    ],
  },
  {
    id: 'observacion',
    icono: 'hoja',
    titulo: 'Nature watching',
    texto: 'Discover the life that lives in the valley',
    imagen: 'cascada',
    alt: 'A waterfall among the valley’s forest',
    bloques: [
      {
        titulo: 'Discover the life that lives in the valley',
        texto:
          'The Cochamó Valley is a refuge of biodiversity, where ancient forests, clear rivers and mountains hold an extraordinary variety of native species. From birdsong to the small inhabitants of the forest, every corner invites you to stop, look and discover the natural richness of this territory.',
      },
      {
        texto:
          'An experience that connects you with nature at another pace, appreciating the details that make Cochamó a unique place.',
      },
      {
        titulo: 'Watching is also protecting',
        texto:
          'Enjoy nature without interfering with it. Keep your distance from animals, avoid disturbing their habitat and remember that the best way to conserve wildlife is to leave it be.',
        aviso: true,
      },
    ],
  },
]
