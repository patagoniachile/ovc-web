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

## Estructura

```
app/
  layout.tsx          Tipografías, metadatos, barra superior, cabecera y pie
  page.tsx            La portada: trece secciones, una línea cada una
  globals.css         Sistema de diseño y estilos
components/
  layout/             Marca, BarraSuperior, Cabecera (menú), Pie
  sections/           Una sección de la portada por archivo
  ui/                 Boton, Icon, SectionHeader, RichText + las piezas con JS
content/              👈 TODO el contenido editable, tipado
public/img/           Logo, logos de aliados y fotografías del valle
```

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
- **Versión en inglés.** El selector ES/EN apunta por ahora a
  `vallecochamo.org/en/`. Con App Router esto se resuelve con un segmento
  `[lang]` y los textos de `content/` por idioma.
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
