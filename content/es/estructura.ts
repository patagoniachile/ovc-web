import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Enlace, FilaComparativa, GrupoEspecies, Modalidad, Rasgo,
} from '../types'

/** Portada del idioma: las anclas van absolutas, nunca sueltas. */
const PORTADA = '/es'

/** Hero: qué es, dónde está y qué se hace, en tres datos. */
export const heroResumen = [
  { etiqueta: 'Dónde', valor: 'Comuna de Cochamó, Región de Los Lagos' },
  { etiqueta: 'Qué es', valor: 'Tierras privadas abiertas al público, sin estatus de parque' },
  { etiqueta: 'Qué se hace', valor: 'Trekking, escalada, cabalgatas y baños de río' },
]

export const elValle: Encabezado = {
  eyebrow: 'El Valle',
  titulo: 'Por qué este valle no se parece a ningún otro',
  bajada:
    'Paredes de granito de mil metros sobre bosque siempreverde, un sendero que los arrieros abrieron hace más de un siglo y una comunidad que decidió cuidarlo antes de que llegara el camino.',
}

export const rasgos: Rasgo[] = [
  {
    icono: 'montana',
    titulo: 'Granito de mil metros',
    texto:
      'El Batolito Norpatagónico dejó paredes que los glaciares tallaron durante millones de años. Más de 100 rutas de escalada abiertas y pared para muchas más.',
    imagen: 'heroAnterior',
    alt: 'Paredes de granito del valle sobre el bosque',
  },
  {
    icono: 'hoja',
    titulo: 'Bosque que nadie plantó',
    texto:
      'Cerca de 8.000 hectáreas de alerzales con ejemplares de unos mil años, junto a coihues, mañíos y un sotobosque de musgos y hongos en estado primigenio.',
    imagen: 'alerce',
    alt: 'Alerces milenarios en el bosque del valle',
  },
  {
    icono: 'caballo',
    titulo: 'El Camino Histórico',
    texto:
      'La senda que conecta el estuario de Reloncaví con la pampa argentina sigue viva: los arrieros la usan como la usaban sus bisabuelos, con pilcheros y caballos.',
    imagen: 'arrieros',
    alt: 'Arrieros con sus caballos en el Camino Histórico',
  },
  {
    icono: 'agua',
    titulo: 'Agua que se puede beber',
    texto:
      'Ríos de deshielo, pozones turquesas y cascadas sobre roca pulida. El río Cochamó y sus humedales ribereños son parte de lo que el santuario busca proteger.',
    imagen: 'cascada',
    alt: 'Cascada sobre roca pulida en el valle',
  },
]





export const impacto: Encabezado = {
  eyebrow: 'Nuestro impacto',
  titulo: 'Lo que cambió desde que nos organizamos',
  bajada: 'Una organización comunitaria, sin fines de lucro, administrando un destino que no tiene dueño único ni presupuesto público.',
}

export const logroImportante = {
  cifra: '11.432,8',
  unidad: 'hectáreas',
  titulo: 'El Santuario de la Naturaleza',
  texto:
    'En enero de 2024 se publicó el decreto que protege 11.432,8 hectáreas del valle. Es el mayor logro de la organización, y también el punto donde el trabajo empieza: administrar un santuario es un compromiso que se sostiene cada temporada.',
  cta: { label: 'Conocer el santuario', href: `${PORTADA}/el-valle#santuario` },
}

export const misionVision = {
  mision: {
    titulo: 'Nuestra misión',
    texto:
      'Conservar el patrimonio natural y cultural del Valle Cochamó y promover un turismo responsable y sostenible, resguardando los estilos de vida tradicionales de quienes viven aquí.',
  },
  vision: {
    titulo: 'Nuestra visión',
    texto:
      'Un área protegida colaborativa, reconocida por el Estado y administrada por su propia comunidad, donde visitar el valle y cuidarlo sean la misma cosa.',
  },
}

/* ---------------------------------------------------------------------------
   Página Cómo visitar
   --------------------------------------------------------------------------- */

export const comoVisitarPagina = {
  eyebrow: 'Cómo visitar',
  titulo: 'Todo lo que necesitas antes de venir',
  bajada: 'Cómo llegar, cuánto cuesta, cómo se reserva y qué tienes que saber para entrar y salir sin problemas.',
  intro:
    'El Valle Cochamó no es un parque: son tierras privadas cuyos dueños abrieron el acceso, y la visita se ordena entre todos. Desde 2016 hay que reservar para entrar al sector La Junta.',
}

export const comoLlegar = {
  eyebrow: 'Cómo llegar',
  titulo: 'Hasta el inicio del sendero',
  bajada: 'El valle está en la comuna de Cochamó. Desde el pueblo al inicio del sendero hay 10 km de camino de ripio.',
  auto: {
    titulo: 'En auto',
    texto:
      'Conduce hacia Ensenada por la Ruta 225 y toma la bifurcación a Cochamó, Ruta V-69. Al final del camino hay estacionamiento.',
  },
  bus: {
    titulo: 'En bus',
    advertencia: {
      titulo: 'Antes de comprar tu pasaje',
      puntos: [
        'Ten tu reserva confirmada en un camping. Sin ella no puedes ingresar.',
        'Los pasajes se venden solo de forma presencial, en el terminal de Puerto Montt.',
        'El último bus de Puerto Montt a Cochamó sale a las 15:00. Los horarios pueden modificarse: confírmalos con la empresa.',
      ],
    },
    planificacion: {
      titulo: 'Ejemplo de planificación',
      pasos: [
        'Reserva tu camping en la plataforma.',
        'Compra tu pasaje en el terminal de Puerto Montt.',
        'Llegada a Cochamó y traslado al inicio del sendero.',
        'Regístrate en el Centro de Visitantes antes de las 15:00 (14:00 en marzo y abril).',
      ],
      nota: 'Las horas de salida y llegada de los buses varían. Confírmalas con la empresa antes de viajar.',
    },
    contactosTitulo: 'Contacto de las empresas',
    contactos: [
      { tipo: 'telefono', valor: 'Buses Trans HAR · +56 9 9530 6867', href: 'tel:+56995306867' },
      { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 9123 0838', href: 'tel:+56991230838' },
      { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 7408 9199', href: 'tel:+56974089199' },
    ] satisfies Contacto[],
  },
}

export const cuantoCuesta = {
  eyebrow: 'Cuánto cuesta',
  titulo: 'Qué se paga y a quién',
  bajada:
    'No hay una entrada única al valle. Cada alojamiento y cada servicio los cobra directamente quien los presta, que en casi todos los casos es una familia del valle.',
  costos: [
    {
      concepto: 'Entrada al valle',
      valor: 'Sin cobro',
      detalle: 'Lo obligatorio es la reserva y el registro, no un ticket. Recuerda: sin reserva no hay ingreso.',
      destacado: true,
    },
    {
      concepto: 'Alojamiento',
      valor: 'Según el operador',
      detalle: 'Cada camping, refugio y hospedaje fija su tarifa. Tienes el contacto directo de los 15 en las páginas de cada sector.',
    },
    {
      concepto: 'Pilchero (carga)',
      valor: '$45.000',
      unidad: 'por día y caballo',
      detalle: 'Ida y vuelta son $90.000. Máximo 60 kg repartidos en dos sacos iguales. Pago en efectivo al inicio del sendero.',
      opcional: true,
    },
    {
      concepto: 'Cabalgata',
      valor: 'Consultar',
      detalle: 'Consultar con la agrupación. Máximo 10 kg de equipaje extra por persona. Avisa si pesas más de 85 kg para que elijan un caballo adecuado.',
      opcional: true,
    },
    {
      concepto: 'Donación a la corporación',
      valor: 'Voluntaria',
      detalle: 'Aporte opcional para cuidar el valle. Abajo ves cómo se reparte.',
    },
  ] satisfies Costo[],
  nota:
    'Las tarifas de arrieros son las vigentes en la última temporada publicada. Confirma siempre con el operador antes de viajar.',
}

export const diaVsSemana = {
  eyebrow: 'Día vs. varios días',
  titulo: '¿Subes y bajas, o te quedas?',
  bajada: 'La diferencia no es de comodidad: son dos viajes distintos, con horarios, exigencia y permisos distintos.',
  modalidades: [
    {
      titulo: 'Ir por el día',
      resumen: 'Subir a La Junta y volver el mismo día. Largo y difícil: no es un paseo.',
      paraQuien: 'Para quien tiene buen estado físico, parte temprano y acepta caminar casi todo el día.',
    },
    {
      titulo: 'Quedarse en La Junta',
      resumen: 'Reservar camping y usar el valle como base durante varios días.',
      paraQuien: 'Para quien quiere conocer el valle de verdad: los valles de altura y la escalada necesitan días, no horas.',
      destacada: true,
    },
  ] satisfies Modalidad[],
  filas: [
    {
      etiqueta: 'Horario de ingreso',
      valores: ['7:00 a 9:00 h, sin excepción', '7:00 a 15:00 h (8:00 a 14:00 en marzo y abril)'],
    },
    {
      etiqueta: 'Distancia',
      valores: ['26 km ida y vuelta', '13 km de subida, sin apuro'],
    },
    {
      etiqueta: 'Duración',
      valores: ['10 a 12 horas según tu ritmo', 'Los días que hayas reservado'],
    },
    {
      etiqueta: 'Aforo',
      valores: ['Máximo 90 personas por día', 'Según los cupos de cada camping'],
    },
    {
      etiqueta: 'Dónde se duerme',
      valores: ['No se duerme: bajas el mismo día', 'En un camping de La Junta, con reserva'],
    },
    {
      etiqueta: 'Hasta dónde llegas',
      valores: ['La Junta y los Toboganes', 'Senderos de altura, escalada, pozones y Toboganes'],
    },
  ] satisfies FilaComparativa[],
}

export const horariosYContacto = {
  eyebrow: 'Horarios y contacto',
  titulo: 'Cuándo se entra y con quién hablar',
  bajada:
    'Por tu seguridad debes registrarte al ingreso (check-in) y a la bajada (check-out) en el Centro de Visitantes. En caso de accidente o extravío, ese registro es lo que permite buscarte.',
  horarios: [
    { franja: '7:00 — 15:00 h', detalle: 'Acampar en los campings del sector La Junta, solo con reserva' },
    { franja: '8:00 — 14:00 h', detalle: 'Lo mismo, durante marzo y abril' },
    { franja: '7:00 — 9:00 h', detalle: 'Ir por el día a La Junta o los Toboganes · aforo máximo 90 personas' },
    { franja: '12:00 — 16:00 h', detalle: 'Río Piedra' },
    { franja: '7:00 y 9:00 h', detalle: 'El Arco o Circuito La Herradura · exige muy buen estado físico' },
  ],
  contactos: [
    { tipo: 'email', valor: 'arrierosvallecochamo@gmail.com', href: 'mailto:arrierosvallecochamo@gmail.com' },
    { tipo: 'instagram', valor: '@org.vallecochamo', href: externos.instagram },
    { tipo: 'facebook', valor: 'Reservas Valle Cochamó', href: externos.facebook },
  ] satisfies Contacto[],
  nota:
    'No hay cobertura de teléfono ni servicios de emergencia dentro del valle. Deja dicho afuera a qué hora esperas volver.',
}

export const elVallePagina = {
  eyebrow: 'El Valle de Cochamó',
  titulo: 'Un lugar que merece ser protegido',
  bajada:
    'En el corazón de la Patagonia norte de Chile, el Valle de Cochamó alberga un extraordinario paisaje de bosques templados lluviosos, ríos de aguas cristalinas e imponentes paredes de granito. Un territorio de gran riqueza natural y cultural, donde la naturaleza, las comunidades y las tradiciones conviven desde hace generaciones.',
  cierre: 'Un lugar para descubrir, valorar y conservar.',
  cta1: { label: 'Conocer más', href: `${PORTADA}/el-valle#mapa` },
  cta2: { label: 'Cómo visitar', href: `${PORTADA}/como-visitar` },
}

export const quienesSomosPagina = {
  eyebrow: 'Quién administra',
  titulo: 'Quién cuida el valle, y por qué',
  bajada:
    'El valle no tiene dueño único ni presupuesto público. Lo administra una corporación comunitaria formada por quienes viven y trabajan aquí.',
}

export const reservarPagina = {
  eyebrow: 'Reservar',
  titulo: 'Asegura tu lugar antes de subir',
  bajada:
    'Desde 2016 hay que reservar para entrar al sector La Junta. No es un trámite: es lo que permite respetar la capacidad de carga del sendero y de los campings.',
  intro:
    'Cada alojamiento lo gestiona una familia del valle y se reserva directamente con ella. Abajo están los tres sectores y los quince lugares donde dormir, con su contacto.',
  tituloSectores: 'Elige tu sector',
  tituloDormir: 'Dónde dormir, sector por sector',
}

export const destinoAportes = {
  titulo: 'A dónde va tu aporte',
  texto:
    'No hay presupuesto público detrás del valle. Esto es lo que sostienen las donaciones y las cuotas de socios, con lo ya hecho y lo que falta.',
  reparto: {
    conservacion: '50% programas de conservación de largo plazo',
    infraestructura: '50% infraestructura para visitantes',
    etiquetaGrafico: '50% conservación, 50% infraestructura para visitantes',
  },
  items: [
    {
      icono: 'edificio' as const,
      dato: '+12.000',
      titulo: 'Visitantes atendidos cada temporada',
      texto:
        'El Centro de Visitantes funciona entre diciembre y marzo: informa, registra entradas y salidas, y coordina con los campings, los arrieros y Carabineros cuando hay alguien perdido o accidentado.',
    },
    {
      icono: 'sendero' as const,
      dato: '11,5 km',
      titulo: 'De sendero interpretativo en obra',
      texto:
        'Señalética que explica el bosque, el río y la historia arriera, más la reparación de los tramos erosionados para que el barro deje de ensanchar la huella.',
    },
    {
      icono: 'botiquin' as const,
      dato: 'Pendiente',
      titulo: 'Un equipo de rescate propio',
      texto:
        'Hoy el valle no tiene servicios de emergencia. Formar un equipo con insumos de primeros auxilios es el desafío más urgente de los que siguen sin financiar.',
    },
    {
      icono: 'hoja' as const,
      dato: 'Hecho',
      titulo: 'Centro de reciclaje y señalética',
      texto:
        'La basura baja del valle y se separa abajo, y las señales del sendero orientan y piden cuidados en los puntos donde más impacto había.',
    },
  ],
}

export const comoAyudarPagina = {
  eyebrow: 'Cómo ayudar',
  titulo: 'Sostener el valle',
  bajada:
    'El valle no tiene presupuesto público. Los senderos, el Centro de Visitantes y los programas de conservación se financian con donaciones y con las cuotas de quienes se hacen socios.',
  intro:
    'Dos formas de aportar: una transferencia cuando quieras, o un aporte mensual que da continuidad al trabajo.',
}

export const floraFauna: Encabezado & { cierre: string } = {
  eyebrow: 'Flora y fauna',
  titulo: 'Un valle lleno de vida',
  bajada:
    'Entre bosques milenarios, ríos y montañas, el Valle de Cochamó alberga una extraordinaria diversidad de especies. Desde imponentes alerces y coihues hasta pequeños habitantes como la ranita de Darwin y el monito del monte, cada uno cumple un rol fundamental en el equilibrio de este ecosistema.',
  cierre: 'Conoce a quienes habitan este territorio.',
}

export const gruposEspecies: GrupoEspecies[] = [
  {
    id: 'guardianes',
    titulo: 'Guardianes del bosque',
    subtitulo: 'Alerce · Coihue · Mañío',
    intro:
      'Los bosques templados lluviosos del Valle de Cochamó albergan árboles nativos que dan vida, estructura y refugio a un ecosistema extraordinario.',
    imagen: 'alerce',
    alt: 'Tronco de un alerce milenario en el bosque del valle',
    fichas: [
      {
        nombre: 'Alerce',
        cientifico: 'Fitzroya cupressoides',
        texto:
          'Uno de los árboles más longevos del planeta. Su crecimiento extremadamente lento permite que algunos ejemplares vivan miles de años. En Cochamó, los alerzales representan un patrimonio natural de enorme valor y una memoria viva del bosque.',
      },
      {
        nombre: 'Coihue y mañío',
        cientifico: 'Nothofagus dombeyi · Podocarpáceas nativas',
        texto:
          'El coihue destaca por su gran tamaño y su presencia dominante en el bosque templado. Los mañíos aportan diversidad al paisaje. Junto a musgos, helechos, hongos y enredaderas, estos árboles forman un ecosistema complejo que ofrece alimento y refugio a numerosas especies.',
      },
    ],
    cierre: 'Proteger estos bosques significa conservar ecosistemas que tardan siglos en desarrollarse.',
  },
  {
    id: 'pequenos',
    titulo: 'Pequeños habitantes',
    subtitulo: 'Ranita de Darwin · Monito del monte · Pudú',
    intro:
      'Entre las hojas, los troncos y el sotobosque se esconden algunos de los habitantes más sorprendentes de la Patagonia norte. Pequeños en tamaño, pero fundamentales para la vida del bosque.',
    imagen: 'ranitaDarwin',
    alt: 'Ranita de Darwin sobre una hoja en el sotobosque húmedo',
    fichas: [
      {
        nombre: 'Ranita de Darwin',
        cientifico: 'Rhinoderma darwinii',
        texto:
          'Este pequeño anfibio nativo es conocido por una característica excepcional: el macho protege a sus renacuajos dentro de su saco vocal durante su desarrollo. Se encuentra amenazado por la pérdida de hábitat y enfermedades.',
      },
      {
        nombre: 'Monito del monte',
        cientifico: 'Dromiciops gliroides',
        texto:
          'Este diminuto marsupial nocturno pertenece a un linaje evolutivo único. Vive principalmente entre la vegetación del bosque y cumple una importante función ecológica al dispersar semillas de plantas nativas.',
      },
      {
        nombre: 'Pudú',
        cientifico: 'Pudu puda',
        texto:
          'Es uno de los ciervos más pequeños del mundo. Tímido y difícil de observar, habita el sotobosque denso, donde encuentra refugio y alimento. La conservación de la vegetación nativa es esencial para su supervivencia.',
      },
    ],
    cierre: 'La vida del bosque también depende de sus habitantes más pequeños.',
  },
  {
    id: 'alturas',
    titulo: 'Habitantes de las alturas',
    subtitulo: 'Puma · Cóndor',
    intro:
      'En las montañas y cielos del valle habitan dos especies emblemáticas de los Andes, fundamentales para el equilibrio de los ecosistemas.',
    imagen: 'condorAlturas',
    alt: 'Un cóndor sobrevolando las cumbres nevadas del valle',
    fichas: [
      {
        nombre: 'Puma',
        cientifico: 'Puma concolor',
        texto:
          'Es uno de los principales depredadores terrestres de la región. Su presencia ayuda a regular las poblaciones de sus presas y es un indicador de la importancia de conservar territorios extensos y conectados.',
      },
      {
        nombre: 'Cóndor andino',
        cientifico: 'Vultur gryphus',
        texto:
          'Con una de las mayores envergaduras alares entre las aves terrestres, el cóndor aprovecha las corrientes de aire para recorrer grandes distancias. Como carroñero, cumple una función esencial al consumir restos de animales y contribuir al reciclaje natural de nutrientes.',
      },
    ],
    cierre: 'Su presencia nos recuerda que la naturaleza necesita espacio y conectividad para mantenerse en equilibrio.',
  },
  {
    id: 'granito',
    titulo: 'Gigantes de granito',
    subtitulo: 'Batolito Norpatagónico',
    intro:
      'Mucho antes de que existieran los bosques que hoy conocemos, procesos geológicos de millones de años comenzaron a dar forma al paisaje de Cochamó.',
    imagen: 'heroAnterior',
    alt: 'Paredes de granito del valle sobre el bosque',
    fichas: [
      {
        nombre: 'Batolito Norpatagónico',
        cientifico: 'El origen de las grandes paredes de granito',
        texto:
          'Las imponentes paredes rocosas del valle forman parte del Batolito Norpatagónico, un extenso conjunto de rocas ígneas originadas por el enfriamiento del magma en profundidad durante distintos períodos geológicos.',
      },
      {
        nombre: 'Un paisaje modelado por el hielo',
        cientifico: 'La huella de los glaciares',
        texto:
          'Con el paso del tiempo, la erosión y las glaciaciones fueron esculpiendo el relieve, dando origen a valles profundos, grandes paredes rocosas y paisajes que hoy caracterizan a Cochamó.',
      },
    ],
    cierre: 'Las montañas de Cochamó cuentan una historia escrita durante millones de años.',
  },
]

export const queHacer: Encabezado & { cierre: string; cta: Enlace } = {
  eyebrow: 'Actividades',
  titulo: 'Un valle para explorar a tu ritmo',
  bajada:
    'Entre bosques milenarios, ríos cristalinos e imponentes paredes de granito, el Valle de Cochamó invita a descubrir la naturaleza de una manera única.',
  cierre:
    'Senderismo, escalada, cabalgatas y contemplación de la naturaleza son algunas de las experiencias que permiten conectar con este extraordinario territorio, siempre desde el respeto y el cuidado de su entorno.',
  cta: { label: 'Prepara tu viaje', href: `${PORTADA}/como-visitar` },
}

export const actividades: Actividad[] = [
  {
    id: 'senderismo',
    icono: 'sendero',
    titulo: 'Senderismo',
    texto: 'Anfiteatro · Trinidad · La Paloma',
    imagen: 'registroSendero',
    alt: 'Caminantes en el sendero del valle',
    bloques: [
      {
        titulo: 'Anfiteatro',
        texto:
          'Un impresionante escenario natural rodeado de gigantescas paredes de granito. Uno de los paisajes más emblemáticos del valle, donde la magnitud de las montañas se aprecia desde una perspectiva única.',
      },
      {
        titulo: 'Trinidad',
        texto:
          'Un sector de montaña que destaca por sus imponentes formaciones rocosas y paisajes de altura. Un destino para quienes buscan explorar los rincones más remotos y desafiantes del valle.',
      },
      {
        titulo: 'La Paloma',
        texto:
          'Un recorrido que permite adentrarse en el paisaje de montaña y descubrir nuevas perspectivas del entorno natural de Cochamó.',
      },
      {
        titulo: 'Explora con responsabilidad',
        texto:
          'Planifica tu recorrido, infórmate sobre las condiciones de los senderos y respeta siempre el entorno natural. Algunos sectores requieren experiencia en montaña y preparación adecuada.',
        aviso: true,
      },
    ],
  },
  {
    id: 'escalada',
    icono: 'montana',
    titulo: 'Escalada',
    texto: 'Un paraíso de granito en plena Patagonia',
    imagen: 'logroEscalada',
    alt: 'Escalador en una pared de granito del valle',
    bloques: [
      {
        titulo: 'Un paraíso de granito en plena Patagonia',
        texto:
          'El Valle de Cochamó es uno de los destinos de escalada en roca más reconocidos de Sudamérica. Sus imponentes paredes de granito, rodeadas de bosques nativos y paisajes de montaña, ofrecen una experiencia única para escaladores de todo el mundo. Con rutas de varios largos y grandes paredes que pueden superar los cientos de metros de altura, Cochamó invita a descubrir la montaña desde una perspectiva diferente.',
      },
      {
        titulo: 'Una aventura que exige preparación',
        texto:
          'La escalada en Cochamó se desarrolla en un entorno natural remoto, donde muchas rutas requieren experiencia en escalada tradicional, conocimientos técnicos y autonomía. Respetar la roca, la vegetación y las condiciones del lugar es fundamental para preservar este extraordinario escenario.',
        aviso: true,
      },
    ],
  },
  {
    id: 'cabalgatas',
    icono: 'caballo',
    titulo: 'Cabalgatas',
    texto: 'Una tradición que mantiene vivo el valle',
    imagen: 'arrieros',
    alt: 'Arrieros con sus caballos en el sendero del valle',
    bloques: [
      {
        titulo: 'Una tradición que mantiene vivo el valle',
        texto:
          'Recorrer el Valle de Cochamó a caballo es una forma de descubrir sus paisajes y conectar con una tradición profundamente arraigada en su historia. Durante generaciones, los arrieros locales han recorrido estos senderos, transportando personas, animales y provisiones a través de bosques, ríos y montañas. Su conocimiento del territorio y su oficio forman parte esencial de la identidad cultural de Cochamó.',
      },
      {
        texto:
          'Hoy, las cabalgatas permiten conocer el valle desde otra perspectiva, manteniendo viva una forma de recorrerlo que ha perdurado en el tiempo.',
      },
      {
        titulo: 'Una experiencia con identidad local',
        texto:
          'Elegir servicios de arrieros locales contribuye a preservar sus tradiciones y apoyar a las comunidades que habitan y cuidan este territorio.',
        aviso: true,
      },
    ],
  },
  {
    id: 'observacion',
    icono: 'hoja',
    titulo: 'Observación de la naturaleza',
    texto: 'Descubre la vida que habita el valle',
    imagen: 'cascada',
    alt: 'Cascada entre el bosque del valle',
    bloques: [
      {
        titulo: 'Descubre la vida que habita el valle',
        texto:
          'El Valle de Cochamó es un refugio de biodiversidad, donde bosques milenarios, ríos cristalinos y montañas albergan una extraordinaria variedad de especies nativas. Desde el canto de las aves hasta los pequeños habitantes del bosque, cada rincón invita a detenerse, observar y descubrir la riqueza natural de este territorio.',
      },
      {
        texto:
          'Una experiencia para conectar con la naturaleza a otro ritmo, apreciando los detalles que hacen de Cochamó un lugar único.',
      },
      {
        titulo: 'Observar también es proteger',
        texto:
          'Disfruta de la naturaleza sin intervenir en ella. Mantén la distancia de los animales, evita alterar su hábitat y recuerda que la mejor forma de conservar la vida silvestre es dejarla intacta.',
        aviso: true,
      },
    ],
  },
]
