import { Boton } from '@/components/ui/Boton'
import { Icon } from '@/components/ui/Icon'
import type { PaginaLarga } from '@/content'

/**
 * El cuerpo de una página larga de texto.
 *
 * Lo usan santuario y conservación, que son las dos páginas que la
 * corporación ya tenía en su sitio anterior y que no caben en ninguna
 * sección: son lecturas, no bloques de una página mayor.
 */
export function PaginaTexto({ pagina }: { pagina: PaginaLarga }) {
  return (
    <>
      <section className="seccion">
        <div className="contenedor contenedor--lectura">
          {pagina.intro.map((parrafo) => (
            <p className="lectura__intro revelar" key={parrafo}>
              {parrafo}
            </p>
          ))}

          {pagina.cifras && (
            <ul className="lectura__cifras revelar">
              {pagina.cifras.map((cifra) => (
                <li key={cifra.texto}>
                  <strong>{cifra.valor}</strong>
                  <span>{cifra.texto}</span>
                </li>
              ))}
            </ul>
          )}

          {pagina.bloques.map((bloque) => (
            <div className="lectura__bloque revelar" key={bloque.titulo}>
              <h2>{bloque.titulo}</h2>

              {bloque.parrafos?.map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}

              {bloque.lista && (
                <ul className="lectura__lista">
                  {bloque.lista.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {bloque.grupos && (
                <div className="lectura__grupos">
                  {bloque.grupos.map((grupo) => (
                    <div key={grupo.titulo}>
                      <h3>{grupo.titulo}</h3>
                      <ul className="lectura__lista">
                        {grupo.items.map((item) => (
                          <li key={item}>
                            <Icon name="check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="seccion seccion--oscura">
        <div className="contenedor contenedor--lectura">
          <div className="lectura__cierre revelar">
            <h2>{pagina.cierre.titulo}</h2>
            <p>{pagina.cierre.texto}</p>
            <Boton href={pagina.cierre.cta.href} variante="claro">
              {pagina.cierre.cta.label}
            </Boton>
          </div>
        </div>
      </section>
    </>
  )
}
