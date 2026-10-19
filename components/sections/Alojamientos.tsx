import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type IconName, type Lang, type SectorDetalle, type TipoContacto } from '@/content'

const ICONO_CONTACTO: Record<TipoContacto, IconName> = {
  telefono: 'reloj',
  whatsapp: 'gente',
  email: 'mail',
  web: 'pin',
  instagram: 'instagram',
  facebook: 'facebook',
}

/**
 * Dónde dormir en un sector.
 *
 * Esta es la información que antes obligaba a saltar al sitio de reservas y a
 * abrir una página por camping. La reserva sigue siendo del operador; los
 * datos para decidir están acá.
 */
export function Alojamientos({ lang, sector }: { lang: Lang; sector: SectorDetalle }) {
  const { textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="dormir">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          eyebrow={sector.nombre}
          titulo={textos.dondeDormir}
          bajada={textos.lugaresParaDormir(sector.alojamientos.length)}
        />

        <div className="alojamientos">
          {sector.alojamientos.map((lugar) => (
            <article className="alojamiento revelar" key={lugar.id}>
              <header className="alojamiento__cabecera">
                <h3>{lugar.nombre}</h3>
                <span className="alojamiento__tipo">{lugar.tipo}</span>
              </header>

              <p className="alojamiento__descripcion">{lugar.descripcion}</p>

              {lugar.nota && <p className="alojamiento__nota">{lugar.nota}</p>}

              {lugar.servicios.length > 0 && (
                <>
                  <h4 className="alojamiento__subtitulo">{textos.servicios}</h4>
                  <ul className="alojamiento__servicios">
                    {lugar.servicios.map((servicio) => (
                      <li key={servicio}>
                        <Icon name="check" />
                        {servicio}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="alojamiento__subtitulo">{textos.contacto}</h4>
              <ul className="alojamiento__contactos">
                {lugar.contactos.map((contacto) => (
                  <li key={contacto.href}>
                    <a
                      href={contacto.href}
                      {...(contacto.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <Icon name={ICONO_CONTACTO[contacto.tipo]} />
                      {contacto.valor}
                    </a>
                  </li>
                ))}
              </ul>

              {lugar.reserva && (
                <a
                  className="btn btn--rio btn--sm alojamiento__reserva"
                  href={lugar.reserva.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lugar.reserva.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
