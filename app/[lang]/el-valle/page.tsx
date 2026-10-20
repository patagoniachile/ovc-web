import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { Amenazas } from '@/components/sections/Amenazas'
import { FloraFauna, QueHacer } from '@/components/sections/ElValle'
import { Mapa } from '@/components/sections/Mapa'
import { Santuario } from '@/components/sections/Santuario'
import { Boton } from '@/components/ui/Boton'
import { esIdioma, getContenido, IDIOMAS, imagenes } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/el-valle'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { elVallePagina } = getContenido(lang)
  return {
    title: elVallePagina.titulo,
    description: elVallePagina.bajada,
    alternates: {
      canonical: `/${lang}/el-valle`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/el-valle`])),
    },
  }
}

/** Dónde queda, flora y fauna, qué se puede hacer, el santuario y las amenazas. */
export default async function PaginaElValle({ params }: PageProps<'/[lang]/el-valle'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { elVallePagina, textos } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={elVallePagina.eyebrow}
        titulo={elVallePagina.titulo}
        intro={[elVallePagina.bajada, elVallePagina.cierre]}
        foto={imagenes.hero}
        alt={textos.fotoElValle}
      >
        <Boton href={elVallePagina.cta1.href} variante="oro">
          {elVallePagina.cta1.label}
        </Boton>
        <Boton href={elVallePagina.cta2.href} variante="fantasma">
          {elVallePagina.cta2.label}
        </Boton>
      </PaginaHero>

      {/* El orden es el del desplegable: dónde queda, quién vive aquí, qué
          lo protege, qué lo amenaza y qué se puede hacer. */}
      <Mapa lang={lang} />
      <FloraFauna lang={lang} />
      <Santuario lang={lang} />
      <Amenazas lang={lang} />
      <QueHacer lang={lang} />
    </>
  )
}
