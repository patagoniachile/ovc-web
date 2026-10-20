import Image from 'next/image'
import { Boton, esExterno } from '@/components/ui/Boton'
import { Carrusel } from '@/components/ui/Carrusel'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, imagenes, type Lang } from '@/content'

export function Proyectos({ lang, modo }: { lang: Lang; modo: 'desafios' | 'logros' | 'portada' }) {
  const { introProyectos, llamadoProyectos, logroImportante, logros, logrosEncabezado, logrosPortadaTitulo, proyectos, textos } =
    getContenido(lang)

  /*
   * En la portada las obras van en una fila que se desliza, montada a medias
   * sobre la franja verde. El santuario no entra: ya tiene su tarjeta propia
   * justo arriba, en Impacto, y por eso el título habla de "otros" proyectos.
   */
  if (modo === 'portada') {
    return (
      <section className="obras" id="logros">
        <div className="contenedor">
          <h2 className="obras__titulo revelar">{logrosPortadaTitulo}</h2>

          <Carrusel anterior={textos.anterior} siguiente={textos.siguiente}>
            {logros
              .filter((logro) => logro.href !== logroImportante.cta.href)
              .map((logro) => {
                const foto = imagenes[logro.imagen]
                return (
                  <a
                    className="obra"
                    key={logro.label}
                    href={logro.href}
                    {...(esExterno(logro.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="obra__foto">
                      <Image src={foto.src} alt={logro.alt} width={foto.width} height={foto.height} sizes="260px" />
                    </span>
                    <strong>{logro.label}</strong>
                    <span className="obra__texto">{logro.texto}</span>
                    <span className="obra__mas">{textos.verMas}</span>
                  </a>
                )
              })}
          </Carrusel>
        </div>
      </section>
    )
  }

  if (modo === 'logros') {
    return (
      <section className="seccion seccion--alt" id="logros">
        <div className="contenedor">
          <SectionHeader className="revelar" {...logrosEncabezado} />

          <div className="logros">
            {logros.map((logro) => {
              const foto = imagenes[logro.imagen]
              return (
                <a
                  className="logro revelar"
                  key={logro.label}
                  href={logro.href}
                  {...(esExterno(logro.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="logro__foto">
                    <Image
                      src={foto.src}
                      alt={logro.alt}
                      width={foto.width}
                      height={foto.height}
                      sizes="(max-width: 700px) 86vw, (max-width: 1100px) 44vw, 23vw"
                    />
                  </span>
                  <span className="logro__cuerpo">
                    <strong>{logro.label}</strong>
                    <span className="logro__texto">{logro.texto}</span>
                    <span className="logro__mas">{textos.verMas}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="seccion" id="proyectos">
      <div className="contenedor">
        <SectionHeader className="revelar" {...introProyectos} />

        <div className="proyectos">
          {proyectos.map((proyecto) => (
            <article className="proyecto revelar" key={proyecto.titulo}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.texto}</p>
            </article>
          ))}

          <article className="proyecto proyecto--llamado revelar">
            <h3>{llamadoProyectos.titulo}</h3>
            <p>{llamadoProyectos.texto}</p>
            <Boton href={llamadoProyectos.cta.href} pequeno>
              {llamadoProyectos.cta.label}
            </Boton>
          </article>
        </div>

      </div>
    </section>
  )
}
