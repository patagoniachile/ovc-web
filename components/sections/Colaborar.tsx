import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Boletin } from './Boletin'
import { getContenido, type Lang } from '@/content'

export function Colaborar({ lang }: { lang: Lang }) {
  const { aportes, introColaborar } = getContenido(lang)

  return (
    <section className="seccion" id="colaborar">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...introColaborar} />

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

        <Boletin lang={lang} />
      </div>
    </section>
  )
}
