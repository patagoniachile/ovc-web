'use client'

import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function VolverArriba({ etiqueta }: { etiqueta: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', alScroll, { passive: true })
    alScroll()
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  return (
    <button
      type="button"
      className={visible ? 'arriba esta-visible' : 'arriba'}
      aria-label={etiqueta}
      onClick={() => {
        const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' })
      }}
    >
      <Icon name="arriba" />
    </button>
  )
}
