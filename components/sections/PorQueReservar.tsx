import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { externos } from '@/content/site'
import { pasosReserva, porQueReservar } from '@/content/visita'

export function PorQueReservar() {
  const { reparto } = porQueReservar

  return (
    <section className="seccion seccion--oscura reservar" id="reservar">
      <div className="reservar__fondo" aria-hidden="true">
        <Image
          src={porQueReservar.fondo.src}
          alt=""
          width={porQueReservar.fondo.width}
          height={porQueReservar.fondo.height}
          sizes="100vw"
        />
      </div>

      <div className="contenedor">
        <div className="reservar__grid">
          <div className="revelar">
            <p className="eyebrow eyebrow--claro">{porQueReservar.eyebrow}</p>
            <h2>{porQueReservar.titulo}</h2>
            <p className="lead">{porQueReservar.bajada}</p>
            <p className="reservar__parrafo">{porQueReservar.parrafo}</p>

            <div className="reparto">
              <p className="reparto__titulo">{reparto.titulo}</p>
              <div className="reparto__barra" role="img" aria-label="50% conservación, 50% infraestructura para visitantes">
                <span />
                <span />
              </div>
              <ul className="reparto__leyenda">
                <li>
                  <span className="reparto__punto reparto__punto--bosque" />
                  {reparto.conservacion}
                </li>
                <li>
                  <span className="reparto__punto reparto__punto--rio" />
                  {reparto.infraestructura}
                </li>
              </ul>
            </div>

            <div className="reservar__acciones">
              <Boton href={externos.reservas} variante="claro">
                Ir a reservas
              </Boton>
              <Boton href={externos.donar} variante="fantasma">
                Donar
              </Boton>
            </div>
          </div>

          <ol className="reservar__pasos revelar">
            {pasosReserva.map((paso, i) => (
              <li className="paso" key={paso.titulo}>
                <span className="paso__num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{paso.titulo}</h3>
                  <p>{paso.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
