import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, payku, type Lang } from '@/content'

/**
 * Formulario de suscripción mensual alojado por Payku.
 *
 * Es el mismo que la corporación ya usaba en vallecochamo.org, y su botón dice
 * "Hazte Socio": este formulario *es* la inscripción de socios, no una vía de
 * donación más.
 *
 * Payku identifica a quien se suscribe por el nombre, apellido, correo y
 * teléfono que la persona escribe aquí dentro. Desde este sitio no se le envía
 * ningún dato: el iframe solo muestra su página.
 *
 * Sobre el sandbox: lleva `allow-same-origin` a propósito. Sin él, el
 * documento recibe un origen opaco y pierde sus cookies y su almacenamiento,
 * que es justo lo que necesita para mantener la sesión al pasar a la pantalla
 * de la tarjeta. Combinar `allow-scripts` con `allow-same-origin` solo sería
 * un riesgo si el marco fuera de nuestro propio origen; al ser payku.cl, sigue
 * aislado de este sitio por la política de mismo origen.
 */
export function SuscripcionPayku({ lang, nota }: { lang: Lang; nota: string }) {
  const { textos } = getContenido(lang)

  return (
    <>
      <p className="payku__nota revelar">
        <Icon name="check" />
        {nota}
      </p>

      <div className="payku revelar">
        <iframe
          src={payku.formularioSuscripcion}
          title="Payku"
          sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation-by-user-activation"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="payku__respaldo revelar">
        {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
      </p>
    </>
  )
}
