'use client'

import Image from 'next/image'
import Link from 'next/link'
import { logo, organizacion } from '@/content/site'

/**
 * Logo + nombre de la corporación, como en la marca original.
 *
 * Lleva a la portada; si ya estamos en ella, sube al borde superior real de la
 * página. Antes apuntaba a `#inicio`, que es el hero y empieza bajo la barra
 * superior: el salto dejaba la página 23px más abajo del tope y daba la
 * sensación de que el enlace no funcionaba.
 */
export function Marca({ className }: { className?: string }) {
  const irArriba = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') return // deja que Next navegue

    e.preventDefault()
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' })
    history.replaceState(null, '', window.location.pathname)
  }

  return (
    <Link
      className={['marca', className].filter(Boolean).join(' ')}
      href="/"
      onClick={irArriba}
      aria-label={`${organizacion.nombreCompleto} — Inicio`}
    >
      <Image className="marca__logo" src={logo.src} alt="" width={logo.width} height={logo.height} priority />
      <span className="marca__texto">
        <span className="marca__corporacion">{organizacion.corporacion}</span>
        <span className="marca__nombre">{organizacion.nombre}</span>
      </span>
    </Link>
  )
}
