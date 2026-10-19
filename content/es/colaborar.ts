import type { CampoFormulario, Encabezado, MetodoDonacion } from '../types'

export const donarPagina: Encabezado & {
  intro: string
  metodos: MetodoDonacion[]
  tituloCuenta: string
  otraVia: { titulo: string; texto: string; cta: { label: string; href: string } }
  reparto: { titulo: string; conservacion: string; infraestructura: string }
} = {
  eyebrow: 'Donar',
  titulo: 'Asumamos la responsabilidad juntos',
  bajada:
    'El Valle Cochamó no es un parque nacional ni una reserva privada, y el Estado no lo protege. Son terrenos privados cuyos dueños abrieron el acceso. Mantenerlo nos toca a todos.',
  intro:
    'Una donación única ayuda. Las recurrentes, aunque sean más pequeñas, son las que permiten planificar programas a varios años: saber con qué se cuenta la próxima temporada cambia qué se puede comprometer.',
  metodos: [
    {
      id: 'transferencia',
      icono: 'edificio',
      titulo: 'Transferencia bancaria',
      texto: 'Directa a la cuenta de la corporación, desde cualquier banco chileno.',
      ventaja: 'Llega íntegra: nadie se queda con una parte.',
      comision: 'Sin comisión',
    },
  ],
  tituloCuenta: 'Datos para transferir',
  otraVia: {
    titulo: '¿Prefieres aportar todos los meses?',
    texto:
      'Hacerte socio es un aporte mensual con tarjeta, desde $5.000. Es lo que da continuidad al trabajo y te hace parte de las decisiones de la corporación.',
    cta: { label: 'Hazte socio', href: '/es/como-ayudar#socios' },
  },
  reparto: {
    titulo: 'Cómo se reparte tu donación',
    conservacion: '50% programas de conservación de largo plazo',
    infraestructura: '50% infraestructura para visitantes',
  },
}

export const sociosPagina: Encabezado & {
  intro: string
  porQue: { titulo: string; texto: string }[]
  tituloSuscripcion: string
  planes: { encabezado: { eyebrow: string; titulo: string; bajada?: string }; mensual: string; anual: string; ahorro: (pct: number) => string; alMes: string; alAnio: string; elegir: string; respaldo: string; lista: import('../types').PlanSocio[] }
  introSuscripcion: string
  notaSuscripcion: string
  tarjeta: { alt: string; pasos: string[]; libre: string; ctaLibre: string }
  tituloFormulario: string
  introFormulario: string
  campos: CampoFormulario[]
  nota: string
  gracias: string
} = {
  eyebrow: 'Socios',
  titulo: 'Hazte socio o socia del Valle Cochamó',
  bajada:
    'Ser socio es un aporte periódico y también una voz: la corporación es comunitaria y se decide entre quienes la sostienen.',
  intro:
    'Déjanos tus datos y te contactamos para explicarte cómo funciona, los montos y cómo se vota. No es un cobro automático: nadie te carga nada sin hablar antes contigo.',
  porQue: [
    {
      titulo: 'Da continuidad',
      texto: 'Un aporte que se repite permite planificar más allá de la próxima temporada: contratar al equipo del Centro de Visitantes, comprometer obras de sendero.',
    },
    {
      titulo: 'Sostiene lo que no se ve',
      texto: 'La señalética, el centro de reciclaje y el monitoreo del valle no tienen quien los financie. No hay presupuesto público detrás.',
    },
    {
      titulo: 'Te hace parte',
      texto: 'Los socios participan de las decisiones de la corporación, que es comunitaria y transversal por definición.',
    },
  ],
  tituloSuscripcion:
    'Qué pasa cuando eliges un plan',
  planes: {
    encabezado: {
      eyebrow: 'Planes',
      titulo: 'Elige tu plan de socio',
      bajada: 'Cuatro niveles con nombres del valle. Pagar el año completo sale más barato que doce meses sueltos.',
    },
    mensual: 'Mensual',
    anual: 'Anual',
    ahorro: (pct) => `Ahorras ${pct}%`,
    alMes: 'al mes',
    alAnio: 'al año',
    elegir: 'Elegir',
    respaldo:
      'El cobro con tarjeta lo procesa Payku, la misma pasarela que usa la corporación desde 2020. Al elegir un plan se abre su página, con el monto y las fechas a la vista antes de escribir nada.',
    lista: [
      {
        id: 'chucao',
        nombre: 'Chucao',
        subtitulo: 'Ave del sotobosque valdiviano',
        anual: 37000,
        mensual: 3500,
        beneficios: [
          'Sticker y parche',
          'Carnet digital y Muro de Socios',
          'Boletín e informe de impacto',
          'Invitación a jornadas',
        ],
      },
      {
        id: 'alerce',
        nombre: 'Alerce',
        subtitulo: 'Árbol milenario del santuario',
        anual: 50000,
        mensual: 5000,
        beneficios: ['Todo lo de Chucao', 'Guía de campo ilustrada'],
        destacado: true,
      },
      {
        id: 'trinidad',
        nombre: 'Trinidad',
        subtitulo: 'Cerro de granito de La Junta',
        anual: 100000,
        mensual: 10000,
        beneficios: ['Todo lo de Alerce', 'Polera del valle', 'Mención en el informe anual'],
      },
      {
        id: 'condor',
        nombre: 'Cóndor',
        subtitulo: 'Plan mecenas, para personas y empresas',
        anual: 250000,
        mensual: 25000,
        beneficios: [
          'Todo lo de Trinidad, con polerón en vez de polera',
          'Logo de empresas en la web y los materiales',
        ],
        mecenas: true,
      },
    ],
  },
  introSuscripcion:
    'Tres pasos y ningún cobro sorpresa: el monto y la fecha del primer aporte se ven antes de escribir nada.',
  notaSuscripcion:
    'Puedes cancelar la suscripción cuando quieras, escribiéndonos o desde el correo de confirmación que te manda Payku.',
  tarjeta: {
    alt: 'Equipo de la corporación trabajando en el valle',
    pasos: [
      'Eliges tu plan arriba y se abre su página en Payku, con el monto, la periodicidad y la fecha del primer cobro ya escritos.',
      'Escribes tu nombre, correo y teléfono. Con eso te identificamos como socio o socia.',
      'Recién ahí van los datos de la tarjeta, en el sitio de Payku. Nunca pasan por esta página.',
    ],
    libre:
      '¿Prefieres otro monto? El formulario de aporte libre te deja elegir cuánto aportar cada mes.',
    ctaLibre: 'Aportar otro monto',
  },
  tituloFormulario: '¿Prefieres que te contactemos?',
  introFormulario:
    'Si no quieres suscribirte con tarjeta ahora, o tienes dudas antes de decidir, déjanos tus datos y te escribimos.',
  campos: [
    { nombre: 'nombre', etiqueta: 'Nombre y apellido', tipo: 'text', requerido: true },
    { nombre: 'email', etiqueta: 'Correo electrónico', tipo: 'email', requerido: true },
    { nombre: 'telefono', etiqueta: 'Teléfono', tipo: 'tel', requerido: false },
    { nombre: 'direccion', etiqueta: 'Ciudad o comuna', tipo: 'text', requerido: false },
    { nombre: 'mensaje', etiqueta: 'Cuéntanos algo de ti', tipo: 'textarea', requerido: false, ayuda: 'Opcional: cómo conociste el valle, en qué te gustaría aportar.' },
  ],
  nota: 'Usamos tus datos solo para contactarte sobre la membresía. No los compartimos con nadie.',
  gracias: 'Recibimos tus datos. Te escribiremos pronto a tu correo.',
}
