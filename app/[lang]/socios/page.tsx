import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FormularioSocio } from '@/components/sections/FormularioSocio'
import { SuscripcionPayku } from '@/components/sections/SuscripcionPayku'
import { esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/socios'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { sociosPagina } = getContenido(lang)
  return {
    title: sociosPagina.titulo,
    description: sociosPagina.bajada,
    alternates: {
      canonical: `/${lang}/socios`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/socios`])),
    },
  }
}

export default async function PaginaSocios({ params }: PageProps<'/[lang]/socios'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { sociosPagina, textos } = getContenido(lang)

  return (
    <>
      <section className="pagina-hero">
        <div className="contenedor">
          <nav className="miga miga--oscura" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
          </nav>
          <p className="eyebrow">{sociosPagina.eyebrow}</p>
          <h1>{sociosPagina.titulo}</h1>
          <p className="pagina-hero__intro">{sociosPagina.bajada}</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="lead revelar">{sociosPagina.intro}</p>

          <div className="socios__razones socios__razones--fila revelar">
            {sociosPagina.porQue.map((razon) => (
              <article key={razon.titulo}>
                <h2>{razon.titulo}</h2>
                <p>{razon.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* La suscripción con tarjeta: esto es lo que inscribe como socio */}
      <section className="seccion seccion--alt" id="suscribirme">
        <div className="contenedor">
          <h2 className="titulo--compacto revelar">{sociosPagina.tituloSuscripcion}</h2>
          <p className="lead revelar">{sociosPagina.introSuscripcion}</p>
          <SuscripcionPayku lang={lang} nota={sociosPagina.notaSuscripcion} montos={sociosPagina.montosSuscripcion} />
        </div>
      </section>

      {/* Alternativa para quien no quiere pagar con tarjeta ahora */}
      <section className="seccion" id="contacto">
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
