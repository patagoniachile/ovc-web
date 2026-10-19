import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Especie, MedioDeTransporte, Modalidad, Rasgo,
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
  },
  {
    icono: 'hoja',
    titulo: 'Forest nobody planted',
    texto:
      'Close to 8,000 hectares of alerce stands with trees around a thousand years old, alongside coihues, mañíos and an understorey of moss and fungi in its original state.',
  },
  {
    icono: 'caballo',
    titulo: 'The Historic Road',
    texto:
      'The path linking the Reloncaví estuary with the Argentine pampa is still alive: the muleteers use it as their great-grandparents did, with pack horses.',
  },
  {
    icono: 'agua',
    titulo: 'Water you can drink',
    texto:
      'Meltwater rivers, turquoise pools and waterfalls over polished rock. The Cochamó River and its riparian wetlands are part of what the sanctuary aims to protect.',
  },
]

export const floraFauna: Encabezado = {
  eyebrow: 'Flora and fauna',
  titulo: 'Who lives here',
  bajada:
    'The valley is Valdivian temperate rainforest, one of the highest conservation-value ecosystems on the planet. This is part of what is being protected.',
}

export const especies: Especie[] = [
  {
    nombre: 'Alerce',
    nombreCientifico: 'Fitzroya cupressoides',
    grupo: 'flora',
    texto: 'A native conifer that grows extremely slowly. The valley has trees close to a thousand years old and some 8,000 hectares of alerce stands.',
  },
  {
    nombre: 'Coihue and mañío',
    grupo: 'flora',
    texto: 'The trees that give the Valdivian forest its structure, with climbing plants, mosses and fungi covering every available surface.',
  },
  {
    nombre: 'Darwin’s frog',
    nombreCientifico: 'Rhinoderma darwinii',
    grupo: 'fauna',
    texto: 'Tiny and threatened. The male broods the tadpoles inside his own vocal sac, a behaviour found nowhere else in the world.',
  },
  {
    nombre: 'Monito del monte',
    nombreCientifico: 'Dromiciops gliroides',
    grupo: 'fauna',
    texto: 'A nocturnal marsupial, the only survivor of an order once thought extinct. It disperses the seeds of the forest it lives in.',
  },
  {
    nombre: 'Pudú',
    nombreCientifico: 'Pumilio puda',
    grupo: 'fauna',
    texto: 'The smallest deer in the world, about the size of a medium dog. It lives hidden in the dense understorey.',
  },
  {
    nombre: 'Puma and condor',
    grupo: 'fauna',
    texto: 'The top predator and the scavenger of the Andes. That they are still here means the food chain is intact.',
  },
  {
    nombre: 'North Patagonian Batholith',
    grupo: 'geologia',
    texto: 'The rock formed millions of years ago and the last glaciation carved it, leaving flat-floored valleys and sheer walls.',
  },
]

export const queHacer: Encabezado = {
  eyebrow: 'What you can do',
  titulo: 'A valley you cover on foot',
  bajada: 'There is no road and no vehicles. Everything you see here is reached walking or on horseback.',
}

export const actividades: Actividad[] = [
  { icono: 'sendero', titulo: 'Trekking', texto: 'From the 13 km walk up to La Junta to the high valleys, very demanding and with no rescue.', dato: 'More than 40 km of trails' },
  { icono: 'montana', titulo: 'Climbing', texto: 'Granite walls up to a thousand metres, with routes opened and maintained by the climbing community.', dato: 'More than 100 routes' },
  { icono: 'caballo', titulo: 'Horseback riding', texto: 'Ride up to La Junta with the valley’s muleteers, or hire pack horses to carry your gear.', dato: 'With the muleteers’ association' },
  { icono: 'agua', titulo: 'Rivers and pools', texto: 'Clear meltwater, stony beaches and waterfalls. The waterslides are the exception: they are dangerous.', dato: 'Glacial meltwater' },
  { icono: 'hoja', titulo: 'Watching the forest', texto: 'Thousand-year-old alerce stands, birds, amphibians and fungi. The valley is a living laboratory of Valdivian forest.', dato: 'Primary forest' },
  { icono: 'carpa', titulo: 'Camping', texto: 'Authorised campsites in all three sectors, booked in advance. Outside them, camping is not allowed.', dato: '15 places to stay' },
]

export const impacto: Encabezado = {
  eyebrow: 'Our impact',
  titulo: 'What changed once we organised',
  bajada: 'A non-profit community organisation running a destination with no single owner and no public budget.',
}

export const logroImportante = {
  cifra: '11,432.8',
  unidad: 'hectares',
  titulo: 'The Nature Sanctuary proposal',
  texto:
    'In July 2022 we took the proposal to protect the valley to the Ministry of National Assets, covering state land and private estates that joined voluntarily. It is the biggest step in fifteen years of work, and it is still pending.',
  cta: { label: 'Read the proposal', href: `${PORTADA}/el-valle#santuario` },
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

export const futuro: Encabezado = {
  eyebrow: 'The future',
  titulo: 'What is coming and what is at risk',
  bajada: 'The valley is still unprotected. What we do over the next few years decides how it reaches the next generations.',
}

export const necesitamosTuAyuda = {
  titulo: 'We need your help',
  texto:
    'Most of the valley is private land whose owners allow public access. Maintaining the trails, the Visitor Centre and the conservation programmes takes work and money, and there is no public budget behind it.',
  cta: { label: 'Donate', href: `${PORTADA}/donar` },
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
  titulo: 'As far as the trailhead',
  bajada: 'The valley is in the commune of Cochamó. From the town to the trailhead there are 10 km of gravel road.',
  medios: [
    {
      icono: 'camino',
      titulo: 'By car',
      texto:
        'Drive towards Ensenada on Route 225 and take the turn-off to Cochamó, Route V-69. From the town of Cochamó to the start of the trail to La Junta it is 10 km. There is parking at the end of the road.',
    },
    {
      icono: 'gente',
      titulo: 'By bus',
      texto:
        'There are buses to Cochamó from the Puerto Montt terminal. The offices are at the terminal and tickets are sold in person only. Timetables change: check beforehand, especially on public holidays, Sundays and in summer.',
      contactos: [
        { tipo: 'telefono', valor: 'Buses Trans HAR · +56 9 9530 6867', href: 'tel:+56995306867' },
        { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 9123 0838', href: 'tel:+56991230838' },
        { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 7408 9199', href: 'tel:+56974089199' },
      ],
    },
    {
      icono: 'caballo',
      titulo: 'From the town',
      texto:
        'If you do not have a car, there is local transport between the town of Cochamó and the trailhead. It is worth arranging it together with your accommodation and horses.',
    },
  ] satisfies MedioDeTransporte[],
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
      detalle: 'What is mandatory is the booking and the registration, not a ticket. The valley is not a park with an entrance fee.',
    },
    {
      concepto: 'Accommodation',
      valor: 'Set by each operator',
      detalle: 'Every campsite, lodge and guesthouse sets its own rate. You have direct contact details for all 15 on each sector page.',
    },
    {
      concepto: 'Pack horse',
      valor: 'CLP 45,000 per day per horse',
      detalle: 'There and back is CLP 90,000. Maximum 60 kg split into two equal sacks. Paid in cash at the trailhead.',
    },
    {
      concepto: 'Horseback ride',
      valor: 'Ask the association',
      detalle: 'Maximum 10 kg of extra luggage per person. Let them know if you weigh more than 85 kg so they pick a suitable horse.',
    },
    {
      concepto: 'Donation to the organisation',
      valor: 'Voluntary',
      detalle: '50% goes to long-term conservation programmes and 50% to visitor infrastructure.',
    },
  ] satisfies Costo[],
  nota:
    'The muleteer rates are those published for the latest season. Always confirm with the operator before you travel.',
}

export const diaVsSemana = {
  eyebrow: 'Day trip vs. several days',
  titulo: 'Up and back, or staying?',
  bajada: 'The difference is not comfort: they are two different trips, with different times, demands and permissions.',
  modalidades: [
    {
      titulo: 'Going for the day',
      resumen: 'Up to La Junta and back the same day. Long and hard: it is not a stroll.',
      filas: [
        { etiqueta: 'Entry window', valor: '7:00 to 9:00 am, no exceptions' },
        { etiqueta: 'Distance', valor: '26 km there and back' },
        { etiqueta: 'Duration', valor: '10 to 12 hours depending on your pace' },
        { etiqueta: 'Capacity', valor: 'Maximum 90 people per day' },
        { etiqueta: 'Sleeping', valor: 'Not included: you come down the same day' },
      ],
      paraQuien: 'For anyone in good shape who sets off early and accepts walking most of the day.',
    },
    {
      titulo: 'Staying in La Junta',
      resumen: 'Book a campsite and use the valley as a base for several days.',
      filas: [
        { etiqueta: 'Entry window', valor: '7:00 am to 3:00 pm (8:00 am to 2:00 pm in March and April)' },
        { etiqueta: 'Distance', valor: '13 km up, without rushing' },
        { etiqueta: 'Gives access to', valor: 'High-country trails, climbing, pools, the waterslides' },
        { etiqueta: 'Booking', valor: 'Mandatory, at one of the campsites' },
        { etiqueta: 'Pack horses', valor: 'You can send your gear up by horse' },
      ],
      paraQuien: 'For anyone who wants to really know the valley: the high valleys and the climbing need days, not hours.',
      destacada: true,
    },
  ] satisfies Modalidad[],
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
  eyebrow: 'The Valley',
  titulo: 'What the Cochamó Valley is',
  bajada:
    'Where it is, what lives in it, what you can do there and what is being protected. Everything worth knowing before deciding whether to come.',
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
