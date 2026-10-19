import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { aliados } from '@/content/proyectos'

export function Aliados() {
  return (
    <section className="seccion seccion--alt" aria-labelledby="titulo-aliados">
      <div className="contenedor">
        <SectionHeader
          className="revelar"
          centrado
          compacto
          id="titulo-aliados"
          eyebrow="Colaboradores"
          titulo="Quienes caminan con nosotros"
        />

        <div className="aliados revelar">
          {aliados.map((aliado) => (
            <a key={aliado.nombre} href={aliado.href} target="_blank" rel="noopener noreferrer">
              {aliado.logo ? (
                <Image
                  src={aliado.logo.src}
                  alt={aliado.logo.alt}
                  width={aliado.logo.width}
                  height={aliado.logo.height}
                />
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
