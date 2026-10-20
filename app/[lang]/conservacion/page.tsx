import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { PaginaTexto } from '@/components/sections/PaginaTexto'
import { esIdioma, getContenido, IDIOMAS, imagenes } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/conservacion'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { conservacionPagina } = getContenido(lang)
  return {
    title: conservacionPagina.titulo,
    description: conservacionPagina.intro[0],
    alternates: {
      canonical: `/${lang}/conservacion`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/conservacion`])),
    },
  }
}

/**
 * No está en ningún menú a propósito: se llega desde los botones de El Valle.
 * Es una lectura larga, no una sección de otra página.
 */
export default async function PaginaConservacion({ params }: PageProps<'/[lang]/conservacion'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { conservacionPagina } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={conservacionPagina.eyebrow}
        titulo={conservacionPagina.titulo}
        intro={[conservacionPagina.bajada]}
        foto={imagenes[conservacionPagina.foto.imagen]}
        alt={conservacionPagina.foto.alt}
      />
      <PaginaTexto pagina={conservacionPagina} />
    </>
  )
}
