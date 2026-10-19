import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Donar } from '@/components/sections/Donar'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/donar'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { donarPagina } = getContenido(lang)
  return {
    title: donarPagina.titulo,
    description: donarPagina.bajada,
    alternates: {
      canonical: `/${lang}/donar`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/donar`])),
    },
  }
}

export default async function PaginaDonar({ params }: PageProps<'/[lang]/donar'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { donarPagina, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{donarPagina.eyebrow}</p>
          <h1>{donarPagina.titulo}</h1>
          <p className="pagina-hero__intro">{donarPagina.bajada}</p>
        </div>
      </section>

      <Donar lang={lang} />
    </>
  )
}
