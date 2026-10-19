import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { amenazas, loQueEstaEnJuego } from '@/content/conservacion'

export function Amenazas() {
  return (
    <section className="seccion seccion--oscura" aria-labelledby="titulo-amenazas">
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

        <div className="amenazas__cta revelar">
          <Boton href={loQueEstaEnJuego.cta.href} variante="claro">
            {loQueEstaEnJuego.cta.label}
          </Boton>
        </div>
      </div>
    </section>
  )
}
