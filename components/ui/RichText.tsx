import { Fragment } from 'react'

/**
 * Renderiza `**negrita**` dentro de un texto de contenido. No interpreta HTML:
 * solo parte la cadena, así que nada de lo que venga del contenido (o mañana
 * de un CMS) puede inyectar marcado.
 */
export function RichText({ children }: { children: string }) {
  const partes = children.split(/\*\*(.+?)\*\*/g)

  return (
    <>
      {partes.map((parte, i) =>
        i % 2 === 1 ? <strong key={i}>{parte}</strong> : <Fragment key={i}>{parte}</Fragment>,
      )}
    </>
  )
}
