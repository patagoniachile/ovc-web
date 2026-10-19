'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Marca } from './Marca'
import { Boton, esExterno } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { externos, getContenido, type Enlace, type Lang } from '@/content'

export function Cabecera({ lang }: { lang: Lang }) {
  const { menu, textos } = getContenido(lang)
  const [fija, setFija] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // En escritorio, al pinchar un grupo su submenú queda fijado y no se cierra
  // al mover el ratón. Solo con hover se cerraba apenas salías del área, así
  // que había que acertar el recorrido para llegar a una opción.
  const [grupoFijado, setGrupoFijado] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // En móvil cada grupo se abre y se cierra por separado: abrir uno ya no
  // cierra el anterior.
  const [gruposAbiertos, setGruposAbiertos] = useState<string[]>([])

  const alternarGrupo = (label: string) =>
    setGruposAbiertos((abiertos) =>
      abiertos.includes(label) ? abiertos.filter((l) => l !== label) : [...abiertos, label],
    )

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
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenuAbierto(false)
      setGrupoFijado(null)
    }
    document.addEventListener('keydown', alTeclado)
    return () => document.removeEventListener('keydown', alTeclado)
  }, [])

  // Un submenú fijado se suelta al pinchar fuera de la navegación
  useEffect(() => {
    if (!grupoFijado) return
    const alPinchar = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setGrupoFijado(null)
    }
    document.addEventListener('pointerdown', alPinchar)
    return () => document.removeEventListener('pointerdown', alPinchar)
  }, [grupoFijado])

  return (
    <>
      <header className={fija ? 'cabecera esta-fija' : 'cabecera'}>
        <div className="contenedor">
          <Marca lang={lang} />

          <nav className="nav" aria-label={textos.navegacionPrincipal} ref={navRef}>
            <ul className="nav__lista">
              {menu.map((grupo) => {
                const fijado = grupoFijado === grupo.label
                return (
                  <li className={fijado ? 'nav__item esta-fijado' : 'nav__item'} key={grupo.label}>
                    <a
                      className="nav__enlace"
                      href={grupo.href}
                      aria-haspopup="true"
                      aria-expanded={fijado}
                      // El enlace sigue llevando a su sección; además deja el
                      // submenú fijado para poder elegir una opción sin prisa.
                      onClick={() => setGrupoFijado(fijado ? null : grupo.label)}
                    >
                      {grupo.label}
                      <Icon name="chevron" className="nav__chevron" />
                    </a>
                    <div className="submenu">
                      {grupo.items.map((item) => (
                        <EnlaceSubmenu key={item.label} item={item} alElegir={() => setGrupoFijado(null)} />
                      ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="cabecera__cta">
            <Boton href={externos.donar} variante="borde" pequeno>
              {textos.donar}
            </Boton>
            <Boton href={externos.reservas} variante="rio" pequeno>
              {textos.reservar}
            </Boton>

            <button
              className="hamburguesa"
              type="button"
              aria-expanded={menuAbierto}
              aria-controls="menu-movil"
              aria-label={menuAbierto ? textos.cerrarMenu : textos.abrirMenu}
              onClick={() => setMenuAbierto((abierto) => !abierto)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={menuAbierto ? 'menu-movil esta-abierto' : 'menu-movil'} id="menu-movil">
        {menu.map((grupo) => {
          const abierto = gruposAbiertos.includes(grupo.label)
          return (
            <div className="menu-movil__grupo" key={grupo.label}>
              <button
                className="menu-movil__boton"
                type="button"
                aria-expanded={abierto}
                onClick={() => alternarGrupo(grupo.label)}
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
                      <a key={item.label} href={item.href} onClick={() => setMenuAbierto(false)}>
                        {item.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          )
        })}

        <div className="menu-movil__acciones">
          <Boton href={externos.reservas} variante="rio" bloque>
            {textos.reservarEstadia}
          </Boton>
          <Boton href={externos.donar} variante="borde" bloque>
            {textos.donar}
          </Boton>
        </div>
      </div>
    </>
  )
}

function EnlaceSubmenu({ item, alElegir }: { item: Enlace; alElegir: () => void }) {
  const contenido = (
    <>
      {item.label}
      {item.detalle && <span>{item.detalle}</span>}
    </>
  )

  return esExterno(item.href) ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={alElegir}>
      {contenido}
    </a>
  ) : (
    <Link href={item.href} onClick={alElegir}>
      {contenido}
    </Link>
  )
}
