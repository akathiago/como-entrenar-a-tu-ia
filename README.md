# Cómo entrenar a tu IA · Sitio del taller

Sitio de referencia del taller "Cómo entrenar a tu IA" (Claude Code para no programadores) de Anfibia Escuela, dictado por Thiago. Construido con Nextra sobre Next.js, exporta un sitio estático.

Adaptación de [Claude Code for Everyone](https://github.com/carlvellotti/claude-code-everyone-course) de Carl Vellotti, bajo licencia CC BY-NC-ND 4.0.

## Desarrollo

```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Build

```bash
npm run build
# genera el sitio estático en out/
# el postbuild corre next-sitemap y pagefind (índice de búsqueda)

npm run preview
# sirve out/ en http://localhost:3000
```

## Estructura

```
pages/                  # Contenido del sitio (MDX)
├── antes-de-empezar/   # Qué es Claude Code, instalación, primer arranque
├── clase-1/ … clase-4/ # Las 4 clases del taller
├── verticales/         # Guías por vertical (webs, datos, automatización…)
├── recursos/           # Recaps por clase + cheat sheet
├── faq.mdx             # Preguntas frecuentes
└── index.mdx           # Landing

course-materials/       # Carpeta descargable del taller (taller-ia)
├── lecciones/          # Guiones interactivos /clase-X-Y
├── caos-heredado/      # Archivos de práctica (escenario Cimarrón)
└── .claude/            # Comandos y agents de ejemplo

styles/globals.css      # Sistema tipográfico y paleta B&N
theme.config.tsx        # Configuración del theme Nextra
ESTADO.md               # Estado del proyecto de adaptación
```

## Deploy

Sitio estático: cualquier hosting sirve (Vercel, Netlify, GitHub Pages). En Vercel: framework Next.js, build `npm run build`, output `out/`. Al definir la URL final, actualizar `SITE_URL` en `theme.config.tsx` y `siteUrl` en `next-sitemap.config.js`.
