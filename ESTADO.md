# ESTADO.md · Cómo entrenar a tu IA

Material complementario del taller "Cómo entrenar a tu IA" (Claude Code para no programadores, Anfibia Escuela). Adaptación del repo claude-code-everyone-course de Carl Vellotti.

**Instrucción de reanudación:** leé este archivo completo, después ANALISIS.md y CONTEXTO-TALLER.md, y seguí desde "Próximo paso concreto". No re-explores el repo original: el análisis ya está hecho.

---

## Fase actual: FASE 3 en curso (adaptación de contenido)

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
- [ ] Unidad 9: course-materials/ en español (escenario Cimarrón, guiones CLAUDE.md, comandos /clase-X-Y, archivos de práctica con datos INCAA)
- [ ] Unidad 10: limpieza infra (EmailPopup, DownloadGate, api/join*, GA del autor, convert-content.sh, fix-frontmatter*.py, releases/*.zip viejos, course-structure.json nuevo)

### Pendientes marcados en el contenido
- `pages/antes-de-empezar/primer-arranque.mdx` y landing: LINK-PENDIENTE del zip de materiales (definir dónde se publica el repo/release de Thiago). La carpeta de materiales se llamará `taller-ia`.
- A medida que se crean secciones nuevas hay que ir agregándolas a `pages/_meta.ts` (hoy solo tiene index, antes-de-empezar y search).

## Estado por fase

- [x] **Fase 1 · Análisis**: repo clonado en `C:\Users\Thiago\como-entrenar-a-tu-ia`, explorado a fondo. Hallazgos en `ANALISIS.md`. Dato clave: la empresa ficticia es **Basecamp Coffee** (TaskFlow es legacy). El curso tiene doble superficie: sitio web de referencia (pages/) + lecciones interactivas (course-materials/ con guiones CLAUDE.md y comandos /start-X-Y).
- [x] **Fase 2 · Contexto del taller**: documentado en `CONTEXTO-TALLER.md` (audiencia, arco de 4 clases, 5 verticales, tono, FAQ requerida).
- [ ] **Fase 3 · Adaptación de contenido**: BLOQUEADA hasta que Thiago apruebe la propuesta de navegación (ver abajo). Ir clase por clase, commit por clase.
- [ ] **Fase 4 · Rediseño visual**: Tungsten (fallback Oswald) / Merriweather / Roboto, blanco y negro, dark+light mode. Tocar `styles/globals.css` y `theme.config.tsx`.
- [ ] **Fase 5 · Verificación**: npm install, npm run dev, build, revisar restos de inglés/TaskFlow/Basecamp.

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

**Unidad 9: adaptar course-materials/** al escenario Cimarrón en español:
1. Renombrar comandos `.claude/commands/start-X-Y.md` → `clase-X-Y.md` (mapeo: 1.2→1-2? OJO: el mapeo original NO es 1 a 1: las lecciones originales 1.1-1.8 y 2.1-2.5 se redistribuyen en /clase-1-1 a /clase-1-4, /clase-2-1 a /clase-2-3, /clase-3-1 a /clase-3-4, /clase-4-1 a /clase-4-3, según las páginas ya publicadas en pages/)
2. Reescribir guiones lesson-modules/*/CLAUDE.md en español con formato STOP/USER/ACTION/Discovery + Success Criteria (ver ANALISIS.md sección "Anatomía de una lección interactiva")
3. Reemplazar archivos de práctica: company-context/ → contexto de Cimarrón/Butaca; inherited-chaos/ → caos-heredado/ (notas-del-editor-anterior.md, comentarios-lectores/ x4 meses, newsletters-viejas/, otros-medios/, estrenos-incaa.csv con datos verosímiles del INCAA); templates/ → plantillas/ (informe-direccion.md, resumen-prensa.md); attachments/loyalty-flyer.jpg → placa promo genérica (generar o describir); .claude/agents/ → editora-brutal, lector-distraido, directora
4. Semillas narrativas a mantener: "correcta pero olvidable" (comentarios) y la idea del quiz "¿Qué clásico del cine argentino sos?" (en notas del editor)
5. Actualizar course-structure.json a las 4 clases
Es la unidad más grande: se puede partir en sub-commits (contexto+caos primero, guiones después).

## Convenciones fijadas (respetar en todo el contenido)

- Escenario: revista **Cimarrón**, sección de cine **Butaca**, editor anterior que se fue, datos INCAA, newsletter en caída. Carpeta de práctica: `caos-heredado/` (con `comentarios-lectores/`, `notas-del-editor-anterior.md`, etc.), carpeta de salida `ordenado/`, `plantillas/`.
- Carpeta descargable del taller: `taller-ia`
- Comandos interactivos: `/clase-X-Y` (Clase 1: /clase-1-1 a /clase-1-4)
- Tono: rioplatense Anfibia, sin em dashes, términos técnicos en inglés sin traducir
- Cada lección: frontmatter SEO en español + tiempo + callout "Lección interactiva" + tablas de referencia + problemas típicos + link a siguiente lección

## Log de commits

- `cbb7599` docs: análisis del repo original + estado + contexto del taller
- `7f8791e` feat: navegación nueva + landing + antes de empezar
- (siguiente) feat: Clase 1 COMPRENDER
