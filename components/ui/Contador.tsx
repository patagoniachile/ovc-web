'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Cuenta desde cero hasta `valor` la primera vez que entra en pantalla.
 *
 * El render inicial —el del servidor— ya muestra el valor final, así que si el
 * JS no carga o está desactivado, la cifra se lee igual.
 */
export function Contador({ valor, locale }: { valor: number; locale: string }) {
  const formato = useMemo(() => new Intl.NumberFormat(locale), [locale])
  const ref = useRef<HTMLSpanElement>(null)
  const [mostrado, setMostrado] = useState(valor)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinMovimiento || !('IntersectionObserver' in window)) return

    let cuadro = 0
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return
        observador.disconnect()

        const duracion = 1400
        let inicio: number | null = null
        // El primer cuadro deja el contador en 0 y desde ahí sube: no hace
        // falta reiniciarlo a mano antes de empezar.

        const paso = (ahora: number) => {
          if (inicio === null) inicio = ahora
          const avance = Math.min((ahora - inicio) / duracion, 1)
          const suave = 1 - Math.pow(1 - avance, 3) // easeOutCubic
          setMostrado(Math.round(valor * suave))
          if (avance < 1) cuadro = requestAnimationFrame(paso)
        }
        cuadro = requestAnimationFrame(paso)
      },
      { threshold: 0.5 },
    )

    observador.observe(nodo)
    return () => {
      observador.disconnect()
      cancelAnimationFrame(cuadro)
    }
  }, [valor])

  return <span ref={ref}>{formato.format(mostrado)}</span>
}
