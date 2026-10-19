import { hitos, introHistoria } from '@/content/historia'

export function Historia() {
  return (
    <section className="seccion seccion--alt" id="historia">
      <div className="contenedor">
        <div className="historia">
          <div className="historia__intro revelar">
            <p className="eyebrow">{introHistoria.eyebrow}</p>
            <h2>{introHistoria.titulo}</h2>
            <p className="lead">{introHistoria.bajada}</p>

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
