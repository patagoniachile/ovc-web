import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { Alojamientos } from '@/components/sections/Alojamientos'
import { PorQueReservar } from '@/components/sections/PorQueReservar'
import { Sectores } from '@/components/sections/Sectores'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/reservar'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { reservarPagina } = getContenido(lang)
  return {
    title: reservarPagina.titulo,
    description: reservarPagina.bajada,
    alternates: {
      canonical: `/${lang}/reservar`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/reservar`])),
    },
  }
}

/**
 * Reservar: una página aparte, para una sola cosa.
 *
 * Vivía dentro de Cómo visitar, mezclada con cómo llegar, cuánto cuesta y las
 * normas. Pero reservar no es información para leer antes de venir: es lo que
 * alguien viene a hacer, y el botón de la cabecera lleva aquí. Mezclarla con
 * el resto obligaba a pasar por delante de seis secciones que no hacen falta
 * para esa decisión.
 *
 * Por eso están aquí los tres sectores y sus alojamientos: elegir dónde
 * dormir es parte de reservar, no de informarse.
 */
export default async function PaginaReservar({ params }: PageProps<'/[lang]/reservar'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { reservarPagina, sectoresDetalle } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={reservarPagina.eyebrow}
        titulo={reservarPagina.titulo}
        intro={[reservarPagina.bajada, reservarPagina.intro]}
      />

      <PorQueReservar lang={lang} />

      {/* Elegir sector y alojamiento: el paso siguiente, en la misma página */}
      <div id="dormir">
        <Sectores lang={lang} />
        {sectoresDetalle.map((sector) => (
          <Alojamientos key={sector.slug} lang={lang} sector={sector} id={`dormir-${sector.slug}`} destacarSector />
        ))}
      </div>
    </>
  )
}
