import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { BarraSuperior } from '@/components/layout/BarraSuperior'
import { Cabecera } from '@/components/layout/Cabecera'
import { Pie } from '@/components/layout/Pie'
import { IconSprite } from '@/components/ui/Icon'
import { RevealObserver } from '@/components/ui/RevealObserver'
import { VolverArriba } from '@/components/ui/VolverArriba'
import { externos, organizacion } from '@/content/site'
import './globals.css'

// next/font descarga y auto-hospeda las tipografías en el build: sin petición
// a Google en tiempo de ejecución y sin salto de layout al cargar.
const fraunces = Fraunces({
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

export const metadata: Metadata = {
  metadataBase: new URL('https://vallecochamo.org'),
  title: {
    default: `${organizacion.nombreCompleto} — Visita y protege el valle`,
    template: `%s · ${organizacion.nombreCompleto}`,
  },
  description:
    'La Corporación Valle Cochamó reúne a vecinos, propietarios, arrieros y operadores turísticos para conservar el Valle Cochamó y ordenar su visita. Reserva tu estadía, conoce el Santuario de la Naturaleza propuesto y colabora.',
  applicationName: organizacion.nombreCompleto,
  alternates: {
    canonical: '/',
    languages: { 'es-CL': '/', en: externos.ingles },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: organizacion.nombreCompleto,
    title: `${organizacion.nombreCompleto} — Visita y protege el valle`,
    description:
      'Reserva tu estadía, prepara tu viaje y súmate a conservar uno de los valles de granito y bosque nativo más valiosos de la Patagonia chilena.',
    images: [{ url: '/img/hero-granito.jpg', width: 1800, height: 1199 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/img/logo-ovc-iso.png', apple: '/img/logo-ovc-iso.png' },
}

export const viewport: Viewport = {
  themeColor: '#0c1f17',
}

const datosEstructurados = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: organizacion.nombreCompleto,
  alternateName: organizacion.alias,
  foundingDate: organizacion.fundacion,
  url: 'https://vallecochamo.org/',
  description:
    'Organización comunitaria que trabaja por el turismo responsable, el ordenamiento territorial y la conservación del Valle Cochamó, en la Región de Los Lagos, Chile.',
  areaServed: `Valle Cochamó, ${organizacion.ubicacion}`,
  sameAs: [externos.instagram, externos.reservas],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Contenido propio y estático, no entrada de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />

        <IconSprite />

        <a href="#contenido" className="visually-hidden">
          Saltar al contenido principal
        </a>

        <BarraSuperior />
        <Cabecera />

        <main id="contenido">{children}</main>

        <Pie />

        <VolverArriba />
        <RevealObserver />
      </body>
    </html>
  )
}
