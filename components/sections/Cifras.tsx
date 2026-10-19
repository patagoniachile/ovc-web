import { Contador } from '@/components/ui/Contador'
import { getContenido, LOCALE, type Lang } from '@/content'

export function Cifras({ lang }: { lang: Lang }) {
  const { cifras, cifrasTitulo } = getContenido(lang)

  return (
    <section className="cifras">
      <div className="contenedor">
        <h2 className="cifras__titulo revelar">{cifrasTitulo}</h2>
        <div className="cifras__grid">
          {cifras.map((cifra) => (
            <div className="cifra" key={cifra.texto}>
              <p className="cifra__numero">
                {cifra.prefijo}
                <Contador valor={cifra.valor} locale={LOCALE[lang]} />
                {cifra.sufijo && <small>{cifra.sufijo}</small>}
              </p>
              <p className="cifra__texto">{cifra.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
