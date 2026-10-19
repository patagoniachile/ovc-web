import Image from 'next/image'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, imagenes, payku, type Lang } from '@/content'

/**
 * Qué pasa al elegir un plan: el traspaso a Payku, contado antes de que ocurra.
 *
 * Sustituye al formulario que antes se embebía en un marco. El marco tenía dos
 * problemas de los que no se sale: tardaba en pintarse —Payku arma el suyo con
 * JavaScript, y desde otro origen no hay manera de saber cuándo terminó— y al
 * enviarlo hacía `window.top.location.replace`, así que la página se abandonaba
 * igual, solo que de sorpresa.
 *
 * Avisar en vez de disimular sale mejor: se enumeran los tres pasos, se nombra
 * a Payku con su logo y la salida deja de ser un sobresalto. Es lo que hace
 * Puelo Patagonia con la misma pasarela.
 */
export function AporteConTarjeta({ lang }: { lang: Lang }) {
  const { sociosPagina, textos } = getContenido(lang)
  const { tarjeta } = sociosPagina

  return (
    <div className="traspaso revelar">
      <div className="traspaso__imagen">
        <Image
          src={imagenes.equipo.src}
          alt={tarjeta.alt}
          width={imagenes.equipo.width}
          height={imagenes.equipo.height}
          sizes="(max-width: 860px) 100vw, 44vw"
        />
      </div>

      <div className="traspaso__cuerpo">
        <ol className="traspaso__pasos">
          {tarjeta.pasos.map((paso, i) => (
            <li key={paso}>
              <span className="traspaso__numero">{i + 1}</span>
              {paso}
            </li>
          ))}
        </ol>

        <p className="traspaso__sello">
          <Icon name="check" />
          <span>{textos.pagoSeguroPor}</span>
          <Image
            src={imagenes.payku.src}
            alt="Payku"
            width={imagenes.payku.width}
            height={imagenes.payku.height}
            className="traspaso__logo"
          />
        </p>

        <div className="traspaso__libre">
          <p>{tarjeta.libre}</p>
          <Boton href={payku.formularioSuscripcion} variante="borde">
            {tarjeta.ctaLibre}
          </Boton>
        </div>

        <p className="traspaso__respaldo">
          {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
        </p>

        <p className="traspaso__nota">{sociosPagina.notaSuscripcion}</p>
      </div>
    </div>
  )
}
