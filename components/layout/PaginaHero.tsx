import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { getContenido, type Imagen, type Lang } from '@/content'

/**
 * El encabezado de las páginas de segundo nivel.
 *
 * Las cinco lo escribían por separado con el mismo marcado, así que cualquier
 * arreglo había que hacerlo cinco veces. Con foto se oscurece sobre ella; sin
 * foto queda la banda verde de siempre.
 */
export function PaginaHero({
  lang,
  eyebrow,
  titulo,
  intro,
  foto,
  alt,
  fotoPosicion,
  children,
}: {
  lang: Lang
  eyebrow: string
  titulo: string
  /** Uno o dos párrafos de entrada. */
  intro: (string | undefined)[]
  foto?: Imagen
  alt?: string
  /** Qué parte de la foto se conserva al recortar (object-position), si el centro corta caras. */
  fotoPosicion?: string
  /** Botones, si la página los lleva. */
  children?: ReactNode
}) {
  const { textos } = getContenido(lang)

  return (
    <section className={foto ? 'pagina-hero pagina-hero--foto' : 'pagina-hero'}>
      {foto && (
        <>
          <div className="pagina-hero__media">
            <Image
              src={foto.src}
              alt={alt ?? ''}
              width={foto.width}
              height={foto.height}
              priority
              sizes="100vw"
              style={fotoPosicion ? { objectPosition: fotoPosicion } : undefined}
            />
          </div>
          <div className="pagina-hero__velo" aria-hidden="true" />
        </>
      )}

      <div className="contenedor">
        <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
          <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
        </nav>

        <p className="eyebrow">{eyebrow}</p>
        <h1>{titulo}</h1>
        {intro.filter(Boolean).map((parrafo) => (
          <p className="pagina-hero__intro" key={parrafo}>
            {parrafo}
          </p>
        ))}

        {children && <div className="pagina-hero__acciones">{children}</div>}
      </div>
    </section>
  )
}
