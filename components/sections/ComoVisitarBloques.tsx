import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
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

        <div className={comoLlegar.medios.length === 2 ? 'transportes transportes--dos' : 'transportes'}>
          {comoLlegar.medios.map((medio) => (
            <article className={medio.destacado ? 'transporte transporte--destacado revelar' : 'transporte revelar'} key={medio.titulo}>
              <div className="transporte__icono">
                <Icon name={medio.icono} />
              </div>
              <h3>{medio.titulo}</h3>
              {medio.texto && <p>{medio.texto}</p>}

              {medio.advertencia && (
                <div className="transporte__advertencia">
                  <p className="transporte__advertencia-titulo">
                    <Icon name="alerta" />
                    {medio.advertencia.titulo}
                  </p>
                  <ul>
                    {medio.advertencia.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {medio.ejemplo && (
                <>
                  <h4 className="transporte__subtitulo">{medio.ejemplo.titulo}</h4>
                  <ol className="transporte__pasos">
                    {medio.ejemplo.pasos.map((paso) => (
                      <li key={paso}>
                        <RichText>{paso}</RichText>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              {medio.tituloContactos && <h4 className="transporte__subtitulo">{medio.tituloContactos}</h4>}
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
            <li className={costo.destacado ? 'costo costo--destacado revelar' : 'costo revelar'} key={costo.concepto}>
              <h3>{costo.concepto}</h3>
              <p className="costo__valor">
                {costo.valor}
                {costo.unidad && <small>{costo.unidad}</small>}
              </p>
              <p>{costo.detalle}</p>
            </li>
          ))}
        </ul>

        {cuantoCuesta.reparto && (
          <div className="costos__reparto reparto reparto--claro revelar">
            <p className="reparto__titulo">{cuantoCuesta.reparto.titulo}</p>
            <div className="reparto__barra" role="img" aria-label={cuantoCuesta.reparto.etiquetaGrafico}>
              <span />
              <span />
            </div>
            <ul className="reparto__leyenda">
              <li>
                <span className="reparto__punto reparto__punto--bosque" />
                {cuantoCuesta.reparto.conservacion}
              </li>
              <li>
                <span className="reparto__punto reparto__punto--rio" />
                {cuantoCuesta.reparto.infraestructura}
              </li>
            </ul>
          </div>
        )}

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
  const { tabla } = horariosYContacto

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
          {tabla ? (
            <div className="horarios__grilla revelar">
              <table>
                <thead>
                  <tr>
                    {tabla.columnas.map((columna) => (
                      <th scope="col" key={columna}>{columna}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tabla.filas.map((fila) => (
                    <tr className={fila.destacada ? 'horarios__fila--destacada' : undefined} key={fila.accion}>
                      <th scope="row" data-columna={tabla.columnas[0]}>{fila.accion}</th>
                      <td data-columna={tabla.columnas[1]}>
                        <span className="horarios__franja">{fila.ingreso}</span>
                        {fila.ingresoDetalle && <span className="horarios__ingreso-detalle">{fila.ingresoDetalle}</span>}
                      </td>
                      <td data-columna={tabla.columnas[2]}>{fila.condicion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <ul className="horarios__tabla revelar">
              {horariosYContacto.horarios.map((h) => (
                <li key={h.franja + h.detalle}>
                  <span className="horarios__franja">{h.franja}</span>
                  <span className="horarios__detalle">{h.detalle}</span>
                </li>
              ))}
            </ul>
          )}

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
