import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import {
  ComoLlegar, CuantoCuesta, DiaVsSemana, HorariosYContacto,
} from '@/components/sections/ComoVisitarBloques'
import { Planifica } from '@/components/sections/Planifica'
import { PorQueReservar } from '@/components/sections/PorQueReservar'
import { Sectores } from '@/components/sections/Sectores'
import { esIdioma, externos, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/como-visitar'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}

  const { comoVisitarPagina } = getContenido(lang)
  return {
    title: comoVisitarPagina.titulo,
    description: comoVisitarPagina.bajada,
    alternates: {
      canonical: `/${lang}/como-visitar`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/como-visitar`])),
    },
  }
}

/**
 * Cómo visitar.
 *
 * La estructura acordada deja este grupo fuera de la portada, así que su
 * contenido vive en una página propia con un ancla por entrada del menú.
 */
export default async function PaginaComoVisitar({ params }: PageProps<'/[lang]/como-visitar'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { comoLlegar, comoVisitarPagina, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>

          <p className="eyebrow">{comoVisitarPagina.eyebrow}</p>
          <h1>{comoVisitarPagina.titulo}</h1>
          <p className="pagina-hero__intro">{comoVisitarPagina.intro}</p>

          <div className="pagina-hero__acciones">
            <Boton href={externos.reservas} variante="rio">
              {textos.reservarEstadia}
              <Icon name="flecha" />
            </Boton>
            <Boton href="#como-llegar" variante="borde">
              {comoLlegar.eyebrow}
            </Boton>
          </div>
        </div>
      </section>

      <ComoLlegar lang={lang} />
      <Sectores lang={lang} />
      <CuantoCuesta lang={lang} />
      <PorQueReservar lang={lang} />
      <DiaVsSemana lang={lang} />
      <Planifica lang={lang} />
      <HorariosYContacto lang={lang} />
    </>
  )
}
