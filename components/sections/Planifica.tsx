import Image from 'next/image'
import { EnlaceFlecha } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { RichText } from '@/components/ui/RichText'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { fichasPlanificacion, fotoNormas, normas } from '@/content/visita'

export function Planifica() {
  return (
    <section className="seccion" id="planifica">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          eyebrow="Antes de ir"
          titulo="Saber antes de salir"
          bajada="No hay rescatistas ni servicios de emergencia en el valle. Lo que lleves y lo que sepas es toda la seguridad con la que cuentas."
        />

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

        <div className="normas" id="normas">
          <div className="revelar">
            <p className="eyebrow">Normas básicas</p>
            <h2 className="titulo--compacto">Seis reglas que no se negocian</h2>

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
