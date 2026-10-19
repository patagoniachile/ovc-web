import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
import {
  ComoLlegar, CuantoCuesta, DiaVsSemana, HorariosYContacto,
} from '@/components/sections/ComoVisitarBloques'
import { Alojamientos } from '@/components/sections/Alojamientos'
import { Planifica } from '@/components/sections/Planifica'
import { PorQueReservar } from '@/components/sections/PorQueReservar'
import { Sectores } from '@/components/sections/Sectores'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

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

  const { comoLlegar, comoVisitarPagina, sectoresDetalle, textos } = getContenido(lang)
  const { aviso, claves } = comoVisitarPagina

  return (
    <>
      {aviso && (
        <p className="aviso-franja">
          <Icon name="alerta" />
          {aviso}
        </p>
      )}

      <section className={claves ? 'pagina-hero pagina-hero--con-claves' : 'pagina-hero'}>
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>

          <p className="eyebrow">{comoVisitarPagina.eyebrow}</p>
          <h1>{comoVisitarPagina.titulo}</h1>
          <p className="pagina-hero__intro">{comoVisitarPagina.intro}</p>

          {!claves && (
            <div className="pagina-hero__acciones">
              <Boton href="#reservar" variante="rio">
                {textos.reservarEstadia}
                <Icon name="flecha" />
              </Boton>
              <Boton href="#como-llegar" variante="borde">
                {comoLlegar.eyebrow}
              </Boton>
            </div>
          )}
        </div>
      </section>

      {/* Lo que más falla al planificar, antes que cualquier otra cosa */}
      {claves && (
        <section className="claves" aria-labelledby="claves-titulo">
          <div className="contenedor">
            <div className="claves__caja">
              <h2 className="claves__titulo" id="claves-titulo">
                <Icon name="alerta" />
                {claves.titulo}
              </h2>

              <ol className="claves__lista">
                {claves.items.map((item, i) => (
                  <li className="clave" key={item.titulo}>
                    <span className="clave__num" aria-hidden="true">{i + 1}</span>
                    <h3>{item.titulo}</h3>
                    <p>
                      <RichText>{item.texto}</RichText>
                    </p>
                  </li>
                ))}
              </ol>

              <div className="claves__acciones">
                <Boton href="#reservar" variante="solido">
                  {claves.ctaReservar}
                  <Icon name="flecha" />
                </Boton>
                <Boton href="#como-llegar" variante="borde">
                  {claves.ctaLlegar}
                </Boton>
              </div>
            </div>
          </div>
        </section>
      )}

      <ComoLlegar lang={lang} />
      <CuantoCuesta lang={lang} />
      <PorQueReservar lang={lang} />
      <DiaVsSemana lang={lang} />
      <Planifica lang={lang} />
      <HorariosYContacto lang={lang} />

      {/* Dónde dormir: los tres sectores y sus quince alojamientos */}
      <div id="dormir">
        <Sectores lang={lang} />
        {sectoresDetalle.map((sector) => (
          <Alojamientos key={sector.slug} lang={lang} sector={sector} id={`dormir-${sector.slug}`} destacarSector />
        ))}
      </div>
    </>
  )
}
