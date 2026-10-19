import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

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
          <Boton href="#flora-fauna" variante="borde">
            {textos.conocerElValle}
          </Boton>
        </div>
      </div>
    </section>
  )
}

/** Flora, fauna y geología. */
export function FloraFauna({ lang }: { lang: Lang }) {
  const { especies, floraFauna, textos } = getContenido(lang)
  const etiqueta = { flora: textos.flora, fauna: textos.fauna, geologia: textos.geologia }

  return (
    <section className="seccion seccion--alt" id="flora-fauna">
      <div className="contenedor">
        <SectionHeader className="revelar" {...floraFauna} />

        <ul className="especies">
          {especies.map((especie) => (
            <li className="especie revelar" key={especie.nombre}>
              <span className={`especie__grupo especie__grupo--${especie.grupo}`}>{etiqueta[especie.grupo]}</span>
              <h3>{especie.nombre}</h3>
              {especie.nombreCientifico && <p className="especie__cientifico">{especie.nombreCientifico}</p>}
              <p className="especie__texto">{especie.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Qué se puede hacer en el valle. */
export function QueHacer({ lang }: { lang: Lang }) {
  const { actividades, queHacer, textos } = getContenido(lang)

  return (
    <section className="seccion" id="que-hacer">
      <div className="contenedor">
        <SectionHeader className="revelar" {...queHacer} />

        <div className="actividades">
          {actividades.map((actividad) => (
            <article className="actividad revelar" key={actividad.titulo}>
              <div className="actividad__icono">
                <Icon name={actividad.icono} />
              </div>
              <div>
                <h3>{actividad.titulo}</h3>
                <p>{actividad.texto}</p>
                {actividad.dato && <p className="actividad__dato">{actividad.dato}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="rasgos__cta revelar">
          <Boton href={`/${lang}/como-visitar`} variante="rio">
            {textos.verComoVisitar}
          </Boton>
        </div>
      </div>
    </section>
  )
}
