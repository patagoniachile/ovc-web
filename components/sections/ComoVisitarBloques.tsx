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
  const { cuantoCuesta } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="cuanto-cuesta">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={cuantoCuesta.eyebrow} titulo={cuantoCuesta.titulo} bajada={cuantoCuesta.bajada} />

        <ul className="costos">
          {cuantoCuesta.costos.map((costo) => (
            <li className="costo revelar" key={costo.concepto}>
              <div className="costo__cabecera">
                <h3>{costo.concepto}</h3>
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

export function DiaVsSemana({ lang }: { lang: Lang }) {
  const { diaVsSemana } = getContenido(lang)

  return (
    <section className="seccion" id="dia-vs-semana">
      <div className="contenedor">
        <SectionHeader className="revelar" eyebrow={diaVsSemana.eyebrow} titulo={diaVsSemana.titulo} bajada={diaVsSemana.bajada} />

        <div className="modalidades">
          {diaVsSemana.modalidades.map((modalidad) => (
            <article
              className={modalidad.destacada ? 'modalidad modalidad--destacada revelar' : 'modalidad revelar'}
              key={modalidad.titulo}
            >
              <h3>{modalidad.titulo}</h3>
              <p className="modalidad__resumen">{modalidad.resumen}</p>

              <dl className="modalidad__filas">
                {modalidad.filas.map((fila) => (
                  <div key={fila.etiqueta}>
                    <dt>{fila.etiqueta}</dt>
                    <dd>{fila.valor}</dd>
                  </div>
                ))}
              </dl>

              <p className="modalidad__para-quien">{modalidad.paraQuien}</p>
            </article>
          ))}
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
