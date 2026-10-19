/**
 * Comprueba que los enlaces externos del contenido sigan vivos.
 *
 * El contenido trae ~30 URLs de terceros —campings, operadores, buses— que
 * cambian sin avisar. Ya pasó: el botón de reserva de Vista Hermosa apuntaba a
 * una página que el operador movió, y nos enteramos porque alguien lo pinchó.
 *
 *   npm run check-links
 *
 * Sale con código 1 si algo responde 404 o 410, para poder usarlo en CI.
 * Facebook, Instagram y algunos sitios con protección anti-bots devuelven
 * 400/403/999 a peticiones automáticas: se marcan como "no verificable" y no
 * hacen fallar la comprobación.
 */
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const NAVEGADOR =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36'

const NO_VERIFICABLES = [/facebook\.com/, /instagram\.com/, /puelopatagonia\.cl/]
const ROTOS = new Set([404, 410])

async function archivosDeContenido(dir = 'content') {
  const entradas = await readdir(dir, { withFileTypes: true })
  const rutas = []
  for (const entrada of entradas) {
    const ruta = join(dir, entrada.name)
    if (entrada.isDirectory()) rutas.push(...(await archivosDeContenido(ruta)))
    else if (entrada.name.endsWith('.ts')) rutas.push(ruta)
  }
  return rutas
}

const urls = new Set()
for (const archivo of await archivosDeContenido()) {
  const texto = await readFile(archivo, 'utf8')
  for (const [url] of texto.matchAll(/https?:\/\/[^'"\s)]+/g)) urls.add(url.replace(/[,.]$/, ''))
}

console.log(`Comprobando ${urls.size} enlaces externos…\n`)

let rotos = 0
let sinVerificar = 0

await Promise.all(
  [...urls].sort().map(async (url) => {
    const saltar = NO_VERIFICABLES.some((patron) => patron.test(url))
    try {
      const control = AbortSignal.timeout(20000)
      const respuesta = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': NAVEGADOR }, signal: control })

      if (ROTOS.has(respuesta.status)) {
        rotos++
        console.log(`  ROTO       ${respuesta.status}  ${url}`)
      } else if (!respuesta.ok) {
        sinVerificar++
        if (!saltar) console.log(`  revisar    ${respuesta.status}  ${url}`)
      }
    } catch {
      sinVerificar++
      if (!saltar) console.log(`  sin respuesta    ${url}`)
    }
  }),
)

console.log(`\n${rotos} roto(s) · ${sinVerificar} no verificable(s)`)
if (rotos > 0) process.exit(1)
