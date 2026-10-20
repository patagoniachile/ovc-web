import { imagenes } from '../imagenes'
import type { SectorDetalle } from '../types'

export const sectoresDetalle: SectorDetalle[] = [
  {
    slug: 'inicio-sendero',
    nombre: 'Inicio Sendero',
    titular: 'Where the Cochamó River meets the sea',
    intro:
      'The starting point for La Junta, the waterslides and every other trek in the valley. The Visitor Centre is here, and this is where everyone signs in before heading up.',
    parrafos: [
      'The entrance to the Cochamó Valley sits where the Cochamó River flows into the sea, at the junction of the main road and the gravel track. From the bridge you get a view of the clear-water river, the imposing Cerro Arcoíris and the native forest that runs through the whole valley.',
      'You turn onto the gravel track and drive 6 kilometres to the end, where you find parking, campsites and the Cochamó Valley Visitor Centre.',
      'The Visitor Centre was created and is run by Organización Valle Cochamó since 2017, in response to the rise in unregulated tourism. Between December and March it receives more than 12,000 visitors: it informs, registers, monitors the valley and coordinates with the campsites, the muleteers and the police whenever someone is lost or injured.',
    ],
    foto: {
      ...imagenes.registroSendero,
      alt: 'Visitors signing in at the information panel at the start of the trail',
    },
    datosClave: [
      { etiqueta: 'From the town', valor: '10 km on a gravel road' },
      { etiqueta: 'Registration', valor: 'Mandatory, at the Visitor Centre' },
      { etiqueta: 'To La Junta', valor: '13 km on foot or on horseback' },
      { etiqueta: 'Parking', valor: 'At the end of the road' },
    ],
    avisos: [
      'Signing in on the way up (check-in) and on the way down (check-out) is for your safety: it is what makes it possible to look for you if you are injured or lost.',
    ],
    alojamientos: [
      {
        id: 'la-frontera',
        nombre: 'La Frontera Valle Cochamó: hostel, campsite and cabin',
        tipo: 'Hostel, campsite and cabin',
        descripcion:
          'On the bank of the Cochamó river, surrounded by native forest, 8 km from the village and 500 metres from the start of the trail. Three ways to stay in the same place: rooms with a Patagonian breakfast, camping pitches, and a small cabin in the forest where you bring your sleeping bag and they provide the firewood.',
        servicios: [
          'Rooms with private or shared bathroom',
          'Camping pitches',
          'Cabin with firewood included',
          'Hot shower',
          'River access',
          'Free parking',
          'Bike hire',
          'Spanish, English and Czech',
        ],
        contactos: [
          { tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' },
          { tipo: 'web', valor: 'lafronteravallecochamo.com', href: 'https://www.lafronteravallecochamo.com' },
          { tipo: 'instagram', valor: '@lafronteravallecochamo', href: 'https://www.instagram.com/lafronteravallecochamo/' },
        ],
        lat: -41.461345,
        lon: -72.226997,
      },
      {
        id: 'estacionamiento-los-pozones',
        nombre: 'Estacionamiento Los Pozones',
        tipo: 'Parking',
        descripcion:
          'For more than 16 years Los Pozones has welcomed visitors from all over the world. A good place to hear the stories of the first people who came to the valley.',
        servicios: ['Parking', 'Cochamó riverbank', 'Shop'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 9262 4283', href: 'tel:+56992624283' }],
        lat: -41.455869,
        lon: -72.219876,
      },
    ],
    arrieros: {
      titulo: 'Muleteers and pack horses',
      texto:
        'If you need horses to carry your gear, or would rather ride to La Junta, contact the muleteers’ association directly. Book your campsite first, then your transport, and the horses last: without accommodation booked in La Junta they cannot take you.',
      datos: [
        { etiqueta: 'Rate', valor: 'CLP 45,000 per day per horse (CLP 90,000 return)' },
        { etiqueta: 'Payment', valor: 'Cash, at the trailhead' },
        { etiqueta: 'Maximum load', valor: '60 kg per pack horse, split into two equal sacks' },
        { etiqueta: 'Riding', valor: 'Maximum 10 kg of extra luggage per person' },
        { etiqueta: 'Preparation', valor: 'Allow at least an hour to pack the load with the muleteer' },
      ],
      contacto: { tipo: 'email', valor: 'arrierosvallecochamo@gmail.com', href: 'mailto:arrierosvallecochamo@gmail.com' },
    },
  },

  {
    slug: 'la-junta',
    nombre: 'La Junta',
    titular: 'The heart of the valley, 13 km on foot',
    intro:
      'Where the Cochamó and La Junta rivers meet. Open meadows, granite walls and the base from which almost everything in the valley starts.',
    parrafos: [
      'The La Junta sector has wide meadows that open up a broad view of the Cochamó Valley. That is what has made it one of the hubs of adventure tourism in the Los Lagos Region: more than 16,000 people arrive each season to take in the granite walls rising above the old forests.',
      'From here you can walk more than 40 km of trails and climb more than 100 routes on the granite walls. You can also swim in clear water, rest on the stony riverbanks or simply lie down in the meadow and take in the scene.',
      'All around there are thousand-year-old alerce forests, huge coihues and mañíos, climbing plants, fungi and mosses, and animals such as the monito del monte and the puma. From this balcony you can also read the work of the last glaciation: glaciers carved rock formed millions of years ago, leaving these grey walls with flat valley floors.',
      'La Junta is a human landscape too: the Historic Cochamó Road runs through it, still connecting the Reloncaví estuary with the Argentine pampa. From the late nineteenth century settlers crossed the forests and opened up a well-travelled path, once for the cattle trade and today for tourism.',
    ],
    foto: {
      ...imagenes.campingLaJunta,
      alt: 'View from inside a tent towards the granite mountains of the La Junta sector',
    },
    datosClave: [
      { etiqueta: 'Distance', valor: '13 km from the trailhead' },
      { etiqueta: 'Access', valor: 'On foot or on horseback only' },
      { etiqueta: 'Entry with a booking', valor: '7:00 am to 3:00 pm (8:00 am to 2:00 pm in March and April)' },
      { etiqueta: 'Day trips', valor: '7:00 to 9:00 am · maximum 90 people' },
      { etiqueta: 'Trails', valor: 'More than 40 km' },
      { etiqueta: 'Climbing', valor: 'More than 100 routes' },
    ],
    avisos: [
      'The waterslides are nearby and extremely dangerous: most of the serious accidents in the valley happen there.',
      'There are no rescue teams and no emergency services. What you carry and what you know is all the safety you have.',
    ],
    alojamientos: [
      {
        id: 'camping-la-junta',
        nombre: 'Camping La Junta',
        tipo: 'Campsite',
        descripcion:
          'A meadow by the Cochamó River, ringed by granite mountains. A good base for excursions and well suited to families.',
        servicios: ['Two covered shelters with large tables', 'Water and washbasins', 'Showers', 'Ecological composting toilets'],
        contactos: [{ tipo: 'web', valor: 'cochamo.com/camping', href: 'https://cochamo.com/camping/' }],
        reserva: { label: 'Book at Camping La Junta', href: 'https://cochamo.com/reservar-camping/' },
        lat: -41.412074,
        lon: -72.12758,
      },
      {
        id: 'vista-hermosa',
        nombre: 'Camping Vista Hermosa',
        tipo: 'Campsite',
        descripcion:
          'Large pitches beside the Cochamó River, with views of the climbing peaks. Close to the high-country trails and the La Luna and La Cantina walls.',
        servicios: ['Large pitches', 'Views of the climbing peaks', 'Close to the high-country approaches'],
        contactos: [{ tipo: 'web', valor: 'vistahermosacochamo.cl', href: 'https://vistahermosacochamo.cl/' }],
        reserva: { label: 'Book at Vista Hermosa', href: 'https://vistahermosacochamo.cl/reservar' },
        lat: -41.412606,
        lon: -72.121787,
      },
      {
        id: 'playa-los-manzanos',
        nombre: 'Camping Playa Los Manzanos',
        tipo: 'Campsite',
        descripcion:
          'Large pitches and a big fire pit for cooking, with beaches along the Cochamó River. You get there by crossing the river on a cable cart.',
        servicios: ['Large fire pit for cooking', 'River beaches', 'Horseback rides', 'Home-baked bread and sopaipillas for sale'],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 3510 9737', href: 'tel:+56935109737' },
          { tipo: 'telefono', valor: '+56 9 5666 2469', href: 'tel:+56956662469' },
          { tipo: 'email', valor: 'campingplayalosmanzanos@gmail.com', href: 'mailto:campingplayalosmanzanos@gmail.com' },
          { tipo: 'facebook', valor: 'Camping Playa Los Manzanos', href: 'https://www.facebook.com/camping-playa-los-manzanos' },
        ],
        lat: -41.419148,
        lon: -72.14301,
      },
      {
        id: 'refugio-cochamo',
        nombre: 'Refugio Cochamó',
        tipo: 'Mountain lodge',
        descripcion:
          'In the heart of the valley, with views of the granite walls and the Valdivian forest. A good launching point for hikes, climbing and beach days.',
        servicios: [
          'Two private rooms',
          'Shared dormitory',
          'Shared bathrooms and hot showers',
          'Guest kitchen',
          'Dining room and covered veranda',
        ],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 8407 2559', href: 'tel:+56984072559' },
          { tipo: 'email', valor: 'reservas@southern-trips.com', href: 'mailto:reservas@southern-trips.com' },
          { tipo: 'email', valor: 'info@mahuidapatagonia.com', href: 'mailto:info@mahuidapatagonia.com' },
          { tipo: 'web', valor: 'cochamo.com/refugio-cochamo', href: 'https://www.cochamo.com/refugio-cochamo/' },
        ],
        nota:
          'It operates only through the guided services of Southern Trips and Mahuida Patagonia, which include accommodation, all meals, horses and guided walks.',
        lat: -41.412549,
        lon: -72.122871,
      },
    ],
  },

]
