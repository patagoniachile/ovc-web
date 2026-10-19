import { Contador } from '@/components/ui/Contador'
import { cifras } from '@/content/site'

export function Cifras() {
  return (
    <section className="cifras" aria-label="El valle en cifras">
      <div className="contenedor">
        <div className="cifras__grid">
          {cifras.map((cifra) => (
            <div className="cifra" key={cifra.texto}>
              <p className="cifra__numero">
                {cifra.prefijo}
                <Contador valor={cifra.valor} />
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
