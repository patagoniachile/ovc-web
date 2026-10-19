import type { IconName } from '@/content/types'

/**
 * Sprite SVG. Se monta una sola vez en el layout y cada <Icon /> lo referencia
 * con <use>, así el marcado de cada icono pesa una línea.
 */
export function IconSprite() {
  const trazo = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <symbol id="i-chevron" viewBox="0 0 24 24" {...trazo} strokeWidth={2.4}>
        <polyline points="6 9 12 15 18 9" />
      </symbol>
      <symbol id="i-arriba" viewBox="0 0 24 24" {...trazo} strokeWidth={2}>
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </symbol>
      <symbol id="i-flecha" viewBox="0 0 24 24" {...trazo} strokeWidth={2}>
        <line x1="4" y1="12" x2="20" y2="12" />
        <polyline points="14 6 20 12 14 18" />
      </symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24" {...trazo}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </symbol>
      <symbol id="i-facebook" viewBox="0 0 24 24" {...trazo}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </symbol>
      <symbol id="i-youtube" viewBox="0 0 24 24" {...trazo}>
        <path d="M22.5 7a2.8 2.8 0 0 0-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5a2.8 2.8 0 0 0 2 2c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a2.8 2.8 0 0 0 2-2a29 29 0 0 0 .5-5a29 29 0 0 0-.5-5z" />
        <polygon points="9.8 15.3 15.5 12 9.8 8.7" fill="currentColor" stroke="none" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24" {...trazo}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="3 6.5 12 13 21 6.5" />
      </symbol>
      <symbol id="i-corazon" viewBox="0 0 24 24" {...trazo}>
        <path d="M20.8 5.6a5.3 5.3 0 0 0-7.5 0L12 6.9l-1.3-1.3a5.3 5.3 0 1 0-7.5 7.5l8.8 8.8 8.8-8.8a5.3 5.3 0 0 0 0-7.5z" />
      </symbol>
      <symbol id="i-carpa" viewBox="0 0 24 24" {...trazo}>
        <path d="M12 3 2.5 20h19z" />
        <path d="M12 3v17" />
        <path d="m7.5 20 4.5-8 4.5 8" />
      </symbol>
      <symbol id="i-montana" viewBox="0 0 24 24" {...trazo}>
        <path d="m2 20 6.5-12 4 7 2.5-4 7 9z" />
        <path d="m8.5 8 1.8 3.3" />
      </symbol>
      <symbol id="i-caballo" viewBox="0 0 24 24" {...trazo} strokeWidth={1.8}>
        <path d="M5 21v-4.5c0-3.6 2.9-6.5 6.5-6.5H14l3-5 2 1-1.4 3.4A7 7 0 0 1 21 15v6" />
        <path d="M11.5 10 9 6.5 5.5 8" />
        <circle cx="17.6" cy="6.1" r="0.4" fill="currentColor" />
      </symbol>
      <symbol id="i-reloj" viewBox="0 0 24 24" {...trazo}>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6.8 12 12 15.6 14" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24" {...trazo}>
        <path d="M20 10.4c0 5.6-8 12.1-8 12.1s-8-6.5-8-12.1a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10.2" r="2.8" />
      </symbol>
      <symbol id="i-alerta" viewBox="0 0 24 24" {...trazo}>
        <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        <line x1="12" y1="9" x2="12" y2="13.5" />
        <line x1="12" y1="17.3" x2="12" y2="17.3" />
      </symbol>
      <symbol id="i-sendero" viewBox="0 0 24 24" {...trazo}>
        <path d="M4 21c4-1.5 2-7 5.5-9S16 9 16 5" />
        <circle cx="16.5" cy="4" r="2.2" />
        <circle cx="5" cy="20.5" r="1.6" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24" {...trazo} strokeWidth={2.2}>
        <polyline points="4 12.5 9.5 18 20 6.5" />
      </symbol>
      <symbol id="i-hoja" viewBox="0 0 24 24" {...trazo}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15 3 17 2.5 21 2.5c0 4-.5 6-3.6 11.2A7 7 0 0 1 11 20z" />
        <path d="M3 21c3.5-3.5 6-7 9.5-10.5" />
      </symbol>
      <symbol id="i-camino" viewBox="0 0 24 24" {...trazo}>
        <path d="M8 3 5 21" />
        <path d="m16 3 3 18" />
        <path d="M12 4v3" />
        <path d="M12 11v3" />
        <path d="M12 18v3" />
      </symbol>
      <symbol id="i-edificio" viewBox="0 0 24 24" {...trazo}>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M10 21v-5h4v5" />
      </symbol>
      <symbol id="i-gente" viewBox="0 0 24 24" {...trazo}>
        <path d="M16 20v-1.6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
        <circle cx="9" cy="7.5" r="3.5" />
        <path d="M22 20v-1.6a4 4 0 0 0-3-3.9" />
        <path d="M16.5 4.2a4 4 0 0 1 0 7.5" />
      </symbol>
      <symbol id="i-video" viewBox="0 0 24 24" {...trazo}>
        <rect x="2" y="5" width="14" height="14" rx="2.5" />
        <polygon points="22 7.5 16 12 22 16.5" />
      </symbol>
      <symbol id="i-botiquin" viewBox="0 0 24 24" {...trazo}>
        <rect x="2" y="7" width="20" height="13" rx="2.5" />
        <path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
        <line x1="12" y1="10.5" x2="12" y2="16.5" />
        <line x1="9" y1="13.5" x2="15" y2="13.5" />
      </symbol>
      <symbol id="i-agua" viewBox="0 0 24 24" {...trazo}>
        <path d="M12 2.7s6.5 7.1 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.8 12 2.7 12 2.7z" />
      </symbol>
      <symbol id="i-cartel" viewBox="0 0 24 24" {...trazo}>
        <path d="M12 15v6" />
        <rect x="3" y="4" width="18" height="8" rx="2" />
        <path d="M7 12v3" />
      </symbol>
    </svg>
  )
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  )
}
