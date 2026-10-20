import Image from 'next/image'
import { Boton, esExterno } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, imagenes, type Lang } from '@/content'

export function Proyectos({ lang, modo }: { lang: Lang; modo: 'desafios' | 'logros' }) {
  const { introProyectos, llamadoProyectos, logros, logrosEncabezado, proyectos, textos } = getContenido(lang)

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
              <span className={`proyecto__estado estado--${proyecto.estado}`}>
                {proyecto.estado === 'activo' ? textos.enCurso : textos.logrado}
              </span>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.texto}</p>
            </article>
          ))}

          <article className="proyecto proyecto--llamado revelar">
            <h3>{llamadoProyectos.titulo}</h3>
            <p>{llamadoProyectos.texto}</p>
            <Boton href={llamadoProyectos.cta.href} variante="fuego" pequeno>
              {llamadoProyectos.cta.label}
            </Boton>
          </article>
        </div>

      </div>
    </section>
  )
}
