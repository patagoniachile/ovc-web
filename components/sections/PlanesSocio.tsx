'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, LOCALE, payku, planesPayku, type Lang } from '@/content'

type Periodo = 'mensual' | 'anual'

/**
 * Los cuatro niveles de socio, con el precio anual y el mensual.
 *
 * El ahorro del plan anual se calcula aquí a partir de los dos montos, no se
 * escribe a mano: si alguien cambia un precio en el contenido, el porcentaje
 * se corrige solo en vez de quedar mintiendo.
 *
 * Cada botón lleva a la página del plan en Payku, que ya muestra el monto, la
 * periodicidad y las fechas de cobro antes de pedir nada. Es una navegación
 * normal, no un marco: la persona ve `payku.cl` en la barra de direcciones
 * cuando le toca escribir la tarjeta, que es justo cuando conviene que lo vea.
 *
 * Un plan sin enlace cae al formulario de contacto en vez de dejar un botón
 * muerto, así que la página funciona completa aunque falte dar de alta alguno.
 */
export function PlanesSocio({ lang, destino }: { lang: Lang; destino: string }) {
  const { sociosPagina } = getContenido(lang)
  const { planes } = sociosPagina
  const [periodo, setPeriodo] = useState<Periodo>('anual')

  const moneda = new Intl.NumberFormat(LOCALE[lang], {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  })

  return (
    <section className="seccion seccion--alt" id="planes">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...planes.encabezado} />

        <div className="periodo revelar" role="group" aria-label={planes.encabezado.titulo}>
          {(['mensual', 'anual'] as const).map((opcion) => (
            <button
              key={opcion}
              type="button"
              className={periodo === opcion ? 'periodo__opcion esta-activa' : 'periodo__opcion'}
              aria-pressed={periodo === opcion}
              onClick={() => setPeriodo(opcion)}
            >
              {planes[opcion]}
            </button>
          ))}
        </div>

        <div className="planes">
          {planes.lista.map((plan) => {
            const enlace = planesPayku[plan.id]?.[periodo]
            const anualSuelto = plan.mensual * 12
            const ahorro = Math.round(((anualSuelto - plan.anual) / anualSuelto) * 100)
            const clases = [
              'plan',
              plan.destacado && 'plan--destacado',
              plan.mecenas && 'plan--mecenas',
              'revelar',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article className={clases} key={plan.id}>
                <h3>{plan.nombre}</h3>
                <p className="plan__subtitulo">{plan.subtitulo}</p>

                <p className="plan__precio">
                  {moneda.format(periodo === 'anual' ? plan.anual : plan.mensual)}
                  <span>{periodo === 'anual' ? planes.alAnio : planes.alMes}</span>
                </p>

                {periodo === 'anual' ? (
                  <p className="plan__equivalente">
                    <span className="plan__ahorro">{planes.ahorro(ahorro)}</span>
                    {moneda.format(plan.mensual)} {planes.alMes}
                  </p>
                ) : (
                  <p className="plan__equivalente">
                    {moneda.format(plan.anual)} {planes.alAnio}
                  </p>
                )}

                <ul className="plan__beneficios">
                  {plan.beneficios.map((beneficio) => (
                    <li key={beneficio}>
                      <Icon name="check" />
                      {beneficio}
                    </li>
                  ))}
                </ul>

                <a
                  className="btn btn--rio btn--recto plan__cta"
                  href={enlace ? payku.enlacePlan(enlace) : destino}
                >
                  {planes.elegir} {plan.nombre}
                </a>
              </article>
            )
          })}
        </div>

        <p className="planes__respaldo revelar">{planes.respaldo}</p>
      </div>
    </section>
  )
}
