import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Enlace, PaginaLarga, FilaComparativa, GrupoEspecies, Modalidad, Rasgo,
} from '../types'

/** Portada del idioma: las anclas van absolutas, nunca sueltas. */
const PORTADA = '/en'

export const heroResumen = [
  { etiqueta: 'Where', valor: 'Commune of Cochamó, Los Lagos Region' },
  { etiqueta: 'What it is', valor: 'Private land opened to the public, with no park status' },
  { etiqueta: 'What you do', valor: 'Trekking, climbing, horseback riding and river swimming' },
]

export const elValle: Encabezado = {
  eyebrow: 'The valley',
  titulo: 'Why this valley is like no other',
  bajada:
    'Thousand-metre granite walls above evergreen forest, a trail the muleteers opened more than a century ago, and a community that decided to look after it before the road arrived.',
}

export const rasgos: Rasgo[] = [
  {
    icono: 'montana',
    titulo: 'Granite walls',
    texto: 'Climbable walls that glaciers carved over millions of years.',
    imagen: 'heroAnterior',
    alt: 'The valley’s granite walls above the forest',
  },
  {
    icono: 'hoja',
    titulo: 'Native forest',
    texto: 'Close to 8,000 hectares of alerce stands with trees around a thousand years old.',
    imagen: 'alerce',
    alt: 'Thousand-year-old alerces in the valley’s forest',
  },
  {
    icono: 'caballo',
    titulo: 'Historic road',
    texto: 'The muleteers use it as their great-grandparents did, with pack horses.',
    imagen: 'arrieros',
    alt: 'Arrieros with their horses on the historic trail',
  },
  {
    icono: 'agua',
    titulo: 'Pristine waters',
    texto: 'Meltwater rivers, turquoise pools and waterfalls over polished rock.',
    imagen: 'cascada',
    alt: 'A waterfall over polished rock in the valley',
  },
]





export const impacto: Encabezado = {
  eyebrow: 'Impact',
  titulo: 'A valley we look after together',
  bajada: 'A non-profit corporation running a destination with no single owner and no public budget.',
}

export const logroImportante = {
  imagen: 'bosqueDosel' as const,
  alt: 'The native forest canopy seen from below',
  titulo: 'The Nature Sanctuary',
  texto:
    'In 2023 the decree protecting 11,432.8 hectares of the valley was signed. It is the organisation’s greatest achievement, and also where the work begins: running a sanctuary is a commitment kept season after season.',
  cta: { label: 'About the sanctuary', href: `${PORTADA}/santuario` },
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
  planB: {
    titulo: 'Running late, or missed the bus?',
    texto:
      'Entry to the trail closes at 15:00. You can sleep near the trailhead and head up early the next day: La Frontera, Camping El Laurel and Camping Los Pozones are all in that sector.',
    cta: { label: 'See where to stay', href: `${PORTADA}/como-visitar#dormir` },
  },
  bus: {
    titulo: 'By bus',
    advertencia: {
      titulo: 'Before you set off',
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

export const santuarioPagina: PaginaLarga = {
  eyebrow: 'Conservation',
  titulo: 'Valle Cochamó Nature Sanctuary',
  bajada: 'A cultural and natural treasure',
  foto: {
    imagen: 'conservacionLienzos',
    alt: 'Community banners at the entrance to the valley calling for more protected areas',
  },
  intro: [
    'For more than a decade the Cochamó Valley was looked after with no legal status behind it. Its land is partly state-owned and partly private, and access was opened on a simple principle: come in aware that this is not a park.',
    'Since 2023 the valley has been a Nature Sanctuary. It is the recognition the community sought for years, and the status that lets the people who live and work here go on running it.',
  ],
  cifras: [
    { valor: '11,432.8 ha', texto: 'of protected land' },
    { valor: '1,000 years', texto: 'is the age of some of the valley’s alerces' },
    { valor: '1,000 m', texto: 'of granite walls' },
  ],
  bloques: [
    {
      titulo: 'What is a nature sanctuary?',
      parrafos: [
        'It is a status under the National Monuments Act that protects sites, on land or at sea, whose natural formations or scientific value make their conservation a matter of interest to science or to the State.',
        'What changes in practice is that no works or activity capable of altering the natural state of the place can go ahead without prior authorisation: no construction, no excavation, no extraction. Hunting is banned.',
      ],
    },
    {
      titulo: 'Why a sanctuary and not another status?',
      parrafos: [
        'Because it recognises the environmental values of the territory without expropriating anyone or closing the valley. The land stays with its owners and the ways of life of always carry on.',
        'And because it is compatible with the community staying in charge. Administration of the sanctuary was placed in the hands of the valley’s own organisation, which has been doing the work for years.',
      ],
    },
    {
      titulo: 'What threatens the valley today?',
      lista: [
        'Property development on land in the valley and the valleys next door.',
        'The building of vehicle roads, which would fundamentally change how and who gets in.',
        'Unregulated tourism, which in a few years multiplied visitor numbers without the facilities to receive them growing to match.',
      ],
    },
    {
      titulo: 'What do we want for the Cochamó Valley?',
      lista: [
        'Responsible, sustainable tourism, scaled to what the valley can take.',
        'Respect for local ways of life.',
        'Protection of the natural and cultural heritage.',
        'Conservation of the habitat of flora, fauna and funga.',
        'Protection of the granite walls.',
        'Conscious visits, with conservation first.',
        'Local communities taking part in the governance of the territory.',
      ],
    },
    {
      titulo: 'What does the sanctuary protect?',
      grupos: [
        {
          titulo: 'Ecological and scientific importance',
          items: [
            'Primary forests and alerce stands',
            'The Cochamó river and its riparian wetlands',
            'The North Patagonian Batholith',
            'The diversity of temperate forest fauna',
            'The alerce, a natural monument species',
            'The valley’s geodiversity',
          ],
        },
        {
          titulo: 'Social and cultural importance',
          items: [
            'The presence of indigenous peoples',
            'The arrieros’ trail',
            'The self-sufficient arriero culture',
            'Sustainable tourism as a local way of life',
          ],
        },
      ],
    },
  ],
  cierre: {
    titulo: 'We need your help',
    texto:
      'A declared sanctuary does not run itself. Maintaining the trails, the Visitor Centre and the conservation programmes takes work and money, and there is no public budget behind it.',
    cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
  },
}

export const conservacionPagina: PaginaLarga = {
  eyebrow: 'Conservation',
  titulo: 'A call that comes from the depths of nature',
  bajada: 'For future generations',
  foto: {
    imagen: 'marcha',
    alt: 'Valley residents marching across the Cochamó bridge with banners calling for protection',
  },
  intro: [
    'The defence of the Cochamó Valley did not begin with tourism. It began with a river somebody wanted to dam, and it has carried on with every project that has appeared since.',
  ],
  bloques: [
    {
      titulo: 'Fifteen years defending the same place',
      parrafos: [
        'In 2009 Conservación Cochamó was born to face a hydroelectric project that intended to exploit the Cochamó river and its tributaries. Together with the local community, a presidential decree was won creating a reserve for the river basin.',
        'The threats did not go away: property and hydroelectric projects keep appearing. In 2017 the Organización Valle Cochamó was created to push for responsible tourism and a protected area, and in the United States Friends of Cochamó was formed to support the work from abroad.',
      ],
    },
    {
      titulo: 'What is at stake',
      lista: [
        'Some 8,000 hectares of alerce stands, with specimens around a thousand years old.',
        'Darwin’s frog, a threatened amphibian whose males brood their young in their vocal sac.',
        'Patagonian vizcachas and pumas, which need large, connected territories.',
        'The granite walls of the North Patagonian Batholith, up to a thousand metres high.',
      ],
    },
    {
      titulo: 'Do we want to be Yosemite, or do we want to be Cochamó?',
      parrafos: [
        'The comparison with Yosemite is meant as praise, and it is understandable: granite walls, forest, rivers. But Yosemite has a road, and that road changed what the place is.',
        'In the Manso valley, the next one south, a road has already been built. Whoever built it wants to build another one here. A vehicle road in Cochamó would be the end of the pack horses, of the arriero culture and of an ecosystem that today is only reached on foot or on horseback.',
        'The value of the valley is not in resembling somewhere else. It is in everything that makes it different.',
      ],
    },
    {
      titulo: 'The people who live off the trail',
      parrafos: [
        'There are arriero families who have travelled this trail with their horses for generations: the grandparents did it, the children do it and the grandchildren are doing it still. It is not a tourist attraction, it is a trade.',
        'That trade depends on the trail staying a trail. It is what lies behind every decision the organisation makes about access to the valley.',
      ],
    },
  ],
  cierre: {
    titulo: 'Help us conserve the valley',
    texto:
      'Donations sustain the trails, the Visitor Centre and the long-term conservation programmes. There is no public budget behind any of it.',
    cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
  },
}

export const obras: (PaginaLarga & { slug: string })[] = [
  {
    slug: 'centro-de-visitantes',
    eyebrow: 'What we have achieved',
    titulo: 'Visitor Centre',
    bajada: 'Where everything else begins',
    foto: {
      imagen: 'logroCentroVisitantes',
      alt: 'Visitors registering at the valley’s Visitor Centre',
    },
    intro: [
      'The Visitor Centre has been running since 2017, operated by the organisation. It was born as an answer to tourism growing without regulation and starting to leave marks: waste piling up, eroded trails, damage to flora and fauna, accidents, polluted water and fire risk.',
      'Today it is where everyone registers before heading up, where questions get answered, and how the valley knows how many people are inside it.',
    ],
    cifras: [
      { valor: '+12,000', texto: 'visitors attended each season' },
      { valor: 'Dec — Mar', texto: 'the months it is open today' },
      { valor: '2017', texto: 'the year it started' },
    ],
    bloques: [
      {
        titulo: 'Why we want it open all year',
        parrafos: [
          'Four months of operation force a whole year of work into a single season. Keeping it open would allow us to:',
        ],
        lista: [
          'Protect the natural heritage and its ecosystems continuously.',
          'Guide and inform whoever arrives, at any time of year.',
          'Monitor the valley without interruption, supporting research and a flora and fauna survey.',
          'Run environmental education beyond the summer.',
        ],
      },
      {
        titulo: 'The improvements with Mammut and Andes Gear',
        parrafos: [
          'Since 2018, support from Mammut and Andes Gear has made it possible to refit the container and equip it so the work no longer depends on improvisation.',
          'Communication with volunteers, campsites, Carabineros and arrieros changed completely, and with it the speed at which an emergency is handled.',
        ],
        lista: [
          'A base radio and three new handheld radios.',
          'Four computers for digital visitor registration.',
          'Solar panels and a battery bank.',
        ],
      },
      {
        titulo: 'What it solves day to day',
        lista: [
          'Helping anyone lost or injured on the trail.',
          'Reporting abandoned waste so someone can carry it down.',
          'Reporting each day how much capacity the campsites have left.',
          'Answering booking questions before someone heads up with no place.',
        ],
      },
    ],
    cierre: {
      titulo: 'Help us keep it open all year',
      texto:
        'Running the Visitor Centre means staff, equipment and logistics. There is no public budget behind it: donations and membership fees sustain it.',
      cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'trabajos-de-senderos',
    eyebrow: 'What we have achieved',
    titulo: 'Trail work',
    bajada: 'Boardwalks, bridges and drainage on the stretches the water was pulling apart',
    foto: {
      imagen: 'logroSenderos',
      alt: 'Newly built wooden boardwalk over a wet stretch of trail',
    },
    intro: [
      'In 2019 the organisation put a long-term trail restoration project to Mammut and Andes Gear, with separate stretches for walkers and for horses. The first phase, in the 2019-2020 season, received CLP 2,836,220.',
      'The work covered the twelve kilometres up to the La Junta river and some of the high trails.',
    ],
    cifras: [
      { valor: 'CLP 2,836,220', texto: 'for the first phase, 2019-2020 season' },
      { valor: '12 km', texto: 'of trail worked on, up to the La Junta river' },
    ],
    bloques: [
      {
        titulo: 'What the first phase did',
        lista: [
          'Repairs to the worst sections of trail.',
          'Boardwalks over several stretches.',
          'Repair of the Río Piedras bridge.',
          'New bridges on the La Junta river and in the high valley of the Anfiteatro.',
        ],
      },
      {
        titulo: 'Why bridges',
        parrafos: [
          'A bridge is among the most expensive things built here, and it is also what prevents the most accidents. With rain the rivers rise fast and fording them goes from awkward to impossible.',
          'Thousands of visitors cross the La Junta river every mid and high season. Before the bridge, every rise meant a wait or a risk.',
        ],
      },
      {
        titulo: 'A new trail, opened by hand',
        parrafos: [
          'The people running the Vista Hermosa and La Junta campsites spent several days opening a trail that shortens the way from the Los Manzanos campsite to the waterfalls and the Anfiteatro valley.',
          'That eased the cart crossing of the Cochamó river and spread the wear that used to fall entirely on the main trail.',
        ],
      },
      {
        titulo: 'A bit of history',
        parrafos: [
          'The route from Cochamó to Paso El León was used by indigenous peoples for thousands of years. At the end of the 19th century the Chile-Argentina company built it up for driving cattle, with kilometres of alerce corduroy roads, and even installed a telegraph.',
          'Over the last ten or fifteen years, erosion and the appearance of alternative paths hit the stretch between the El Morro bridge and the La Junta river hardest. Repairs were almost always informal. A decade ago the Senderos de Chile foundation carried out a historical rescue of the route, with training and a book.',
        ],
      },
    ],
    cierre: {
      titulo: 'The trail is maintained every year',
      texto:
        'A boardwalk lasts as long as it lasts, and every winter leaves new stretches to repair. This work carries on thanks to donors and members.',
      cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'senaletica',
    eyebrow: 'What we have achieved',
    titulo: 'Signage',
    bajada: 'A hundred signs so nobody has to guess which way to go',
    foto: {
      imagen: 'logroSenaletica',
      alt: 'Welcome sign for the Cochamó Valley beside the road',
    },
    intro: [
      'Between 2018 and 2019 around a hundred signs were made, carried in and installed across the valley. It is the largest amount of signage ever put up here.',
      'Mammut and Andes Gear contributed CLP 3,247,231 across the 2018-2019 to 2020-2021 seasons.',
    ],
    cifras: [
      { valor: '~100', texto: 'signs installed' },
      { valor: '6', texto: 'locations covered' },
      { valor: 'CLP 3,247,231', texto: 'contributed by Mammut and Andes Gear' },
    ],
    bloques: [
      {
        titulo: 'Where it is',
        lista: [
          'The access road into the valley.',
          'The Visitor Centre.',
          'The Valle Cochamó trail up to the La Junta river.',
          'The campsites that are part of the organisation.',
          'The start of the high trails.',
          'The high valleys.',
        ],
      },
      {
        titulo: 'What is still missing',
        parrafos: [
          'Wayfinding signage is covered, but what is missing is the signage that explains: information and education signs, safety signs, and panels that tell you what you are looking at.',
          'It is the kind of work nobody notices when it is there and badly misses when it is not. Finding funding for that second stage is still pending.',
        ],
      },
    ],
    cierre: {
      titulo: 'The signage that explains is still missing',
      texto:
        'Information, education and safety signs are still waiting for funding. Every contribution brings that second stage closer.',
      cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'centro-de-reciclaje',
    eyebrow: 'What we have achieved',
    titulo: 'Recycling centre',
    bajada: 'Whatever comes into the valley has to leave again',
    foto: {
      imagen: 'logroReciclaje',
      alt: 'A visitor putting a bottle into the recycling bins',
    },
    intro: [
      'The recycling centre sits next to the Visitor Centre and has been running since the 2018-2019 season, with support from Mammut and Andes Gear. Setting it up cost CLP 2,766,498.',
      'At the start of every season there are training workshops for the Visitor Centre team, the campsites and everyone else working in the valley.',
    ],
    cifras: [
      { valor: '2018-2019', texto: 'the season it started' },
      { valor: 'CLP 2,766,498', texto: 'the cost of setting it up' },
      { valor: '5', texto: 'materials collected' },
    ],
    bloques: [
      {
        titulo: 'What can be recycled',
        lista: ['Tetra Pak', 'Food tins', 'Plastic', 'Glass', 'Aluminium'],
      },
      {
        titulo: 'How it works during the season',
        parrafos: [
          'Most campsites in the La Junta sector have their own collection point with a panel, so separating waste does not mean carrying everything to the exit.',
          'What is asked is that you take all your dry waste back down, separated into general and recyclable. At the end of each season the organisation moves the recyclable material to a collection centre in Puerto Varas.',
        ],
      },
    ],
    cierre: {
      titulo: 'Carrying your rubbish down is part of the trip',
      texto:
        'Moving the material to Puerto Varas, the workshops and the upkeep of the collection points are all sustained by donations.',
      cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'rutas-de-escalada',
    eyebrow: 'What we have achieved',
    titulo: 'Climbing route maintenance',
    bajada: 'More than a hundred anchors checked and replaced on the valley’s walls',
    foto: {
      imagen: 'logroEscalada',
      alt: 'A climber on one of the valley’s granite walls',
    },
    intro: [
      'In January and February 2020, a group of volunteer climbers worked on the valley’s climbing walls, checking and replacing the fixed gear.',
      'The initiative was organised by Thomas Gilmore, with the support of the organisation, nine other collaborators and those who donated the anchors.',
    ],
    cifras: [
      { valor: '+100', texto: 'anchors installed' },
      { valor: 'Jan — Feb 2020', texto: 'how long the campaign lasted' },
    ],
    bloques: [
      {
        titulo: 'What was done',
        lista: [
          'More than a hundred anchors installed, mostly replacing pieces in poor condition.',
          'Worn ropes, cord and tubular webbing replaced.',
          'Extra gear added on exposed, dangerous sections, to prevent accidents.',
        ],
      },
      {
        titulo: 'Why it has to be done again',
        parrafos: [
          'The fixed gear on a route does not last forever: rain, ice and use itself degrade it, and a bolt in poor condition gives no warning before it fails.',
          'Checking the walls is work that has to be redone every so often, and it depends on climbers being willing and gear being donated.',
        ],
      },
    ],
    cierre: {
      titulo: 'The walls will need checking again',
      texto:
        'Fixed gear degrades with every season. The anchors, the ropes and getting the team up there all come out of donations.',
      cta: { label: 'I want to donate', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
]
