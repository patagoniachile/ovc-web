import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

export function Amenazas({ lang }: { lang: Lang }) {
  const { amenazas, loQueEstaEnJuego } = getContenido(lang)

  return (
    <section className="seccion seccion--oscura" id="amenazas" aria-labelledby="titulo-amenazas">
      <div className="contenedor">
        <SectionHeader
          className="revelar seccion-cabecera--angosta"
          claro
          id="titulo-amenazas"
          eyebrow={loQueEstaEnJuego.eyebrow}
          titulo={loQueEstaEnJuego.titulo}
          bajada={loQueEstaEnJuego.bajada}
        />

        <div className="amenazas">
          {amenazas.map((amenaza) => (
            <article className="amenaza revelar" key={amenaza.titulo}>
              <div className="amenaza__icono">
                <Icon name={amenaza.icono} />
              </div>
              <h3>{amenaza.titulo}</h3>
              <p>{amenaza.texto}</p>
            </article>
          ))}
        </div>

        <p className="seccion-cierre seccion-cierre--claro revelar">{loQueEstaEnJuego.cierre}</p>

        <div className="amenazas__cta revelar">
          <Boton href={loQueEstaEnJuego.cta.href} variante="claro">
            {loQueEstaEnJuego.cta.label}
          </Boton>
          <Boton href={loQueEstaEnJuego.ctaProteger.href} variante="fantasma">
            {loQueEstaEnJuego.ctaProteger.label}
          </Boton>
        </div>
      </div>
    </section>
  )
}
