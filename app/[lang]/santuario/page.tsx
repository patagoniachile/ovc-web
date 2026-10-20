import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { PaginaTexto } from '@/components/sections/PaginaTexto'
import { esIdioma, getContenido, IDIOMAS, imagenes } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/santuario'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { santuarioPagina } = getContenido(lang)
  return {
    title: santuarioPagina.titulo,
    description: santuarioPagina.intro[0],
    alternates: {
      canonical: `/${lang}/santuario`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/santuario`])),
    },
  }
}

/**
 * No está en ningún menú a propósito: se llega desde los botones de El Valle.
 * Es una lectura larga, no una sección de otra página.
 */
export default async function PaginaSantuario({ params }: PageProps<'/[lang]/santuario'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { santuarioPagina } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={santuarioPagina.eyebrow}
        titulo={santuarioPagina.titulo}
        intro={[santuarioPagina.bajada]}
        foto={imagenes[santuarioPagina.foto.imagen]}
        alt={santuarioPagina.foto.alt}
      />
      <PaginaTexto pagina={santuarioPagina} />
    </>
  )
}
