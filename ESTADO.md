# ESTADO.md · Cómo entrenar a tu IA (fases 1-5 completas)

Material complementario del taller "Cómo entrenar a tu IA" (Claude Code para no programadores, Anfibia Escuela). Adaptación del repo claude-code-everyone-course de Carl Vellotti.

**Instrucción de reanudación:** leé este archivo completo, después ANALISIS.md y CONTEXTO-TALLER.md, y seguí desde "Próximo paso concreto". No re-explores el repo original: el análisis ya está hecho.

---

## Fase actual: TODAS LAS FASES COMPLETAS. El sitio buildea y está listo para deploy.

### Decisiones ya tomadas por Thiago (2026-07-12)
- Navegación aprobada tal como está abajo.
- Escenario narrativo: **revista digital ficticia "Cimarrón"** + datos del INCAA (reemplaza a Basecamp Coffee, misma mecánica de misterio: la persona alumna hereda la sección de cine/datos hecha un caos).
- Alcance: se adaptan **sitio web + guiones interactivos** de course-materials/ (comandos pasan de `/start-X-Y` a `/clase-X-Y`).

### Progreso fase 3 (una unidad = un commit)
- [x] Unidad 1: navegación nueva + landing (index.mdx) + sección "Antes de empezar" (3 páginas) + search.mdx en español. Páginas viejas en inglés ELIMINADAS del working tree (recuperables con `git show cbb7599:pages/...`).
- [x] Unidad 2: Clase 1 · COMPRENDER (pages/clase-1/: index + 4 lecciones). Escenario Cimarrón/Butaca presentado en 1.1 y en el index de la clase. Carpeta de materiales referida como `caos-heredado/` (nombre a respetar en unidad 9).
- [x] Unidad 3: Clase 2 · EXPERIMENTAR (pages/clase-2/: index + los-5-patrones + agentes-en-paralelo + ejercicios-por-vertical). Nuevo archivo de práctica referido: `caos-heredado/estrenos-incaa.csv` y `plantillas/resumen-prensa.md` (crear en unidad 9). Comandos /clase-2-1 a /clase-2-3.
- [x] Unidad 4: Clase 3 · PUBLICAR (pages/clase-3/: index + planificar + construir-e-iterar + github + deploy). Proyecto narrativo: quiz "¿Qué clásico del cine argentino sos?" (con opción de proyecto propio). Archivo de requisitos: `REQUISITOS.md`. Comandos /clase-3-1 a /clase-3-4.
- [x] Unidad 5: Clase 4 · POTENCIAR+MOSTRAR (pages/clase-4/: index + sub-agentes-y-skills + automatizar-tu-rutina + mostrar-lo-construido). Incluye formato de demo final (3 min), MCP y browser automation presentados a nivel conceptual. Comandos /clase-4-1 a /clase-4-3.
- [x] Unidad 6: Las 5 verticales (pages/verticales/: index + 5 guías escritas de cero, ~100 líneas c/u, formato: para quién + 3 casos con prompts + mini-proyecto + límites honestos).
- [x] Unidad 7: Preguntas frecuentes (pages/faq.mdx: privacidad, formatos, licencias, sin-programar, costos, miscelánea). Fechada "julio 2026" para revisiones futuras.
- [x] Unidad 8: Recursos (pages/recursos/: index + 4 recaps por clase + cheat-sheet). Cada recap: lo esencial + prompts + tarea semanal + links.
- [x] Unidad 9a: archivos de práctica Cimarrón en course-materials/ (contexto/, caos-heredado/ completo con CSV de práctica + LEEME-DATOS, plantillas/, recursos-graficos/placa-newsletter.svg, README nuevo). Commit b3499ec. NOTA: la placa es SVG, no JPG; si se quiere práctica de pegar imagen real, convertir a PNG/JPG después.
- [x] Unidad 9b: guiones interactivos (course-materials/lecciones/clase-X-Y.md, 14 guiones), comandos .claude/commands/clase-X-Y.md, SCRIPT_INSTRUCTIONS en español, sub-agentes de ejemplo (editora-brutal, lector-distraido, directora), course-structure.json de 4 clases. NOTA: una sesión se cortó a mitad de esta unidad; se completó en la sesión siguiente (faltaban clase-4-3.md, los 3 agents y course-structure.json). El material viejo en inglés (lesson-modules/, start-X-Y, agents originales) quedó eliminado en este commit.
- [x] Unidad 10: limpieza infra. Eliminados: EmailPopup, DownloadGate (y sus usos en pages/_app.jsx), api/join.js, api/join2.js, vercel.json (solo tenía los rewrites de /join), GA del autor y su meta google-site-verification en theme.config.tsx, convert-content.sh, fix-frontmatter*.py, releases/*.zip. Se conservó components/charts.jsx (lo usan las páginas).

### Pendientes marcados en el contenido
- `pages/antes-de-empezar/primer-arranque.mdx` y landing: LINK-PENDIENTE del zip de materiales (definir dónde se publica el repo/release de Thiago). La carpeta de materiales se llamará `taller-ia`.
- A medida que se crean secciones nuevas hay que ir agregándolas a `pages/_meta.ts` (hoy solo tiene index, antes-de-empezar y search).

## Estado por fase

- [x] **Fase 1 · Análisis**: repo clonado en `C:\Users\Thiago\como-entrenar-a-tu-ia`, explorado a fondo. Hallazgos en `ANALISIS.md`. Dato clave: la empresa ficticia es **Basecamp Coffee** (TaskFlow es legacy). El curso tiene doble superficie: sitio web de referencia (pages/) + lecciones interactivas (course-materials/ con guiones CLAUDE.md y comandos /start-X-Y).
- [x] **Fase 2 · Contexto del taller**: documentado en `CONTEXTO-TALLER.md` (audiencia, arco de 4 clases, 5 verticales, tono, FAQ requerida).
- [x] **Fase 3 · Adaptación de contenido**: COMPLETA. Unidades 1 a 10 commiteadas.
- [x] **Fase 4 · Rediseño visual**: HECHA (sin verificar en browser, eso es fase 5). Detalles:
  - `styles/globals.css` reescrito: títulos Tungsten (fallback Oswald, Google Fonts) en MAYÚSCULAS, prosa Merriweather, UI (sidebar/nav/toc) Roboto, código JetBrains Mono. Paleta blanco y negro vía `--nextra-primary-saturation: 0%` en ambos modos. Eliminados los acentos teal/rojo del autor; links subrayados color heredado; inline code y botón de copiar neutros en dark y light. Se eliminó la regla que ocultaba h1 en mobile (dependía de imágenes de título del sitio original).
  - `theme.config.tsx`: logo y branding "Cómo entrenar a tu IA", footer Anfibia Escuela + crédito a Carl Vellotti (CC BY-NC-ND), feedback link de Carl eliminado, `project`/`docsRepositoryBase` eliminados, SEO/OG en español, `nextThemes.defaultTheme: 'system'` (antes forzaba dark), `primaryHue: 0` + `primarySaturation: 0`. OG image ahora solo se emite si la página define `ogImage` en frontmatter (la imagen del autor ya no se usa; crear una propia es pendiente opcional).
  - `next-sitemap.config.js`: siteUrl → placeholder `https://como-entrenar-a-tu-ia.vercel.app` (LINK-PENDIENTE, sync con theme.config.tsx), prioridades ajustadas a /clase y /verticales.
- [x] **Fase 5 · Verificación**: COMPLETA. `npm install` (471 paquetes) + `npm run build` verde: 46 rutas, sitemap OK, Pagefind indexa 37 páginas en español. Sitio servido desde `out/` y revisado en browser en dark y light. Bugs encontrados y arreglados en esta fase:
  - `pages/antes-de-empezar/primer-arranque.mdx`: comentario HTML `<!-- -->` rompía el build (MDX no lo soporta). Ahora es `{/* */}`.
  - Strings del theme de Nextra que quedaban en inglés ("Search documentation…", "On This Page", "Scroll to top", Light/Dark/System): traducidos vía `search`, `toc`, `themeSwitch` en theme.config.tsx.
  - `<title>` duplicaba el nombre del sitio en 9 páginas que ya lo traen en el frontmatter: el head ahora solo lo agrega si falta. Se eliminó `useNextSeoProps` (es de Nextra 2, no hacía nada en 3).
  - JetBrains Mono no se aplicaba (las clases Tailwind de Nextra ganaban): la regla de `code, pre` ahora lleva `!important`.
  - `notFound` del theme linkeaba a un issue del repo de Carl: apagado y reemplazado por `pages/404.mdx` en español.
  - `pages/_document.jsx`: `lang="en"` → `lang="es"` (Pagefind indexaba como inglés) y se eliminaron los pixels de Meta/LinkedIn/X del autor.
  - Limpieza: borrados `DEPLOY.md` (instrucciones con paths de Carl), `README.md` reescrito, y todo `public/` salvo los favicons (imágenes, video, zips y cheatsheet HTML del autor, ~19 MB; ninguna estaba referenciada desde el contenido).
  - Barrida de TaskFlow / Basecamp / inherited-chaos / lesson-modules / start-X-Y: sin restos. Las 2 menciones a ccforeveryone.com que quedan son los créditos a Carl (a propósito).

## Navegación aprobada

```
Inicio (landing del taller)
Antes de empezar          → qué es Claude Code, instalación (Windows primero), primer arranque
Clase 1 · COMPRENDER      → cómo pensar la herramienta, archivos y @, comandos básicos, CLAUDE.md
Clase 2 · EXPERIMENTAR    → los 5 patrones con archivos, agentes en paralelo, casos por vertical
Clase 3 · PUBLICAR        → planificar un proyecto, construirlo, GitHub, deploy con URL real
Clase 4 · POTENCIAR       → sub-agentes, skills, automatización, mostrar lo construido
Las 5 verticales          → una guía por vertical (webs, datos, automatización, agentes propios, juegos)
Preguntas frecuentes      → privacidad, formatos, licencias, hasta dónde sin programar
Recursos                  → recap por clase, cheat sheet, glosario
```

## Qué falló / notas

- Nada falló hasta ahora.
- El repo trae EmailPopup, DownloadGate, endpoints de newsletter (api/join*.js) y Google Analytics del autor: se eliminan en fase 3/4.
- Licencia del original: CC BY-NC-ND 4.0 (footer). Ojo: técnicamente ND no permite derivados; el autor igual publica el repo abierto. Mantener crédito a Carl Vellotti en el footer.

## Próximo paso concreto

El taller está terminado y buildea. Lo que queda son decisiones de Thiago, no trabajo pendiente de código:

1. **Publicar el repo y deployar** (Vercel/Netlify/GitHub Pages: build `npm run build`, output `out/`). Nada está pusheado todavía: main tiene 14 commits locales.
2. **Definir la URL final** y actualizarla en dos lugares: `SITE_URL` en `theme.config.tsx` y `siteUrl` en `next-sitemap.config.js` (hoy ambos con placeholder).
3. **LINK-PENDIENTE del zip de materiales**: en `pages/antes-de-empezar/primer-arranque.mdx` (y mención en la landing). Sale de publicar `course-materials/` como release o zip. La carpeta que descarga el alumno se llama `taller-ia`.
4. **Favicon**: `public/favicon.ico` y `favicon.png` siguen siendo los de Carl. Reemplazar por uno de Anfibia.
5. **Opcional**: placa OG propia (hoy no se emite `og:image` salvo que una página declare `ogImage` en el frontmatter) y convertir `recursos-graficos/placa-newsletter.svg` a PNG/JPG si se quiere practicar pegar una imagen real.

## Convenciones fijadas (respetar en todo el contenido)

- Escenario: revista **Cimarrón**, sección de cine **Butaca**, editor anterior que se fue, datos INCAA, newsletter en caída. Carpeta de práctica: `caos-heredado/` (con `comentarios-lectores/`, `notas-del-editor-anterior.md`, etc.), carpeta de salida `ordenado/`, `plantillas/`.
- Carpeta descargable del taller: `taller-ia`
- Comandos interactivos: `/clase-X-Y` (Clase 1: /clase-1-1 a /clase-1-4)
- Tono: rioplatense Anfibia, sin em dashes, términos técnicos en inglés sin traducir
- Cada lección: frontmatter SEO en español + tiempo + callout "Lección interactiva" + tablas de referencia + problemas típicos + link a siguiente lección

## Log de commits

- `cbb7599` docs: análisis del repo original + estado + contexto del taller
- `7f8791e` feat: navegación nueva + landing + antes de empezar
- `f45062f` feat: Clase 1 COMPRENDER
- `4eecec6` feat: Clase 2 EXPERIMENTAR
- `d15acb7` feat: Clase 3 PUBLICAR
- `1f970f4` feat: Clase 4 POTENCIAR+MOSTRAR
- `108592f` feat: guías de las 5 verticales
- `4015057` feat: preguntas frecuentes
- `10f798a` feat: sección Recursos
- `b3499ec` feat: materiales de práctica Cimarrón (9a)
- `cac460e` feat: guiones interactivos /clase-X-Y en español, escenario Cimarrón (9b)
- `5e39412` chore: limpieza de infra del autor original (unidad 10)
- `4cfacc8` feat: rediseño visual B&N + rebranding (fase 4)
- (siguiente) fix: build verde, theme en español y limpieza de assets (fase 5)
