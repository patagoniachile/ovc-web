import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

export function Proyectos({ lang }: { lang: Lang }) {
  const { introProyectos, llamadoProyectos, logros, logrosEncabezado, proyectos, textos } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" id="proyectos">
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

        <div className="logros__bloque" id="logros">
          <SectionHeader className="revelar" compacto {...logrosEncabezado} />

          <div className="logros revelar">
            {logros.map((logro) => (
              <a className="logro" key={logro.label} href={logro.href} target="_blank" rel="noopener noreferrer">
                <Icon name={logro.icono} />
                {logro.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
