'use client'

import { useState } from 'react'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { cuentaBancaria, getContenido, type Lang } from '@/content'

/** Fila copiable de los datos bancarios. */
function Dato({ etiqueta, valor, copiable = true, lang }: { etiqueta: string; valor: string; copiable?: boolean; lang: Lang }) {
  const { textos } = getContenido(lang)
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(valor)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 1800)
    } catch {
      // Sin permiso de portapapeles el valor sigue estando a la vista.
    }
  }

  return (
    <div className="dato-cuenta">
      <dt>{etiqueta}</dt>
      <dd>
        <span>{valor}</span>
        {copiable && (
          <button type="button" onClick={copiar} className="dato-cuenta__copiar">
            {copiado ? textos.copiado : textos.copiar}
          </button>
        )}
      </dd>
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
      <section className="seccion" id="transferencia">
        <div className="contenedor">
          <h2 className="titulo--compacto revelar">{donarPagina.tituloCuenta}</h2>
          <p className="lead revelar">{donarPagina.intro}</p>

          <dl className="cuenta revelar">
            <Dato lang={lang} etiqueta="Banco" valor={cuentaBancaria.banco} copiable={false} />
            <Dato lang={lang} etiqueta={cuentaBancaria.tipo} valor={cuentaBancaria.numero} />
            <Dato lang={lang} etiqueta="RUT" valor={cuentaBancaria.rut} />
            <Dato lang={lang} etiqueta="Titular" valor={cuentaBancaria.titular} />
            <Dato lang={lang} etiqueta="BIC / SWIFT" valor={cuentaBancaria.swift} />
            <Dato lang={lang} etiqueta="Email" valor={cuentaBancaria.email} />
          </dl>

          <div className="revelar">
            <CopiarTodo lang={lang} />
          </div>

          <div className="reparto reparto--claro revelar">
            <p className="reparto__titulo">{donarPagina.reparto.titulo}</p>
            <div className="reparto__barra" role="img" aria-label={donarPagina.reparto.titulo}>
              <span />
              <span />
            </div>
            <ul className="reparto__leyenda">
              <li>
                <span className="reparto__punto reparto__punto--bosque" />
                {donarPagina.reparto.conservacion}
              </li>
              <li>
                <span className="reparto__punto reparto__punto--rio" />
                {donarPagina.reparto.infraestructura}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* La otra vía, claramente separada de la transferencia */}
      <section className="seccion">
        <div className="contenedor">
          <div className="otra-via revelar">
            <div>
              <h2 className="titulo--compacto">{donarPagina.otraVia.titulo}</h2>
              <p>{donarPagina.otraVia.texto}</p>
            </div>
            <Boton href="#socios" variante="rio">
              {donarPagina.otraVia.cta.label}
            </Boton>
          </div>
        </div>
      </section>
    </>
  )
}
