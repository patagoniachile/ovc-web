import { notFound } from 'next/navigation'
import { Aliados } from '@/components/sections/Aliados'
import { Amenazas } from '@/components/sections/Amenazas'
import { Caminos } from '@/components/sections/Caminos'
import { Cifras } from '@/components/sections/Cifras'
import { Colaborar } from '@/components/sections/Colaborar'
import { Hero } from '@/components/sections/Hero'
import { Historia } from '@/components/sections/Historia'
import { Mapa } from '@/components/sections/Mapa'
import { Nosotros } from '@/components/sections/Nosotros'
import { Planifica } from '@/components/sections/Planifica'
import { PorQueReservar } from '@/components/sections/PorQueReservar'
import { Proyectos } from '@/components/sections/Proyectos'
import { Santuario } from '@/components/sections/Santuario'
import { Sectores } from '@/components/sections/Sectores'
import { esIdioma, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

/**
 * Portada. Cada sección es un componente independiente que lee su contenido
 * del idioma, así que reordenarlas o reutilizarlas en otra página es mover una
 * línea de acá.
 */
export default async function Portada({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  return (
    <>
      <Hero lang={lang} />
      <Cifras lang={lang} />
      <Caminos lang={lang} />
      <Historia lang={lang} />
      <Nosotros lang={lang} />
      <Sectores lang={lang} />
      <Mapa lang={lang} />
      <Planifica lang={lang} />
      <PorQueReservar lang={lang} />
      <Santuario lang={lang} />
      <Amenazas lang={lang} />
      <Proyectos lang={lang} />
      <Colaborar lang={lang} />
      <Aliados lang={lang} />
    </>
  )
}
