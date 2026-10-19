import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getContenido, type Lang } from '@/content'

export function Aliados({ lang }: { lang: Lang }) {
  const { aliados, aliadosEncabezado } = getContenido(lang)

  return (
    <section className="seccion seccion--alt" aria-labelledby="titulo-aliados">
      <div className="contenedor">
        <SectionHeader className="revelar" centrado compacto id="titulo-aliados" {...aliadosEncabezado} />

        <div className="aliados revelar">
          {aliados.map((aliado) => (
            <a key={aliado.nombre} href={aliado.href} target="_blank" rel="noopener noreferrer">
              {aliado.logo ? (
                <Image src={aliado.logo.src} alt={aliado.logo.alt} width={aliado.logo.width} height={aliado.logo.height} />
              ) : (
                <span>{aliado.nombre}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
