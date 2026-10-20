'use client'

import { useState } from 'react'
import { MapaLienzo } from '@/components/sections/MapaLienzo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/**
 * Mapa de orientación del valle, con la lista de sus puntos debajo.
 *
 * La lista se renderiza en el HTML, así que los nombres siguen ahí aunque el
 * mapa no cargue; pulsar uno vuela hasta él y abre su globo.
 */
export function MapaValle({ lang }: { lang: Lang }) {
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
        {/* Solo los nombres: qué es cada punto se lee en su globo, al pulsarlo
            en el mapa o aquí. Las cajas con la descripción ocupaban más que
            el propio mapa. */}
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
                {punto.nombre}
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
