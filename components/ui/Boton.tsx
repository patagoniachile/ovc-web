import Link from 'next/link'
import type { ReactNode } from 'react'

type Variante = 'solido' | 'oro' | 'morado' | 'fuego' | 'claro' | 'fantasma' | 'borde'

const CLASE_VARIANTE: Record<Variante, string> = {
  solido: '',
  oro: 'btn--oro',
  morado: 'btn--morado',
  fuego: 'btn--fuego',
  claro: 'btn--claro',
  fantasma: 'btn--fantasma',
  borde: 'btn--borde',
}

export function esExterno(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function esAncla(href: string) {
  return href.startsWith('#')
}

/**
 * Elige la etiqueta correcta según el destino:
 * - externo → <a> con target _blank
 * - ancla de la misma página → <a> normal, que es lo que el navegador sabe
 *   resolver respetando scroll-margin-top; no hay cambio de ruta que justifique
 *   pasar por el router
 * - ruta interna → <Link> de Next
 */
function Envoltura({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (esExterno(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  if (esAncla(href)) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  )
}

export function Boton({
  href,
  children,
  variante = 'solido',
  pequeno = false,
  bloque = false,
  className,
}: {
  href: string
  children: ReactNode
  variante?: Variante
  pequeno?: boolean
  bloque?: boolean
  className?: string
}) {
  const clases = ['btn', CLASE_VARIANTE[variante], pequeno && 'btn--sm', bloque && 'btn--bloque', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Envoltura href={href} className={clases}>
      {children}
    </Envoltura>
  )
}

export function EnlaceFlecha({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Envoltura href={href} className={['enlace-flecha', className].filter(Boolean).join(' ')}>
      {children}
    </Envoltura>
  )
}
