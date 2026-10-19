import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Aliados } from '@/components/sections/Aliados'
import { MisionVision } from '@/components/sections/Impacto'
import { Nosotros } from '@/components/sections/Nosotros'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/quienes-somos'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { quienesSomosPagina } = getContenido(lang)
  return {
    title: quienesSomosPagina.titulo,
    description: quienesSomosPagina.bajada,
    alternates: {
      canonical: `/${lang}/quienes-somos`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/quienes-somos`])),
    },
  }
}

/** Quién administra el valle: la comunidad, el directorio y los aliados. */
export default async function PaginaQuienesSomos({ params }: PageProps<'/[lang]/quienes-somos'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { quienesSomosPagina, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{quienesSomosPagina.eyebrow}</p>
          <h1>{quienesSomosPagina.titulo}</h1>
          <p className="pagina-hero__intro">{quienesSomosPagina.bajada}</p>
        </div>
      </section>

      <Nosotros lang={lang} />
      <MisionVision lang={lang} />
      <Aliados lang={lang} />
    </>
  )
}
