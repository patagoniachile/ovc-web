import type { Metadata, Viewport } from 'next'
import { Inter, Literata } from 'next/font/google'
import { notFound } from 'next/navigation'
import { BarraSuperior } from '@/components/layout/BarraSuperior'
import { Cabecera } from '@/components/layout/Cabecera'
import { Pie } from '@/components/layout/Pie'
import { IconSprite } from '@/components/ui/Icon'
import { RevealObserver } from '@/components/ui/RevealObserver'
import { VolverArriba } from '@/components/ui/VolverArriba'
import { esIdioma, externos, getContenido, IDIOMAS, LOCALE, type Lang } from '@/content'
import '../globals.css'

// next/font descarga y auto-hospeda las tipografías en el build: sin petición
// a Google en tiempo de ejecución y sin salto de layout al cargar.
// Literata y no Fraunces: la f, la g y la j de Fraunces tienen formas
// recortadas que se leen como errores de impresión en los títulos.
const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--fuente-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--fuente-sans',
  display: 'swap',
})

/** Las dos portadas se generan en el build; no hay render en caliente. */
export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export const viewport: Viewport = { themeColor: '#0c1f17' }

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}

  const { meta, organizacion } = getContenido(lang)

  return {
    metadataBase: new URL('https://vallecochamo.org'),
    title: { default: meta.titulo, template: `%s · ${organizacion.nombreCompleto}` },
    description: meta.descripcion,
    applicationName: organizacion.nombreCompleto,
    alternates: {
      canonical: `/${lang}`,
      // hreflang para que cada buscador sirva la versión correcta
      languages: Object.fromEntries(IDIOMAS.map((codigo) => [LOCALE[codigo], `/${codigo}`])),
    },
    openGraph: {
      type: 'website',
      locale: LOCALE[lang].replace('-', '_'),
      siteName: organizacion.nombreCompleto,
      title: meta.titulo,
      description: meta.descripcionOg,
      url: `/${lang}`,
      images: [{ url: '/img/hero-granito.jpg', width: 1800, height: 1199 }],
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/img/logo-ovc-iso.png', apple: '/img/logo-ovc-iso.png' },
  }
}

export default async function LayoutIdioma({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang: crudo } = await params
  if (!esIdioma(crudo)) notFound()
  const lang: Lang = crudo

  const { organizacion, textos } = getContenido(lang)

  const datosEstructurados = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: organizacion.nombreCompleto,
    alternateName: organizacion.alias,
    foundingDate: organizacion.fundacion,
    url: 'https://vallecochamo.org/',
    description: organizacion.descripcion,
    areaServed: `Valle Cochamó, ${organizacion.ubicacion}`,
    sameAs: [externos.instagram, externos.reservas],
  }

  return (
    <html lang={lang} className={`${literata.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Contenido propio y estático, no entrada de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />

        <IconSprite />

        <a href="#contenido" className="visually-hidden">
          {textos.saltarAlContenido}
        </a>

        <BarraSuperior lang={lang} />
        <Cabecera lang={lang} />

        <main id="contenido">{children}</main>

        <Pie lang={lang} />

        <VolverArriba etiqueta={textos.volverArriba} />
        <RevealObserver />
      </body>
    </html>
  )
}
