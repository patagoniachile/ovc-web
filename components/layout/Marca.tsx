import Image from 'next/image'
import Link from 'next/link'
import { logo, organizacion } from '@/content/site'

/** Logo + nombre de la corporación, como en la marca original. */
export function Marca({ className }: { className?: string }) {
  return (
    <Link className={['marca', className].filter(Boolean).join(' ')} href="#inicio" aria-label={`${organizacion.nombreCompleto} — Inicio`}>
      <Image className="marca__logo" src={logo.src} alt="" width={logo.width} height={logo.height} priority />
      <span className="marca__texto">
        <span className="marca__corporacion">{organizacion.corporacion}</span>
        <span className="marca__nombre">{organizacion.nombre}</span>
      </span>
    </Link>
  )
}
