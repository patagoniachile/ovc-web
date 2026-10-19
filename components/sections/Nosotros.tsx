import Image from 'next/image'
import { RichText } from '@/components/ui/RichText'
import { getContenido, type Lang } from '@/content'

export function Nosotros({ lang }: { lang: Lang }) {
  const { nosotros, textos } = getContenido(lang)

  return (
    <section className="seccion" id="nosotros">
      <div className="contenedor">
        <div className="nosotros">
          <div className="nosotros__texto revelar">
            <p className="eyebrow">{nosotros.eyebrow}</p>
            <h2>{nosotros.titulo}</h2>
            <p className="lead">{nosotros.bajada}</p>

            {nosotros.parrafos.map((parrafo) => (
              <p key={parrafo.slice(0, 40)}>
                <RichText>{parrafo}</RichText>
              </p>
            ))}

            <ul className="directorio" aria-label={textos.directorioAmpliado}>
              {nosotros.directorio.map((persona) => (
                <li key={persona}>{persona}</li>
              ))}
            </ul>
          </div>

          <figure className="nosotros__figura revelar">
            <Image
              src={nosotros.foto.src}
              alt={nosotros.foto.alt}
              width={nosotros.foto.width}
              height={nosotros.foto.height}
              sizes="(max-width: 860px) 100vw, 45vw"
            />
            <figcaption>{nosotros.pieFoto}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
