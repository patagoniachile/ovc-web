'use client'

import { useState } from 'react'
import { MapaLienzo } from '@/components/sections/MapaLienzo'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/**
 * Mapa de orientación del valle, con su lista de puntos al lado.
 *
 * La lista se renderiza en el HTML: si el mapa no carga —o el visitante tiene
 * el JS desactivado— las coordenadas siguen estando ahí, que es lo que de
 * verdad sirve para planificar.
 */
export function MapaValle({
  lang,
  // El aviso de seguridad va donde se planifica el viaje. En la línea de
  // tiempo el mapa solo sitúa los lugares de la historia, y ahí advertir
  // sobre cobertura y GPS no viene a cuento.
  conAviso = true,
}: {
  lang: Lang
  conAviso?: boolean
}) {
  const { mapa, puntosMapa, textos } = getContenido(lang)
  const [activo, setActivo] = useState<string | null>(null)
  const [cargado, setCargado] = useState(false)
  const [santuario, setSantuario] = useState(false)

  return (
    <div className="mapa revelar">
      <MapaLienzo
        lang={lang}
        puntos={puntosMapa}
        centro={mapa.centroInicial}
        conSantuario
        enfocado={activo}
        onCargado={setCargado}
        onSantuario={setSantuario}
      />

      <div className="mapa__panel">
        <ul className="mapa__lista">
          {puntosMapa.map((punto) => (
            <li key={punto.id}>
              <button
                type="button"
                className={activo === punto.id ? 'mapa__punto mapa__punto--activo' : 'mapa__punto'}
                onClick={() => setActivo(punto.id)}
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

        {conAviso && (
          <p className="mapa__aviso">
            <Icon name="alerta" />
            {mapa.aviso}
          </p>
        )}
      </div>
    </div>
  )
}

/** El mapa como sección propia, para la página de El Valle. */
export function Mapa({ lang }: { lang: Lang }) {
  const { mapa } = getContenido(lang)

  return (
    <section className="seccion" id="mapa">
      <div className="contenedor">
        <SectionHeader className="revelar" {...mapa.encabezado} />
        <MapaValle lang={lang} />
      </div>
    </section>
  )
}
