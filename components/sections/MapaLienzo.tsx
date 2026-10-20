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

      // Los alojamientos de un sector quedan a pocos metros y sus etiquetas se
      // pisan. Para cada uno se prueba un lado tras otro y se queda con el
      // primero que no toque un punto ni otra etiqueta ya colocada. Como depende
      // de la distancia en pantalla, se repite con cada cambio de zoom.
      const colocarEtiquetas = () => {
        const LADOS = ['abajo', 'arriba', 'der', 'izq', 'abajo-der', 'arriba-der', 'abajo-izq', 'arriba-izq'] as const
        type Rect = { x1: number; y1: number; x2: number; y2: number }
        const M = 3
        const cruza = (a: Rect, b: Rect) => a.x1 < b.x2 + M && b.x1 < a.x2 + M && a.y1 < b.y2 + M && b.y1 < a.y2 + M
        const puntosEnPantalla = puntos.map((p) => {
          const { x, y } = instancia.latLngToContainerPoint([p.lat, p.lon])
          return { id: p.id, rect: { x1: x - 8, y1: y - 8, x2: x + 8, y2: y + 8 } as Rect }
        })
        const etiquetas: Rect[] = []
        puntos
          .filter((p) => p.tipo === 'alojamiento')
          .sort((a, b) => a.lon - b.lon)
          .forEach((p) => {
            const { x, y } = instancia.latLngToContainerPoint([p.lat, p.lon])
            const w = 8 + p.nombre.length * 7.2
            const h = 22
            const rectDe: Record<(typeof LADOS)[number], Rect> = {
              abajo: { x1: x - w / 2, y1: y + 11, x2: x + w / 2, y2: y + 11 + h },
              arriba: { x1: x - w / 2, y1: y - 11 - h, x2: x + w / 2, y2: y - 11 },
              der: { x1: x + 14, y1: y - h / 2, x2: x + 14 + w, y2: y + h / 2 },
              izq: { x1: x - 14 - w, y1: y - h / 2, x2: x - 14, y2: y + h / 2 },
              'abajo-der': { x1: x + 5, y1: y + 9, x2: x + 5 + w, y2: y + 9 + h },
              'arriba-der': { x1: x + 5, y1: y - 9 - h, x2: x + 5 + w, y2: y - 9 },
              'abajo-izq': { x1: x - 5 - w, y1: y + 9, x2: x - 5, y2: y + 9 + h },
              'arriba-izq': { x1: x - 5 - w, y1: y - 9 - h, x2: x - 5, y2: y - 9 },
            }
            const cruces = (l: (typeof LADOS)[number]) =>
              etiquetas.filter((o) => cruza(rectDe[l], o)).length +
              puntosEnPantalla.filter((o) => o.id !== p.id && cruza(rectDe[l], o.rect)).length
            const lado = LADOS.find((l) => cruces(l) === 0) ?? [...LADOS].sort((a, b) => cruces(a) - cruces(b))[0]
            etiquetas.push(rectDe[lado])
            const el = marcadores.current[p.id]?.getElement()?.querySelector('.marcador')
            el?.classList.remove(...LADOS.map((l) => `marcador--${l}`))
            el?.classList.add(`marcador--${lado}`)
          })
      }
      colocarEtiquetas()
      instancia.on('zoomend moveend resize', colocarEtiquetas)
      setTimeout(colocarEtiquetas, 600)

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
      marcador.setZIndexOffset(id === resaltado ? 1000 : 0)
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
