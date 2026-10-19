'use client'

import { useEffect } from 'react'

/**
 * Un solo observador para toda la página: añade `es-visible` a cada `.revelar`
 * cuando entra en pantalla.
 *
 * Se hace así a propósito en vez de un <Reveal> por sección: de esta forma las
 * secciones siguen siendo Server Components y al navegador solo llega este
 * puñado de líneas de JS.
 */
export function RevealObserver() {
  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll<HTMLElement>('.revelar'))
    if (elementos.length === 0) return

    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (sinMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('es-visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada, i) => {
          if (!entrada.isIntersecting) return
          const el = entrada.target as HTMLElement
          // Escalonamos los elementos que entran juntos
          el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`
          el.classList.add('es-visible')
          observador.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])

  return null
}
