'use client'

import { useId, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, getContenido, type Lang } from '@/content'

type Estado = 'inicial' | 'enviando' | 'enviado' | 'error'

export function FormularioSocio({ lang }: { lang: Lang }) {
  const { sociosPagina, textos } = getContenido(lang)
  const prefijo = useId()

  const [estado, setEstado] = useState<Estado>('inicial')
  const [aviso, setAviso] = useState('')

  const enviar = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const form = evento.currentTarget
    const datos = Object.fromEntries(new FormData(form)) as Record<string, string>

    if (!datos.nombre?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email ?? '')) {
      setEstado('error')
      setAviso(textos.camposRequeridos)
      return
    }

    setEstado('enviando')
    setAviso('')

    try {
      const respuesta = await fetch('/api/socios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...datos, idioma: lang }),
      })

      if (!respuesta.ok) throw new Error(String(respuesta.status))

      setEstado('enviado')
      form.reset()
    } catch {
      setEstado('error')
      setAviso(textos.errorEnvio)
    }
  }

  if (estado === 'enviado') {
    return (
      <div className="formulario formulario--gracias">
        <Icon name="check" />
        <p>{sociosPagina.gracias}</p>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      {sociosPagina.campos.map((campo) => {
        const id = `${prefijo}-${campo.nombre}`
        return (
          <p className="campo" key={campo.nombre}>
            <label htmlFor={id}>
              {campo.etiqueta}
              {!campo.requerido && <span className="campo__opcional"> ·</span>}
            </label>
            {campo.tipo === 'textarea' ? (
              <textarea id={id} name={campo.nombre} rows={4} />
            ) : (
              <input
                id={id}
                name={campo.nombre}
                type={campo.tipo}
                required={campo.requerido}
                autoComplete={
                  campo.nombre === 'email' ? 'email' : campo.nombre === 'telefono' ? 'tel' : campo.nombre === 'nombre' ? 'name' : 'address-level2'
                }
              />
            )}
            {campo.ayuda && <span className="campo__ayuda">{campo.ayuda}</span>}
          </p>
        )
      })}

      {/* Trampa para robots: fuera de la vista y del foco */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="trampa" />

      <button className="btn btn--oro" type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? textos.enviando : textos.enviar}
      </button>

      <p className="formulario__nota" role="status">
        {estado === 'error' ? (
          <>
            <Icon name="alerta" />
            {aviso} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
          </>
        ) : (
          sociosPagina.nota
        )}
      </p>
    </form>
  )
}
