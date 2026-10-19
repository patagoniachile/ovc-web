import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Las fotos del valle son el peso principal del sitio: dejamos que Next
  // genere AVIF/WebP y los tamaños del srcset en el build.
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // El sitio vive bajo /es y /en; la raíz manda al idioma por defecto.
  async redirects() {
    return [{ source: '/', destination: '/es', permanent: false }]
  },

  // Para publicar en un hosting estático cualquiera (S3, GitHub Pages, el
  // servidor actual), descomenta estas dos líneas. Se pierde la optimización
  // de imágenes en servidor, por eso no es el modo por defecto.
  // output: 'export',
  // images: { unoptimized: true },
}

export default nextConfig
