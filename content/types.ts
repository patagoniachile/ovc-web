/**
 * Tipos del contenido del sitio.
 *
 * Todo el contenido editable vive en `content/` como módulos tipados. Es a
 * propósito: el día que se conecte un CMS (Decap, Sanity, lo que sea), basta
 * con reemplazar el cuerpo de cada módulo por una consulta que devuelva estos
 * mismos tipos. Los componentes no se tocan.
 */

export type IconName =
  | 'chevron' | 'arriba' | 'instagram' | 'facebook' | 'youtube' | 'mail'
  | 'corazon' | 'carpa' | 'montana' | 'caballo' | 'reloj' | 'pin'
  | 'alerta' | 'sendero' | 'check' | 'hoja' | 'camino' | 'edificio'
  | 'gente' | 'video' | 'botiquin' | 'agua' | 'cartel' | 'flecha'

export interface Enlace {
  /** Texto visible */
  label: string
  /** Ruta interna (#ancla o /ruta) o URL absoluta */
  href: string
  /** Línea de apoyo en los submenús */
  detalle?: string
}

export interface GrupoMenu {
  label: string
  /** Destino del propio encabezado del grupo */
  href: string
  items: Enlace[]
}

export interface Foto {
  src: string
  alt: string
  /** Dimensiones reales del archivo, necesarias para next/image */
  width: number
  height: number
}

export interface Cifra {
  /** Valor numérico; se anima al entrar en pantalla */
  valor: number
  /** Sufijo pegado al número, p. ej. ",8 ha" */
  sufijo?: string
  /** Prefijo pegado al número, p. ej. "+" */
  prefijo?: string
  texto: string
}

export interface Hito {
  anio: string
  titulo: string
  texto: string
  /** Marca los hitos que queremos resaltar en la línea de tiempo */
  destacado?: boolean
}

export interface Sector {
  id: string
  nombre: string
  insignia: string
  descripcion: string
  datos: { icono: IconName; texto: string }[]
  foto: Foto
  cta: { label: string; href: string; destacado?: boolean }
}

export interface Ficha {
  icono: IconName
  titulo: string
  texto: string
  /** Pares etiqueta/valor que se muestran como tabla compacta */
  datos?: { etiqueta: string; valor: string }[]
  enlace?: Enlace
  /** Tarjeta en tono de advertencia */
  alerta?: boolean
}

export interface Norma {
  titulo: string
  detalle: string
}

export interface Paso {
  titulo: string
  texto: string
}

export interface Proyecto {
  titulo: string
  texto: string
  estado: 'activo' | 'logrado'
}

export interface Aporte {
  icono: IconName
  titulo: string
  texto: string
  cta: Enlace
  destacado?: boolean
}

export interface Aliado {
  nombre: string
  href: string
  /** Si no hay logo, se muestra el nombre en tipografía display */
  logo?: Foto
}

export interface PuntoMapa {
  id: string
  nombre: string
  /** Los sectores se reservan; las referencias solo ubican. */
  tipo: 'sector' | 'referencia'
  /** Coordenadas tomadas de OpenStreetMap (ver content/visita.ts). */
  lat: number
  lon: number
  descripcion: string
  /** Enlace opcional del globo del mapa */
  enlace?: Enlace
}
