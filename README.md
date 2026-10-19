# Corporación Valle Cochamó — sitio web

Portada que **fusiona** los dos sitios actuales de la organización en una sola
puerta de entrada, con dos caminos claros: *voy a visitar* y *quiero ayudar*.

| Sitio actual | Qué aporta |
|---|---|
| [vallecochamo.org](https://vallecochamo.org/) | Identidad, historia, conservación, Santuario de la Naturaleza, proyectos, colaborar |
| [reservasvallecochamo.cl](https://reservasvallecochamo.cl/) | Reservas, sectores, trekking, horarios, normas básicas, arrieros |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · CSS propio.

La portada se **prerenderiza como HTML estático** en el build: el contenido
está en el HTML para Google y para quien comparta el enlace, y al navegador
solo llega el JavaScript de las cuatro piezas que lo necesitan (cabecera,
contadores, boletín y botón de volver arriba).

```bash
npm install
npm run dev      # http://localhost:4321
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm start` | Sirve el build |
| `npm run lint` | ESLint (config de Next) |
| `npm run typecheck` | TypeScript sin emitir |
| `npm run check-links` | Enlaces externos vivos + anclas internas que existan (corre `build` antes) |

## Estructura del sitio

Navegación en cuatro grupos: **El Valle**, **Cómo visitar**, **Historia** y
**Cómo ayudar**.

La portada son cinco bloques y nada más: Hero · El Valle · Impacto · Futuro ·
Suscríbete. Es deliberadamente corta; el orden está comentado en
`app/[lang]/page.tsx`.

Todo lo demás cuelga del menú, una página por grupo:

| Página | Qué contiene |
|---|---|
| `/<idioma>/el-valle` | Dónde queda (mapa), flora y fauna, qué se puede hacer, el santuario, las amenazas |
| `/<idioma>/como-visitar` | Cómo llegar, sectores, cuánto cuesta, cómo reservar, día vs. varios días, normas, horarios |
| `/<idioma>/quienes-somos` | Quién administra el valle, el directorio y los aliados |
| `/<idioma>/sectores/<slug>` | Ficha de cada sector con sus alojamientos |
| `/<idioma>/donar` · `/<idioma>/socios` | Las dos formas de aportar |

Al mover una sección de página hay que repasar quién la enlazaba:
`npm run build && npm run check-links` falla si un ancla quedó apuntando a una
página donde ya no está.

**Productos** quedó fuera del menú a propósito: es una sección del plan para la
que todavía no hay contenido, y publicar el enlace llevaría a una página vacía.

## Archivos

```
app/
  globals.css         Sistema de diseño y estilos
  [lang]/
    layout.tsx        Tipografías, metadatos, barra superior, cabecera y pie
    page.tsx          La portada: catorce secciones, una línea cada una
components/
  layout/             Marca, BarraSuperior, Cabecera (menú), Pie
  sections/           Una sección de la portada por archivo
  ui/                 Boton, Icon, SectionHeader, RichText + las piezas con JS
content/              👈 TODO el contenido editable, tipado
  types.ts            El contrato que cada idioma debe cumplir
  es/  en/            Un archivo por idioma
                      index.ts      textos generales, menú y pie
                      estructura.ts El Valle, Impacto, Futuro, Cómo visitar
                      sectores.ts   fichas de los tres sectores
  imagenes.ts         Rutas y dimensiones (no se traducen)
  externos.ts         URLs a los sitios actuales
public/img/           Logo, logos de aliados y fotografías del valle
```

### Idiomas

El sitio vive en `/es` y `/en`; la raíz redirige al español. Ambas portadas se
prerenderizan en el build.

`content/types.ts` define `Contenido`, el contrato que **los dos** idiomas
deben cumplir. Si se agrega un texto en español y falta en inglés, falla el
typecheck: no se puede publicar a medias.

Los nombres de lugar (Inicio Sendero, La Junta, Lago Vidal) se dejan en
español también en inglés, porque es lo que dice la señalética, el registro
del sendero y el sistema de reservas.

> La traducción al inglés es un primer paso: conviene que alguien de la
> organización la revise antes de difundirla, sobre todo en las secciones de
> seguridad.

### Páginas de sector

`/<idioma>/sectores/<slug>` tiene una página propia por sector con todo lo que
antes obligaba a saltar al sitio de reservas y abrir una ficha por camping:
relato del lugar, datos clave, avisos de seguridad, los alojamientos con sus
servicios y contactos, y el bloque de arrieros con tarifas.

El criterio: **la reserva se hace fuera, la información vive acá**. Los
botones que siguen saliendo a reservasvallecochamo.cl son solo los de reservar.

El contenido se tomó de las fichas del sitio de reservas (octubre de 2026).
Teléfonos, tarifas y horarios cambian: conviene revisarlos cada temporada en
`content/<idioma>/sectores.ts`.

### Donaciones y socios

`/<idioma>/donar` y `/<idioma>/socios` viven en este sitio: ya no se redirige
a vallecochamo.org.

**Donar** ofrece transferencia bancaria (datos copiables, sin comisión) y el
aporte mensual con tarjeta, que embebe el formulario de suscripción que la
corporación ya tiene en Payku. El iframe va con `sandbox` y sin
`allow-same-origin`, así que esa página no alcanza nada de este sitio.

> Los datos de tarjeta se escriben siempre en el dominio de Payku, nunca en el
> nuestro. Eso es deliberado: capturar tarjetas en nuestras propias páginas
> obligaría a cumplir PCI-DSS, que no es razonable para una corporación de
> este tamaño. El visitante no sale del sitio, pero el pago sí ocurre en la
> pasarela.

**Socios** es un formulario propio que publica en `app/api/socios/route.ts`,
con validación en servidor, trampa para robots y un freno básico por IP.

Para que envíe correo hacen falta las variables de `.env.example`. Sin ellas
el endpoint responde 503 y el formulario ofrece el correo directo: nunca se
pierde una postulación en silencio.

El freno por IP vive en memoria, así que es por instancia. Frena a un curioso,
no a un ataque: si el formulario recibe spam, toca un limitador de verdad y un
captcha (Turnstile).

### Enlaces internos

En `content/` **toda ancla va absoluta**: `` `${PORTADA}#mapa` ``, nunca
`'#mapa'`. El menú y el pie se ven en todas las páginas, así que una ancla
suelta se cuelga de la URL actual: desde `/es/como-visitar`, "Dónde queda"
llevaba a `/es/como-visitar#mapa`, que no existe.

`npm run check-links` falla si aparece una ancla suelta en `content/` o si
una absoluta apunta a un `id` que no existe en su página.

### Revelado de secciones

Las secciones marcadas con `.revelar` entran con una animación ligada al
scroll, en CSS puro (`animation-timeline: view()`), sin JavaScript.

Dos reglas que no conviene romper:

1. **Nunca animar la opacidad.** Solo el desplazamiento. Si la animación no
   progresa por cualquier motivo, el peor caso debe ser un bloque 22px más
   abajo, nunca contenido invisible.
2. **No volver a un IntersectionObserver.** Se probó y rompió el sitio: el
   observador vivía en el layout, que no se remonta al navegar, así que
   cualquier página siguiente quedaba en opacity 0 hasta recargar. Además no
   dispara en pestañas en segundo plano.

`body` usa `overflow-x: clip` y no `hidden` a propósito: `hidden` convierte al
body en contenedor de scroll y rompe las líneas de tiempo de `view()`.

### Mapa

`components/sections/Mapa.tsx` usa Leaflet con teselas de OpenStreetMap, sin
API key. Las coordenadas de `content/<idioma>/index.ts` salen de OSM
(Nominatim y Overpass), no de estimaciones.

No se dibuja el trazado del sendero a propósito: la huella ya está mapeada en
OSM y se ve sobre las teselas. En un sitio donde la gente planifica caminatas
de 13 km sin rescate, una línea aproximada sería peor que ninguna.

Si el tráfico crece, conviene pasar a un proveedor de teselas propio
(MapTiler, Carto): la política de uso de OSM desaconseja volúmenes altos.

### El contenido vive separado del marcado

Textos, cifras, hitos, sectores, normas y enlaces están en `content/`, tipados
en `content/types.ts`. Ninguna sección trae texto escrito a mano.

Esto es el punto de enchufe para un CMS: cuando se decida cuál usar, se
reemplaza el cuerpo de cada módulo por una consulta que devuelva esos mismos
tipos y **los componentes no se tocan**. Mientras tanto, cambiar un texto es
editar un archivo de `content/`.

### Sistema de diseño

Vive en las variables CSS de `:root` en `app/globals.css`: paleta (bosque, río,
granito, arena, fuego), tipografías, medidas y sombras. Las clases siguen
convención BEM (`.sector__media`, `.hero__velo`), así que son legibles y no
chocan entre secciones.

Las tipografías (Fraunces + Inter) se auto-hospedan con `next/font`: no hay
petición a Google en tiempo de ejecución ni salto de layout al cargar.

## Publicar

Desplegado en Vercel: <https://ovc-web.vercel.app/>

El framework se declara en `vercel.json`. No lo quites: el proyecto en Vercel
se creó cuando el repo todavía no tenía código Next, así que su preset quedó en
"Other" y servía `public/` como carpeta estática —de ahí un 404 en la portada—.
`vercel.json` manda sobre esa configuración.

También funciona en Netlify o Cloudflare Pages, donde `next/image` optimiza
las fotos a AVIF/WebP en el servidor.

Para un hosting estático cualquiera (S3, GitHub Pages, el servidor actual),
descomenta las dos líneas marcadas en `next.config.ts` y `npm run build`
generará la carpeta `out/`. Se pierde la optimización de imágenes en servidor.

## Pendientes

- **Decidir el CMS.** Es la pieza que falta para que la organización edite sin
  pasar por git. `content/` ya está preparado para recibirlo.
- **Boletín.** `components/sections/Boletin.tsx` valida y confirma, pero no
  envía a ningún lado. Lo natural es una Server Action que llame al proveedor
  de correo, para no exponer la clave en el cliente (hay un `TODO` marcado).
- **Productos**: definir qué va en esa sección y volver a poner la entrada
  del menú.
- **Revisar la traducción al inglés** con alguien de la organización.
- **Revisar cada temporada** los datos de `content/<idioma>/sectores.ts`:
  tarifas de arrieros, horarios del sendero, teléfonos y aforos. Pasar
  `npm run check-links` de paso: el contenido lleva unas 30 URLs de terceros
  que cambian sin avisar.
- **Páginas internas.** Hoy todo es una portada con anclas. Noticias, proyectos
  y santuario pueden pasar a rutas propias reutilizando los mismos componentes.
- **Contenido.** Los textos y cifras se tomaron de los dos sitios actuales;
  conviene que la organización los revise. La etiqueta de proyectos se dejó
  como "Nuestros desafíos" en vez de "Desafíos 2025" para que no quede
  desfasada.
- **Fotografías.** Vienen de los sitios de la organización. Vale la pena
  reemplazarlas por los originales en alta calidad: Next se encarga del resto.
- **Contacto.** No hay correo ni teléfono públicos en los sitios actuales; si
  existen, conviene agregarlos al pie.

> La versión anterior en HTML/CSS/JS plano quedó en el historial de git, en el
> commit `454fbf3`.
