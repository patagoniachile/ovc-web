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

  // Un solo grupo desplegado a la vez, tanto en el acordeón móvil como en el
  // submenú de escritorio, que se abre con el cursor encima.
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
          <Marca lang={lang} />

          <nav className="nav" aria-label={textos.navegacionPrincipal}>
            <ul className="nav__lista">
              {menu.map((grupo) => (
                <li className="nav__item" key={grupo.label}>
                  <a className="nav__enlace" href={grupo.href} aria-haspopup="true">
                    {grupo.label}
                    <Icon name="chevron" className="nav__chevron" />
                  </a>
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
            {/* Donar y hacerse socio son la misma intención —sostener el
                valle— así que van como un control único en vez de dos botones
                sueltos compitiendo con el de reservar. */}
            <div className="apoyo">
              <Link className="apoyo__accion cabecera__donar" href={`/${lang}/donar`}>
                <Icon name="corazon" />
                {textos.donar}
              </Link>
              <Link className="apoyo__accion apoyo__accion--socio" href={`/${lang}/socios`}>
                {/* En pantallas angostas no cabe la etiqueta larga */}
                <span className="etiqueta-larga">{textos.hazteSocio}</span>
                <span className="etiqueta-corta">{textos.hazteSocioCorto}</span>
              </Link>
            </div>

            <Boton href={`/${lang}/reservar`} variante="rio" pequeno>
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
          <Boton href={`/${lang}/socios`} variante="solido" bloque>
            {textos.hazteSocio}
          </Boton>
          <Boton href={`/${lang}/reservar`} variante="rio" bloque>
            {textos.reservarEstadia}
          </Boton>
          <Boton href={`/${lang}/donar`} variante="borde" bloque>
            {textos.donar}
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
