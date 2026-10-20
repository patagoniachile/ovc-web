import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { PaginaTexto } from '@/components/sections/PaginaTexto'
import { esIdioma, getContenido, IDIOMAS, imagenes, type Lang } from '@/content'

/** La obra pedida, ya con el idioma validado. */
function buscar(lang: string, slug: string) {
  if (!esIdioma(lang)) return null
  const contenido = getContenido(lang as Lang)
  const obra = contenido.obras.find((o) => o.slug === slug)
  return obra ? { obra, lang: lang as Lang } : null
}

export function generateStaticParams() {
  return IDIOMAS.flatMap((lang) =>
    getContenido(lang).obras.map((obra) => ({ lang, slug: obra.slug })),
  )
}

export async function generateMetadata({ params }: PageProps<'/[lang]/obras/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  const datos = buscar(lang, slug)
  if (!datos) return {}
  return {
    title: datos.obra.titulo,
    description: datos.obra.bajada,
    alternates: {
      canonical: `/${lang}/obras/${slug}`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/obras/${slug}`])),
    },
  }
}

/**
 * La página de una obra del valle.
 *
 * No están en ningún menú: se llega desde las tarjetas de «obras que ya están
 * en el valle». Antes esas tarjetas salían del sitio hacia vallecochamo.org,
 * que es justo lo que este sitio vino a reemplazar.
 */
export default async function PaginaObra({ params }: PageProps<'/[lang]/obras/[slug]'>) {
  const { lang: idiomaCrudo, slug } = await params
  const datos = buscar(idiomaCrudo, slug)
  if (!datos) notFound()

  const { obra, lang } = datos

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={obra.eyebrow}
        titulo={obra.titulo}
        intro={[obra.bajada]}
        foto={imagenes[obra.foto.imagen]}
        alt={obra.foto.alt}
      />
      <PaginaTexto pagina={obra} />
    </>
  )
}
