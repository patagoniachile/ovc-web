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

/**
 * Portada. Cada sección es un componente independiente que lee su contenido de
 * `content/`, así que reordenarlas o reutilizarlas en otra página es mover una
 * línea de acá.
 */
export default function Portada() {
  return (
    <>
      <Hero />
      <Cifras />
      <Caminos />
      <Historia />
      <Nosotros />
      <Sectores />
      <Mapa />
      <Planifica />
      <PorQueReservar />
      <Santuario />
      <Amenazas />
      <Proyectos />
      <Colaborar />
      <Aliados />
    </>
  )
}
