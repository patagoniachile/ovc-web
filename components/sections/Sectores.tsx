import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { sectores } from '@/content/visita'

export function Sectores() {
  return (
    <section className="seccion seccion--alt" id="sectores">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          eyebrow="Visita"
          titulo="Tres sectores, tres formas de conocer el valle"
          bajada="Todos se reservan antes de llegar. Infórmate, programa y prepárate: el sendero es largo, hay mucho barro y el tiempo es impredecible."
        />

        <div className="sectores">
          {sectores.map((sector) => (
            <article className="sector revelar" key={sector.id}>
              <div className="sector__media">
                <Image
                  src={sector.foto.src}
                  alt={sector.foto.alt}
                  width={sector.foto.width}
                  height={sector.foto.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
                <span className="sector__insignia">{sector.insignia}</span>
              </div>

              <div className="sector__cuerpo">
                <h3>{sector.nombre}</h3>
                <p>{sector.descripcion}</p>

                <ul className="sector__datos">
                  {sector.datos.map((dato) => (
                    <li key={dato.texto}>
                      <Icon name={dato.icono} />
                      {dato.texto}
                    </li>
                  ))}
                </ul>

                <Boton href={sector.cta.href} variante={sector.cta.destacado ? 'rio' : 'borde'} pequeno>
                  {sector.cta.label}
                </Boton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
