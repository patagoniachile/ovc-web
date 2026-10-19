import type { EnlacePayku } from './types'

/**
 * Datos de cobro de la corporación.
 *
 * Son públicos: están publicados hoy en vallecochamo.org/donar/. Van aparte de
 * los textos porque no se traducen y porque, si cambian, deben cambiar en un
 * solo lugar.
 */
export const cuentaBancaria = {
  titular: 'Agrupación de Turismo, Propietarios y Amigos del Valle Cochamó',
  rut: '65.151.211-5',
  banco: 'Banco de Chile',
  tipo: 'Cuenta Corriente',
  numero: '8240096202',
  swift: 'BCHICLRM',
  email: 'organizacionvallecochamo@gmail.com',
}

/**
 * Cobros con tarjeta a través de Payku.
 *
 * Cada plan dado de alta en el panel tiene su propia página pública, y es ahí
 * donde se escriben los datos de la tarjeta: nunca en este sitio. Eso es lo
 * que nos mantiene fuera del alcance de PCI-DSS, y la razón por la que el
 * enlace sale del sitio en vez de abrirse en un marco. Que la barra de
 * direcciones diga `payku.cl` es parte de la garantía, no un defecto.
 *
 * Así lo hace Puelo Patagonia, que usa la misma pasarela: el estilo y las
 * imágenes son suyos, y Payku solo aparece en el paso de la tarjeta.
 */
export const payku = {
  /** Formulario de monto libre, para quien no quiere ninguno de los planes. */
  formularioSuscripcion: 'https://suscripciones.payku.cl/vallecochamo',
  comision: '3%',
  /** La página pública de un plan del panel. */
  enlacePlan: ({ idplan, verif }: EnlacePayku) =>
    `https://app.payku.cl/suscripcion/index?idplan=${idplan}&verif=${verif}`,
}

/**
 * Los ocho planes de socio en el panel de Payku: cuatro niveles por dos
 * periodicidades. Van aquí, y no con los textos, porque los identificadores no
 * se traducen: deben coincidir en español y en inglés.
 *
 * Para rellenarlos: en el panel de Payku, Suscripciones → Planes, se crea cada
 * plan con su monto y su frecuencia (`Mensual` o `Anual`) y se copia su enlace
 * público, de la forma `…/suscripcion/index?idplan=1196&verif=5f11dae8`. Esos
 * dos valores son los que van acá.
 *
 * Las llaves son los `id` de los planes en `content/<idioma>/colaborar.ts`. Un
 * nivel sin enlace no rompe nada: su botón lleva al formulario de contacto
 * hasta que el plan exista.
 */
export const planesPayku: Record<string, Partial<Record<'mensual' | 'anual', EnlacePayku>>> = {
  chucao: {
    mensual: { idplan: '1798', verif: '5d80c95e' },
    anual: { idplan: '6528', verif: 'b34d20e8' },
  },
  alerce: {
    mensual: { idplan: '1799', verif: '89dcc1c1' },
    anual: { idplan: '6529', verif: '507f7ec2' },
  },
  trinidad: {
    mensual: { idplan: '1800', verif: 'd2d4dcac' },
    anual: { idplan: '6530', verif: 'c062f225' },
  },
  condor: {
    mensual: { idplan: '6527', verif: '65e9b75e' },
    anual: { idplan: '6531', verif: '616736b6' },
  },
}

export const correoOrganizacion = cuentaBancaria.email
