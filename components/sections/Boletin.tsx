'use client'

import { useId, useState } from 'react'
import { getContenido, type Lang } from '@/content'

type Estado = { tipo: 'nota' | 'error' | 'ok'; mensaje: string }

export function Boletin({ lang }: { lang: Lang }) {
  const { boletin, textos } = getContenido(lang)
  const idNombre = useId()
  const idEmail = useId()
  const idEstado = useId()

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState<Estado>({ tipo: 'nota', mensaje: boletin.nota })

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!nombre.trim()) {
      setEstado({ tipo: 'error', mensaje: textos.faltaNombre })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEstado({ tipo: 'error', mensaje: textos.correoInvalido })
      return
    }

    // TODO: conectar con el proveedor de correo de la corporación.
    // Lo natural acá es una Server Action que llame a la API del proveedor,
    // para no exponer la clave en el cliente.
    setEstado({ tipo: 'ok', mensaje: textos.graciasPorSuscribirte(nombre.trim()) })
    setNombre('')
    setEmail('')
  }

  return (
    <section className="seccion" id="suscribete">
      <div className="contenedor">
    <div className="boletin revelar">
      <div>
        <h3>{boletin.titulo}</h3>
        <p>{boletin.texto}</p>
      </div>

      <form onSubmit={enviar} noValidate>
        <div className="boletin__campos">
          <p className="campo">
            <label htmlFor={idNombre}>{textos.nombre}</label>
            <input
              id={idNombre}
              name="nombre"
              type="text"
              autoComplete="given-name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              aria-describedby={idEstado}
            />
          </p>
          <p className="campo">
            <label htmlFor={idEmail}>{textos.correo}</label>
            <input
              id={idEmail}
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby={idEstado}
            />
          </p>
        </div>

        <button className="btn btn--oro" type="submit">
          {textos.suscribirme}
        </button>

        <p className={estado.tipo === 'ok' ? 'boletin__ok' : 'boletin__nota'} id={idEstado} role="status">
          {estado.mensaje}
        </p>
      </form>
    </div>
      </div>
    </section>
  )
}
