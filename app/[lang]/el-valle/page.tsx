import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Amenazas } from '@/components/sections/Amenazas'
import { FloraFauna, QueHacer } from '@/components/sections/ElValle'
import { Mapa } from '@/components/sections/Mapa'
import { Santuario } from '@/components/sections/Santuario'
import { Boton } from '@/components/ui/Boton'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

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
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{elVallePagina.eyebrow}</p>
          <h1>{elVallePagina.titulo}</h1>
          <p className="pagina-hero__intro">{elVallePagina.bajada}</p>
          <div className="pagina-hero__acciones">
            <Boton href={`/${lang}/como-visitar`} variante="rio">
              {textos.verComoVisitar}
            </Boton>
          </div>
        </div>
      </section>

      <Mapa lang={lang} />
      <FloraFauna lang={lang} />
      <QueHacer lang={lang} />
      <Santuario lang={lang} />
      <Amenazas lang={lang} />
    </>
  )
}
