import Image from 'next/image'
import { esExterno } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

export function Caminos({ lang }: { lang: Lang }) {
  const { caminos, caminosEncabezado } = getContenido(lang)

  return (
    <section className="seccion" id="caminos">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...caminosEncabezado} />

        <div className="caminos">
          {caminos.map((camino) => (
            <article className="camino revelar" key={camino.etiqueta}>
              <Image
                src={camino.foto.src}
                alt={camino.foto.alt}
                width={camino.foto.width}
                height={camino.foto.height}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <span className="camino__etiqueta">{camino.etiqueta}</span>
              <h3>{camino.titulo}</h3>
              <p>{camino.texto}</p>
              <div className="camino__lista">
                {camino.enlaces.map((enlace) => (
                  <a
                    key={enlace.label}
                    href={enlace.href}
                    {...(esExterno(enlace.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {enlace.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
