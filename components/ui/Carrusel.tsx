'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from '@/components/ui/Icon'

/**
 * Fila de tarjetas que avanza con flechas.
 *
 * Por debajo sigue siendo un scroll horizontal con snap —en el teléfono se
 * desliza con el dedo, y sin JS se puede recorrer igual—, pero la barra va
 * oculta y las flechas mueven de a una tarjeta. Si todo cabe, no aparecen.
 */
export function Carrusel({
  children,
  className,
  anterior,
  siguiente,
}: {
  children: ReactNode
  className?: string
  anterior: string
  siguiente: string
}) {
  const pista = useRef<HTMLDivElement>(null)
  const [enInicio, setEnInicio] = useState(true)
  const [enFinal, setEnFinal] = useState(false)

  useEffect(() => {
    const el = pista.current
    if (!el) return
    const medir = () => {
      setEnInicio(el.scrollLeft <= 2)
      setEnFinal(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
    }
    medir()
    el.addEventListener('scroll', medir, { passive: true })
    const observador = new ResizeObserver(medir)
    observador.observe(el)
    return () => {
      el.removeEventListener('scroll', medir)
      observador.disconnect()
    }
  }, [])

  const mover = (sentido: 1 | -1) => {
    const el = pista.current
    if (!el) return
    const [primera, segunda] = Array.from(el.children) as HTMLElement[]
    const paso = segunda ? segunda.offsetLeft - primera.offsetLeft : el.clientWidth
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: sentido * paso, behavior: sinMovimiento ? 'auto' : 'smooth' })
  }

  return (
    <div className="carrusel">
      <div ref={pista} className={['carrusel__pista', className].filter(Boolean).join(' ')}>
        {children}
      </div>

      {!(enInicio && enFinal) && (
        <div className="carrusel__controles">
          <button type="button" className="carrusel__flecha carrusel__flecha--atras" onClick={() => mover(-1)} disabled={enInicio} aria-label={anterior}>
            <Icon name="flecha" />
          </button>
          <button type="button" className="carrusel__flecha" onClick={() => mover(1)} disabled={enFinal} aria-label={siguiente}>
            <Icon name="flecha" />
          </button>
        </div>
      )}
    </div>
  )
}
