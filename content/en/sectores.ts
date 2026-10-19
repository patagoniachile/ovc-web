import { imagenes } from '../imagenes'
import type { SectorDetalle } from '../types'

export const sectoresDetalle: SectorDetalle[] = [
  {
    slug: 'inicio-sendero',
    nombre: 'Inicio Sendero',
    titular: 'Where the Cochamó River meets the sea',
    intro:
      'The starting point for La Junta, the waterslides, Lago Vidal and every other trek in the valley. The Visitor Centre is here, and this is where everyone signs in before heading up.',
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
        id: 'la-frontera-hostal',
        nombre: 'La Frontera Hostal',
        tipo: 'Hostel',
        descripcion:
          'On the bank of the Cochamó River, surrounded by native forest, 8 km from the town and 500 metres from the start of the trail. Every room includes a Patagonian-style breakfast. There are also pizzas, tarts and freshly ground coffee.',
        servicios: [
          'Rooms with private or shared bathroom',
          'River access',
          'Free parking',
          'Bike hire',
          'Barbecues',
          'Spanish, English and Czech spoken',
        ],
        contactos: [
          { tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' },
          { tipo: 'web', valor: 'lafronteravallecochamo.com', href: 'https://en.lafronteravallecochamo.com/' },
          { tipo: 'instagram', valor: '@lafronteravallecochamo', href: 'https://www.instagram.com/lafronteravallecochamo/' },
        ],
      },
      {
        id: 'la-frontera-camping',
        nombre: 'La Frontera Eco Camping',
        tipo: 'Campsite',
        descripcion:
          'Quiet and family-friendly, on the bank of the Cochamó River and surrounded by native forest. 8 km from the town and 500 metres before the start of the trail.',
        servicios: ['Hot shower', 'Toilets', 'Parking', 'River access'],
        contactos: [
          { tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' },
          { tipo: 'web', valor: 'lafronteravallecochamo.com/ecocamping', href: 'https://en.lafronteravallecochamo.com/ecocamping' },
        ],
      },
      {
        id: 'cabanita-shambala',
        nombre: 'Cabañita Shambala',
        tipo: 'Cabin',
        descripcion:
          'A small cabin in the middle of the forest, by the river. You bring your sleeping bag and cook inside with your own stove; they provide firewood for the wood burner. Toilets, hot showers and drinking water are shared with the campsite.',
        servicios: ['Firewood included', 'Hot shower', 'Shared toilets', 'Parking', 'River access'],
        contactos: [{ tipo: 'whatsapp', valor: '+56 9 8554 9033', href: 'https://wa.me/56985549033' }],
        nota: 'Part of the La Frontera complex.',
      },
      {
        id: 'camping-el-laurel',
        nombre: 'Camping El Laurel',
        tipo: 'Campsite',
        descripcion:
          '10 km from the town of Cochamó and 100 metres before the end of the road, where the trail to La Junta begins.',
        servicios: ['Toilet and shower', 'Parking', 'River access'],
        contactos: [{ tipo: 'telefono', valor: '+56 65 238 0769', href: 'tel:+56652380769' }],
      },
      {
        id: 'camping-los-pozones',
        nombre: 'Camping Los Pozones',
        tipo: 'Campsite',
        descripcion:
          'For more than 16 years Los Pozones has welcomed visitors from all over the world. A good place to hear the stories of the first people who came to the valley.',
        servicios: ['Parking', 'Cochamó riverbank', 'Shop'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 9262 4283', href: 'tel:+56992624283' }],
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
          'On a wide meadow by the Cochamó River, surrounded by granite mountains. A good base for every excursion and well suited to families, with large family areas and a strong emphasis on looking after the environment.',
        servicios: ['Two covered shelters with large tables', 'Water and washbasins', 'Showers', 'Ecological composting toilets'],
        contactos: [{ tipo: 'web', valor: 'cochamo.com/camping', href: 'https://cochamo.com/camping/' }],
        reserva: { label: 'Book at Camping La Junta', href: 'https://cochamo.com/reservar-camping/' },
      },
      {
        id: 'playa-los-manzanos',
        nombre: 'Camping Playa Los Manzanos',
        tipo: 'Campsite',
        descripcion:
          'Large pitches and a big fire pit for cooking, with beaches in a setting ringed by mountains along the Cochamó River. You get there by crossing the river on a cable cart, 30 minutes from the La Junta river waterfalls.',
        servicios: ['Large fire pit for cooking', 'River beaches', 'Horseback rides', 'Home-baked bread and sopaipillas for sale'],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 3510 9737', href: 'tel:+56935109737' },
          { tipo: 'telefono', valor: '+56 9 5666 2469', href: 'tel:+56956662469' },
          { tipo: 'email', valor: 'campingplayalosmanzanos@gmail.com', href: 'mailto:campingplayalosmanzanos@gmail.com' },
          { tipo: 'facebook', valor: 'Camping Playa Los Manzanos', href: 'https://www.facebook.com/camping-playa-los-manzanos' },
        ],
      },
      {
        id: 'vista-hermosa',
        nombre: 'Camping Vista Hermosa',
        tipo: 'Campsite',
        descripcion:
          'Large pitches beside the Cochamó River, which you cross on a cable cart. Ten minutes from the La Junta river waterslide, with views of every climbing peak and close to the approaches for the high-country trails. Fifteen minutes from the La Luna and La Cantina walls.',
        servicios: ['Large pitches', 'Views of the climbing peaks', 'Close to the high-country approaches'],
        contactos: [{ tipo: 'web', valor: 'vistahermosacochamo.cl', href: 'https://vistahermosacochamo.cl/' }],
        reserva: { label: 'Book at Vista Hermosa', href: 'https://vistahermosacochamo.cl/tienda/camping-vista-hermosa/' },
      },
      {
        id: 'refugio-cochamo',
        nombre: 'Refugio Cochamó',
        tipo: 'Mountain lodge',
        descripcion:
          'In the heart of the valley, with views of the granite walls, the waterfalls, the rivers and the Valdivian forest. A good launching point for hikes, rock climbing and beach days, with a library and board games for rainy days.',
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
      },
    ],
  },

  {
    slug: 'lago-vidal',
    nombre: 'Lago Vidal',
    titular: 'Rural gaucho culture at the foot of the Andes',
    intro:
      'A glacial lake basin almost touching the Argentine border, with an identity of its own and an excellent alternative to the much-visited Cochamó Valley.',
    parrafos: [
      'Lago Vidal Gormaz lies in the Andean part of the Los Lagos Region, within what is known as Northern Patagonia. It is a glacial lake basin running north to south at latitude 41°29′ S, at an altitude ranging from 600 to 1,600 metres above sea level.',
      'The area was settled during the colonisation of southern Chile in the late nineteenth century. Its name comes from the Chilean naval officer Francisco Vidal Gormaz, who explored the Puelo River in 1872 but never saw the lake itself. Those who did know it were the northern Tehuelche groups, who crossed the Andes 1,300 years ago and left rock paintings on various outcrops.',
      'Vidal Gormaz has an identity of its own thanks to its historic isolation from the region’s population centres. Its inhabitants have a culture strongly shaped by cattle droving and smallholder farming. Today hundreds of people visit each year, and local families have extended their work into tourism.',
    ],
    foto: {
      ...imagenes.arrieros,
      alt: 'A muleteer on horseback leading a string of loaded mules along the valley trail',
    },
    datosClave: [
      { etiqueta: 'Altitude', valor: 'Between 600 and 1,600 m above sea level' },
      { etiqueta: 'Access', valor: 'On foot or on horseback' },
      { etiqueta: 'Ways in', valor: 'Via the valley, the Argentine border or the east side of Lago Tagua Tagua' },
      { etiqueta: 'Circuit', valor: 'La Herradura' },
    ],
    avisos: [
      'The isolation is part of the appeal and part of the risk: there are no emergency services and no phone coverage.',
    ],
    alojamientos: [
      {
        id: 'camping-la-tetera',
        nombre: 'Camping La Tetera',
        tipo: 'Campsite and lodging',
        descripcion: 'Family lodging and camping, with meals made from produce grown in their own garden.',
        servicios: ['Family lodging', 'Camping', 'Toilets', 'Meals from the garden', 'Pack horses', 'Horseback rides'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 6827 6371', href: 'tel:+56968276371' }],
      },
      {
        id: 'camping-lago-vidal',
        nombre: 'Camping Lago Vidal',
        tipo: 'Campsite',
        descripcion: 'Campsite on the lakeshore, with horse services and fishing.',
        servicios: ['Toilets', 'Pack horses', 'Horseback rides', 'Recreational fishing'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 7936 7642', href: 'tel:+56979367642' }],
      },
      {
        id: 'el-copihue-rancho-viejo',
        nombre: 'Cabañas El Copihue and Camping Rancho Viejo',
        tipo: 'Cabins and campsite',
        descripcion:
          'Cabins with hot water and a bedroom, plus family lodging with a shared bathroom. Home cooking with produce from the garden, home-baked bread and spit-roast meat from their own animals.',
        servicios: [
          'Cabins with hot water',
          'Shared bathroom',
          'Breakfast, lunch and dinner',
          'Recreational fishing',
          'Boat transfers with life jackets',
        ],
        contactos: [{ tipo: 'telefono', valor: '+56 9 4048 0290', href: 'tel:+56940480290' }],
      },
      {
        id: 'rancho-los-3-potrillos',
        nombre: 'Camping Rancho Los 3 Potrillos',
        tipo: 'Campsite',
        descripcion:
          'Campsite with a shared barbecue shelter, dining room and dormitory. Home cooking with produce from the garden, home-baked bread and spit-roast meat from their own animals.',
        servicios: ['Shared barbecue shelter', 'Dining room and dormitory', 'Bathroom', 'Recreational fishing', 'Boat transfers'],
        contactos: [
          { tipo: 'telefono', valor: '+56 9 5479 9902', href: 'tel:+56954799902' },
          { tipo: 'telefono', valor: '+56 9 7873 0382', href: 'tel:+56978730382' },
          { tipo: 'web', valor: 'los3potrillos.cl', href: 'https://www.los3potrillos.cl' },
        ],
      },
      {
        id: 'camping-los-morros',
        nombre: 'Camping Los Morros',
        tipo: 'Campsite',
        descripcion: 'Campsite with horse services and recreational fishing.',
        servicios: ['Camping', 'Horseback rides', 'Pack horses', 'Recreational fishing'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 4945 9601', href: 'tel:+56949459601' }],
      },
      {
        id: 'cabalgatas-barrancoso',
        nombre: 'Cabalgatas Barrancoso',
        tipo: 'Horseback rides',
        descripcion: 'Horseback rides and pack horses on the Paso El León — Lago Vidal — La Junta — Cochamó route.',
        servicios: ['Horseback rides', 'Pack horses'],
        contactos: [{ tipo: 'telefono', valor: '+56 9 7373 1950', href: 'tel:+56973731950' }],
      },
    ],
  },
]
