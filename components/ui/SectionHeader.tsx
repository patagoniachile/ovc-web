import { RichText } from '@/components/ui/RichText'

export function SectionHeader({
  eyebrow,
  titulo,
  bajada,
  centrado = false,
  compacto = false,
  claro = false,
  id,
  className,
}: {
  eyebrow?: string
  titulo: string
  bajada?: string
  centrado?: boolean
  /** Título algo más chico, para subsecciones */
  compacto?: boolean
  /** Sobre fondo oscuro */
  claro?: boolean
  id?: string
  className?: string
}) {
  const clases = [
    'seccion-cabecera',
    centrado && 'seccion-cabecera--centro',
    compacto && 'seccion-cabecera--compacta',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={clases}>
      {eyebrow && <p className={claro ? 'eyebrow eyebrow--claro' : 'eyebrow'}>{eyebrow}</p>}
      <h2 id={id}>{titulo}</h2>
      {bajada && <p className="lead"><RichText>{bajada}</RichText></p>}
    </div>
  )
}
