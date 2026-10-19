'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, payku, type Lang } from '@/content'

/** A partir de aquí ofrecemos abrirlo fuera: algo va mal o va muy lento. */
const ESPERA_ANTES_DE_OFRECER_SALIDA = 8000

type Estado = 'cargando' | 'listo' | 'lento'

/**
 * Formulario de suscripción mensual alojado por Payku.
 *
 * Es el mismo que la corporación ya usaba en vallecochamo.org, y su botón dice
 * "Hazte Socio": este formulario *es* la inscripción de socios.
 *
 * Payku identifica a quien se suscribe por el nombre, apellido, correo y
 * teléfono que la persona escribe aquí dentro. Desde este sitio no se le envía
 * ningún dato: el iframe solo muestra su página.
 *
 * Sobre el sandbox: lleva `allow-same-origin` a propósito. Sin él, el
 * documento recibe un origen opaco y pierde cookies y almacenamiento, que es
 * lo que necesita para mantener la sesión al pasar a la pantalla de la
 * tarjeta. Combinarlo con `allow-scripts` solo sería riesgoso si el marco
 * fuera de nuestro propio origen; al ser payku.cl, sigue aislado.
 */
export function SuscripcionPayku({ lang, nota }: { lang: Lang; nota: string }) {
  const { textos } = getContenido(lang)
  const [estado, setEstado] = useState<Estado>('cargando')
  const temporizador = useRef(0)

  // El marco se monta recién en el cliente. Si viniera en el HTML del servidor
  // podría terminar de cargar antes de que React hidrate: el `load` se
  // perdería y la capa de espera quedaría tapando un formulario que ya
  // funciona. Montándolo después de hidratar, el oyente siempre llega primero.
  const montado = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  useEffect(() => {

    // Si a los ocho segundos no ha cargado, ofrecemos abrirlo fuera. Puede ser
    // una conexión lenta o que la pasarela no acepte mostrarse embebida; en
    // cualquier caso, mejor una salida que un marco en blanco.
    temporizador.current = window.setTimeout(() => {
      setEstado((actual) => (actual === 'cargando' ? 'lento' : actual))
    }, ESPERA_ANTES_DE_OFRECER_SALIDA)

    return () => window.clearTimeout(temporizador.current)
  }, [])

  const alCargar = () => {
    window.clearTimeout(temporizador.current)
    setEstado('listo')
  }

  return (
    <>
      {/* Abre la conexión antes de que el iframe la necesite */}
      <link rel="preconnect" href="https://suscripciones.payku.cl" />
      <link rel="dns-prefetch" href="https://suscripciones.payku.cl" />

      <p className="payku__nota revelar">
        <Icon name="check" />
        {nota}
      </p>

      <div className="payku revelar" data-estado={estado}>
        {montado && (
          <iframe
            src={payku.formularioSuscripcion}
            title="Payku"
            onLoad={alCargar}
            sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation-by-user-activation"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}

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
      </div>

      <p className="payku__respaldo revelar">
        {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
      </p>
    </>
  )
}
