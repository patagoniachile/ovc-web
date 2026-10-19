import type { Foto, Hito } from './types'

export const introHistoria = {
  eyebrow: 'Nuestra historia',
  titulo: 'Quince años defendiendo un valle que nunca fue parque',
  bajada:
    'La historia de la conservación del Valle Cochamó se remonta a décadas de esfuerzos dispersos. Lo que empezó como la resistencia a un proyecto hidroeléctrico terminó convirtiéndose en una organización comunitaria que hoy ordena la visita, repara senderos y empuja la creación de un área protegida.',
  cita: 'Las decisiones de hoy determinan las consecuencias de mañana.',
  citaFuente: 'Lema del sistema de reservas del Valle Cochamó',
}

export const hitos: Hito[] = [
  {
    anio: '2009 — 2012',
    titulo: 'Nace Conservación Cochamó',
    texto:
      'Un grupo ciudadano se organiza para enfrentar un proyecto hidroeléctrico que pretendía explotar el río Cochamó y sus principales afluentes.',
  },
  {
    anio: 'Primer gobierno de Bachelet',
    titulo: 'Decreto de reserva para la cuenca',
    texto:
      'Junto a la comunidad local se consigue un decreto presidencial que crea una reserva para la cuenca del río Cochamó, orientada a la conservación y al desarrollo local.',
  },
  {
    anio: '2016',
    titulo: 'Se exige reserva para entrar a La Junta',
    texto:
      'Comienza a funcionar el sistema de reservas: una forma concreta de respetar la capacidad de carga del sendero y de los campings, y de reducir el impacto sobre el valle.',
    destacado: true,
  },
  {
    anio: '2017',
    titulo: 'Se funda la Organización Valle Cochamó',
    texto:
      'Personas de Conservación Cochamó, miembros de Puelo Patagonia, propietarios, operadores turísticos y aliados internacionales —entre ellos Friends of Cochamó— dan vida a la OVC.',
    destacado: true,
  },
  {
    anio: '2019',
    titulo: 'El directorio ampliado se reúne en Llanada Grande',
    texto:
      'Vecinos, arrieros, propietarios y operadores consolidan una gobernanza común para el destino.',
  },
  {
    anio: 'Julio 2022',
    titulo: 'Se presenta el Santuario de la Naturaleza',
    texto:
      'La propuesta de 11.432,8 hectáreas llega al Ministerio de Bienes Nacionales, sobre terrenos fiscales —la Hijuela 5— y predios privados que se sumaron de forma voluntaria.',
    destacado: true,
  },
  {
    anio: 'Octubre 2022',
    titulo: 'La comunidad toma la palabra',
    texto:
      'Conversatorio comunitario en Lago Vidal y Torrentoso, y participación en el 2.º Encuentro de Áreas Protegidas en Santiago.',
  },
  {
    anio: 'Hoy',
    titulo: 'El valle sigue sin protección oficial',
    texto:
      'Las amenazas no cesaron: proyectos inmobiliarios, centrales y, sobre todo, un camino que avanza cada vez más cerca. Seguimos trabajando para que el santuario sea declarado.',
  },
]

export const nosotros = {
  eyebrow: 'Quiénes somos',
  titulo: 'Vecinos, arrieros, propietarios y amigos del valle',
  bajada:
    'Somos una organización comunitaria y transversal, sin fines de lucro, que trabaja por el turismo responsable y el ordenamiento territorial del Valle Cochamó.',
  parrafos: [
    'El valle es un conjunto de tierras mayoritariamente privadas, unidas por un sendero que los arrieros andinos han usado durante generaciones. Hoy ese mismo sendero lo comparten más de 17.000 visitantes al año. Por eso operadores turísticos, propietarios y amantes del valle empezamos a trabajar en un **área protegida colaborativa**: un modelo donde quienes viven y trabajan aquí siguen siendo quienes lo administran.',
    'Nos mueve el cariño por este lugar y la preocupación por los efectos ambientales del aumento de visitantes. Resguardamos los estilos de vida tradicionales, la cultura y la identidad local, y buscamos que el patrimonio natural y cultural del valle llegue entero a las próximas generaciones.',
  ],
  foto: {
    src: '/img/equipo-ovc.jpg',
    alt: 'Integrantes del directorio ampliado de la Organización Valle Cochamó sentados en la escalera de una casa de madera',
    width: 1400,
    height: 803,
  } satisfies Foto,
  pieFoto:
    'Parte del directorio ampliado de la organización durante una jornada de trabajo en Llanada Grande, 2019.',
  directorio: [
    'Andrés Amengual',
    'Silvina Verdún',
    'Patricio Almonacid',
    'Aurelia Barrio',
    'Daniel Seeliger',
    'Rodrigo Condezza',
    'Tatiana Sandoval',
    'Paula Sanza',
    'Daniel Pastene',
    'Paty Almonacid',
  ],
}
