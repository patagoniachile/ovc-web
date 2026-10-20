import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Enlace, PaginaLarga, FilaComparativa, GrupoEspecies, Modalidad, Rasgo,
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
  eyebrow: 'El valle',
  titulo: 'Por qué este valle no se parece a ningún otro',
  bajada:
    'Paredes de granito de mil metros sobre bosque siempreverde, un sendero que los arrieros abrieron hace más de un siglo y una comunidad que decidió cuidarlo antes de que llegara el camino.',
}

export const rasgos: Rasgo[] = [
  {
    icono: 'montana',
    titulo: 'Paredes de granito',
    texto: 'Paredes escalables que los glaciares tallaron durante millones de años.',
    imagen: 'heroAnterior',
    alt: 'Paredes de granito del valle sobre el bosque',
  },
  {
    icono: 'hoja',
    titulo: 'Bosque nativo',
    texto: 'Cerca de 8.000 hectáreas de alerzales con ejemplares de unos mil años.',
    imagen: 'alerce',
    alt: 'Alerces milenarios en el bosque del valle',
  },
  {
    icono: 'caballo',
    titulo: 'Camino histórico',
    texto: 'Los arrieros la usan como la usaban sus bisabuelos, con pilcheros y caballos.',
    imagen: 'arrieros',
    alt: 'Arrieros con sus caballos en el Camino Histórico',
  },
  {
    icono: 'agua',
    titulo: 'Aguas prístinas',
    texto: 'Ríos de deshielo, pozones turquesas y cascadas sobre roca pulida.',
    imagen: 'cascada',
    alt: 'Cascada sobre roca pulida en el valle',
  },
]





export const impacto: Encabezado = {
  eyebrow: 'Impacto',
  titulo: 'Un valle que cuidamos entre todos',
  bajada: 'Una organización comunitaria, sin fines de lucro, administrando un destino que no tiene dueño único ni presupuesto público.',
}

export const logroImportante = {
  imagen: 'bosqueDosel' as const,
  alt: 'El dosel del bosque nativo visto desde abajo',
  titulo: 'El Santuario de la Naturaleza',
  texto:
    'En 2023 se firmó el decreto que protege 11.432,8 hectáreas del valle. Es el mayor logro de la organización, y también el punto donde el trabajo empieza: administrar un santuario es un compromiso que se sostiene cada temporada.',
  cta: { label: 'Conoce el santuario', href: `${PORTADA}/santuario` },
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
      concepto: 'Entrada',
      valor: '$4.000',
      unidad: 'aporte sugerido',
      detalle: 'Es voluntario y va directo al cuidado del valle. Si vas por el día no necesitas reserva; para pasar la noche, sí.',
      opcional: true,
    },
    {
      concepto: 'Alojamiento',
      valor: 'Según cada camping o refugio',
      detalle: 'Cada camping, refugio y hospedaje fija su tarifa. Tienes el contacto directo de los 15 en las páginas de cada sector.',
      enlace: { label: 'Ver más', href: `${PORTADA}/como-visitar#dormir` },
    },
    {
      concepto: 'Pilchero (carga)',
      valor: '$45.000*',
      unidad: 'por día y caballo',
      detalle: 'Ida y vuelta son $90.000. Máximo 60 kg repartidos en dos sacos iguales. Pago en efectivo al inicio del sendero. *Precio a octubre 2026; confírmalo con los contactos directos.',
      opcional: true,
    },
    {
      concepto: 'Cabalgata',
      valor: 'Consultar',
      detalle: 'Consultar con la agrupación. Máximo 10 kg de equipaje extra por persona. Avisa si pesas más de 85 kg para que elijan un caballo adecuado.',
      opcional: true,
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
      resumen: 'Subir a La Junta y volver el mismo día, sin reserva. Largo y difícil: no es un paseo.',
      paraQuien: 'Para quien tiene buen estado físico, parte temprano y acepta caminar casi todo el día.',
    },
    {
      titulo: 'Quedarse en La Junta',
      resumen: 'Reservar camping (obligatorio) y usar el valle como base durante varios días.',
      paraQuien: 'Para quien quiere conocer el valle de verdad: los valles de altura y la escalada necesitan días, no horas.',
      destacada: true,
    },
  ] satisfies Modalidad[],
  filas: [
    {
      etiqueta: 'Reserva',
      valores: ['No necesitas', 'Obligatoria'],
    },
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
  titulo: 'Reserva tu lugar. Ayuda a cuidar el Valle.',
  bajada:
    'El Valle Cochamó es un territorio natural y cultural único, con una capacidad de visita que debemos respetar. Las reservas permiten ordenar el ingreso y reducir la presión sobre sus senderos, campings y ecosistemas.',
  intro:
    'Cada alojamiento lo gestiona una familia del valle y se reserva directamente con ella.',
  tituloSectores: 'Elige tu sector',
  tituloDormir: 'Dónde dormir, sector por sector',
}

export const destinoAportes = {
  titulo: 'A dónde va tu aporte',
  texto: '',
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
      tituloGrande: true,
      texto:
        'Hoy el valle no tiene servicios de emergencia. Formar un equipo con insumos de primeros auxilios es el desafío más urgente de los que siguen sin financiar.',
    },
    {
      icono: 'hoja' as const,
      dato: 'En constante mejora',
      titulo: 'Centro de reciclaje y señalética',
      tituloGrande: true,
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
    'Distintas formas de aportar: una transferencia cuando quieras, hacerte socio para dar continuidad al trabajo o llevarte algo de nuestra tienda.',
  productos: {
    eyebrow: 'Otras formas de aportar',
    titulo: 'Tienda del Valle',
    bajada:
      'En el Centro de Visitantes encontrarás nuestros productos: llévate un buen recuerdo de tu aventura y, de paso, aporta al cuidado del valle.',
    // Ilustraciones provisorias: reemplazar por fotos de los productos reales.
    items: [
      { nombre: 'Jockeys', foto: { src: '/img/tienda/jockey.svg', width: 600, height: 600, alt: 'Jockey verde con el logo del valle' } },
      { nombre: 'Poleras', foto: { src: '/img/tienda/polera.svg', width: 600, height: 600, alt: 'Polera verde con el logo del valle' } },
      { nombre: 'Botellas térmicas', foto: { src: '/img/tienda/termo.svg', width: 600, height: 600, alt: 'Botella térmica verde con el logo del valle' } },
      { nombre: 'Stickers', foto: { src: '/img/tienda/stickers.svg', width: 600, height: 600, alt: 'Stickers con el logo del valle' } },
    ],
  },
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
    imagen: 'bosqueDosel',
    alt: 'Copas del bosque siempreverde vistas desde el suelo del valle',
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
    imagen: 'granitoParedes',
    alt: 'Las grandes paredes de granito del valle sobre el bosque',
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
    imagen: 'actSenderismo',
    alt: 'Caminante bajo los árboles del bosque siempreverde del valle',
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
    imagen: 'actEscalada',
    alt: 'Escalador en una fisura de las paredes de granito del valle',
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
    imagen: 'actCabalgatas',
    alt: 'Arriero a caballo por el Camino Histórico, entre el bosque',
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

export const santuarioPagina: PaginaLarga = {
  eyebrow: 'Conservación',
  titulo: 'Santuario de la Naturaleza Valle Cochamó',
  bajada: 'Un tesoro cultural y natural',
  foto: {
    imagen: 'conservacionLienzos',
    alt: 'Lienzos de la comunidad en el acceso al valle pidiendo más áreas protegidas',
  },
  intro: [
    'Durante más de una década, el Valle Cochamó se cuidó sin ninguna figura legal que lo respaldara. Sus terrenos son fiscales y privados, y el acceso se abrió bajo un principio simple: entrar con conciencia de que se visita un lugar que no es un parque.',
    'Desde 2023 el valle es Santuario de la Naturaleza. Es el reconocimiento que la comunidad buscó durante años, y la figura que permite que quienes viven y trabajan aquí sigan administrándolo.',
  ],
  cifras: [
    { valor: '11.432,8 ha', texto: 'de superficie protegida' },
    { valor: '1.000 años', texto: 'tienen algunos alerces del valle' },
    { valor: '1.000 m', texto: 'de paredes de granito' },
  ],
  bloques: [
    {
      titulo: '¿Qué es un santuario de la naturaleza?',
      parrafos: [
        'Es una figura de la Ley de Monumentos Nacionales que protege sitios, terrestres o marinos, cuyas formaciones naturales o valor para la investigación científica hacen que su conservación interese a la ciencia o al Estado.',
        'Lo que cambia en la práctica es que ninguna obra ni actividad capaz de alterar el estado natural del lugar puede hacerse sin autorización previa: ni construcción, ni excavación, ni explotación. La caza queda prohibida.',
      ],
    },
    {
      titulo: '¿Por qué un santuario y no otra figura?',
      parrafos: [
        'Porque reconoce los valores ambientales del territorio sin expropiar a nadie ni cerrar el valle. Las tierras siguen siendo de quienes son y las formas de vida de siempre continúan.',
        'Y porque es compatible con que la comunidad siga a cargo. La administración del santuario quedó en manos de la organización del valle, que es quien lleva años haciendo el trabajo.',
      ],
    },
    {
      titulo: '¿Qué amenaza hoy al valle?',
      lista: [
        'El desarrollo inmobiliario sobre terrenos del valle y de los valles vecinos.',
        'La construcción de caminos vehiculares, que cambiarían de raíz cómo se entra y quién entra.',
        'El turismo sin regulación, que en pocos años multiplicó los visitantes sin que creciera lo que hace falta para recibirlos.',
      ],
    },
    {
      titulo: '¿Qué queremos para el Valle Cochamó?',
      lista: [
        'Un turismo responsable y sostenible, dimensionado a lo que el valle aguanta.',
        'Respeto por los modos de vida locales.',
        'Protección del patrimonio natural y cultural.',
        'Conservación del hábitat de la flora, la fauna y la funga.',
        'Protección de las paredes de granito.',
        'Visitas conscientes, con la conservación por delante.',
        'Participación de las comunidades locales en la gobernanza del territorio.',
      ],
    },
    {
      titulo: '¿Qué se protege con el santuario?',
      grupos: [
        {
          titulo: 'Importancia ecológica y científica',
          items: [
            'Bosques primarios y alerzales',
            'El río Cochamó y sus humedales ribereños',
            'El Batolito Norpatagónico',
            'La diversidad de fauna del bosque templado',
            'El alerce, especie monumento natural',
            'La geodiversidad del valle',
          ],
        },
        {
          titulo: 'Importancia sociocultural',
          items: [
            'La presencia de pueblos originarios',
            'El camino de los arrieros',
            'La cultura arriera de autosubsistencia',
            'El turismo sustentable como forma de vida local',
          ],
        },
      ],
    },
  ],
  cierre: {
    titulo: 'Necesitamos tu aporte',
    texto:
      'El santuario declarado no se administra solo. Mantener los senderos, el Centro de Visitantes y los programas de conservación cuesta trabajo y plata, y no hay presupuesto público detrás.',
    cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
  },
}

export const conservacionPagina: PaginaLarga = {
  eyebrow: 'Conservación',
  titulo: 'Un llamado que nace de las profundidades de la naturaleza',
  bajada: 'Para futuras generaciones',
  foto: {
    imagen: 'marcha',
    alt: 'Vecinos del valle marchando sobre el puente de Cochamó con lienzos por la protección del territorio',
  },
  intro: [
    'La defensa del Valle Cochamó no empezó con el turismo. Empezó con un río que alguien quiso represar, y ha seguido con cada proyecto que apareció después.',
  ],
  bloques: [
    {
      titulo: 'Quince años defendiendo el mismo lugar',
      parrafos: [
        'En 2009 nació Conservación Cochamó para enfrentar un proyecto hidroeléctrico que pretendía explotar el río Cochamó y sus afluentes. Junto a la comunidad local se consiguió un decreto presidencial que creó una reserva para la cuenca del río.',
        'Las amenazas no se fueron: los proyectos inmobiliarios e hidroeléctricos siguen apareciendo. En 2017 se creó la Organización Valle Cochamó para impulsar un turismo responsable y un área protegida, y en Estados Unidos se formó Friends of Cochamó para apoyar desde afuera.',
      ],
    },
    {
      titulo: 'Lo que hay en juego',
      lista: [
        'Cerca de 8.000 hectáreas de alerzales, con ejemplares de unos mil años.',
        'La ranita de Darwin, un anfibio amenazado que incuba sus crías en el saco vocal del macho.',
        'Vizcachas patagónicas y pumas, que necesitan territorios extensos y conectados.',
        'Las paredes de granito del Batolito Norpatagónico, de hasta mil metros.',
      ],
    },
    {
      titulo: '¿Queremos ser Yosemite, o queremos ser Cochamó?',
      parrafos: [
        'La comparación con Yosemite se usa como elogio, y se entiende: paredes de granito, bosque, ríos. Pero Yosemite tiene un camino, y ese camino cambió lo que el lugar es.',
        'En el valle del Manso, vecino por el sur, ya se construyó uno. Quien lo hizo quiere construir otro aquí. Un camino vehicular en Cochamó terminaría con los pilcheros, con la cultura arriera y con el ecosistema que hoy solo se alcanza a pie o a caballo.',
        'El valor del valle no está en parecerse a otro lugar. Está en todo lo que lo hace distinto.',
      ],
    },
    {
      titulo: 'Quienes viven del sendero',
      parrafos: [
        'Hay familias de arrieros que llevan generaciones recorriendo esta senda con sus caballos: lo hicieron los abuelos, lo hacen los hijos y lo siguen haciendo los nietos. No es una atracción turística, es un oficio.',
        'Ese oficio depende de que el sendero siga siendo un sendero. Es lo que está detrás de cada decisión que la corporación toma sobre el acceso al valle.',
      ],
    },
  ],
  cierre: {
    titulo: 'Ayúdanos a conservar el valle',
    texto:
      'Las donaciones sostienen los senderos, el Centro de Visitantes y los programas de conservación de largo plazo. No hay presupuesto público detrás de nada de eso.',
    cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
  },
}

export const obras: (PaginaLarga & { slug: string })[] = [
  {
    slug: 'centro-de-visitantes',
    eyebrow: 'Lo que hemos logrado',
    titulo: 'Centro de Visitantes',
    bajada: 'El punto donde empieza todo lo demás',
    foto: {
      imagen: 'logroCentroVisitantes',
      alt: 'Visitantes registrándose en el Centro de Visitantes del valle',
    },
    intro: [
      'El Centro de Visitantes funciona desde 2017, operado por la organización. Nació como respuesta a un turismo que crecía sin regulación y que empezaba a dejar marcas: basura acumulada, senderos erosionados, daño a la flora y la fauna, accidentes, aguas contaminadas y riesgo de incendios.',
      'Hoy es donde se registra todo el mundo antes de subir, donde se resuelven dudas y donde el valle sabe cuánta gente tiene dentro.',
    ],
    cifras: [
      { valor: '+12.000', texto: 'visitantes atendidos cada temporada' },
      { valor: 'Dic — Mar', texto: 'los meses que está abierto hoy' },
      { valor: '2017', texto: 'el año en que empezó a funcionar' },
    ],
    bloques: [
      {
        titulo: 'Por qué queremos abrirlo todo el año',
        parrafos: [
          'Cuatro meses de operación obligan a concentrar en una temporada un trabajo que el valle necesita durante todo el año. Mantenerlo abierto permitiría:',
        ],
        lista: [
          'Proteger el patrimonio natural y sus ecosistemas de forma continua.',
          'Orientar e informar a quien llega, en cualquier época.',
          'Monitorear el valle sin interrupciones, con apoyo a la investigación y a un catastro de flora y fauna.',
          'Hacer educación ambiental más allá del verano.',
        ],
      },
      {
        titulo: 'Las mejoras con Mammut y Andes Gear',
        parrafos: [
          'Desde 2018, el apoyo de Mammut y Andes Gear permitió remodelar el contenedor y equiparlo para que el trabajo deje de depender de la improvisación.',
          'La comunicación con voluntarios, campings, Carabineros y arrieros cambió por completo, y con ella la velocidad con que se atiende una emergencia.',
        ],
        lista: [
          'Una radio base y tres radios portátiles nuevas.',
          'Cuatro computadores para el registro digital de visitantes.',
          'Paneles solares y un banco de baterías.',
        ],
      },
      {
        titulo: 'Lo que resuelve en el día a día',
        lista: [
          'Auxiliar a quien se perdió o se accidentó en el sendero.',
          'Avisar de basura abandonada para que alguien la baje.',
          'Informar cada día cuánta capacidad queda en los campings.',
          'Resolver dudas sobre reservas antes de que alguien suba sin cupo.',
        ],
      },
    ],
    cierre: {
      titulo: 'Ayúdanos a tenerlo abierto todo el año',
      texto:
        'Mantener el Centro de Visitantes es sueldo de equipo, equipamiento y logística. No hay presupuesto público detrás: lo sostienen las donaciones y las cuotas de socios.',
      cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'trabajos-de-senderos',
    eyebrow: 'Lo que hemos logrado',
    titulo: 'Trabajos de senderos',
    bajada: 'Pasarelas, puentes y drenajes sobre los tramos que el agua estaba deshaciendo',
    foto: {
      imagen: 'logroSenderos',
      alt: 'Pasarela de madera recién construida sobre un tramo húmedo del sendero',
    },
    intro: [
      'En 2019 la organización presentó a Mammut y Andes Gear un proyecto para restaurar el sendero a largo plazo, con tramos separados para quien camina y para los caballos. La primera fase, en la temporada 2019-2020, recibió $2.836.220.',
      'El trabajo cubrió los doce kilómetros hasta el río La Junta y algunos senderos de altura.',
    ],
    cifras: [
      { valor: '$2.836.220', texto: 'de la primera fase, temporada 2019-2020' },
      { valor: '12 km', texto: 'de sendero intervenido hasta el río La Junta' },
    ],
    bloques: [
      {
        titulo: 'Qué se hizo en la primera fase',
        lista: [
          'Arreglo de las pasadas en peor estado.',
          'Entablonados sobre varios tramos.',
          'Reparación del puente del río Piedras.',
          'Puentes nuevos en el río La Junta y en el valle de altura del Anfiteatro.',
        ],
      },
      {
        titulo: 'Por qué los puentes',
        parrafos: [
          'Un puente es de lo más caro que se construye aquí, y es también lo que evita más accidentes. Con lluvia los ríos crecen rápido y vadearlos pasa de incómodo a imposible.',
          'El río La Junta lo cruzan miles de visitantes cada temporada media y alta. Antes del puente, cada crecida era una espera o un riesgo.',
        ],
      },
      {
        titulo: 'Un sendero nuevo, abierto a mano',
        parrafos: [
          'Los encargados de los campings Vista Hermosa y La Junta dedicaron varios días a abrir un sendero que acorta el acceso desde el camping Los Manzanos hacia las cascadas y el valle del Anfiteatro.',
          'Con eso se descongestionó el cruce en carro del río Cochamó y se repartió el desgaste que antes caía entero sobre el sendero principal.',
        ],
      },
      {
        titulo: 'Un poco de historia',
        parrafos: [
          'El camino de Cochamó al Paso El León lo usaron los pueblos originarios durante miles de años. A fines del siglo XIX la compañía Chile-Argentina lo construyó para arrear ganado, con kilómetros de embaralados de alerce, e incluso instaló un telégrafo.',
          'En los últimos diez o quince años la erosión y la aparición de senderos alternativos castigaron sobre todo el tramo entre el puente El Morro y el río La Junta. Los arreglos fueron casi siempre informales. Hace una década la fundación Senderos de Chile hizo un rescate histórico del camino, con capacitaciones y un libro.',
        ],
      },
    ],
    cierre: {
      titulo: 'El sendero se mantiene todos los años',
      texto:
        'Un entablonado dura lo que dura, y cada invierno deja tramos nuevos por arreglar. La continuidad de este trabajo depende de donantes y de quienes se hacen socios.',
      cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'senaletica',
    eyebrow: 'Lo que hemos logrado',
    titulo: 'Señalética',
    bajada: 'Cien señales para que nadie tenga que adivinar por dónde va',
    foto: {
      imagen: 'logroSenaletica',
      alt: 'Cartel de bienvenida al Valle Cochamó junto al camino',
    },
    intro: [
      'Entre 2018 y 2019 se confeccionaron, transportaron e instalaron alrededor de cien señales en el valle. Es la mayor cantidad de señalética instalada en toda su historia.',
      'El aporte de Mammut y Andes Gear para las temporadas 2018-2019 a 2020-2021 fue de $3.247.231.',
    ],
    cifras: [
      { valor: '~100', texto: 'señales instaladas' },
      { valor: '6', texto: 'ubicaciones cubiertas' },
      { valor: '$3.247.231', texto: 'aportados por Mammut y Andes Gear' },
    ],
    bloques: [
      {
        titulo: 'Dónde está instalada',
        lista: [
          'El camino de acceso al valle.',
          'El Centro de Visitantes.',
          'El sendero Valle Cochamó hasta el río La Junta.',
          'Los campings que forman parte de la organización.',
          'El inicio de los senderos de altura.',
          'Los valles de altura.',
        ],
      },
      {
        titulo: 'Lo que todavía falta',
        parrafos: [
          'La señalética de ruta está resuelta, pero falta la que explica: señales informativas y educativas, de seguridad, e infografías que cuenten qué se está mirando.',
          'Es el tipo de trabajo que no se nota cuando está y se echa mucho de menos cuando falta. Conseguir fondos para esa segunda etapa sigue pendiente.',
        ],
      },
    ],
    cierre: {
      titulo: 'Falta la señalética que explica',
      texto:
        'Las señales informativas, educativas y de seguridad siguen esperando financiamiento. Cada aporte acerca esa segunda etapa.',
      cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'centro-de-reciclaje',
    eyebrow: 'Lo que hemos logrado',
    titulo: 'Centro de reciclaje',
    bajada: 'Lo que entra al valle tiene que volver a salir',
    foto: {
      imagen: 'logroReciclaje',
      alt: 'Visitante depositando una botella en los contenedores de reciclaje',
    },
    intro: [
      'El centro de reciclaje está instalado junto al Centro de Visitantes y funciona desde la temporada 2018-2019, con el aporte de Mammut y Andes Gear. Su implementación costó $2.766.498.',
      'Al inicio de cada temporada se hacen talleres de capacitación para el equipo del Centro de Visitantes, los campings y el resto de los actores del valle.',
    ],
    cifras: [
      { valor: '2018-2019', texto: 'la temporada en que empezó a funcionar' },
      { valor: '$2.766.498', texto: 'costó implementarlo' },
      { valor: '5', texto: 'materiales que se reciclan' },
    ],
    bloques: [
      {
        titulo: 'Qué se puede reciclar',
        lista: ['Tetra Pak', 'Latas de comida', 'Plástico', 'Vidrio', 'Aluminio'],
      },
      {
        titulo: 'Cómo funciona durante la temporada',
        parrafos: [
          'La mayoría de los campings del sector La Junta tiene su propio punto verde con infografía, así que separar no obliga a cargar con todo hasta la salida.',
          'Lo que sí se pide es bajar toda la basura seca, separada entre desechos comunes y reciclables. Al final de cada temporada la organización traslada el material reciclable a un centro de acopio en Puerto Varas.',
        ],
      },
    ],
    cierre: {
      titulo: 'Bajar la basura es parte del viaje',
      texto:
        'El traslado del material hasta Puerto Varas, los talleres y la mantención de los puntos verdes se sostienen con donaciones.',
      cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
  {
    slug: 'rutas-de-escalada',
    eyebrow: 'Lo que hemos logrado',
    titulo: 'Mantención de rutas de escalada',
    bajada: 'Más de cien anclajes revisados y repuestos en las paredes del valle',
    foto: {
      imagen: 'logroEscalada',
      alt: 'Escalador en una pared de granito del valle',
    },
    intro: [
      'En enero y febrero de 2020, un grupo de escaladores voluntarios trabajó en las paredes de escalada del valle revisando y reponiendo el material fijo.',
      'La iniciativa la organizó Thomas Gilmore, con el apoyo de la organización, nueve colaboradores más y quienes donaron los anclajes.',
    ],
    cifras: [
      { valor: '+100', texto: 'anclajes instalados' },
      { valor: 'Ene — Feb 2020', texto: 'duró la campaña' },
    ],
    bloques: [
      {
        titulo: 'Qué se hizo',
        lista: [
          'Instalación de más de cien anclajes, en su mayoría para reemplazar piezas en mal estado.',
          'Cambio de cuerdas, cordines y cintas tubulares gastadas.',
          'Material añadido en tramos expuestos y peligrosos, para prevenir accidentes.',
        ],
      },
      {
        titulo: 'Por qué hay que repetirlo',
        parrafos: [
          'El material fijo de una vía no dura para siempre: la lluvia, el hielo y el propio uso lo van degradando, y una chapa en mal estado no avisa antes de fallar.',
          'Revisar las paredes es un trabajo que hay que rehacer cada cierto tiempo, y depende de que haya escaladores dispuestos y material donado.',
        ],
      },
    ],
    cierre: {
      titulo: 'Las paredes se revisan de nuevo',
      texto:
        'El material fijo se degrada con cada temporada. Los anclajes, las cuerdas y el traslado del equipo que sube a cambiarlos salen de donaciones.',
      cta: { label: 'Quiero donar', href: `${PORTADA}/como-ayudar#donaciones` },
    },
  },
]
