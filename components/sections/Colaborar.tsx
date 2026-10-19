import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Boletin } from './Boletin'
import { aportes, introColaborar } from '@/content/proyectos'

export function Colaborar() {
  return (
    <section className="seccion" id="colaborar">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          centrado
          eyebrow={introColaborar.eyebrow}
          titulo={introColaborar.titulo}
          bajada={introColaborar.bajada}
        />

        <div className="colaborar">
          {aportes.map((aporte) => (
            <article className={aporte.destacado ? 'aporte aporte--destacado revelar' : 'aporte revelar'} key={aporte.titulo}>
              <div className="aporte__icono">
                <Icon name={aporte.icono} />
              </div>
              <h3>{aporte.titulo}</h3>
              <p>{aporte.texto}</p>
              <Boton href={aporte.cta.href} variante={aporte.destacado ? 'claro' : 'borde'}>
                {aporte.cta.label}
              </Boton>
            </article>
          ))}
        </div>

        <Boletin />
      </div>
    </section>
  )
}
