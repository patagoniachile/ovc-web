'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as MapaLeaflet, Marker } from 'leaflet'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { mapa, puntosMapa } from '@/content/visita'
import 'leaflet/dist/leaflet.css'

/**
 * Mapa de orientación con teselas de OpenStreetMap.
 *
 * Leaflet se carga dentro del efecto, así que no entra en el bundle inicial ni
 * se ejecuta en el servidor. El listado de puntos sí se renderiza en el HTML:
 * si el mapa no carga —o el visitante tiene el JS desactivado— las coordenadas
 * siguen estando ahí, que es lo que de verdad sirve para planificar.
 */
export function Mapa() {
  const contenedor = useRef<HTMLDivElement>(null)
  const mapaRef = useRef<MapaLeaflet | null>(null)
  const marcadores = useRef<Record<string, Marker>>({})
  const [activo, setActivo] = useState<string | null>(null)
  const [cargado, setCargado] = useState(false)
  // En pantallas táctiles el arrastre empieza desactivado: si no, deslizar
  // sobre un mapa a ancho completo mueve el mapa en vez de la página y el
  // visitante queda atrapado a mitad del sitio.
  const [tactil, setTactil] = useState(false)
  const [interactivo, setInteractivo] = useState(true)

  useEffect(() => {
    let cancelado = false

    ;(async () => {
      const L = await import('leaflet')
      if (cancelado || !contenedor.current || mapaRef.current) return

      const esTactil = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      setTactil(esTactil)
      setInteractivo(!esTactil)

      const instancia = L.map(contenedor.current, {
        center: [mapa.centroInicial.lat, mapa.centroInicial.lon],
        zoom: mapa.centroInicial.zoom,
        scrollWheelZoom: false, // no secuestramos la rueda de la página
        dragging: !esTactil,
      })

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(instancia)

      puntosMapa.forEach((punto) => {
        const icono = L.divIcon({
          className: '',
          html: `<span class="marcador marcador--${punto.tipo}"><span class="marcador__punto"></span><span class="marcador__nombre">${punto.nombre}</span></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })

        const marcador = L.marker([punto.lat, punto.lon], { icon: icono, title: punto.nombre })
          .addTo(instancia)
          .bindPopup(
            `<strong>${punto.nombre}</strong><br>${punto.descripcion}` +
              (punto.enlace
                ? `<br><a href="${punto.enlace.href}" target="_blank" rel="noopener noreferrer">${punto.enlace.label}</a>`
                : ''),
          )

        marcador.on('click', () => setActivo(punto.id))
        marcadores.current[punto.id] = marcador
      })

      instancia.fitBounds(
        L.latLngBounds(puntosMapa.map((p) => [p.lat, p.lon] as [number, number])),
        { padding: [48, 48] },
      )

      mapaRef.current = instancia
      setCargado(true)
    })()

    return () => {
      cancelado = true
      mapaRef.current?.remove()
      mapaRef.current = null
      marcadores.current = {}
    }
  }, [])

  const activarMapa = () => {
    mapaRef.current?.dragging.enable()
    setInteractivo(true)
  }

  const enfocar = (id: string) => {
    const punto = puntosMapa.find((p) => p.id === id)
    if (!punto || !mapaRef.current) return
    setActivo(id)
    mapaRef.current.flyTo([punto.lat, punto.lon], 13, { duration: 0.8 })
    marcadores.current[id]?.openPopup()
  }

  return (
    <section className="seccion seccion--alt" id="mapa">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={mapa.eyebrow} titulo={mapa.titulo} bajada={mapa.bajada} />

        <div className="mapa revelar">
          <div className="mapa__lienzo">
            <div ref={contenedor} className="mapa__leaflet" role="application" aria-label="Mapa del Valle Cochamó" />
            {!cargado && <p className="mapa__cargando">Cargando el mapa…</p>}
            {cargado && tactil && !interactivo && (
              <button type="button" className="mapa__activar" onClick={activarMapa}>
                Toca para mover el mapa
              </button>
            )}
          </div>

          <div className="mapa__panel">
            <ul className="mapa__lista">
              {puntosMapa.map((punto) => (
                <li key={punto.id}>
                  <button
                    type="button"
                    className={
                      activo === punto.id ? 'mapa__punto mapa__punto--activo' : 'mapa__punto'
                    }
                    onClick={() => enfocar(punto.id)}
                    disabled={!cargado}
                  >
                    <span className={`mapa__pin mapa__pin--${punto.tipo}`} aria-hidden="true" />
                    <span>
                      <strong>{punto.nombre}</strong>
                      <span className="mapa__descripcion">{punto.descripcion}</span>
                      <span className="mapa__coords">
                        {punto.lat.toFixed(4)}, {punto.lon.toFixed(4)}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="mapa__aviso">
              <Icon name="alerta" />
              {mapa.aviso}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
