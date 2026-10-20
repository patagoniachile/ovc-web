'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as MapaLeaflet, Marker } from 'leaflet'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'
import 'leaflet/dist/leaflet.css'

/**
 * Mapa de orientación con teselas de OpenStreetMap.
 *
 * Leaflet se carga dentro del efecto, así que no entra en el bundle inicial ni
 * se ejecuta en el servidor. El listado de puntos sí se renderiza en el HTML:
 * si el mapa no carga —o el visitante tiene el JS desactivado— las coordenadas
 * siguen estando ahí, que es lo que de verdad sirve para planificar.
 */
export function MapaValle({ lang }: { lang: Lang }) {
  const { mapa, puntosMapa, textos } = getContenido(lang)
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
  const [santuario, setSantuario] = useState(false)

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

      const limites = L.latLngBounds(puntosMapa.map((p) => [p.lat, p.lon] as [number, number]))

      // El contorno del santuario se pide aparte: son 5 KB que no tienen por
      // qué viajar con la página para quien nunca baja hasta el mapa. Se
      // espera antes de encuadrar porque el santuario se extiende bastante
      // más al norte que el último marcador: encuadrando solo los puntos, la
      // mitad del polígono quedaba fuera de la vista.
      try {
        const respuesta = await fetch('/geo/santuario.json')
        if (!cancelado && respuesta.ok) {
          const { contorno } = (await respuesta.json()) as { contorno: [number, number][] }
          const area = L.polygon(contorno, {
            color: '#2c473f',
            weight: 2.5,
            dashArray: '7 5',
            fillColor: '#ffce00',
            fillOpacity: 0.2,
            interactive: false,
          }).addTo(instancia)
          limites.extend(area.getBounds())
          setSantuario(true)
        }
      } catch {
        // Sin contorno el mapa sigue sirviendo: los puntos son lo esencial.
      }

      if (cancelado) return
      instancia.fitBounds(limites, { padding: [40, 40] })

      mapaRef.current = instancia
      setCargado(true)
    })()

    return () => {
      cancelado = true
      mapaRef.current?.remove()
      mapaRef.current = null
      marcadores.current = {}
    }
  }, [mapa, puntosMapa])

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
    <div className="mapa revelar">
          <div className="mapa__lienzo">
            <div ref={contenedor} className="mapa__leaflet" role="application" aria-label={textos.mapaDe} />
            {!cargado && <p className="mapa__cargando">{textos.cargandoMapa}</p>}
            {cargado && tactil && !interactivo && (
              <button type="button" className="mapa__activar" onClick={activarMapa}>
                {textos.tocaParaMoverMapa}
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

            {santuario && (
              <p className="mapa__leyenda">
                <span className="mapa__muestra" aria-hidden="true" />
                {textos.areaSantuario}
              </p>
            )}

            <p className="mapa__aviso">
              <Icon name="alerta" />
              {mapa.aviso}
            </p>
          </div>
    </div>
  )
}

/**
 * El mapa como sección propia, para la página de El Valle.
 *
 * El mapa en sí vive aparte porque la línea de tiempo de la historia también
 * lo usa, ahí dentro de otra sección y sin encabezado propio.
 */
export function Mapa({ lang }: { lang: Lang }) {
  const { mapa } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="mapa">
      <div className="contenedor">
        <SectionHeader className="revelar" {...mapa.encabezado} />
        <MapaValle lang={lang} />
      </div>
    </section>
  )
}
