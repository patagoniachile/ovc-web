import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Historia } from '@/components/sections/Historia'
import { Proyectos } from '@/components/sections/Proyectos'
import { Boton } from '@/components/ui/Boton'
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

  const { introHistoria, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{introHistoria.eyebrow}</p>
          <h1>{introHistoria.titulo}</h1>
          <p className="pagina-hero__intro">{introHistoria.bajada}</p>
          <div className="pagina-hero__acciones">
            <Boton href={`/${lang}/quienes-somos`} variante="borde">
              {textos.quienesSomos}
            </Boton>
          </div>
        </div>
      </section>

      <Historia lang={lang} />
      <Proyectos lang={lang} modo="logros" />
      <Proyectos lang={lang} modo="desafios" />
    </>
  )
}
