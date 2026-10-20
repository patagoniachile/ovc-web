'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { cuentaBancaria, getContenido, type Lang } from '@/content'

/**
 * Una fila de los datos bancarios.
 *
 * Sin botón de copiar por fila: copiar seis cosas de a una es peor que
 * copiarlas todas juntas, que es lo que hace el botón de abajo, y seis
 * botones repetidos ensuciaban la lista justo cuando hay que leerla.
 */
function Dato({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div className="dato-cuenta">
      <dt>{etiqueta}</dt>
      <dd>{valor}</dd>
    </div>
  )
}

/** Copia la cuenta completa, que es lo que se pega en la app del banco. */
function CopiarTodo({ lang }: { lang: Lang }) {
  const { textos } = getContenido(lang)
  const [copiado, setCopiado] = useState(false)

  const lineas = [
    cuentaBancaria.titular,
    `RUT ${cuentaBancaria.rut}`,
    cuentaBancaria.banco,
    `${cuentaBancaria.tipo} ${cuentaBancaria.numero}`,
    cuentaBancaria.email,
  ].join('\n')

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(lineas)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2200)
    } catch {
      // Sin permiso de portapapeles los datos siguen a la vista, uno por uno.
    }
  }

  return (
    <button
      type="button"
      className={copiado ? 'copiar-todo esta-copiado' : 'copiar-todo'}
      onClick={copiar}
    >
      <span className="copiar-todo__icono">
        <Icon name={copiado ? 'check' : 'cartel'} />
      </span>
      <span>
        <strong>{copiado ? textos.copiadoTodo : textos.copiarTodo}</strong>
        <span className="copiar-todo__ayuda">{cuentaBancaria.banco} · {cuentaBancaria.numero}</span>
      </span>
    </button>
  )
}

export function Donar({ lang }: { lang: Lang }) {
  const { donarPagina } = getContenido(lang)

  return (
    <>
      {/* Transferencia */}
      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo--compacto revelar">{donarPagina.tituloCuenta}</h2>
          <p className="lead revelar">{donarPagina.intro}</p>

          <dl className="cuenta revelar">
            <Dato etiqueta="Banco" valor={cuentaBancaria.banco} />
            <Dato etiqueta={cuentaBancaria.tipo} valor={cuentaBancaria.numero} />
            <Dato etiqueta="RUT" valor={cuentaBancaria.rut} />
            <Dato etiqueta="Titular" valor={cuentaBancaria.titular} />
            <Dato etiqueta="BIC / SWIFT" valor={cuentaBancaria.swift} />
            <Dato etiqueta="Email" valor={cuentaBancaria.email} />
          </dl>

          <div className="revelar">
            <CopiarTodo lang={lang} />
          </div>

        </div>
      </section>

    </>
  )
}
