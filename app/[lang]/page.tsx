import { notFound } from 'next/navigation'
import { Boletin } from '@/components/sections/Boletin'
import { Cifras } from '@/components/sections/Cifras'
import { ElValle } from '@/components/sections/ElValle'
import { Futuro } from '@/components/sections/Futuro'
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
      {/* 1 · Hero: qué es, dónde está, qué se hace */}
      <Hero lang={lang} />

      {/* 2 · El Valle: por qué es especial */}
      <ElValle lang={lang} />
      <Cifras lang={lang} />

      {/* 3 · Impacto: el logro mayor, misión y visión, lo hecho y lo que pasó */}
      <Impacto lang={lang} />

      {/* 4 · Futuro: lo que queremos hacer y cómo ayudar */}
      <Proyectos lang={lang} modo="desafios" />
      <Futuro lang={lang} />

      {/* 5 · Suscríbete */}
      <Boletin lang={lang} />
    </>
  )
}
