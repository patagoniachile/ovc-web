import type { CampoFormulario, Encabezado, MetodoDonacion } from '../types'

export const donarPagina: Encabezado & {
  intro: string
  metodos: MetodoDonacion[]
  tituloCuenta: string
  otraVia: { titulo: string; texto: string; cta: { label: string; href: string } }
  tituloPayku: string
  notaPayku: string
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
    cta: { label: 'Become a member', href: '/en/socios' },
  },
  tituloPayku: 'Monthly card contribution',
  notaPayku:
    'The form belongs to Payku and opens inside this page. Your card details go straight to them: they never pass through this site.',
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
  montosSuscripcion: string[]
  planes: { encabezado: { eyebrow: string; titulo: string; bajada?: string }; mensual: string; anual: string; ahorro: (pct: number) => string; alMes: string; alAnio: string; elegir: string; lista: import('../types').PlanSocio[] }
  introSuscripcion: string
  notaSuscripcion: string
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
  tituloSuscripcion: 'Subscribe with a card',
  montosSuscripcion: ['CLP 5,000', 'CLP 10,000', 'CLP 15,000', 'Another amount'],
  planes: {
    encabezado: {
      eyebrow: 'Plans',
      titulo: 'Choose your membership',
      bajada: 'Four levels named after the valley. Paying for the whole year costs less than twelve separate months.',
    },
    mensual: 'Monthly',
    anual: 'Annual',
    ahorro: (pct) => `Save ${pct}%`,
    alMes: 'a month',
    alAnio: 'a year',
    elegir: 'Choose',
    lista: [
      {
        id: 'chucao',
        nombre: 'Chucao',
        subtitulo: 'Bird of the Valdivian understorey',
        anual: 37000,
        mensual: 3500,
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
        anual: 50000,
        mensual: 5000,
        beneficios: ['Everything in Chucao', 'Illustrated field guide'],
        destacado: true,
      },
      {
        id: 'trinidad',
        nombre: 'Trinidad',
        subtitulo: 'Granite peak above La Junta',
        anual: 100000,
        mensual: 10000,
        beneficios: ['Everything in Alerce', 'Valley t-shirt', 'Mention in the annual report'],
      },
      {
        id: 'condor',
        nombre: 'Cóndor',
        subtitulo: 'Patron plan, for individuals and companies',
        anual: 250000,
        mensual: 25000,
        beneficios: [
          'Everything in Trinidad, with a sweatshirt instead of a t-shirt',
          'Company logo on the website and materials',
        ],
        mecenas: true,
      },
    ],
  },
  introSuscripcion:
    'Choose your monthly contribution — CLP 5,000, 10,000, 15,000 or whatever amount you prefer — and fill in your details. The form belongs to Payku and opens right here; your card details go straight to them and never pass through this site.',
  notaSuscripcion:
    'Payku identifies you by the name, surname, email and phone you type into that form. You can cancel the subscription whenever you want.',
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
