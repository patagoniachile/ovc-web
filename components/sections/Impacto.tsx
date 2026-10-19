import { Boton } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/** Logro principal + misión y visión. */
export function Impacto({ lang }: { lang: Lang }) {
  const { impacto, logroImportante, misionVision } = getContenido(lang)

  return (
    <section className="seccion seccion--oscura" id="impacto">
      <div className="contenedor">
        <SectionHeader className="revelar" claro {...impacto} />

        <div className="logro-destacado revelar">
          <p className="logro-destacado__cifra">
            {logroImportante.cifra}
            <small>{logroImportante.unidad}</small>
          </p>
          <div>
            <h3>{logroImportante.titulo}</h3>
            <p>{logroImportante.texto}</p>
            <Boton className="logro-destacado__cta" href={logroImportante.cta.href} variante="claro">
              {logroImportante.cta.label}
            </Boton>
          </div>
        </div>

        <div className="mision" id="mision">
          {[misionVision.mision, misionVision.vision].map((bloque) => (
            <article className="mision__bloque revelar" key={bloque.titulo}>
              <h3>{bloque.titulo}</h3>
              <p>{bloque.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
