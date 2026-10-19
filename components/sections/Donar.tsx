'use client'

import { useState } from 'react'
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
    <button type="button" className="btn btn--rio btn--sm cuenta__copiar-todo" onClick={copiar}>
      <Icon name={copiado ? 'check' : 'cartel'} />
      {copiado ? textos.copiadoTodo : textos.copiarTodo}
    </button>
  )
}

export function Donar({ lang }: { lang: Lang }) {
  const { donarPagina } = getContenido(lang)

  return (
    <>
      <section className="seccion">
        <div className="contenedor">
          <p className="lead revelar">{donarPagina.intro}</p>

          <div className="metodos revelar">
            {donarPagina.metodos.map((metodo) => (
              <article className="metodo" key={metodo.id}>
                <div className="metodo__icono">
                  <Icon name={metodo.icono} />
                </div>
                <h2>{metodo.titulo}</h2>
                <p>{metodo.texto}</p>
                <p className="metodo__ventaja">{metodo.ventaja}</p>
                <span className="metodo__comision">{metodo.comision}</span>
                {metodo.id === 'payku' && (
                  <a className="btn btn--rio btn--sm metodo__cta" href={`/${lang}/socios#suscribirme`}>
                    {donarPagina.tituloPayku}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transferencia */}
      <section className="seccion seccion--alt" id="transferencia">
        <div className="contenedor">
          <div className="cuenta__cabecera revelar">
            <h2 className="titulo--compacto">{donarPagina.tituloCuenta}</h2>
            <CopiarTodo lang={lang} />
          </div>

          <dl className="cuenta revelar">
            <Dato lang={lang} etiqueta="Banco" valor={cuentaBancaria.banco} copiable={false} />
            <Dato lang={lang} etiqueta={cuentaBancaria.tipo} valor={cuentaBancaria.numero} />
            <Dato lang={lang} etiqueta="RUT" valor={cuentaBancaria.rut} />
            <Dato lang={lang} etiqueta="Titular" valor={cuentaBancaria.titular} />
            <Dato lang={lang} etiqueta="BIC / SWIFT" valor={cuentaBancaria.swift} />
            <Dato lang={lang} etiqueta="Email" valor={cuentaBancaria.email} />
          </dl>

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

    </>
  )
}
