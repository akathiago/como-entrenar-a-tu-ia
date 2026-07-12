# ANALISIS.md · Repo original "Claude Code for Everyone"

Análisis del repo de Carl Vellotti (github.com/carlvellotti/claude-code-everyone-course) y del sitio ccforeveryone.com, como base para adaptarlo al taller "Cómo entrenar a tu IA" (Anfibia Escuela).

---

## 1. Qué es este repo

Un sitio de documentación construido con **Next.js 14 + Nextra 3** (theme docs) que funciona como material de referencia de un curso de Claude Code para gente no técnica. El truco pedagógico central: **el curso se dicta ADENTRO de Claude Code**. El sitio web es el material consultable; las lecciones interactivas viven en `course-materials/` y se ejecutan con slash commands (`/start-1-1`, etc.).

### Stack técnico
- **Next.js 14.2.5** con `output: 'export'` (sitio estático)
- **Nextra 3.2.3** + **nextra-theme-docs** (navegación, sidebar, dark mode, search)
- **Pagefind** para búsqueda client-side (corre en postbuild)
- **next-sitemap** para SEO
- Deploy pensado para Vercel

### Contenido vs infraestructura

| Contenido (adaptar/reescribir) | Infraestructura (mantener/ajustar) |
|---|---|
| `pages/**/*.mdx` (todas las lecciones y guías) | `next.config.mjs`, `tsconfig.json`, `package.json` |
| `pages/**/_meta.ts` (navegación, adaptar labels) | `theme.config.tsx` (personalizar en fase 4) |
| `course-materials/` (lecciones interactivas + archivos de práctica) | `styles/globals.css` (reemplazar en fase 4) |
| `course-structure.json` (estructura del curso) | `next-sitemap.config.js`, `vercel.json` |
| `public/images/` (gráficas del curso original) | `components/` (evaluar: EmailPopup, DownloadGate, charts) |

### Cosas legacy / a limpiar
- `convert-content.sh`, `fix-frontmatter*.py`: scripts de conversión del repo original del autor, no sirven para nosotros.
- Referencias a "TaskFlow": solo quedan en README, convert-content.sh y search.mdx. **La empresa ficticia real del curso es "Basecamp Coffee"** (cadena de café del Pacific Northwest con un programa de fidelización que fracasa). TaskFlow era de una versión anterior (curso para PMs).
- `components/EmailPopup.jsx` y `components/DownloadGate.jsx`: captura de emails del autor (newsletter fullstackpm.com). Sacar o reemplazar.
- `api/join.js`, `api/join2.js`: endpoints de suscripción a su newsletter (Beehiiv). Sacar.
- Google Analytics del autor (G-2T3EBZQ0ZC) en theme.config.tsx. Sacar.
- `releases/*.zip`: bundles descargables de los materiales. Regenerar si mantenemos esa mecánica.
- Video promo `cc4pms2.mp4` y OG images en `public/`.

---

## 2. Estructura del contenido

### Navegación actual (pages/_meta.ts)
```
Home
Module 0: Getting Started    → introduction, installation, start-and-clone
Module 1: Fundamentals       → 8 lecciones (generadas desde course-structure.json)
Module 2: Vibe Coding        → setup, plan, build-iterate, github, go-live
Mini Lessons                 → 3 workflows de invitados
Complete Guide to Cowork     → página standalone
GSD: Advanced Vibe Coding    → página standalone
Guides & Reference           → 14 guías SEO por rol/tema
Search
```

**Detalle técnico:** `pages/fundamentals/_meta.ts` genera la navegación dinámicamente desde `course-structure.json`. El resto de los `_meta.ts` son objetos estáticos. Si cambiamos la estructura, conviene simplificar todo a estático o mantener el JSON como fuente de verdad.

### Los dos planos del curso
1. **Sitio web (pages/)**: material de REFERENCIA. Cada lección mdx es un resumen consultable con tablas, patrones y ejemplos. No es donde se aprende: es donde se repasa.
2. **course-materials/**: el curso VIVO. Se descarga como zip, se abre con Claude Code, y cada lección es un `CLAUDE.md` con guion que Claude interpreta como docente interactivo.

### Anatomía de una lección interactiva (course-materials/lesson-modules/*/CLAUDE.md)
Formato de guion teatral con marcadores:
- **Texto plano**: lo que Claude le dice al alumno
- **`STOP:`**: punto donde Claude espera respuesta/acción del alumno
- **`USER:`**: respuesta esperada
- **`ACTION:`**: lo que Claude debe hacer (crear archivos, analizar, buscar)
- **`**Discovery:**`**: revelación narrativa que hace avanzar la historia
- Cierre con **"Important Notes for Claude"** y **"Success Criteria"** (checklist)

Los comandos `/start-X-Y` (en `.claude/commands/`) le dicen a Claude: leé el guion en silencio, leé SCRIPT_INSTRUCTIONS.md, y empezá a enseñar sin preámbulo.

### Anatomía de una página de referencia (mdx)
- Frontmatter con title/description/keywords (SEO fuerte)
- Tiempo estimado + link a la lección interactiva (`/start-X-Y`)
- Concepto en 1-2 frases, sin jerga
- Tablas para sintaxis y comparaciones
- Patrones numerados con ejemplo copy-pasteable en bloque de código
- "Use cases" tras cada patrón (ancla a la vida real del alumno)
- Best practices / Troubleshooting en tabla
- Cierre "What's Next →" (encadena a la siguiente)

---

## 3. Patrones pedagógicos (lo que hay que conservar)

1. **Narrativa con misterio**: no son ejercicios sueltos. El alumno es "el nuevo manager" de Basecamp Coffee que hereda un desastre (`inherited-chaos/`: notas caóticas, feedback de clientes, campañas viejas, un CSV). Cada lección revela pistas ("fine but forgettable", la idea del "coffee personality quiz") que desembocan en el proyecto final del Módulo 2: construir el quiz y deployarlo. **El arco narrativo ES el curso.**
2. **Aprender haciendo con archivos reales**: cada concepto se practica sobre los archivos del escenario, nunca en abstracto.
3. **Escalera de complejidad**: ver archivos → referenciarlos (@) → comandos → agentes → sub-agentes → memoria (CLAUDE.md) → construir y publicar una app.
4. **Doble superficie**: lección interactiva (experiencia) + página web (referencia consultable después). La página web nunca reemplaza la práctica.
5. **Anclas a la vida real**: cada patrón cierra con "dónde más aplica esto" (meeting notes, tickets, propuestas).
6. **Fricción mínima**: todo comando es copy-pasteable, cada lección dice cuánto tiempo toma, el troubleshooting está al lado de la instrucción.
7. **Guías por rol como puerta lateral**: quien no quiere el curso completo entra por "Claude Code for Writers/Researchers/etc.". Buen modelo para nuestras 5 verticales.

## 4. ccforeveryone.com (presentación y UX)

- **Propuesta de valor en una frase**: "Learn Claude Code IN Claude Code". Diferenciador claro, repetido.
- **Onboarding de 3 pasos**: instalar → descargar materiales → tipear `/start-1-1`. Sin registro, sin paywall (aunque el repo tiene EmailPopup/DownloadGate, discretos).
- **Orden de la landing**: propuesta → video → CTAs → "para quién es" → qué vas a aprender (con tiempos) → puerta lateral (guías) → cómo funciona → requisitos → créditos/disclaimer.
- **Transparencia**: dice explícitamente que requiere Claude Pro (USD 20/mes) y que no está afiliado a Anthropic.
- **Tono**: conversacional, cero jerga, "if you can have a conversation, you can use Claude Code". Facilitador, no vendedor.

## 5. Implicancias para la adaptación

- **Mantener**: el mecanismo de doble superficie (web + lecciones interactivas), el formato de guion con STOP/ACTION, la escalera de conceptos, las tablas de referencia, los tiempos estimados, el troubleshooting inline, el onboarding de 3 pasos.
- **Reemplazar**: Basecamp Coffee por casos de nuestra audiencia (datos del INCAA, monitoreo de prensa, informes de investigación, sitios personales). La narrativa de misterio conviene recrearla con un escenario local, no traducirla.
- **Reestructurar**: de "Módulo 0/1/2" a las 4 clases del taller (COMPRENDER → EXPERIMENTAR → PUBLICAR → POTENCIAR+MOSTRAR). Las 8 lecciones de Fundamentals y las 5 de Vibe Coding se redistribuyen en ese arco.
- **Agregar**: sección FAQ (privacidad, formatos, licencias, límites sin saber programar), recursos/recap por clase, cobertura de las 5 verticales (el original es fuerte en archivos+vibe coding, flojo en datos/dashboards y automatización).
- **Instalación**: el original ya prioriza bien Windows PowerShell; profundizar troubleshooting Windows (80% de nuestra audiencia).
- **Limpiar**: analytics, email gates, newsletter endpoints, scripts de conversión, zips viejos.
- **Fase 4 visual**: hoy es estética dev (monospace, teal #1DD3B0, acentos rojos, dark default). Todo el theming vive en `styles/globals.css` + `theme.config.tsx`, así que el rediseño editorial (Tungsten/Oswald + Merriweather + Roboto, blanco y negro) es viable sin tocar la infraestructura.
