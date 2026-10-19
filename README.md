# Corporación Valle Cochamó — portada unificada

Propuesta de portada que **fusiona** los dos sitios actuales de la organización:

| Sitio actual | Qué aporta a esta portada |
|---|---|
| [vallecochamo.org](https://vallecochamo.org/) | Identidad, historia, conservación, Santuario de la Naturaleza, proyectos, colaborar |
| [reservasvallecochamo.cl](https://reservasvallecochamo.cl/) | Reservas, sectores, trekking, horarios, normas básicas, arrieros |

La idea central: **una sola puerta de entrada** con dos caminos claros —*voy a visitar* y
*quiero ayudar*— en vez de dos sitios que se enlazan entre sí.

## Estructura de la página

1. **Barra superior** — aviso de temporada, redes y selector ES/EN
2. **Cabecera** — logo + nombre de la corporación, menú con submenús, CTA *Reservar* y *Donar*
3. **Hero** — "Visita el valle. Protégelo."
4. **Cifras** — santuario propuesto, alerzales, visitantes/año, paredes de granito
5. **Dos caminos** — visitar / conservar
6. **Historia** — línea de tiempo 2009 → hoy
7. **Quiénes somos** — relato + foto del directorio ampliado
8. **Sectores** — Inicio Sendero, La Junta, Lago Vidal
9. **Planifica tu visita** — La Junta por el día, Toboganes, senderos de altura, arrieros, horarios, cómo llegar
10. **Normas básicas** — las seis reglas del valle
11. **¿Por qué reservar?** — capacidad de carga, los 4 pasos, reparto 50/50 de la donación
12. **Santuario de la Naturaleza** — 11.432,8 ha y qué protege
13. **Lo que está en juego** — camino, presión inmobiliaria, turismo sin regulación
14. **Proyectos y logros**
15. **Colaborar** — socio, donar, voluntariado + boletín
16. **Colaboradores** y **pie de página**

## Cómo verla

```bash
python3 -m http.server 4321
```

Luego abre <http://localhost:4321>. (El proyecto también trae `.claude/launch.json`
con esta misma configuración.)

No hay build ni dependencias: HTML, CSS y JavaScript sin frameworks.

## Archivos

```
index.html              La portada completa
assets/css/styles.css   Sistema de diseño y estilos
assets/js/main.js       Menú móvil, revelados, contadores, boletín
assets/img/             Logo, logos de aliados y fotografías del valle
```

El sistema de diseño vive en las variables CSS de `:root`: paleta (bosque, río, granito,
arena, fuego), tipografías (Fraunces + Inter), medidas y sombras.

## Pendientes para pasar a producción

- **Contenido real**: textos y cifras se tomaron de los dos sitios actuales. Conviene que la
  organización los revise y actualice (la etiqueta de proyectos se dejó como "Nuestros desafíos"
  en vez de "Desafíos 2025" para que no quede desfasada).
- **Boletín**: `assets/js/main.js` valida y muestra confirmación, pero no envía a ningún lado.
  Falta conectar el proveedor de correo (hay un `TODO` marcado en el archivo).
- **Versión en inglés**: el selector ES/EN apunta por ahora a `vallecochamo.org/en/`.
- **Enlaces**: reservas, donaciones, socios y voluntariado apuntan a los sitios actuales.
  Si se unifica el dominio, hay que actualizarlos.
- **Fotografías**: provienen de los sitios de la organización y están optimizadas para web.
  Vale la pena reemplazarlas por originales en alta calidad y generar versiones WebP/AVIF.
- **Contacto**: no hay correo ni teléfono públicos en los sitios actuales; si existen,
  conviene agregarlos al pie.
