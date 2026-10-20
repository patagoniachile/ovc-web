'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Ficha } from '@/components/ui/Ficha'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, imagenes, type Lang } from '@/content'

/** Por qué el valle es especial, en tarjetas. */
export function ElValle({ lang }: { lang: Lang }) {
  const { elValle, rasgos, textos } = getContenido(lang)

  return (
    <section className="seccion" id="el-valle">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...elValle} />

        <div className="rasgos">
          {rasgos.map((rasgo) => (
            <article className="rasgo revelar" key={rasgo.titulo}>
              <div className="rasgo__icono">
                <Icon name={rasgo.icono} />
              </div>
              <h3>{rasgo.titulo}</h3>
              <p>{rasgo.texto}</p>
            </article>
          ))}
        </div>

        <div className="rasgos__cta revelar">
          <Boton href={`/${lang}/el-valle`} variante="borde">
            {textos.conocerElValle}
          </Boton>
        </div>
      </div>
    </section>
  )
}

/**
 * Flora, fauna y geología, en cuatro grupos.
 *
 * Eran siete tarjetas sueltas, una por especie, y no contaban nada: el
 * bosque, el sotobosque, las alturas y la roca son cuatro historias
 * distintas. Cada tarjeta abre su ficha, que es donde cabe el detalle sin
 * convertir la sección en un muro de texto.
 */
export function FloraFauna({ lang }: { lang: Lang }) {
  const { floraFauna, gruposEspecies, textos } = getContenido(lang)
  const [abierto, setAbierto] = useState<string | null>(null)

  return (
    <section className="seccion seccion--alt" id="flora-fauna">
      <div className="contenedor">
        <SectionHeader className="revelar" {...floraFauna} />
        <p className="seccion-cierre revelar">{floraFauna.cierre}</p>

        <div className="grupos">
          {gruposEspecies.map((grupo) => {
            const foto = grupo.imagen ? imagenes[grupo.imagen] : undefined
            return (
              <article className="grupo revelar" key={grupo.id}>
                <button type="button" className="grupo__boton" onClick={() => setAbierto(grupo.id)}>
                  <span className="grupo__foto">
                    {foto ? (
                      <Image
                        src={foto.src}
                        alt={grupo.alt ?? ''}
                        width={foto.width}
                        height={foto.height}
                        sizes="(max-width: 700px) 86vw, 44vw"
                      />
                    ) : (
                      <span className="grupo__sinfoto" aria-hidden="true">
                        <Icon name="hoja" />
                      </span>
                    )}
                  </span>
                  <span className="grupo__cuerpo">
                    <strong>{grupo.titulo}</strong>
                    <span className="grupo__subtitulo">{grupo.subtitulo}</span>
                    <span className="grupo__mas">{textos.verMas}</span>
                  </span>
                </button>

                <Ficha
                  lang={lang}
                  abierta={abierto === grupo.id}
                  onCerrar={() => setAbierto(null)}
                  titulo={grupo.titulo}
                >
                  <h3>{grupo.titulo}</h3>
                  <p className="detalle__intro">{grupo.intro}</p>
                  <dl className="detalle__fichas">
                    {grupo.fichas.map((ficha) => (
                      <div key={ficha.nombre}>
                        <dt>
                          {ficha.nombre}
                          {ficha.cientifico && <em>{ficha.cientifico}</em>}
                        </dt>
                        <dd>{ficha.texto}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="detalle__cierre">{grupo.cierre}</p>
                </Ficha>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Qué se puede hacer en el valle. */
/** Qué se puede hacer en el valle, cada una con su ficha. */
export function QueHacer({ lang }: { lang: Lang }) {
  const { actividades, queHacer, textos } = getContenido(lang)
  const [abierta, setAbierta] = useState<string | null>(null)

  return (
    <section className="seccion" id="que-hacer">
      <div className="contenedor">
        <SectionHeader className="revelar" {...queHacer} />
        <p className="seccion-cierre revelar">{queHacer.cierre}</p>

        <div className="grupos">
          {actividades.map((actividad) => {
            const foto = actividad.imagen ? imagenes[actividad.imagen] : undefined
            return (
              <article className="grupo revelar" key={actividad.id}>
                <button type="button" className="grupo__boton" onClick={() => setAbierta(actividad.id)}>
                  <span className="grupo__foto">
                    {foto ? (
                      <Image
                        src={foto.src}
                        alt={actividad.alt ?? ''}
                        width={foto.width}
                        height={foto.height}
                        sizes="(max-width: 700px) 86vw, 44vw"
                      />
                    ) : (
                      <span className="grupo__sinfoto" aria-hidden="true">
                        <Icon name={actividad.icono} />
                      </span>
                    )}
                  </span>
                  <span className="grupo__cuerpo">
                    <strong>{actividad.titulo}</strong>
                    <span className="grupo__subtitulo">{actividad.texto}</span>
                    <span className="grupo__mas">{textos.verMas}</span>
                  </span>
                </button>

                <Ficha
                  lang={lang}
                  abierta={abierta === actividad.id}
                  onCerrar={() => setAbierta(null)}
                  titulo={actividad.titulo}
                >
                  <h3>{actividad.titulo}</h3>
                  {actividad.bloques.map((bloque) => (
                    <div className={bloque.aviso ? 'detalle__bloque detalle__bloque--aviso' : 'detalle__bloque'} key={bloque.texto}>
                      {bloque.titulo && <h4>{bloque.titulo}</h4>}
                      <p>{bloque.texto}</p>
                    </div>
                  ))}
                </Ficha>
              </article>
            )
          })}
        </div>

        <div className="rasgos__cta revelar">
          <Boton href={queHacer.cta.href} variante="oro">
            {queHacer.cta.label}
          </Boton>
        </div>
      </div>
    </section>
  )
}
