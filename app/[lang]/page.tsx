import { notFound } from 'next/navigation'
import { Boletin } from '@/components/sections/Boletin'
import { Cifras } from '@/components/sections/Cifras'
import { ElValle } from '@/components/sections/ElValle'
import { CierrePortada } from '@/components/sections/CierrePortada'
import { Hero } from '@/components/sections/Hero'
import { Impacto } from '@/components/sections/Impacto'
import { Proyectos } from '@/components/sections/Proyectos'
import { esIdioma, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

/**
 * Portada: cinco bloques y nada más.
 *
 * Es deliberadamente corta. Todo lo que no está aquí —flora y fauna, el mapa,
 * el santuario, las amenazas, quién administra, cómo visitar— vive en las
 * páginas que cuelgan del menú. La portada cuenta qué es el valle, qué se ha
 * logrado y qué falta; el resto se busca.
 */
export default async function Portada({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  return (
    <>
      {/* 1 · Hero */}
      <Hero lang={lang} />

      {/* 2 · El Valle, y 3 · las cifras */}
      <ElValle lang={lang} />
      <Cifras lang={lang} />

      {/* 4 · Impacto, con la propuesta de santuario */}
      <Impacto lang={lang} />

      {/* 5 · Lo hecho, y el paso a Cómo ayudar */}
      <Proyectos lang={lang} modo="logros" />
      <CierrePortada lang={lang} />

      {/* 6 · Boletín */}
      <Boletin lang={lang} />
    </>
  )
}
