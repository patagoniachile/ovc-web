import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { getContenido, imagenes, type Lang } from '@/content'

export function Hero({ lang }: { lang: Lang }) {
  const { hero, heroResumen, textos } = getContenido(lang)

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
            <Boton href={`/${lang}/como-visitar`} variante="claro">
              {textos.quieroIr}
              <Icon name="flecha" />
            </Boton>
            <Boton href="#el-valle" variante="fantasma">
              {textos.conocerElValle}
            </Boton>
          </div>

          {/* Qué es, dónde está y qué se hace, de un vistazo */}
          <dl className="hero__resumen">
            {heroResumen.map((dato) => (
              <div key={dato.etiqueta}>
                <dt>{dato.etiqueta}</dt>
                <dd>{dato.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__pie">
          <p className="hero__credito">{hero.pieIzquierda}</p>
          <p>{hero.pieDerecha}</p>
        </div>
      </div>
    </section>
  )
}
