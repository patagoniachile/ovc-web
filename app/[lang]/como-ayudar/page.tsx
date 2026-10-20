import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PaginaHero } from '@/components/layout/PaginaHero'
import { AporteConTarjeta } from '@/components/sections/AporteConTarjeta'
import { DestinoAportes } from '@/components/sections/DestinoAportes'
import { Donar } from '@/components/sections/Donar'
import { FormularioSocio } from '@/components/sections/FormularioSocio'
import { PlanesSocio } from '@/components/sections/PlanesSocio'
import { IDIOMAS, esIdioma, getContenido, imagenes } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/como-ayudar'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { comoAyudarPagina } = getContenido(lang)
  return {
    title: comoAyudarPagina.titulo,
    description: comoAyudarPagina.bajada,
    alternates: {
      canonical: `/${lang}/como-ayudar`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/como-ayudar`])),
    },
  }
}

/**
 * Cómo ayudar: las dos vías de aporte en una sola página.
 *
 * Cada grupo del menú es una página y cada entrada una sección suya. Antes
 * este grupo apuntaba a un ancla de la portada y sus dos entradas a páginas
 * distintas, que era justo lo confuso.
 */
export default async function PaginaComoAyudar({ params }: PageProps<'/[lang]/como-ayudar'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { comoAyudarPagina, donarPagina, sociosPagina, textos } = getContenido(lang)

  return (
    <>
      <PaginaHero
        lang={lang}
        eyebrow={comoAyudarPagina.eyebrow}
        titulo={comoAyudarPagina.titulo}
        intro={[comoAyudarPagina.bajada, comoAyudarPagina.intro]}
        foto={imagenes.equipo}
        alt={textos.fotoComoAyudar}
      />

      {/* Donaciones */}
      <section className="seccion seccion--alt" id="donaciones">
        <div className="contenedor">
          <p className="eyebrow revelar">{donarPagina.eyebrow}</p>
          <h2 className="revelar">{donarPagina.titulo}</h2>

          <DestinoAportes lang={lang} />
        </div>
      </section>
      <Donar lang={lang} />

      {/* Socios */}
      <section className="seccion seccion--oscura" id="socios">
        <div className="contenedor">
          <p className="eyebrow eyebrow--claro revelar">{sociosPagina.eyebrow}</p>
          <h2 className="revelar">{sociosPagina.titulo}</h2>
          <p className="lead revelar">{sociosPagina.intro}</p>
        </div>
      </section>

      <PlanesSocio lang={lang} destino="#socios" />

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo--compacto revelar">{sociosPagina.tituloSuscripcion}</h2>
          <p className="lead revelar">{sociosPagina.introSuscripcion}</p>
          <AporteConTarjeta lang={lang} />
        </div>
      </section>

      <section className="seccion seccion--alt">
        <div className="contenedor">
          <div className="socios">
            <div className="socios__texto revelar">
              <h2>{sociosPagina.tituloFormulario}</h2>
              <p className="lead">{sociosPagina.introFormulario}</p>
            </div>
            <div className="revelar">
              <FormularioSocio lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
