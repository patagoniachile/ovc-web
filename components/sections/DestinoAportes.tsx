import { Icon } from '@/components/ui/Icon'
import { getContenido, type Lang } from '@/content'

/**
 * A dónde va el dinero, dentro de la sección de donaciones.
 *
 * Vivía en la portada, antes de los botones de aportar. Está mejor aquí:
 * quien llega a Cómo ayudar ya decidió que quiere dar algo, y lo que necesita
 * saber es en qué se va a usar. Pedir plata sin mostrar en qué se gasta es lo
 * que hace que una página de donaciones se sienta hueca.
 */
export function DestinoAportes({ lang }: { lang: Lang }) {
  const { destinoAportes } = getContenido(lang)

  return (
    <div className="destino">
      <div className="destino__intro revelar">
        <h3>{destinoAportes.titulo}</h3>
        <p>{destinoAportes.texto}</p>

      </div>

      <ul className="destino__items">
        {destinoAportes.items.map((item) => (
          <li className="destino__item revelar" key={item.titulo}>
            <span className="destino__icono">
              <Icon name={item.icono} />
            </span>
            <div>
              <span className="destino__dato">{item.dato}</span>
              <h4>{item.titulo}</h4>
              <p>{item.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
