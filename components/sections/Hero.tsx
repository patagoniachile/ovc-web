import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { externos, getContenido, imagenes, type Lang } from '@/content'

export function Hero({ lang }: { lang: Lang }) {
  const { hero, textos } = getContenido(lang)

  return (
    <section className="hero" id="inicio">
      <div className="hero__media">
        <Image src={imagenes.hero.src} alt={hero.alt} width={imagenes.hero.width} height={imagenes.hero.height} priority sizes="100vw" />
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
              {textos.reservarEstadia}
              <Icon name="flecha" />
            </Boton>
            <Boton href="#historia" variante="fantasma">
              {textos.conocerHistoria}
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
