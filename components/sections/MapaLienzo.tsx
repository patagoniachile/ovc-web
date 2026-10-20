'use client'

import { useEffect, useRef, useState } from 'react'
import type { Map as MapaLeaflet, Marker } from 'leaflet'
import { getContenido, type Lang } from '@/content'
import 'leaflet/dist/leaflet.css'

export interface PuntoLienzo {
  id: string
  nombre: string
  /** Decide el color del marcador: sector, referencia, alojamiento… */
  tipo: string
  lat: number
  lon: number
  descripcion?: string
  enlace?: { label: string; href: string }
}

/**
 * El lienzo del mapa, sin nada alrededor.
 *
 * Leaflet se carga dentro del efecto, así que no entra en el bundle inicial ni
 * se ejecuta en el servidor. Quien lo use pone su propia lista al lado: la de
 * El Valle son botones con coordenadas, la de Dónde dormir son las tarjetas de
 * cada alojamiento. Lo que no cambia es que la lista viva en el HTML, porque
 * si el mapa no carga las direcciones y los contactos siguen estando.
 *
 * `enfocado` vuela hasta el punto y abre su globo; `resaltado` solo lo marca.
 * Son cosas distintas: pulsar un punto de la lista pide ir hasta él, pero
 * pasar el ratón por encima de una tarjeta no, y un mapa que salta con cada
 * roce del cursor marea.
 */
export function MapaLienzo({
  lang,
  puntos,
  centro,
  conSantuario = false,
  enfocado,
  resaltado,
  onCargado,
  onSantuario,
}: {
  lang: Lang
  puntos: PuntoLienzo[]
  centro: { lat: number; lon: number; zoom: number }
  conSantuario?: boolean
  enfocado?: string | null
  resaltado?: string | null
  onCargado?: (listo: boolean) => void
  onSantuario?: (hay: boolean) => void
}) {
  const { textos } = getContenido(lang)
  const contenedor = useRef<HTMLDivElement>(null)
  const mapaRef = useRef<MapaLeaflet | null>(null)
  const marcadores = useRef<Record<string, Marker>>({})
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
        center: [centro.lat, centro.lon],
        zoom: centro.zoom,
        scrollWheelZoom: false, // no secuestramos la rueda de la página
        dragging: !esTactil,
      })

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(instancia)

      puntos.forEach((punto) => {
        const icono = L.divIcon({
          className: '',
          html: `<span class="marcador marcador--${punto.tipo}" data-punto="${punto.id}"><span class="marcador__punto"></span><span class="marcador__nombre">${punto.nombre}</span></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })

        const marcador = L.marker([punto.lat, punto.lon], { icon: icono, title: punto.nombre }).addTo(instancia)
        if (punto.descripcion) {
          marcador.bindPopup(
            `<strong>${punto.nombre}</strong><br>${punto.descripcion}` +
              (punto.enlace
                ? `<br><a href="${punto.enlace.href}" target="_blank" rel="noopener noreferrer">${punto.enlace.label}</a>`
                : ''),
          )
        }
        marcadores.current[punto.id] = marcador
      })

      const limites = L.latLngBounds(puntos.map((p) => [p.lat, p.lon] as [number, number]))

      // El contorno del santuario se pide aparte: son 5 KB que no tienen por
      // qué viajar con la página para quien nunca baja hasta el mapa. Se
      // espera antes de encuadrar porque el santuario se extiende bastante
      // más al norte que el último marcador: encuadrando solo los puntos, la
      // mitad del polígono quedaba fuera de la vista.
      if (conSantuario) {
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
            onSantuario?.(true)
          }
        } catch {
          // Sin contorno el mapa sigue sirviendo: los puntos son lo esencial.
        }
      }

      if (cancelado) return
      instancia.fitBounds(limites, { padding: [40, 40] })

      mapaRef.current = instancia
      setCargado(true)
      onCargado?.(true)
    })()

    return () => {
      cancelado = true
      mapaRef.current?.remove()
      mapaRef.current = null
      marcadores.current = {}
    }
    // Las devoluciones de llamada no entran: cambian en cada render del padre
    // y reconstruirían el mapa entero cada vez.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puntos, centro, conSantuario])

  // Ir hasta un punto es una petición explícita de quien pulsa la lista.
  useEffect(() => {
    if (!enfocado || !mapaRef.current) return
    const punto = puntos.find((p) => p.id === enfocado)
    if (!punto) return
    mapaRef.current.flyTo([punto.lat, punto.lon], 13, { duration: 0.8 })
    marcadores.current[enfocado]?.openPopup()
  }, [enfocado, puntos])

  // Resaltar es solo pintar: se hace sobre el elemento del marcador, sin
  // tocar el mapa, para que pasar el ratón por las tarjetas no lo mueva.
  useEffect(() => {
    Object.entries(marcadores.current).forEach(([id, marcador]) => {
      marcador.getElement()?.querySelector('.marcador')?.classList.toggle('esta-resaltado', id === resaltado)
    })
  }, [resaltado, cargado])

  return (
    <div className="mapa__lienzo">
      <div ref={contenedor} className="mapa__leaflet" role="application" aria-label={textos.mapaDe} />
      {!cargado && <p className="mapa__cargando">{textos.cargandoMapa}</p>}
      {cargado && tactil && !interactivo && (
        <button
          type="button"
          className="mapa__activar"
          onClick={() => {
            mapaRef.current?.dragging.enable()
            setInteractivo(true)
          }}
        >
          {textos.tocaParaMoverMapa}
        </button>
      )}
    </div>
  )
}
