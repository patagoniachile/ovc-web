import { externos } from '../externos'
import type {
  Actividad, Contacto, Costo, Encabezado, Especie, MedioDeTransporte, Modalidad, Rasgo,
} from '../types'

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
  },
  {
    icono: 'hoja',
    titulo: 'Bosque que nadie plantó',
    texto:
      'Cerca de 8.000 hectáreas de alerzales con ejemplares de unos mil años, junto a coihues, mañíos y un sotobosque de musgos y hongos en estado primigenio.',
  },
  {
    icono: 'caballo',
    titulo: 'El Camino Histórico',
    texto:
      'La senda que conecta el estuario de Reloncaví con la pampa argentina sigue viva: los arrieros la usan como la usaban sus bisabuelos, con pilcheros y caballos.',
  },
  {
    icono: 'agua',
    titulo: 'Agua que se puede beber',
    texto:
      'Ríos de deshielo, pozones turquesas y cascadas sobre roca pulida. El río Cochamó y sus humedales ribereños son parte de lo que el santuario busca proteger.',
  },
]

export const floraFauna: Encabezado = {
  eyebrow: 'Flora y fauna',
  titulo: 'Quiénes viven aquí',
  bajada:
    'El valle es bosque templado lluvioso valdiviano, uno de los ecosistemas de mayor valor de conservación del planeta. Esto es parte de lo que se protege.',
}

export const especies: Especie[] = [
  {
    nombre: 'Alerce',
    nombreCientifico: 'Fitzroya cupressoides',
    grupo: 'flora',
    texto: 'Conífera nativa de crecimiento lentísimo. En el valle hay ejemplares de cerca de mil años y unas 8.000 hectáreas de alerzal.',
  },
  {
    nombre: 'Coihue y mañío',
    grupo: 'flora',
    texto: 'Los árboles que dan estructura al bosque valdiviano, con enredaderas, musgos y hongos cubriendo cada superficie disponible.',
  },
  {
    nombre: 'Ranita de Darwin',
    nombreCientifico: 'Rhinoderma darwinii',
    grupo: 'fauna',
    texto: 'Diminuta y amenazada. El macho incuba los renacuajos dentro de su propio saco vocal, un comportamiento único en el mundo.',
  },
  {
    nombre: 'Monito del monte',
    nombreCientifico: 'Dromiciops gliroides',
    grupo: 'fauna',
    texto: 'Marsupial nocturno, único sobreviviente de un orden que se creía extinto. Dispersa las semillas del bosque que habita.',
  },
  {
    nombre: 'Pudú',
    nombreCientifico: 'Pumilio puda',
    grupo: 'fauna',
    texto: 'El ciervo más pequeño del mundo, del tamaño de un perro mediano. Vive escondido en el sotobosque denso.',
  },
  {
    nombre: 'Puma y cóndor',
    grupo: 'fauna',
    texto: 'El depredador tope y el carroñero de los Andes. Que sigan aquí es señal de que la cadena trófica está completa.',
  },
  {
    nombre: 'Batolito Norpatagónico',
    grupo: 'geologia',
    texto: 'La roca se formó hace millones de años y la última glaciación la cavó, dejando valles de fondo plano y paredes escarpadas.',
  },
]

export const queHacer: Encabezado = {
  eyebrow: 'Qué se puede hacer',
  titulo: 'Un valle que se recorre a pie',
  bajada: 'No hay camino ni vehículos. Todo lo que ves aquí se alcanza caminando o a caballo.',
}

export const actividades: Actividad[] = [
  { icono: 'sendero', titulo: 'Trekking', texto: 'Desde la caminata de 13 km hasta La Junta a los valles de altura, muy demandantes y sin rescate.', dato: 'Más de 40 km de senderos' },
  { icono: 'montana', titulo: 'Escalada', texto: 'Paredes de granito de hasta mil metros, con rutas abiertas y mantenidas por la comunidad escaladora.', dato: 'Más de 100 rutas' },
  { icono: 'caballo', titulo: 'Cabalgatas', texto: 'Subir a La Junta a caballo con los arrieros del valle, o contratar pilcheros para que suban tu equipaje.', dato: 'Con la agrupación de arrieros' },
  { icono: 'agua', titulo: 'Ríos y pozones', texto: 'Aguas cristalinas de deshielo, playas pedregosas y cascadas. Los Toboganes son la excepción: son peligrosos.', dato: 'Agua de deshielo' },
  { icono: 'hoja', titulo: 'Observar el bosque', texto: 'Alerzales milenarios, aves, anfibios y hongos. El valle es un laboratorio vivo de bosque valdiviano.', dato: 'Bosque primario' },
  { icono: 'carpa', titulo: 'Acampar', texto: 'Campings habilitados en los tres sectores, con reserva previa. Fuera de ellos no se acampa.', dato: '15 lugares para alojar' },
]

export const impacto: Encabezado = {
  eyebrow: 'Nuestro impacto',
  titulo: 'Lo que cambió desde que nos organizamos',
  bajada: 'Una organización comunitaria, sin fines de lucro, administrando un destino que no tiene dueño único ni presupuesto público.',
}

export const logroImportante = {
  cifra: '11.432,8',
  unidad: 'hectáreas',
  titulo: 'La propuesta de Santuario de la Naturaleza',
  texto:
    'En julio de 2022 llevamos al Ministerio de Bienes Nacionales la propuesta de proteger el valle, sobre terrenos fiscales y predios privados que se sumaron de forma voluntaria. Es el mayor avance en quince años de trabajo y sigue en trámite.',
  cta: { label: 'Conocer la propuesta', href: '#santuario' },
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

export const futuro: Encabezado = {
  eyebrow: 'El futuro',
  titulo: 'Lo que viene y lo que está en riesgo',
  bajada: 'El valle sigue sin protección oficial. Lo que hagamos en los próximos años decide cómo llega a las próximas generaciones.',
}

export const necesitamosTuAyuda = {
  titulo: 'Necesitamos tu ayuda',
  texto:
    'La mayor parte del valle son tierras privadas cuyos dueños permiten el acceso público. Mantener los senderos, el Centro de Visitantes y los programas de conservación cuesta trabajo y dinero, y no hay presupuesto público detrás.',
  cta: { label: 'Donar', href: externos.donar },
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
  medios: [
    {
      icono: 'camino',
      titulo: 'En auto',
      texto:
        'Conduce hacia Ensenada por la Ruta 225 y toma la bifurcación a Cochamó, Ruta V-69. Desde el pueblo de Cochamó hasta el inicio del sendero hacia La Junta son 10 km. Al final del camino hay estacionamiento.',
    },
    {
      icono: 'gente',
      titulo: 'En bus',
      texto:
        'Desde el terminal de Puerto Montt hay buses hacia Cochamó. Las oficinas están en el terminal y la venta es solo presencial. Los horarios cambian: consulta antes, sobre todo feriados, domingos y en verano.',
      contactos: [
        { tipo: 'telefono', valor: 'Buses Trans HAR · +56 9 9530 6867', href: 'tel:+56995306867' },
        { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 9123 0838', href: 'tel:+56991230838' },
        { tipo: 'telefono', valor: 'Buses Río Puelo · +56 9 7408 9199', href: 'tel:+56974089199' },
      ],
    },
    {
      icono: 'caballo',
      titulo: 'Desde el pueblo',
      texto:
        'Si no tienes auto, hay transporte local entre el pueblo de Cochamó y el inicio del sendero. Conviene coordinarlo junto con la reserva del alojamiento y de los caballos.',
    },
  ] satisfies MedioDeTransporte[],
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
      detalle: 'Lo obligatorio es la reserva y el registro, no un ticket. El valle no es un parque con entrada.',
    },
    {
      concepto: 'Alojamiento',
      valor: 'Según el operador',
      detalle: 'Cada camping, refugio y hospedaje fija su tarifa. Tienes el contacto directo de los 15 en las páginas de cada sector.',
    },
    {
      concepto: 'Pilchero (carga)',
      valor: '$45.000 por día y caballo',
      detalle: 'Ida y vuelta son $90.000. Máximo 60 kg repartidos en dos sacos iguales. Pago en efectivo al inicio del sendero.',
    },
    {
      concepto: 'Cabalgata',
      valor: 'Consultar con la agrupación',
      detalle: 'Máximo 10 kg de equipaje extra por persona. Avisa si pesas más de 85 kg para que elijan un caballo adecuado.',
    },
    {
      concepto: 'Donación a la corporación',
      valor: 'Voluntaria',
      detalle: 'El 50% va a programas de conservación de largo plazo y el 50% a la infraestructura para visitantes.',
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
      filas: [
        { etiqueta: 'Horario de ingreso', valor: '7:00 a 9:00 h, sin excepción' },
        { etiqueta: 'Distancia', valor: '26 km ida y vuelta' },
        { etiqueta: 'Duración', valor: '10 a 12 horas según tu ritmo' },
        { etiqueta: 'Aforo', valor: 'Máximo 90 personas por día' },
        { etiqueta: 'Dormir', valor: 'No incluye: bajas el mismo día' },
      ],
      paraQuien: 'Para quien tiene buen estado físico, parte temprano y acepta caminar casi todo el día.',
    },
    {
      titulo: 'Quedarse en La Junta',
      resumen: 'Reservar camping y usar el valle como base durante varios días.',
      filas: [
        { etiqueta: 'Horario de ingreso', valor: '7:00 a 15:00 h (8:00 a 14:00 en marzo y abril)' },
        { etiqueta: 'Distancia', valor: '13 km de subida, sin apuro' },
        { etiqueta: 'Acceso a', valor: 'Senderos de altura, escalada, pozones, Toboganes' },
        { etiqueta: 'Reserva', valor: 'Obligatoria, en uno de los campings' },
        { etiqueta: 'Pilcheros', valor: 'Puedes subir el equipaje a caballo' },
      ],
      paraQuien: 'Para quien quiere conocer el valle de verdad: los valles de altura y la escalada necesitan días, no horas.',
      destacada: true,
    },
  ] satisfies Modalidad[],
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
