'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, imagenes, payku, type Lang } from '@/content'

/**
 * La página de Payku pinta su formulario con JavaScript DESPUÉS del evento
 * `load`, y no hay forma de saber desde fuera cuándo terminó: es otro origen.
 * Esta espera es el margen que le damos; si se ve el formulario a medio armar,
 * hay que subirla, no bajarla.
 */
const GRACIA_TRAS_CARGAR = 1600
/** A partir de aquí ofrecemos abrirlo fuera: algo va mal o va muy lento. */
const ESPERA_ANTES_DE_OFRECER_SALIDA = 8000

type Estado = 'cargando' | 'lento' | 'listo'

/**
 * Formulario de suscripción mensual alojado por Payku.
 *
 * Es el mismo que la corporación ya usaba en vallecochamo.org, y su botón dice
 * "Hazte Socio": este formulario *es* la inscripción de socios. Payku
 * identifica a quien se suscribe por los datos que la persona escribe dentro;
 * desde este sitio no se le envía nada.
 *
 * Tres cosas aprendidas a la mala, por si alguien quiere "simplificar":
 *
 * 1. El marco carga de entrada, no al pulsar un botón. Cargarlo bajo demanda
 *    quitaba el hueco inicial pero trasladaba la espera al clic, que se siente
 *    peor porque el visitante ya decidió.
 * 2. Mientras carga se muestra un esqueleto con la forma del formulario. El
 *    evento `load` dispara a los ~440 ms pero Payku arma su formulario con JS
 *    *después*, así que destapar al recibir `load` deja ver un marco vacío: de
 *    ahí la gracia corta.
 * 3. El marco se monta recién tras hidratar. Si viniera en el HTML del
 *    servidor podría cargar antes de que React hidratara, el `load` se
 *    perdería y el esqueleto se quedaría tapando un formulario que ya sirve.
 *
 * Sobre el sandbox: lleva `allow-same-origin` a propósito. Sin él, el
 * documento recibe un origen opaco y pierde cookies y almacenamiento, que es
 * lo que necesita para mantener la sesión al pasar a la pantalla de la
 * tarjeta. Combinarlo con `allow-scripts` solo sería riesgoso si el marco
 * fuera de nuestro propio origen; al ser payku.cl, sigue aislado.
 */
export function SuscripcionPayku({ lang, nota, montos }: { lang: Lang; nota: string; montos: string[] }) {
  const { textos } = getContenido(lang)
  const [estado, setEstado] = useState<Estado>('cargando')
  const temporizadores = useRef<number[]>([])

  const montado = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  useEffect(() => {
    const pendientes = temporizadores.current
    pendientes.push(
      window.setTimeout(() => {
        setEstado((actual) => (actual === 'cargando' ? 'lento' : actual))
      }, ESPERA_ANTES_DE_OFRECER_SALIDA),
    )
    return () => pendientes.forEach(window.clearTimeout)
  }, [])

  const alCargar = () => {
    // El documento ya llegó, pero el formulario se dibuja un instante después.
    temporizadores.current.push(window.setTimeout(() => setEstado('listo'), GRACIA_TRAS_CARGAR))
  }

  return (
    <>
      {/* Abre la conexión antes de que el marco la necesite */}
      <link rel="preconnect" href="https://suscripciones.payku.cl" />
      <link rel="dns-prefetch" href="https://suscripciones.payku.cl" />

      <div className="pasarela revelar" data-estado={estado}>
        <header className="pasarela__barra">
          <span className="pasarela__sello">
            <Icon name="check" />
            {textos.pagoSeguroPor}
          </span>
          <Image
            src={imagenes.payku.src}
            alt="Payku"
            width={imagenes.payku.width}
            height={imagenes.payku.height}
            className="pasarela__logo"
          />
        </header>

        <div className="pasarela__lienzo">
          {montado && (
            <iframe
              className="pasarela__marco"
              src={payku.formularioSuscripcion}
              title="Payku"
              onLoad={alCargar}
              sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-top-navigation-by-user-activation"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}

          {estado !== 'listo' && (
            <div className="esqueleto" aria-live="polite">
              {/* Imita la forma del formulario para que la espera no sea un vacío */}
              <ul className="esqueleto__montos">
                {montos.map((monto) => (
                  <li key={monto}>{monto}</li>
                ))}
              </ul>
              <span className="esqueleto__barra" />
              <span className="esqueleto__barra" />
              <span className="esqueleto__barra" />
              <span className="esqueleto__barra" />
              <span className="esqueleto__boton" />

              <p className="esqueleto__aviso">
                {estado === 'lento' ? textos.formularioTarda : textos.cargandoFormulario}
              </p>
              {estado === 'lento' && (
                <a className="btn btn--rio btn--sm" href={payku.formularioSuscripcion} target="_blank" rel="noopener noreferrer">
                  {textos.abrirEnPestana}
                </a>
              )}
            </div>
          )}
        </div>

        <footer className="pasarela__pie">
          <Icon name="alerta" />
          {nota}
        </footer>
      </div>

      <p className="payku__respaldo revelar">
        {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
      </p>
    </>
  )
}
