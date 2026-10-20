import { EnlaceFlecha } from '@/components/ui/Boton'
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
 * Cómo llegar: el auto en corto y el bus en largo.
 *
 * No son dos formas equivalentes de venir. En auto se improvisa; en bus no:
 * los pasajes se venden solo en el terminal, el último sale a las 15:00 y sin
 * reserva de camping no se entra al valle. Quien compra el pasaje antes de
 * reservar se queda abajo, así que esa advertencia va antes que nada.
 */
export function ComoLlegar({ lang }: { lang: Lang }) {
  const { comoLlegar } = getContenido(lang)
  const { auto, bus } = comoLlegar

  return (
    <section className="seccion" id="como-llegar">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={comoLlegar.eyebrow} titulo={comoLlegar.titulo} bajada={comoLlegar.bajada} />

        <div className="llegar">
          <article className="llegar__via revelar">
            <h3>{auto.titulo}</h3>
            <p>{auto.texto}</p>
          </article>

          <article className="llegar__via llegar__via--larga revelar">
            <h3>{bus.titulo}</h3>

            <div className="llegar__advertencia">
              <p className="llegar__advertencia-titulo">
                <Icon name="alerta" />
                {bus.advertencia.titulo}
              </p>
              <ul>
                {bus.advertencia.puntos.map((punto) => (
                  <li key={punto}>{punto}</li>
                ))}
              </ul>
            </div>

            <p className="llegar__rotulo">{bus.planificacion.titulo}</p>
            <ol className="llegar__pasos">
              {bus.planificacion.pasos.map((paso) => (
                <li key={paso}>{paso}</li>
              ))}
            </ol>
            <p className="llegar__nota">{bus.planificacion.nota}</p>

            <p className="llegar__rotulo">{bus.contactosTitulo}</p>
            <ul className="llegar__contactos">
              {bus.contactos.map((c) => (
                <li key={c.href}>
                  <a href={c.href}>
                    <Icon name={ICONO_CONTACTO[c.tipo]} />
                    {c.valor}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

/**
 * Qué se paga y a quién.
 *
 * La entrada va primero porque «¿cuánto cuesta entrar?» es la pregunta con
 * la que llega casi todo el mundo.
 */
export function CuantoCuesta({ lang }: { lang: Lang }) {
  const { cuantoCuesta, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="cuanto-cuesta">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={cuantoCuesta.eyebrow} titulo={cuantoCuesta.titulo} bajada={cuantoCuesta.bajada} />

        <ul className="precios">
          {cuantoCuesta.costos.map((costo) => (
            <li
              className={costo.destacado ? 'precio precio--libre revelar' : 'precio revelar'}
              key={costo.concepto}
            >
              <h3>
                {costo.concepto}
                {/* Van en la misma lista que la entrada y el alojamiento, así
                    que sin esto se leen como algo que hay que pagar sí o sí. */}
                {costo.opcional && <span className="costo__opcional">{textos.opcional}</span>}
              </h3>
              <p className="precio__monto">
                {costo.valor}
                {costo.unidad && <small>{costo.unidad}</small>}
              </p>
              <p className="precio__detalle">{costo.detalle}</p>
              {costo.enlace && <EnlaceFlecha href={costo.enlace.href}>{costo.enlace.label}</EnlaceFlecha>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * Ir por el día o quedarse, lado a lado.
 *
 * Es una tabla y no dos tarjetas porque es una comparación: antes cada
 * columna traía sus propias filas —una hablaba de aforo y la otra de
 * pilcheros— y no había forma de contrastar nada. Ahora las filas son las
 * mismas y cada modalidad responde a lo mismo.
 */
export function DiaVsSemana({ lang }: { lang: Lang }) {
  const { diaVsSemana, textos } = getContenido(lang)
  const { modalidades, filas } = diaVsSemana

  return (
    <section className="seccion" id="dia-vs-semana">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={diaVsSemana.eyebrow} titulo={diaVsSemana.titulo} bajada={diaVsSemana.bajada} />

        <div className="comparativa revelar">
          <table>
            <caption className="visualmente-oculto">{diaVsSemana.titulo}</caption>
            <thead>
              <tr>
                <td />
                {modalidades.map((m) => (
                  <th scope="col" key={m.titulo} className={m.destacada ? 'es-destacada' : undefined}>
                    <span className="comparativa__titulo">{m.titulo}</span>
                    <span className="comparativa__resumen">{m.resumen}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filas.map((fila) => (
                <tr key={fila.etiqueta}>
                  <th scope="row">{fila.etiqueta}</th>
                  {fila.valores.map((valor, i) => (
                    <td key={modalidades[i].titulo} className={modalidades[i].destacada ? 'es-destacada' : undefined}>
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th scope="row">{textos.paraQuienEs}</th>
                {modalidades.map((m) => (
                  <td key={m.titulo} className={m.destacada ? 'es-destacada' : undefined}>
                    {m.paraQuien}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}

export function HorariosYContacto({ lang }: { lang: Lang }) {
  const { horariosYContacto, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--oscura" id="horarios">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          claro
          eyebrow={horariosYContacto.eyebrow}
          titulo={horariosYContacto.titulo}
          bajada={horariosYContacto.bajada}
        />

        <div className="horarios">
          <ul className="horarios__tabla revelar">
            {horariosYContacto.horarios.map((h) => (
              <li key={h.franja + h.detalle}>
                <span className="horarios__franja">{h.franja}</span>
                <span className="horarios__detalle">{h.detalle}</span>
              </li>
            ))}
          </ul>

          <div className="horarios__lado revelar">
            <h3>{textos.contacto}</h3>
            <ul className="horarios__contactos">
              {horariosYContacto.contactos.map((c) => (
                <li key={c.href}>
                  <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <Icon name={ICONO_CONTACTO[c.tipo]} />
                    {c.valor}
                  </a>
                </li>
              ))}
            </ul>
            <p className="horarios__nota">
              <Icon name="alerta" />
              {horariosYContacto.nota}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
