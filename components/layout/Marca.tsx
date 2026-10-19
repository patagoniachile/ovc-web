'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getContenido, imagenes, type Lang } from '@/content'

/**
 * Logo + nombre de la corporación, como en la marca original.
 *
 * Lleva a la portada del idioma actual; si ya estamos en ella, sube al borde
 * superior real de la página. Antes apuntaba a `#inicio`, que es el hero y
 * empieza bajo la barra superior: el salto dejaba la página 23px más abajo del
 * tope y daba la sensación de que el enlace no funcionaba.
 */
export function Marca({ lang, className }: { lang: Lang; className?: string }) {
  const { organizacion, textos } = getContenido(lang)
  const portada = `/${lang}`

  const irArriba = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname.replace(/\/$/, '') !== portada) return // deja que Next navegue

    e.preventDefault()
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' })
    history.replaceState(null, '', portada)
  }

  return (
    <Link
      className={['marca', className].filter(Boolean).join(' ')}
      href={portada}
      onClick={irArriba}
      aria-label={`${organizacion.nombreCompleto} — ${textos.inicio}`}
    >
      <Image className="marca__logo" src={imagenes.logo.src} alt="" width={imagenes.logo.width} height={imagenes.logo.height} priority />
      <span className="marca__texto">
        <span className="marca__corporacion">{organizacion.corporacion}</span>
        <span className="marca__nombre">{organizacion.nombre}</span>
      </span>
    </Link>
  )
}
