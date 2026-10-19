import { Icon } from '@/components/ui/Icon'
import { externos, organizacion } from '@/content/site'

export function BarraSuperior() {
  return (
    <div className="barra-superior">
      <div className="contenedor">
        <p className="barra-superior__mensaje">
          <span className="barra-superior__punto" aria-hidden="true" />
          {organizacion.avisoTemporada}
        </p>

        <div className="barra-superior__acciones">
          <div className="redes-min">
            <a href={externos.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de la ${organizacion.nombreCompleto}`}>
              <Icon name="instagram" />
            </a>
            <a href={externos.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Reservas Valle Cochamó">
              <Icon name="facebook" />
            </a>
          </div>

          <p className="idioma">
            <span aria-current="true" lang="es">ES</span>
            <a href={externos.ingles} lang="en">EN</a>
          </p>
        </div>
      </div>
    </div>
  )
}
