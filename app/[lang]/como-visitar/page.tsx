import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import {
  ComoLlegar, CuantoCuesta, DiaVsSemana, HorariosYContacto,
} from '@/components/sections/ComoVisitarBloques'
import { Planifica } from '@/components/sections/Planifica'
import { esIdioma, getContenido, IDIOMAS, imagenes } from '@/content'

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
      <PaginaHero
        lang={lang}
        eyebrow={comoVisitarPagina.eyebrow}
        titulo={comoVisitarPagina.titulo}
        intro={[comoVisitarPagina.intro]}
        foto={imagenes.registroSendero}
        alt={textos.fotoComoVisitar}
      >
          <Boton href={`/${lang}/reservar`} variante="oro">
            {textos.reservarEstadia}
            <Icon name="flecha" />
          </Boton>
          <Boton href="#como-llegar" variante="borde">
            {comoLlegar.eyebrow}
          </Boton>
      </PaginaHero>

      <ComoLlegar lang={lang} />
      <CuantoCuesta lang={lang} />
      <DiaVsSemana lang={lang} />
      <Planifica lang={lang} />
      <HorariosYContacto lang={lang} />

    </>
  )
}
