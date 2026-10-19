import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/como-ayudar/gracias'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { resultadoPago } = getContenido(lang)
  return {
    title: resultadoPago.gracias.titulo,
    description: resultadoPago.gracias.bajada,
    // Es el final de un trámite, no una página que alguien deba encontrar
    // buscando: indexada aparecería en Google sin el pago que le da sentido.
    robots: { index: false, follow: true },
  }
}

/**
 * A donde Payku devuelve a quien terminó de suscribirse.
 *
 * La URL se configura en el panel, en «success payment url», y es la misma
 * para los ocho planes, así que no sabe cuál se contrató ni quién es: todo lo
 * que diga tiene que valer para cualquier socio nuevo. El comprobante con el
 * detalle lo manda Payku por correo; esto es el recibimiento.
 */
export default async function PaginaGracias({ params }: PageProps<'/[lang]/como-ayudar/gracias'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { resultadoPago, textos } = getContenido(lang)
  const { gracias } = resultadoPago

  return (
    <section className="resultado resultado--bien">
      <div className="contenedor">
        <span className="resultado__marca" aria-hidden="true">
          <Icon name="check" />
        </span>

        <p className="eyebrow eyebrow--claro">{gracias.eyebrow}</p>
        <h1>{gracias.titulo}</h1>
        <p className="resultado__bajada">{gracias.bajada}</p>

        <ol className="resultado__pasos">
          {gracias.pasos.map((paso, i) => (
            <li key={paso}>
              <span className="resultado__numero">{i + 1}</span>
              {paso}
            </li>
          ))}
        </ol>

        <div className="resultado__acciones">
          <Boton href={gracias.volver.href} variante="claro">
            {gracias.volver.label}
          </Boton>
          <Boton href={gracias.otra.href} variante="fantasma">
            {gracias.otra.label}
          </Boton>
        </div>

        <p className="resultado__respaldo">
          {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
        </p>
      </div>
    </section>
  )
}
