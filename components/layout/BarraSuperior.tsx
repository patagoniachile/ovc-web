import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { ETIQUETA_IDIOMA, externos, getContenido, IDIOMAS, type Lang } from '@/content'

export function BarraSuperior({ lang }: { lang: Lang }) {
  const { organizacion } = getContenido(lang)

  return (
    <div className="barra-superior">
      <div className="contenedor">
        <p className="barra-superior__mensaje">
          <span className="barra-superior__punto" aria-hidden="true" />
          {organizacion.avisoTemporada}
        </p>

        <div className="barra-superior__acciones">
          <div className="redes-min">
            <a href={externos.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram — ${organizacion.nombreCompleto}`}>
              <Icon name="instagram" />
            </a>
            <a href={externos.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook — Reservas Valle Cochamó">
              <Icon name="facebook" />
            </a>
          </div>

          {/* Cambia de idioma de verdad: antes el enlace EN mandaba al sitio viejo. */}
          <p className="idioma">
            {IDIOMAS.map((codigo) =>
              codigo === lang ? (
                <span key={codigo} aria-current="true" lang={codigo}>
                  {ETIQUETA_IDIOMA[codigo]}
                </span>
              ) : (
                <Link key={codigo} href={`/${codigo}`} lang={codigo} hrefLang={codigo}>
                  {ETIQUETA_IDIOMA[codigo]}
                </Link>
              ),
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
