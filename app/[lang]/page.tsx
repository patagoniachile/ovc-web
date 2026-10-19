import { notFound } from 'next/navigation'
import { Aliados } from '@/components/sections/Aliados'
import { Amenazas } from '@/components/sections/Amenazas'
import { Boletin } from '@/components/sections/Boletin'
import { Colaborar } from '@/components/sections/Colaborar'
import { Cifras } from '@/components/sections/Cifras'
import { ElValle, FloraFauna, QueHacer } from '@/components/sections/ElValle'
import { Futuro } from '@/components/sections/Futuro'
import { Hero } from '@/components/sections/Hero'
import { Historia } from '@/components/sections/Historia'
import { Impacto } from '@/components/sections/Impacto'
import { Mapa } from '@/components/sections/Mapa'
import { Nosotros } from '@/components/sections/Nosotros'
import { Proyectos } from '@/components/sections/Proyectos'
import { Santuario } from '@/components/sections/Santuario'
import { esIdioma, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

/**
 * Portada, en los cinco bloques de la estructura acordada:
 * Hero · El Valle · Impacto · Futuro · Suscríbete.
 *
 * Cada bloque agrupa varias secciones; los comentarios marcan dónde empieza
 * cada uno para que el orden se lea de un vistazo.
 */
export default async function Portada({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  return (
    <>
      {/* 1 · Hero */}
      <Hero lang={lang} />

      {/* 2 · El Valle: por qué es especial, qué vive aquí, qué se hace y dónde queda */}
      <ElValle lang={lang} />
      <Cifras lang={lang} />
      <FloraFauna lang={lang} />
      <QueHacer lang={lang} />
      <Mapa lang={lang} />
      <Santuario lang={lang} />

      {/* 3 · Impacto: el logro mayor, misión y visión, quién administra, qué se hizo y qué pasó */}
      <Impacto lang={lang} />
      <Nosotros lang={lang} />
      <Proyectos lang={lang} modo="logros" />
      <Historia lang={lang} />

      {/* 4 · Futuro: qué queremos hacer, qué está en riesgo y cómo ayudar */}
      <Proyectos lang={lang} modo="desafios" />
      <Amenazas lang={lang} />
      <Futuro lang={lang} />
      <Colaborar lang={lang} />

      {/* 5 · Suscríbete */}
      <Boletin lang={lang} />

      <Aliados lang={lang} />
    </>
  )
}
