import Link from 'next/link'
import type { ReactNode } from 'react'

type Variante = 'solido' | 'rio' | 'fuego' | 'claro' | 'fantasma' | 'borde'

const CLASE_VARIANTE: Record<Variante, string> = {
  solido: '',
  rio: 'btn--rio',
  fuego: 'btn--fuego',
  claro: 'btn--claro',
  fantasma: 'btn--fantasma',
  borde: 'btn--borde',
}

/**
 * Los enlaces externos abren en pestaña nueva; los internos (#ancla o /ruta)
 * pasan por <Link> de Next.
 */
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

  return esExterno(href) ? (
    <a className={clases} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={clases} href={href}>
      {children}
    </Link>
  )
}

export function EnlaceFlecha({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const clases = ['enlace-flecha', className].filter(Boolean).join(' ')

  return esExterno(href) ? (
    <a className={clases} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className={clases} href={href}>
      {children}
    </Link>
  )
}

export function esExterno(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}
