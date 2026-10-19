import Image from 'next/image'
import Link from 'next/link'
import { esExterno } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { caminos } from '@/content/visita'

export function Caminos() {
  return (
    <section className="seccion" id="caminos">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          centrado
          eyebrow="Un solo lugar"
          titulo="Todo el valle, en una sola puerta de entrada"
          bajada="Reunimos aquí lo que antes estaba repartido: el sistema de reservas y la preparación del viaje, junto al trabajo de conservación que hace posible que el valle siga abierto."
        />

        <div className="caminos">
          {caminos.map((camino) => (
            <article className="camino revelar" key={camino.etiqueta}>
              <Image
                src={camino.foto.src}
                alt={camino.foto.alt}
                width={camino.foto.width}
                height={camino.foto.height}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
              <span className="camino__etiqueta">{camino.etiqueta}</span>
              <h3>{camino.titulo}</h3>
              <p>{camino.texto}</p>
              <div className="camino__lista">
                {camino.enlaces.map((enlace) =>
                  esExterno(enlace.href) ? (
                    <a key={enlace.label} href={enlace.href} target="_blank" rel="noopener noreferrer">
                      {enlace.label}
                    </a>
                  ) : (
                    <Link key={enlace.label} href={enlace.href}>
                      {enlace.label}
                    </Link>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
