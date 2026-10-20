'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { getContenido, imagenes, type Lang } from '@/content'

type Estado = { tipo: 'error' | 'ok'; mensaje: string } | null

export function Boletin({ lang }: { lang: Lang }) {
  const { boletin, textos } = getContenido(lang)
  const idEmail = useId()
  const idEstado = useId()

  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState<Estado>(null)

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEstado({ tipo: 'error', mensaje: textos.correoInvalido })
      return
    }

    // TODO: conectar con el proveedor de correo de la corporación.
    // Lo natural acá es una Server Action que llame a la API del proveedor,
    // para no exponer la clave en el cliente.
    setEstado({ tipo: 'ok', mensaje: textos.graciasPorSuscribirte })
    setEmail('')
  }

  return (
    <section className="suscribete" id="suscribete">
      <div className="suscribete__banda">
        <div className="contenedor suscribete__grid">
          <div className="suscribete__texto revelar">
            <h2>{boletin.titulo}</h2>
            <p>{boletin.texto}</p>

            <form className="suscribete__form" onSubmit={enviar} noValidate>
              <label className="visually-hidden" htmlFor={idEmail}>
                {textos.correo}
              </label>
              <input
                id={idEmail}
                name="email"
                type="email"
                autoComplete="email"
                placeholder={boletin.ejemploCorreo}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={idEstado}
                aria-invalid={estado?.tipo === 'error' || undefined}
              />
              <button className="btn" type="submit">
                {textos.suscribirme}
              </button>
            </form>

            <p className={estado?.tipo === 'ok' ? 'suscribete__ok' : 'suscribete__error'} id={idEstado} role="status">
              {estado?.mensaje}
            </p>
          </div>

          <div className="suscribete__foto">
            <Image
              src={imagenes.valleBanner.src}
              alt={boletin.alt}
              width={imagenes.valleBanner.width}
              height={imagenes.valleBanner.height}
              sizes="(max-width: 860px) 92vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
