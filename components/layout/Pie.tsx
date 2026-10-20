import { Marca } from './Marca'
import { Icon } from '@/components/ui/Icon'
import { esExterno } from '@/components/ui/Boton'
import { externos, getContenido, type Lang } from '@/content'

export function Pie({ lang }: { lang: Lang }) {
  const { enlacesPie, organizacion } = getContenido(lang)

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__grid">
          <div>
            <Marca lang={lang} />
            <p className="pie__sobre">{organizacion.descripcion}</p>
            <div className="pie__redes">
              <a href={externos.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href={externos.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
            </div>
          </div>

          {enlacesPie.map((columna) => (
            <div key={columna.titulo}>
              <h2>{columna.titulo}</h2>
              <ul className="pie__enlaces">
                {columna.items.map((item) => (
                  <li key={item.label}>
                    {esExterno(item.href) ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pie__base">
          <p>
            © {new Date().getFullYear()} {organizacion.nombreCompleto} · {organizacion.ubicacion}
          </p>
          <p>
            <a href={externos.instagram} target="_blank" rel="noopener noreferrer">
              @org.vallecochamo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
