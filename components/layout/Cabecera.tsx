'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Marca } from './Marca'
import { Boton, esExterno } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { externos, menu } from '@/content/site'
import type { Enlace } from '@/content/types'

export function Cabecera() {
  const [fija, setFija] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [grupoAbierto, setGrupoAbierto] = useState<string | null>(null)

  useEffect(() => {
    const alScroll = () => setFija(window.scrollY > 8)
    window.addEventListener('scroll', alScroll, { passive: true })
    alScroll()
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  // Bloquea el scroll del fondo mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAbierto])

  useEffect(() => {
    if (!menuAbierto) return
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuAbierto(false)
    }
    document.addEventListener('keydown', alTeclado)
    return () => document.removeEventListener('keydown', alTeclado)
  }, [menuAbierto])

  return (
    <>
      <header className={fija ? 'cabecera esta-fija' : 'cabecera'}>
        <div className="contenedor">
          <Marca />

          <nav className="nav" aria-label="Navegación principal">
            <ul className="nav__lista">
              {menu.map((grupo) => (
                <li className="nav__item" key={grupo.label}>
                  <Link className="nav__enlace" href={grupo.href}>
                    {grupo.label}
                    <Icon name="chevron" className="nav__chevron" />
                  </Link>
                  <div className="submenu">
                    {grupo.items.map((item) => (
                      <EnlaceSubmenu key={item.label} item={item} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="cabecera__cta">
            <Boton href={externos.donar} variante="borde" pequeno>
              Donar
            </Boton>
            <Boton href={externos.reservas} variante="rio" pequeno>
              Reservar
            </Boton>

            <button
              className="hamburguesa"
              type="button"
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMenuAbierto((abierto) => !abierto)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={menuAbierto ? 'menu-movil esta-abierto' : 'menu-movil'} id="menu-movil">
        {menu.map((grupo) => {
          const abierto = grupoAbierto === grupo.label
          return (
            <div className="menu-movil__grupo" key={grupo.label}>
              <button
                className="menu-movil__boton"
                type="button"
                aria-expanded={abierto}
                onClick={() => setGrupoAbierto(abierto ? null : grupo.label)}
              >
                {grupo.label}
                <Icon name="chevron" />
              </button>
              <div className="menu-movil__panel">
                <div>
                  {grupo.items.map((item) =>
                    esExterno(item.href) ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuAbierto(false)}>
                        {item.label}
                      </a>
                    ) : (
                      <Link key={item.label} href={item.href} onClick={() => setMenuAbierto(false)}>
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div className="menu-movil__acciones">
          <Boton href={externos.reservas} variante="rio" bloque>
            Reservar mi estadía
          </Boton>
          <Boton href={externos.donar} variante="borde" bloque>
            Donar
          </Boton>
        </div>
      </div>
    </>
  )
}

function EnlaceSubmenu({ item }: { item: Enlace }) {
  const contenido = (
    <>
      {item.label}
      {item.detalle && <span>{item.detalle}</span>}
    </>
  )

  return esExterno(item.href) ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      {contenido}
    </a>
  ) : (
    <Link href={item.href}>{contenido}</Link>
  )
}
