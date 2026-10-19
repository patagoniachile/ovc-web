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
 * Formulario de suscripción alojado por Payku para la corporación.
 *
 * Se embebe en nuestra página: el visitante no sale del sitio. Los datos de
 * tarjeta se escriben siempre en el dominio de Payku, nunca en el nuestro, que
 * es lo que nos mantiene fuera del alcance de PCI-DSS.
 */
export const payku = {
  formularioSuscripcion: 'https://suscripciones.payku.cl/vallecochamo',
  comision: '3%',
}

export const correoOrganizacion = cuentaBancaria.email
