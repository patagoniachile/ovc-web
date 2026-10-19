import Image from 'next/image'
import { EnlaceFlecha } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

export function Planifica({ lang }: { lang: Lang }) {
  const { fichasPlanificacion, fotoNormas, normas, normasEncabezado, planificaEncabezado } = getContenido(lang)

  return (
    <section className="seccion" id="normas">
      <div className="contenedor">
        <SectionHeader className="revelar" {...planificaEncabezado} />

        <div className="planifica">
          {fichasPlanificacion.map((ficha) => (
            <article className={ficha.alerta ? 'ficha ficha--alerta revelar' : 'ficha revelar'} key={ficha.titulo}>
              <div className="ficha__icono">
                <Icon name={ficha.icono} />
              </div>
              <h3>{ficha.titulo}</h3>
              <p>
                <RichText>{ficha.texto}</RichText>
              </p>

              {ficha.datos && (
                <ul className="ficha__datos">
                  {ficha.datos.map((dato) => (
                    <li key={dato.etiqueta}>
                      <b>{dato.etiqueta}</b>
                      {dato.valor}
                    </li>
                  ))}
                </ul>
              )}

              {ficha.enlace && <EnlaceFlecha href={ficha.enlace.href}>{ficha.enlace.label}</EnlaceFlecha>}
            </article>
          ))}
        </div>

        <div className="normas">
          <div className="revelar">
            <p className="eyebrow">{normasEncabezado.eyebrow}</p>
            <h2 className="titulo--compacto">{normasEncabezado.titulo}</h2>

            <ol className="normas__lista">
              {normas.map((norma) => (
                <li key={norma.titulo}>
                  <span>
                    <strong>{norma.titulo}</strong>
                    <span>{norma.detalle}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <figure className="normas__figura revelar">
            <Image
              src={fotoNormas.src}
              alt={fotoNormas.alt}
              width={fotoNormas.width}
              height={fotoNormas.height}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
