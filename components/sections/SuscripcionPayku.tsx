'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, payku, type Lang } from '@/content'

/** La página de Payku pinta su formulario después del evento `load`. */
const GRACIA_TRAS_CARGAR = 900
/** A partir de aquí ofrecemos abrirlo fuera: algo va mal o va muy lento. */
const ESPERA_ANTES_DE_OFRECER_SALIDA = 8000

type Estado = 'inactivo' | 'cargando' | 'lento' | 'listo'

/**
 * Formulario de suscripción mensual alojado por Payku.
 *
 * Es el mismo que la corporación ya usaba en vallecochamo.org, y su botón dice
 * "Hazte Socio": este formulario *es* la inscripción de socios. Payku
 * identifica a quien se suscribe por los datos que la persona escribe dentro;
 * desde este sitio no se le envía nada.
 *
 * El marco NO se carga al entrar, sino al pulsar el botón. La razón es
 * concreta y medida: el evento `load` del iframe dispara a los ~440 ms, pero
 * la página de Payku arma su formulario con JavaScript después de ese evento.
 * Cargándolo de entrada, el visitante veía un recuadro blanco de 720px durante
 * un rato, y ocultar la capa de espera al recibir `load` lo destapaba antes de
 * tiempo. Esperar "un poquito más" era adivinar; así no hay hueco que tapar.
 *
 * Sobre el sandbox: lleva `allow-same-origin` a propósito. Sin él, el
 * documento recibe un origen opaco y pierde cookies y almacenamiento, que es
 * lo que necesita para mantener la sesión al pasar a la pantalla de la
 * tarjeta. Combinarlo con `allow-scripts` solo sería riesgoso si el marco
 * fuera de nuestro propio origen; al ser payku.cl, sigue aislado.
 */
export function SuscripcionPayku({ lang, nota, montos }: { lang: Lang; nota: string; montos: string[] }) {
  const { textos } = getContenido(lang)
  const [estado, setEstado] = useState<Estado>('inactivo')
  const temporizadores = useRef<number[]>([])

  useEffect(() => {
    const pendientes = temporizadores.current
    return () => pendientes.forEach(window.clearTimeout)
  }, [])

  const abrir = () => {
    setEstado('cargando')
    temporizadores.current.push(
      window.setTimeout(() => {
        setEstado((actual) => (actual === 'cargando' ? 'lento' : actual))
      }, ESPERA_ANTES_DE_OFRECER_SALIDA),
    )
  }

  const alCargar = () => {
    // El documento ya llegó, pero el formulario se dibuja un instante después.
    temporizadores.current.push(window.setTimeout(() => setEstado('listo'), GRACIA_TRAS_CARGAR))
  }

  return (
    <>
      {/* Abre la conexión antes de que el marco la necesite */}
      <link rel="preconnect" href="https://suscripciones.payku.cl" />
      <link rel="dns-prefetch" href="https://suscripciones.payku.cl" />

      <p className="payku__nota revelar">
        <Icon name="check" />
        {nota}
      </p>

      <div className="payku revelar" data-estado={estado}>
        {estado === 'inactivo' ? (
          <div className="payku__portada">
            <ul className="payku__montos">
              {montos.map((monto) => (
                <li key={monto}>{monto}</li>
              ))}
            </ul>
            <button type="button" className="btn btn--rio" onClick={abrir}>
              {textos.abrirFormulario}
            </button>
            <a className="payku__fuera" href={payku.formularioSuscripcion} target="_blank" rel="noopener noreferrer">
              {textos.abrirEnPestana}
            </a>
          </div>
        ) : (
          <>
            <iframe
              src={payku.formularioSuscripcion}
              title="Payku"
              onLoad={alCargar}
              sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation-by-user-activation"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {estado !== 'listo' && (
              <div className="payku__espera" aria-live="polite">
                <span className="payku__girador" aria-hidden="true" />
                <p>{estado === 'lento' ? textos.formularioTarda : textos.cargandoFormulario}</p>
                {estado === 'lento' && (
                  <a className="btn btn--rio btn--sm" href={payku.formularioSuscripcion} target="_blank" rel="noopener noreferrer">
                    {textos.abrirEnPestana}
                  </a>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <p className="payku__respaldo revelar">
        {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
      </p>
    </>
  )
}
