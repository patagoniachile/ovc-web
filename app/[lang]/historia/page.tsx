import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { Historia } from '@/components/sections/Historia'
import { MisionVision } from '@/components/sections/Impacto'
import { Nosotros } from '@/components/sections/Nosotros'
import { Proyectos } from '@/components/sections/Proyectos'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/historia'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { introHistoria } = getContenido(lang)
  return {
    title: introHistoria.titulo,
    description: introHistoria.bajada,
    alternates: {
      canonical: `/${lang}/historia`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/historia`])),
    },
  }
}

/**
 * Historia.
 *
 * Las entradas del menú "Historia" llevaban a anclas de la portada, así que
 * pinchar "Qué pasó" devolvía al inicio mientras "Quién administra" sí abría
 * su página. Ahora el grupo tiene página propia, como El Valle y Cómo visitar.
 */
export default async function PaginaHistoria({ params }: PageProps<'/[lang]/historia'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { introHistoria } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={introHistoria.eyebrow}
        titulo={introHistoria.titulo}
        intro={[introHistoria.bajada]}
      />

      <Historia lang={lang} />
      <Nosotros lang={lang} />
      <MisionVision lang={lang} />
      <Proyectos lang={lang} modo="logros" />
      <Proyectos lang={lang} modo="desafios" />
    </>
  )
}
