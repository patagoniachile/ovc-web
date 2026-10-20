'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Marca } from './Marca'
import { Boton, esExterno } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { getContenido, type Enlace, type Lang } from '@/content'

export function Cabecera({ lang }: { lang: Lang }) {
  const { menu, textos } = getContenido(lang)
  const [fija, setFija] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  // Sobre la foto del hero la cabecera va transparente; al bajar (o con el
  // menú móvil abierto) se vuelve verde para que el texto blanco se lea.
  const clases = ['cabecera', (fija || menuAbierto) && 'esta-fija'].filter(Boolean).join(' ')

  // Acordeón del menú móvil: uno abierto a la vez.
  const [grupoMovil, setGrupoMovil] = useState<string | null>(null)

  /*
   * Submenú de escritorio, gobernado por estado y no por :hover/:focus-within.
   *
   * Con CSS sola, al pinchar una opción el foco se quedaba dentro del grupo y
   * `:focus-within` lo mantenía desplegado; al pasar luego a otro grupo,
   * `:hover` abría el segundo y quedaban dos submenús visibles a la vez.
   *
   * Con estado hay siempre uno o ninguno: entra el cursor o el foco y se abre,
   * sale o se elige una opción y se cierra. Sin JS el enlace del grupo sigue
   * llevando a su página, que contiene los mismos destinos.
   */
  const [grupoEscritorio, setGrupoEscritorio] = useState<string | null>(null)
  const cerrarEscritorio = () => setGrupoEscritorio(null)

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

  useEffect(() => {
    if (!grupoEscritorio) return
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrarEscritorio()
    }
    document.addEventListener('keydown', alTeclado)
    return () => document.removeEventListener('keydown', alTeclado)
  }, [grupoEscritorio])

  return (
    <>
      <header className={clases}>
        <div className="contenedor">
          <Marca lang={lang} />

          <nav className="nav" aria-label={textos.navegacionPrincipal}>
            <ul className="nav__lista">
              {menu.map((grupo) => {
                const abierto = grupoEscritorio === grupo.label
                return (
                  <li
                    className={abierto ? 'nav__item esta-abierto' : 'nav__item'}
                    key={grupo.label}
                    onPointerEnter={() => setGrupoEscritorio(grupo.label)}
                    onPointerLeave={cerrarEscritorio}
                    onFocus={() => setGrupoEscritorio(grupo.label)}
                    onBlur={(e) => {
                      // Solo cerramos si el foco salió del grupo entero
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) cerrarEscritorio()
                    }}
                  >
                    <a
                      className="nav__enlace"
                      href={grupo.href}
                      aria-haspopup="true"
                      aria-expanded={abierto}
                      onClick={cerrarEscritorio}
                    >
                      {grupo.label}
                      <Icon name="chevron" className="nav__chevron" />
                    </a>
                    <div className="submenu">
                      {grupo.items.map((item) => (
                        <EnlaceSubmenu key={item.label} item={item} alElegir={cerrarEscritorio} />
                      ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="cabecera__cta">
            {/* Dos acciones, no tres. Donar y hacerse socio son la misma
                intención y la página de Cómo ayudar ya las separa: tenerlas
                en la cabecera obligaba a elegir antes de saber la
                diferencia. */}
            {/* Reservar en borde blanco y Cómo ayudar en morado, que es la
                acción que la corporación quiere destacar. */}
            <Boton className="btn--recto" href={`/${lang}/como-visitar#dormir`} variante="solido" pequeno>
              {textos.reservar}
            </Boton>
            <Boton className="btn--recto" href={`/${lang}/como-ayudar`} variante="morado" pequeno>
              {textos.comoAyudar}
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
          const abierto = grupoMovil === grupo.label
          return (
            <div className="menu-movil__grupo" key={grupo.label}>
              <button
                className="menu-movil__boton"
                type="button"
                aria-expanded={abierto}
                onClick={() => setGrupoMovil(abierto ? null : grupo.label)}
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
          <Boton href={`/${lang}/como-visitar#dormir`} variante="solido" bloque>
            {textos.reservarEstadia}
          </Boton>
          <Boton href={`/${lang}/como-ayudar`} variante="morado" bloque>
            {textos.comoAyudar}
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
