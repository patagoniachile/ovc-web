import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { externos, hero } from '@/content/site'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media">
        <Image
          src={hero.foto.src}
          alt={hero.foto.alt}
          width={hero.foto.width}
          height={hero.foto.height}
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__velo" aria-hidden="true" />

      <div className="contenedor">
        <div className="hero__contenido">
          <h1>
            <em>{hero.sobretitulo}</em>
            {hero.titulo.map((linea, i) => (
              <span key={linea}>
                {linea}
                {i < hero.titulo.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="hero__bajada">{hero.bajada}</p>

          <div className="hero__acciones">
            <Boton href={externos.reservas} variante="claro">
              Reservar mi estadía
              <Icon name="flecha" />
            </Boton>
            <Boton href="#historia" variante="fantasma">
              Conoce nuestra historia
            </Boton>
          </div>
        </div>

        <div className="hero__pie">
          <p className="hero__credito">{hero.pieIzquierda}</p>
          <p>{hero.pieDerecha}</p>
        </div>
      </div>
    </section>
  )
}
