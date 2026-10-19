import type { CampoFormulario, Encabezado, MetodoDonacion } from '../types'

export const donarPagina: Encabezado & {
  intro: string
  metodos: MetodoDonacion[]
  tituloCuenta: string
  otraVia: { titulo: string; texto: string; cta: { label: string; href: string } }
  reparto: { titulo: string; conservacion: string; infraestructura: string }
} = {
  eyebrow: 'Donate',
  titulo: 'Let us take responsibility together',
  bajada:
    'The Cochamó Valley is not a national park or a private reserve, and the state does not protect it. It is private land whose owners opened up access. Keeping it is on all of us.',
  intro:
    'A one-off donation helps. Recurring ones, even if smaller, are what make it possible to plan programmes over several years: knowing what you can count on next season changes what you can commit to.',
  metodos: [
    {
      id: 'transferencia',
      icono: 'edificio',
      titulo: 'Bank transfer',
      texto: 'Straight to the organisation’s account, from any Chilean bank.',
      ventaja: 'It arrives whole: nobody takes a cut.',
      comision: 'No fee',
    },
  ],
  tituloCuenta: 'Transfer details',
  otraVia: {
    titulo: 'Would you rather contribute every month?',
    texto:
      'Becoming a member is a monthly card contribution, from CLP 5,000. It is what gives the work continuity and makes you part of the organisation’s decisions.',
    cta: { label: 'Become a member', href: '/en/como-ayudar#socios' },
  },
  reparto: {
    titulo: 'How your donation is split',
    conservacion: '50% long-term conservation programmes',
    infraestructura: '50% visitor infrastructure',
  },
}

export const sociosPagina: Encabezado & {
  intro: string
  porQue: { titulo: string; texto: string }[]
  tituloSuscripcion: string
  planes: { encabezado: { eyebrow: string; titulo: string; bajada?: string }; mensual: string; anual: string; equivaleA: string; alMes: string; alAnio: string; elegir: string; respaldo: string; empresas: { texto: string; cta: { label: string; href: string } }; lista: import('../types').PlanSocio[] }
  introSuscripcion: string
  notaSuscripcion: string
  tarjeta: { alt: string; pasos: string[]; libre: string; ctaLibre: string }
  tituloFormulario: string
  introFormulario: string
  campos: CampoFormulario[]
  nota: string
  gracias: string
} = {
  eyebrow: 'Members',
  titulo: 'Become a member of Valle Cochamó',
  bajada:
    'Being a member is a regular contribution and also a voice: the organisation is community-run and decisions are made among those who sustain it.',
  intro:
    'Leave us your details and we will get in touch to explain how it works, the amounts and how voting goes. Nothing is charged automatically: nobody bills you without talking to you first.',
  porQue: [
    {
      titulo: 'It gives continuity',
      texto: 'A recurring contribution allows planning beyond the next season: hiring the Visitor Centre team, committing to trail work.',
    },
    {
      titulo: 'It sustains what you do not see',
      texto: 'The signage, the recycling centre and the monitoring of the valley have nobody funding them. There is no public budget behind it.',
    },
    {
      titulo: 'It makes you part of it',
      texto: 'Members take part in the organisation’s decisions, which is community-run and cross-cutting by definition.',
    },
  ],
  tituloSuscripcion:
    'What happens when you choose a plan',
  planes: {
    encabezado: {
      eyebrow: 'Plans',
      titulo: 'Choose your membership',
      bajada: 'Three levels named after the valley. The annual contribution is the same total as the twelve months, in a single charge.',
    },
    mensual: 'Monthly',
    anual: 'Annual',
    equivaleA: 'works out at',
    alMes: 'a month',
    alAnio: 'a year',
    elegir: 'Choose',
    respaldo:
      'Card payments are handled by Payku, the same gateway the organisation has used since 2020. Choosing a plan opens its page, with the amount and the dates in plain sight before you type anything.',
    empresas: {
      texto: 'Would your company like to contribute or sponsor the work in the valley? We discuss it case by case.',
      cta: { label: 'Write to us', href: '/en/como-ayudar#contacto' },
    },
    lista: [
      {
        id: 'chucao',
        nombre: 'Chucao',
        subtitulo: 'Bird of the Valdivian understorey',
        anual: 60000,
        mensual: 5000,
        beneficios: [
          'Sticker and patch',
          'Digital card and Members Wall',
          'Newsletter and impact report',
          'Invitation to work days',
        ],
      },
      {
        id: 'alerce',
        nombre: 'Alerce',
        subtitulo: 'Thousand-year-old tree of the sanctuary',
        anual: 120000,
        mensual: 10000,
        beneficios: ['Everything in Chucao', 'Illustrated field guide'],
        destacado: true,
      },
      {
        id: 'trinidad',
        nombre: 'Trinidad',
        subtitulo: 'Granite peak above La Junta',
        anual: 180000,
        mensual: 15000,
        beneficios: ['Everything in Alerce', 'Valley t-shirt', 'Mention in the annual report'],
      },
    ],
  },
  introSuscripcion:
    'Three steps and no surprise charges: the amount and the date of the first contribution are visible before you type anything.',
  notaSuscripcion:
    'You can cancel the subscription whenever you want, by writing to us or from the confirmation email Payku sends you.',
  tarjeta: {
    alt: 'The organisation’s team at work in the valley',
    pasos: [
      'You pick your plan above and its Payku page opens, with the amount, the frequency and the date of the first charge already filled in.',
      'You type your name, email and phone. That is how we identify you as a member.',
      'Only then come the card details, on Payku’s own site. They never pass through this page.',
    ],
    libre:
      'Would you rather give a different amount? The open-amount form lets you choose how much to contribute each month.',
    ctaLibre: 'Give a different amount',
  },
  tituloFormulario: 'Would you rather we got in touch?',
  introFormulario:
    'If you do not want to subscribe by card right now, or have questions before deciding, leave us your details and we will write to you.',
  campos: [
    { nombre: 'nombre', etiqueta: 'Full name', tipo: 'text', requerido: true },
    { nombre: 'email', etiqueta: 'Email address', tipo: 'email', requerido: true },
    { nombre: 'telefono', etiqueta: 'Phone', tipo: 'tel', requerido: false },
    { nombre: 'direccion', etiqueta: 'City or town', tipo: 'text', requerido: false },
    { nombre: 'mensaje', etiqueta: 'Tell us a bit about yourself', tipo: 'textarea', requerido: false, ayuda: 'Optional: how you came to know the valley, how you would like to help.' },
  ],
  nota: 'We use your details only to contact you about membership. We do not share them with anyone.',
  gracias: 'We have your details. We will write to you soon.',
}
