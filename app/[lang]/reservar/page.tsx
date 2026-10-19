import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Alojamientos } from '@/components/sections/Alojamientos'
import { PorQueReservar } from '@/components/sections/PorQueReservar'
import { Sectores } from '@/components/sections/Sectores'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { esIdioma, externos, getContenido, IDIOMAS } from '@/content'

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
 * Reservar.
 *
 * El botón "Reservar" salía del sitio de inmediato, saltándose todo lo que
 * ayuda a decidir. Aquí están los pasos, los tres sectores y los quince
 * alojamientos con su contacto directo; la reserva se cierra con cada
 * operador, que es quien la gestiona.
 */
export default async function PaginaReservar({ params }: PageProps<'/[lang]/reservar'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { reservarPagina, sectoresDetalle, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{reservarPagina.eyebrow}</p>
          <h1>{reservarPagina.titulo}</h1>
          <p className="pagina-hero__intro">{reservarPagina.bajada}</p>
          <p className="pagina-hero__intro">{reservarPagina.intro}</p>

          <div className="pagina-hero__acciones">
            <Boton href="#dormir" variante="rio">
              {reservarPagina.tituloDormir}
              <Icon name="flecha" />
            </Boton>
            <Boton href={externos.reservas} variante="borde">
              {textos.irAReservas}
            </Boton>
          </div>
        </div>
      </section>

      <PorQueReservar lang={lang} />

      <section className="seccion" id="sectores-reserva">
        <div className="contenedor">
          <h2 className="titulo--compacto revelar">{reservarPagina.tituloSectores}</h2>
        </div>
      </section>

      <Sectores lang={lang} />

      {/* Los quince alojamientos con su contacto, sin un clic de más */}
      <div id="dormir">
        {sectoresDetalle.map((sector) => (
          <Alojamientos key={sector.slug} lang={lang} sector={sector} />
        ))}
      </div>
    </>
  )
}
