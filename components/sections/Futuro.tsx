import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/**
 * Cierre del bloque Futuro: el llamado a ayudar y las dos vías para hacerlo.
 *
 * Las dos vías van aquí, en la portada, y no solo en sus páginas: quien llega
 * convencido no debería tener que buscar en el menú dónde aportar. Se
 * presentan separadas a propósito —mensual con tarjeta frente a transferencia
 * única— porque son decisiones distintas y antes se confundían.
 */
export function Futuro({ lang }: { lang: Lang }) {
  const { futuro, necesitamosTuAyuda, viasDeAporte } = getContenido(lang)

  return (
    <section className="seccion" id="ayudar">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...futuro} />

        <div className="ayuda revelar">
          <h3>{necesitamosTuAyuda.titulo}</h3>
          <p>{necesitamosTuAyuda.texto}</p>
        </div>

        <h3 className="vias__titulo revelar">{viasDeAporte.titulo}</h3>

        <div className="vias">
          {viasDeAporte.opciones.map((via) => (
            <article className={via.destacada ? 'via via--destacada revelar' : 'via revelar'} key={via.id}>
              <div className="via__icono">
                <Icon name={via.icono} />
              </div>
              <span className="via__detalle">{via.detalle}</span>
              <h4>{via.titulo}</h4>
              <p>{via.texto}</p>
              <Boton href={via.cta.href} variante={via.destacada ? 'rio' : 'borde'}>
                {via.cta.label}
              </Boton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
