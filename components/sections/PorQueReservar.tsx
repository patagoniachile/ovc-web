import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { externos, getContenido, imagenes, type Lang } from '@/content'

export function PorQueReservar({ lang }: { lang: Lang }) {
  const { pasosReserva, porQueReservar, textos } = getContenido(lang)
  const { reparto } = porQueReservar

  return (
    <section className="seccion seccion--oscura reservar" id="reservar">
      <div className="reservar__fondo" aria-hidden="true">
        <Image
          src={imagenes.campingLaJunta.src}
          alt={porQueReservar.fondoAlt}
          width={imagenes.campingLaJunta.width}
          height={imagenes.campingLaJunta.height}
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
              <p className="reparto__titulo">{textos.repartoDonacion}</p>
              <div className="reparto__barra" role="img" aria-label={reparto.etiquetaGrafico}>
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
                {textos.irAReservas}
              </Boton>
              <Boton href={externos.donar} variante="fantasma">
                {textos.donar}
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
