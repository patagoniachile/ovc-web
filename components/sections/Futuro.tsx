import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/**
 * Cierre del bloque Futuro: por qué hace falta ayuda, a dónde va el dinero y
 * las dos vías para aportar.
 *
 * El destino de los aportes va antes que los botones a propósito: pedir plata
 * sin mostrar en qué se usa es lo que hace que una página de donaciones se
 * sienta hueca.
 */
export function Futuro({ lang }: { lang: Lang }) {
  const { destinoAportes, futuro, necesitamosTuAyuda, viasDeAporte } = getContenido(lang)

  return (
    <section className="seccion" id="ayudar">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...futuro} />

        <div className="ayuda revelar">
          <h3>{necesitamosTuAyuda.titulo}</h3>
          <p>{necesitamosTuAyuda.texto}</p>
        </div>

        {/* A dónde va el dinero, antes de pedirlo */}
        <div className="destino" id="destino">
          <div className="destino__intro revelar">
            <h3>{destinoAportes.titulo}</h3>
            <p>{destinoAportes.texto}</p>

            <div className="reparto reparto--claro">
              <div className="reparto__barra" role="img" aria-label={destinoAportes.reparto.etiquetaGrafico}>
                <span />
                <span />
              </div>
              <ul className="reparto__leyenda">
                <li>
                  <span className="reparto__punto reparto__punto--bosque" />
                  {destinoAportes.reparto.conservacion}
                </li>
                <li>
                  <span className="reparto__punto reparto__punto--oro" />
                  {destinoAportes.reparto.infraestructura}
                </li>
              </ul>
            </div>
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

        <div className="vias">
          {viasDeAporte.opciones.map((via) => (
            <article className={via.destacada ? 'via via--destacada revelar' : 'via revelar'} key={via.id}>
              <div className="via__cabecera">
                <span className="via__icono">
                  <Icon name={via.icono} />
                </span>
                <div>
                  <h4>{via.titulo}</h4>
                  <span className="via__detalle">{via.detalle}</span>
                </div>
              </div>
              <p>{via.texto}</p>
              <Boton href={via.cta.href} variante={via.destacada ? 'oro' : 'borde'} bloque>
                {via.cta.label}
              </Boton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
