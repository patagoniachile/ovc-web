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

export function ComoLlegar({ lang }: { lang: Lang }) {
  const { comoLlegar } = getContenido(lang)

  return (
    <section className="seccion" id="como-llegar">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={comoLlegar.eyebrow} titulo={comoLlegar.titulo} bajada={comoLlegar.bajada} />

        <div className="transportes">
          {comoLlegar.medios.map((medio) => (
            <article className="transporte revelar" key={medio.titulo}>
              <div className="transporte__icono">
                <Icon name={medio.icono} />
              </div>
              <h3>{medio.titulo}</h3>
              <p>{medio.texto}</p>
              {medio.contactos && (
                <ul className="transporte__contactos">
                  {medio.contactos.map((c) => (
                    <li key={c.href}>
                      <a href={c.href}>
                        <Icon name={ICONO_CONTACTO[c.tipo]} />
                        {c.valor}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CuantoCuesta({ lang }: { lang: Lang }) {
  const { cuantoCuesta, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="cuanto-cuesta">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={cuantoCuesta.eyebrow} titulo={cuantoCuesta.titulo} bajada={cuantoCuesta.bajada} />

        <ul className="costos">
          {cuantoCuesta.costos.map((costo) => (
            <li className="costo revelar" key={costo.concepto}>
              <div className="costo__cabecera">
                <h3>
                  {costo.concepto}
                  {/* Van en la misma lista que la entrada y el alojamiento, así
                      que sin esto se leen como algo que hay que pagar sí o sí. */}
                  {costo.opcional && <span className="costo__opcional">{textos.opcional}</span>}
                </h3>
                <span className="costo__valor">{costo.valor}</span>
              </div>
              <p>{costo.detalle}</p>
            </li>
          ))}
        </ul>

        <p className="costos__nota revelar">
          <Icon name="alerta" />
          {cuantoCuesta.nota}
        </p>
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
