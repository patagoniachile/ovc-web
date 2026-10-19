import { getContenido, type Lang } from '@/content'

/**
 * La línea de tiempo de la corporación.
 *
 * No repite el encabezado de la página: antes imprimía otra vez el eyebrow,
 * el título y la bajada que ya están arriba, de cuando esto vivía en la
 * portada y necesitaba presentarse solo.
 */
export function Historia({ lang }: { lang: Lang }) {
  const { hitos, introHistoria, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="historia">
      <div className="contenedor">
        <div className="historia">
          <div className="historia__intro revelar">
            <h2>{textos.lineaDeTiempo}</h2>

            <blockquote className="historia__cita">
              “{introHistoria.cita}”
              <cite>{introHistoria.citaFuente}</cite>
            </blockquote>
          </div>

          <ol className="linea">
            {hitos.map((hito) => (
              <li className={hito.destacado ? 'hito revelar hito--destacado' : 'hito revelar'} key={hito.titulo}>
                <p className="hito__anio">{hito.anio}</p>
                <h3>{hito.titulo}</h3>
                <p>{hito.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
