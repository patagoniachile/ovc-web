import { Boton } from '@/components/ui/Boton'
import { getContenido, type Lang } from '@/content'

/**
 * El cierre de la portada: una línea y dos botones.
 *
 * Antes aquí había una sección entera —por qué hace falta ayuda, a dónde va
 * el dinero y las dos vías para aportar— que repetía casi todo lo que hay en
 * Cómo ayudar. La portada no tiene que convencer: tiene que llevar.
 */
export function CierrePortada({ lang }: { lang: Lang }) {
  const { cierrePortada } = getContenido(lang)

  return (
    <section className="cierre" id="ayudar">
      <div className="contenedor">
        <h2 className="revelar">
          {cierrePortada.titulo}{' '}
          <span className="cierre__destacado">{cierrePortada.destacado}</span>
        </h2>

        <div className="cierre__acciones revelar">
          <Boton href={cierrePortada.donar.href} variante="claro">
            {cierrePortada.donar.label}
          </Boton>
          <Boton href={cierrePortada.proyectos.href} variante="fantasma">
            {cierrePortada.proyectos.label}
          </Boton>
        </div>
      </div>
    </section>
  )
}
