import { payku } from '../cuenta'
import type { CampoFormulario, Encabezado, MetodoDonacion } from '../types'

export const donarPagina: Encabezado & {
  intro: string
  metodos: MetodoDonacion[]
  tituloCuenta: string
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
    {
      id: 'payku',
      icono: 'corazon',
      titulo: 'Monthly card contribution',
      texto: 'Through Payku, a Chilean payments company. You can cancel whenever you want.',
      ventaja: 'It repeats itself every month, without you having to remember.',
      comision: `${payku.comision} fee`,
    },
  ],
  tituloCuenta: 'Transfer details',
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
  tituloFormulario: string
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
  tituloFormulario: 'I want to become a member',
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
