import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import { correoOrganizacion, esIdioma, getContenido, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: PageProps<'/[lang]/como-ayudar/problema'>): Promise<Metadata> {
  const { lang } = await params
  if (!esIdioma(lang)) return {}
  const { resultadoPago } = getContenido(lang)
  return {
    title: resultadoPago.problema.titulo,
    description: resultadoPago.problema.bajada,
    robots: { index: false, follow: true },
  }
}

/**
 * A donde Payku devuelve a quien no pudo completar el pago.
 *
 * Lo primero y más grande es que no se le cobró nada: quien llega aquí acaba
 * de escribir los datos de su tarjeta y ver que algo salió mal, y lo que teme
 * es justamente haber pagado sin quedar suscrito.
 *
 * Después, los motivos. El más frecuente es que la tarjeta no tenga
 * habilitados los cobros recurrentes, que no es algo que se adivine: decirlo
 * aquí evita que la persona lo intente tres veces con el mismo resultado.
 */
export default async function PaginaProblema({ params }: PageProps<'/[lang]/como-ayudar/problema'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  const { resultadoPago, textos } = getContenido(lang)
  const { problema } = resultadoPago

  return (
    <section className="resultado resultado--mal">
      <div className="contenedor">
        <span className="resultado__marca" aria-hidden="true">
          <Icon name="alerta" />
        </span>

        <p className="eyebrow">{problema.eyebrow}</p>
        <h1>{problema.titulo}</h1>
        <p className="resultado__tranquiliza">{problema.tranquiliza}</p>
        <p className="resultado__bajada">{problema.bajada}</p>

        <ul className="resultado__motivos">
          {problema.motivos.map((motivo) => (
            <li key={motivo}>
              {/* Un punto y no un check: son motivos de un fallo, no aciertos. */}
              <span className="resultado__punto" aria-hidden="true" />
              {motivo}
            </li>
          ))}
        </ul>

        <div className="resultado__acciones">
          <Boton href={problema.reintentar.href} variante="oro">
            {problema.reintentar.label}
          </Boton>
          <Boton href={problema.transferir.href} variante="borde">
            {problema.transferir.label}
          </Boton>
        </div>

        <p className="resultado__respaldo">
          {textos.correoDirecto} <a href={`mailto:${correoOrganizacion}`}>{correoOrganizacion}</a>
        </p>
      </div>
    </section>
  )
}
