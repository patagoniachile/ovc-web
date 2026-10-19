import { externos } from '../externos'
import { imagenes } from '../imagenes'
import type { SectorDetalle } from '../types'

/**
 * Fichas completas de cada sector.
 *
 * El contenido viene del sitio de reservas, donde estaba repartido en una
 * página por alojamiento. Acá vive junto para que el visitante no tenga que
 * saltar de sitio en sitio: la reserva se hace fuera, la información no.
 */
export const sectoresDetalle: SectorDetalle[] = [
  {
    slug: 'inicio-sendero',
    nombre: 'Inicio Sendero',
    titular: 'Donde el río Cochamó se junta con el mar',
    intro:
      'El punto de partida hacia La Junta, los Toboganes, Lago Vidal y el resto de los trekkings del valle. Aquí está el Centro de Visitantes y aquí se registra todo el mundo antes de subir.',
    parrafos: [
      'El inicio del Valle Cochamó se ubica donde el río Cochamó desemboca en el mar, en la intersección de la carretera principal con el camino de ripio. Desde el puente tienes una vista al río con su agua cristalina, al imponente cerro Arcoíris y al bosque nativo que caracteriza a todo el valle.',
      'Entras por el camino de ripio y recorres 6 kilómetros hasta el final, donde encuentras estacionamientos, campings y el Centro de Visitantes del Valle Cochamó.',
      'El Centro de Visitantes lo creó y lo administra la Organización Valle Cochamó desde 2017, como respuesta al aumento del turismo no regulado. Entre diciembre y marzo recibe a más de 12.000 visitantes: orienta, registra, monitorea el valle y coordina con los campings, los arrieros y Carabineros cuando hay una persona perdida o accidentada.',
    ],
    foto: {
      ...imagenes.registroSendero,
      alt: 'Visitantes registrándose en el panel informativo del inicio del sendero',
    },
    datosClave: [
      { etiqueta: 'Desde el pueblo', valor: '10 km por camino de ripio' },
      { etiqueta: 'Registro', valor: 'Obligatorio, en el Centro de Visitantes' },
      { etiqueta: 'Hasta La Junta', valor: '13 km a pie o a caballo' },
      { etiqueta: 'Estacionamiento', valor: 'Al final del camino' },
    ],
    avisos: [
      'El registro al ingreso (check-in) y a la bajada (check-out) es por tu seguridad: es lo que permite buscarte si te accidentas o te extravías.',
    ],
    alojamientos: [
      {
        id: 'la-frontera-hostal',
        nombre: 'La Frontera Hostal',
        tipo: 'Hostal',
        descripcion:
          'A orillas del río Cochamó, rodeado de bosque nativo, a 8 km del pueblo y a 500 metros del inicio del sendero. Todas las habitaciones incluyen desayuno estilo patagónico. También hay pizzas, tartas y café de grano.',
        servicios: [
          'Habitaciones con baño privado o compartido',
          'Acceso al río',
          'Estacionamiento gratis',
          'Arriendo de bicicletas',
          'Parrillas',
          'Español, inglés y checo',
        ],
        contactos: [
          { tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' },
          { tipo: 'web', valor: 'lafronteravallecochamo.com', href: 'https://www.lafronteravallecochamo.com' },
          { tipo: 'instagram', valor: '@lafronteravallecochamo', href: 'https://www.instagram.com/lafronteravallecochamo/' },
        ],
      },
      {
        id: 'la-frontera-camping',
        nombre: 'La Frontera Eco Camping',
        tipo: 'Camping',
        descripcion:
          'Tranquilo y familiar, a orillas del río Cochamó y rodeado de bosque nativo. A 8 km del pueblo y a 500 metros antes del inicio del sendero.',
        servicios: ['Ducha con agua caliente', 'Baños', 'Estacionamiento', 'Acceso al río'],
        contactos: [
          { tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' },
          { tipo: 'web', valor: 'lafronteravallecochamo.com/ecocamping', href: 'https://www.lafronteravallecochamo.com/ecocamping' },
        ],
      },
      {
        id: 'cabanita-shambala',
        nombre: 'Cabañita Shambala',
        tipo: 'Cabaña',
        descripcion:
          'Una cabañita en medio del bosque, a orillas del río. Llevas tu saco de dormir y cocinas adentro con tu cocinilla; ellos ponen la leña para la estufa. Baños, duchas con agua caliente y agua potable se comparten con el camping.',
        servicios: ['Leña incluida', 'Ducha con agua caliente', 'Baños compartidos', 'Estacionamiento', 'Acceso al río'],
        contactos: [{ tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' }],
        nota: 'Forma parte del complejo La Frontera.',
      },
      {
        id: 'camping-el-laurel',
        nombre: 'Camping El Laurel',
        tipo: 'Camping',
        descripcion:
          'A 10 km del pueblo de Cochamó y a 100 metros antes del final del camino, donde empieza el sendero hacia La Junta.',
        servicios: ['Baño y ducha', 'Estacionamiento', 'Acceso al río'],
        contactos: [{ tipo: 'telefono', valor: '+56 65 238 0769', href: 'tel:+56652380769' }],
      },
      {
        id: 'camping-los-pozones',
        nombre: 'Camping Los Pozones',
        tipo: 'Camping',
        descripcion:
          'Por más de 16 años Los Pozones ha recibido a visitantes de todo el mundo. Un buen lugar para escuchar las historias de los primeros que llegaron al valle.',
        servicios: ['Estacionamiento', 'Costa del río Cochamó', 'Almacén'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 9262 4283', href: 'tel:+56992624283' }],
      },
    ],
    arrieros: {
      titulo: 'Arrieros y pilcheros',
      texto:
        'Si necesitas caballos para subir tus cosas, o quieres llegar a La Junta cabalgando, contacta directamente a la agrupación de arrieros. Primero reserva tu lugar en un camping, después tu transporte y por último los caballos: sin reserva de alojamiento en La Junta no te pueden llevar.',
      datos: [
        { etiqueta: 'Tarifa', valor: '$45.000 por día y por caballo ($90.000 ida y vuelta)' },
        { etiqueta: 'Pago', valor: 'En efectivo, al inicio del sendero' },
        { etiqueta: 'Carga máxima', valor: '60 kg por pilchero, repartidos en dos sacos iguales' },
        { etiqueta: 'Cabalgata', valor: 'Máximo 10 kg de equipaje extra por persona' },
        { etiqueta: 'Preparación', valor: 'Cuenta al menos una hora para armar la carga con el arriero' },
      ],
      contacto: { tipo: 'email', valor: 'arrierosvallecochamo@gmail.com', href: 'mailto:arrierosvallecochamo@gmail.com' },
    },
  },

  {
    slug: 'la-junta',
    nombre: 'La Junta',
    titular: 'El corazón del valle, a 13 km a pie',
    intro:
      'Donde confluyen los ríos Cochamó y La Junta. Praderas abiertas, paredes de granito y la base desde la que sale casi todo lo que se puede hacer en el valle.',
    parrafos: [
      'En el sector de La Junta hay extensas praderas que permiten una vista amplia del Valle Cochamó. Este atributo ha hecho del lugar uno de los epicentros del turismo de aventura en la Región de Los Lagos: más de 16.000 personas llegan cada temporada para admirar las paredes de granito que se levantan sobre los bosques antiguos.',
      'Desde aquí se recorren más de 40 km de senderos y se escalan más de 100 rutas en las paredes de granito. También puedes bañarte en aguas cristalinas, descansar en las orillas pedregosas o simplemente tenderte en la pradera a mirar el escenario.',
      'Alrededor hay bosques milenarios de alerce, enormes coihues y mañíos, enredaderas, hongos y musgos, y animales como el monito del monte o el puma. Desde este balcón también se ve el trabajo de la última glaciación: los glaciares cavaron la roca formada hace millones de años y dejaron estas paredes grises de fondo plano.',
      'La Junta es además un escenario humano: por allí pasa el Camino Histórico de Cochamó, que todavía conecta el estuario de Reloncaví con la pampa argentina. Desde fines del siglo XIX los colonos atravesaron los bosques y allanaron una senda muy transitada, antes por el negocio de la carne y hoy por el turismo.',
    ],
    foto: {
      ...imagenes.campingLaJunta,
      alt: 'Vista desde el interior de una carpa hacia las montañas de granito del sector La Junta',
    },
    datosClave: [
      { etiqueta: 'Distancia', valor: '13 km desde el inicio del sendero' },
      { etiqueta: 'Acceso', valor: 'Solo a pie o a caballo' },
      { etiqueta: 'Ingreso con reserva', valor: '7:00 a 15:00 h (8:00 a 14:00 en marzo y abril)' },
      { etiqueta: 'Ir por el día', valor: '7:00 a 9:00 h · aforo máximo 90 personas' },
      { etiqueta: 'Senderos', valor: 'Más de 40 km' },
      { etiqueta: 'Escalada', valor: 'Más de 100 rutas' },
    ],
    avisos: [
      'Los Toboganes están cerca y son extremadamente peligrosos: la mayoría de los accidentes graves del valle ocurren allí.',
      'No hay rescatistas ni servicios de emergencia. Lo que lleves y lo que sepas es toda la seguridad con la que cuentas.',
    ],
    alojamientos: [
      {
        id: 'camping-la-junta',
        nombre: 'Camping La Junta',
        tipo: 'Camping',
        descripcion:
          'En una espaciosa pampa a orillas del río Cochamó, rodeado de montañas de granito. Buena base para todas las excursiones e ideal para familias, con amplios sectores destinados a ellas y un fuerte énfasis en el cuidado del medio ambiente.',
        servicios: [
          'Dos quinchos techados con mesones',
          'Agua y lavabos',
          'Duchas',
          'Baños de compostaje ecológicos',
        ],
        contactos: [{ tipo: 'web', valor: 'cochamo.com/camping', href: 'https://cochamo.com/camping/' }],
        reserva: { label: 'Reservar en Camping La Junta', href: 'https://cochamo.com/reservar-camping/' },
      },
      {
        id: 'playa-los-manzanos',
        nombre: 'Camping Playa Los Manzanos',
        tipo: 'Camping',
        descripcion:
          'Amplios sitios para acampar y un gran fogón para cocinar, con playas en un entorno rodeado de montañas que bordean el río Cochamó. Se llega cruzando el río en carro, a 30 minutos de las cascadas del río La Junta.',
        servicios: ['Gran fogón para fogatas y cocinar', 'Playas en el río', 'Cabalgatas', 'Venta de pan amasado y sopaipillas'],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 3510 9737', href: 'tel:+56935109737' },
          { tipo: 'telefono', valor: '+56 9 5666 2469', href: 'tel:+56956662469' },
          { tipo: 'email', valor: 'campingplayalosmanzanos@gmail.com', href: 'mailto:campingplayalosmanzanos@gmail.com' },
        ],
      },
      {
        id: 'vista-hermosa',
        nombre: 'Camping Vista Hermosa',
        tipo: 'Camping',
        descripcion:
          'Amplios sitios al lado del río Cochamó, que se cruza en carro. A 10 minutos del tobogán del río La Junta, con vista a todos los cerros de escalada y cerca de las aproximaciones a los senderos de altura. A 15 minutos de las paredes La Luna y La Cantina.',
        servicios: ['Sitios amplios', 'Vista a los cerros de escalada', 'Cerca de las aproximaciones de altura'],
        contactos: [{ tipo: 'web', valor: 'vistahermosacochamo.cl', href: 'https://vistahermosacochamo.cl/' }],
        reserva: { label: 'Reservar en Vista Hermosa', href: 'https://vistahermosacochamo.cl/reservar' },
      },
      {
        id: 'refugio-cochamo',
        nombre: 'Refugio Cochamó',
        tipo: 'Refugio',
        descripcion:
          'En el corazón del valle, con vistas a las paredes de granito, las cascadas, los ríos y el bosque valdiviano. Un buen punto de partida para caminatas, escalada y días de playa, con biblioteca y juegos de mesa para los días de lluvia.',
        servicios: [
          'Dos habitaciones privadas',
          'Dormitorio compartido',
          'Baños compartidos y duchas con agua caliente',
          'Cocina para huéspedes',
          'Comedor y galería techada',
        ],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 8407 2559', href: 'tel:+56984072559' },
          { tipo: 'email', valor: 'reservas@southern-trips.com', href: 'mailto:reservas@southern-trips.com' },
          { tipo: 'email', valor: 'info@mahuidapatagonia.com', href: 'mailto:info@mahuidapatagonia.com' },
          { tipo: 'web', valor: 'cochamo.com/refugio-cochamo', href: 'https://www.cochamo.com/refugio-cochamo/' },
        ],
        nota:
          'Opera solo a través de los servicios guiados de Southern Trips y Mahuida Patagonia, que incluyen estadía, comidas, caballos y caminatas guiadas.',
      },
    ],
  },

  {
    slug: 'lago-vidal',
    nombre: 'Lago Vidal',
    titular: 'Cultura gaucha campesina a los pies de la cordillera',
    intro:
      'Una cuenca lacustre de origen glacial casi tocando la frontera con Argentina, con identidad propia y una excelente alternativa al muy visitado Valle Cochamó.',
    parrafos: [
      'El Lago Vidal Gormaz está en el sector andino de la Región de Los Lagos, dentro de lo que llaman la Patagonia Norte. Es una cuenca lacustre de origen glacial orientada de norte a sur, a la latitud 41°29′ S, a una altitud que varía entre los 600 y los 1.600 metros sobre el nivel del mar.',
      'El paisaje se pobló durante la colonización del sur de Chile a fines del siglo XIX. Su nombre viene del marino chileno Francisco Vidal Gormaz, que exploró el río Puelo en 1872 pero nunca llegó a conocer el lago. Quienes sí lo conocieron fueron los grupos tehuelches del norte, que atravesaban la cordillera hace 1.300 años y dejaron sus pinturas rupestres en distintos afloramientos rocosos.',
      'El Vidal Gormaz tiene identidad propia gracias a su aislamiento histórico de los centros poblados de la región. Sus habitantes tienen una cultura fuertemente marcada por el arreo de ganado y por la agricultura familiar campesina. Hoy lo visitan centenares de personas al año, y sus habitantes han ampliado sus actividades hacia el turismo.',
    ],
    foto: {
      ...imagenes.arrieros,
      alt: 'Arriero a caballo guiando una tropilla de mulas cargadas por el sendero del valle',
    },
    datosClave: [
      { etiqueta: 'Altitud', valor: 'Entre 600 y 1.600 m s. n. m.' },
      { etiqueta: 'Acceso', valor: 'A pie o a caballo' },
      { etiqueta: 'Rutas de entrada', valor: 'Por el valle, la frontera con Argentina o el este del Lago Tagua Tagua' },
      { etiqueta: 'Circuito', valor: 'La Herradura' },
    ],
    avisos: [
      'El aislamiento es parte del atractivo y también del riesgo: no hay servicios de emergencia y la cobertura es nula.',
    ],
    alojamientos: [
      {
        id: 'camping-la-tetera',
        nombre: 'Camping La Tetera',
        tipo: 'Camping y hospedaje',
        descripcion: 'Hospedaje familiar y camping, con comidas preparadas con productos de la huerta.',
        servicios: ['Hospedaje familiar', 'Camping', 'Baños', 'Comidas de la huerta', 'Pilcheros', 'Cabalgatas'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 6827 6371', href: 'tel:+56968276371' }],
      },
      {
        id: 'camping-lago-vidal',
        nombre: 'Camping Lago Vidal',
        tipo: 'Camping',
        descripcion: 'Camping a orillas del lago, con servicios de caballos y pesca.',
        servicios: ['Baños', 'Pilcheros', 'Cabalgatas', 'Pesca recreativa'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 7936 7642', href: 'tel:+56979367642' }],
      },
      {
        id: 'el-copihue-rancho-viejo',
        nombre: 'Cabañas El Copihue y Camping Rancho Viejo',
        tipo: 'Cabañas y camping',
        descripcion:
          'Cabañas equipadas con agua caliente y dormitorio, más hospedaje familiar con baño compartido. Comidas caseras con productos de la huerta, pan amasado y asado al palo con animales de su propia producción.',
        servicios: [
          'Cabañas con agua caliente',
          'Baño compartido',
          'Desayuno, almuerzo y cena',
          'Pesca recreativa',
          'Traslado en lancha con chalecos salvavidas',
        ],
        contactos: [{ tipo: 'telefono', valor: '+56 9 4048 0290', href: 'tel:+56940480290' }],
      },
      {
        id: 'rancho-los-3-potrillos',
        nombre: 'Camping Rancho Los 3 Potrillos',
        tipo: 'Camping',
        descripcion:
          'Camping con quincho compartido, comedor y dormitorio. Comidas caseras con productos de la huerta, pan amasado y asado al palo con animales de su producción.',
        servicios: ['Quincho compartido', 'Comedor y dormitorio', 'Baño', 'Pesca recreativa', 'Traslado en lancha'],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 5479 9902', href: 'tel:+56954799902' },
          { tipo: 'telefono', valor: '+56 9 7873 0382', href: 'tel:+56978730382' },
          { tipo: 'web', valor: 'los3potrillos.cl', href: 'https://www.los3potrillos.cl' },
        ],
      },
      {
        id: 'camping-los-morros',
        nombre: 'Camping Los Morros',
        tipo: 'Camping',
        descripcion: 'Camping con servicios de caballos y pesca recreativa.',
        servicios: ['Camping', 'Cabalgatas', 'Pilcheros', 'Pesca recreativa'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 4945 9601', href: 'tel:+56949459601' }],
      },
      {
        id: 'cabalgatas-barrancoso',
        nombre: 'Cabalgatas Barrancoso',
        tipo: 'Cabalgatas',
        descripcion: 'Cabalgatas y pilcheros en la ruta Paso El León — Lago Vidal — La Junta — Cochamó.',
        servicios: ['Cabalgatas', 'Pilcheros'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 7373 1950', href: 'tel:+56973731950' }],
      },
    ],
  },
]

export const enlaceReservasSector = externos.reservas
