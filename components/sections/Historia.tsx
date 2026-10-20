import { MapaValle } from '@/components/sections/Mapa'
import { getContenido, type Lang } from '@/content'

/**
 * La línea de tiempo de la corporación, con el mapa del territorio al lado.
 *
 * No repite el encabezado de la página: antes imprimía otra vez el eyebrow,
 * el título y la bajada que ya están arriba, de cuando esto vivía en la
 * portada y necesitaba presentarse solo.
 *
 * El mapa va aquí y no en una sección aparte porque la historia nombra
 * sectores —La Junta, Lago Vidal, el inicio del sendero— que no le dicen
 * nada a quien no conoce el valle. Teniéndolo a la vista mientras se lee, la
 * línea de tiempo deja de ser una lista de fechas y pasa a ocurrir en algún
 * lugar.
 */
export function Historia({ lang }: { lang: Lang }) {
  const { hitos, introHistoria, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="historia">
      <div className="contenedor">
        <h2 className="historia__titulo revelar">{textos.lineaDeTiempo}</h2>
        <p className="historia__entrada revelar">{introHistoria.entrada}</p>

        <div className="historia__mapa revelar">
          <MapaValle lang={lang} />
        </div>

        <div className="historia">
          <div className="historia__intro revelar">
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
