import Image from 'next/image'
import { EnlaceFlecha } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { queProtege, santuario } from '@/content/conservacion'

export function Santuario() {
  return (
    <section className="seccion" id="santuario">
      <div className="contenedor">
        <div className="santuario">
          <figure className="santuario__figura revelar">
            <Image
              src={santuario.foto.src}
              alt={santuario.foto.alt}
              width={santuario.foto.width}
              height={santuario.foto.height}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <figcaption className="santuario__sello">
              <strong>{santuario.hectareas}</strong>
              <span>{santuario.hectareasPie}</span>
            </figcaption>
          </figure>

          <div className="revelar">
            <p className="eyebrow">{santuario.eyebrow}</p>
            <h2>{santuario.titulo}</h2>
            <p className="lead">{santuario.bajada}</p>
            <p>{santuario.parrafo}</p>

            <ul className="protege">
              {queProtege.map((item) => (
                <li key={item.texto}>
                  <Icon name={item.icono} />
                  {item.texto}
                </li>
              ))}
            </ul>

            <EnlaceFlecha className="santuario__enlace" href={santuario.enlace.href}>
              {santuario.enlace.label}
            </EnlaceFlecha>
          </div>
        </div>
      </div>
    </section>
  )
}
