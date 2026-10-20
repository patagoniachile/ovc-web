import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, imagenes, type Lang } from '@/content'

/** El logro principal, el santuario, en una tarjeta con su foto. */
export function Impacto({ lang }: { lang: Lang }) {
  const { impacto, logroImportante } = getContenido(lang)
  const foto = imagenes[logroImportante.imagen]

  return (
    <section className="seccion" id="impacto">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...impacto} />

        <div className="logro-destacado revelar">
          <div className="logro-destacado__foto">
            <Image src={foto.src} alt={logroImportante.alt} width={foto.width} height={foto.height} sizes="(max-width: 700px) 90vw, 290px" />
          </div>
          <div className="logro-destacado__cuerpo">
            <h3>{logroImportante.titulo}</h3>
            <p>{logroImportante.texto}</p>
            <Boton className="logro-destacado__cta" href={logroImportante.cta.href} variante="borde">
              {logroImportante.cta.label}
            </Boton>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Misión y visión. Vive en "quiénes somos", junto a quién administra. */
export function MisionVision({ lang }: { lang: Lang }) {
  const { misionVision } = getContenido(lang)

  return (
    <section className="seccion seccion--oscura" id="mision">
      <div className="contenedor">
        <div className="mision">
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
