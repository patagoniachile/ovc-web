import { Boton } from '@/components/ui/Boton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

/** Cierre del bloque Futuro: el llamado a ayudar. */
export function Futuro({ lang }: { lang: Lang }) {
  const { futuro, necesitamosTuAyuda } = getContenido(lang)

  return (
    <section className="seccion" id="ayudar">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado {...futuro} />

        <div className="ayuda revelar">
          <h3>{necesitamosTuAyuda.titulo}</h3>
          <p>{necesitamosTuAyuda.texto}</p>
          <Boton href={necesitamosTuAyuda.cta.href} variante="fuego">
            {necesitamosTuAyuda.cta.label}
          </Boton>
        </div>
      </div>
    </section>
  )
}
