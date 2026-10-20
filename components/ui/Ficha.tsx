'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { getContenido, type Lang } from '@/content'

/**
 * La ficha que se abre al pulsar una tarjeta.
 *
 * Usa `<dialog>` nativo en vez de montar un diálogo a mano: el navegador se
 * encarga del foco atrapado, de cerrar con Escape y de inertizar el resto de
 * la página, que es justo lo que se suele implementar mal.
 */
export function Ficha({
  lang,
  abierta,
  onCerrar,
  titulo,
  children,
}: {
  lang: Lang
  abierta: boolean
  onCerrar: () => void
  titulo: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const { textos } = getContenido(lang)

  useEffect(() => {
    const dialogo = ref.current
    if (!dialogo) return
    if (abierta && !dialogo.open) dialogo.showModal()
    if (!abierta && dialogo.open) dialogo.close()
  }, [abierta])

  return (
    <dialog
      ref={ref}
      className="detalle"
      aria-label={titulo}
      onClose={onCerrar}
      // Pulsar el fondo cierra: el clic cae en el propio <dialog>, no en su
      // contenido, porque el contenido vive dentro de .ficha__cuerpo.
      onClick={(e) => {
        if (e.target === ref.current) onCerrar()
      }}
    >
      <div className="detalle__cuerpo">
        <button type="button" className="detalle__cerrar" onClick={onCerrar} aria-label={textos.cerrar}>
          <span aria-hidden="true">×</span>
        </button>
        {children}
      </div>
    </dialog>
  )
}
