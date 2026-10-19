import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { Alojamientos } from '@/components/sections/Alojamientos'
import { esIdioma, getContenido, IDIOMAS, type Lang } from '@/content'

/** Las nueve combinaciones idioma × sector se generan en el build. */
export function generateStaticParams() {
  return IDIOMAS.flatMap((lang) =>
    getContenido(lang).sectoresDetalle.map((sector) => ({ lang, slug: sector.slug })),
  )
}

function buscar(lang: string, slug: string) {
  if (!esIdioma(lang)) return null
  const contenido = getContenido(lang)
  const sector = contenido.sectoresDetalle.find((s) => s.slug === slug)
  return sector ? { lang: lang as Lang, contenido, sector } : null
}

export async function generateMetadata({ params }: PageProps<'/[lang]/sectores/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  const datos = buscar(lang, slug)
  if (!datos) return {}

  const { sector } = datos
  return {
    title: `${sector.nombre} — ${sector.titular}`,
    description: sector.intro,
    alternates: {
      canonical: `/${datos.lang}/sectores/${sector.slug}`,
      languages: Object.fromEntries(IDIOMAS.map((c) => [c, `/${c}/sectores/${sector.slug}`])),
    },
    openGraph: {
      title: `${sector.nombre} · ${sector.titular}`,
      description: sector.intro,
      images: [{ url: sector.foto.src, width: sector.foto.width, height: sector.foto.height }],
    },
  }
}

export default async function PaginaSector({ params }: PageProps<'/[lang]/sectores/[slug]'>) {
  const { lang: idiomaCrudo, slug } = await params
  const datos = buscar(idiomaCrudo, slug)
  if (!datos) notFound()

  // `lang` sale ya validado de buscar(), no del parámetro crudo de la ruta
  const { contenido, sector, lang } = datos
  const { textos, sectoresDetalle } = contenido
  const otros = sectoresDetalle.filter((s) => s.slug !== sector.slug)

  return (
    <>
      {/* Portada del sector */}
      <section className="sector-hero">
        <div className="sector-hero__media">
          <Image
            src={sector.foto.src}
            alt={sector.foto.alt}
            width={sector.foto.width}
            height={sector.foto.height}
            priority
            sizes="100vw"
          />
        </div>
        <div className="sector-hero__velo" aria-hidden="true" />

        <div className="contenedor">
          <nav className="miga" aria-label={textos.navegacionPrincipal}>
            <Link href={`/${lang}`}>{textos.volverAPortada}</Link>
            <span aria-hidden="true">·</span>
            <Link href={`/${lang}#sectores`}>{textos.verTodosLosSectores}</Link>
          </nav>

          <h1>{sector.nombre}</h1>
          <p className="sector-hero__titular">{sector.titular}</p>
          <p className="sector-hero__intro">{sector.intro}</p>

          <div className="sector-hero__acciones">
            <Boton href={`/${lang}/como-visitar#dormir`} variante="claro">
              {textos.reservarEstadia}
              <Icon name="flecha" />
            </Boton>
            <Boton href={`/${lang}/el-valle#mapa`} variante="fantasma">
              {textos.verEnElMapa}
            </Boton>
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="seccion seccion--alt" aria-label={textos.datosClave}>
        <div className="contenedor">
          <dl className="datos-clave">
            {sector.datosClave.map((dato) => (
              <div className="datos-clave__item revelar" key={dato.etiqueta}>
                <dt>{dato.etiqueta}</dt>
                <dd>{dato.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Relato del sector */}
      <section className="seccion">
        <div className="contenedor">
          <div className="sector-texto revelar">
            <p className="eyebrow">{textos.sobreElSector}</p>
            {sector.parrafos.map((parrafo) => (
              <p key={parrafo.slice(0, 40)}>{parrafo}</p>
            ))}
          </div>

          {sector.avisos.length > 0 && (
            <ul className="avisos revelar" aria-label={textos.tenEnCuenta}>
              {sector.avisos.map((aviso) => (
                <li key={aviso}>
                  <Icon name="alerta" />
                  {aviso}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Alojamientos lang={lang} sector={sector} id="dormir" />

      {/* Arrieros, donde corresponde */}
      {sector.arrieros && (
        <section className="seccion seccion--oscura" id="arrieros">
          <div className="contenedor">
            <div className="arrieros">
              <div className="revelar">
                <p className="eyebrow eyebrow--claro">{sector.arrieros.titulo}</p>
                <h2>{sector.arrieros.titulo}</h2>
                <p className="lead">{sector.arrieros.texto}</p>
                <a className="btn btn--claro arrieros__cta" href={sector.arrieros.contacto.href}>
                  <Icon name="mail" />
                  {sector.arrieros.contacto.valor}
                </a>
              </div>

              <dl className="arrieros__datos revelar">
                {sector.arrieros.datos.map((dato) => (
                  <div key={dato.etiqueta}>
                    <dt>{dato.etiqueta}</dt>
                    <dd>{dato.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Los otros sectores */}
      <section className="seccion seccion--alt">
        <div className="contenedor">
          <div className="otros-sectores">
            {otros.map((otro) => (
              <Link className="otro-sector revelar" key={otro.slug} href={`/${lang}/sectores/${otro.slug}`}>
                <Image
                  src={otro.foto.src}
                  alt=""
                  width={otro.foto.width}
                  height={otro.foto.height}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
                <span className="otro-sector__cuerpo">
                  <strong>{otro.nombre}</strong>
                  <span>{otro.titular}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
