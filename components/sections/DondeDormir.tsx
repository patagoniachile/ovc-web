'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MapaLienzo } from '@/components/sections/MapaLienzo'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type IconName, type Lang, type TipoContacto } from '@/content'

const ICONO_CONTACTO: Record<TipoContacto, IconName> = {
  telefono: 'reloj',
  whatsapp: 'gente',
  email: 'mail',
  web: 'pin',
  instagram: 'instagram',
  facebook: 'facebook',
}

/**
 * Dónde dormir, sector por sector.
 *
 * El orden no es el del listado de sectores: La Junta va primero porque es
 * donde se duerme de verdad, y lo del inicio del sendero es el plan B de
 * quien no alcanza el horario de subida. Lago Vidal no aparece: ya no está
 * disponible y queda fuera del territorio.
 *
 * Cada bloque lleva su propio mapa, no uno común: los alojamientos del inicio
 * del sendero están a 10 km de los de La Junta, y un mapa que abarcara los
 * dos tendría que alejarse tanto que no se distinguiría nada.
 */
export function DondeDormir({ lang, id }: { lang: Lang; id?: string }) {
  const { dondeDormir, sectoresDetalle, textos } = getContenido(lang)
  const [resaltado, setResaltado] = useState<string | null>(null)

  // Los puntos de cada mapa se calculan una sola vez. Sin esto, cada hover
  // cambiaba `resaltado`, el padre re-renderizaba, `puntos` era un array
  // nuevo y el mapa se reconstruía entero: el marcador que había que
  // resaltar desaparecía justo al resaltarlo.
  const mapas = useMemo(
    () =>
      Object.fromEntries(
        dondeDormir.bloques.map((bloque) => {
          const sector = sectoresDetalle.find((s) => s.slug === bloque.slug)
          const ubicados = (sector?.alojamientos ?? []).filter((a) => a.lat !== undefined && a.lon !== undefined)
          return [
            bloque.slug,
            ubicados.length
              ? {
                  puntos: ubicados.map((a) => ({
                    id: a.id,
                    nombre: a.nombre,
                    tipo: 'alojamiento',
                    lat: a.lat as number,
                    lon: a.lon as number,
                    descripcion: a.tipo,
                  })),
                  centro: { lat: ubicados[0].lat as number, lon: ubicados[0].lon as number, zoom: 14 },
                }
              : null,
          ]
        }),
      ),
    [dondeDormir.bloques, sectoresDetalle],
  )

  return (
    <section className="seccion seccion--alt" id={id}>
      <div className="contenedor">
        <SectionHeader className="revelar" {...dondeDormir} />

        {dondeDormir.bloques.map((bloque) => {
          const sector = sectoresDetalle.find((s) => s.slug === bloque.slug)
          if (!sector) return null
          const mapa = mapas[bloque.slug]

          return (
            <div className="dormir" id={id && `${id}-${bloque.slug}`} key={bloque.slug}>
              <div className="dormir__cabecera revelar">
                <h3>{bloque.titulo ?? sector.nombre}</h3>
                {bloque.texto && (
                  <p className="dormir__texto">
                    {bloque.texto}{' '}
                    {bloque.enlace && <Link href={bloque.enlace.href}>{bloque.enlace.label}</Link>}
                  </p>
                )}
              </div>

              {bloque.foto && (
                <div className="dormir__foto revelar">
                  <Image
                    src={bloque.foto.src}
                    alt={bloque.foto.alt}
                    width={bloque.foto.width}
                    height={bloque.foto.height}
                    sizes="(max-width: 860px) 100vw, 1100px"
                  />
                </div>
              )}

              {mapa && (
                <div className="dormir__mapa revelar">
                  <MapaLienzo lang={lang} puntos={mapa.puntos} centro={mapa.centro} resaltado={resaltado} />
                </div>
              )}

              <div className="alojamientos">
                {sector.alojamientos.map((lugar) => (
                  <article
                    className="alojamiento revelar"
                    key={lugar.id}
                    onPointerEnter={() => setResaltado(lugar.id)}
                    onPointerLeave={() => setResaltado(null)}
                    onFocus={() => setResaltado(lugar.id)}
                    onBlur={() => setResaltado(null)}
                  >
                    <header className="alojamiento__cabecera">
                      <h4>{lugar.nombre}</h4>
                      <span className="alojamiento__tipo">{lugar.tipo}</span>
                    </header>

                    <p className="alojamiento__descripcion">{lugar.descripcion}</p>
                    {lugar.nota && <p className="alojamiento__nota">{lugar.nota}</p>}

                    {lugar.servicios.length > 0 && (
                      <>
                        <h5 className="alojamiento__subtitulo">{textos.servicios}</h5>
                        <ul className="alojamiento__servicios">
                          {lugar.servicios.map((servicio) => (
                            <li key={servicio}>
                              <Icon name="check" />
                              {servicio}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <h5 className="alojamiento__subtitulo">{textos.contacto}</h5>
                    <ul className="alojamiento__contactos">
                      {lugar.contactos.map((contacto) => (
                        <li key={contacto.href}>
                          <a
                            href={contacto.href}
                            {...(contacto.href.startsWith('http')
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                          >
                            <Icon name={ICONO_CONTACTO[contacto.tipo]} />
                            {contacto.valor}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {lugar.reserva && (
                      <a
                        className="btn btn--oro btn--sm alojamiento__reserva"
                        href={lugar.reserva.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lugar.reserva.label}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
