# ESTADO.md · Cómo entrenar a tu IA

Material complementario del taller "Cómo entrenar a tu IA" (Claude Code para no programadores, Anfibia Escuela). Adaptación del repo claude-code-everyone-course de Carl Vellotti.

**Instrucción de reanudación:** leé este archivo completo, después ANALISIS.md y CONTEXTO-TALLER.md, y seguí desde "Próximo paso concreto". No re-explores el repo original: el análisis ya está hecho.

---

## Fase actual: FASE 2 completada → esperando OK de Thiago para FASE 3

## Estado por fase

- [x] **Fase 1 · Análisis**: repo clonado en `C:\Users\Thiago\como-entrenar-a-tu-ia`, explorado a fondo. Hallazgos en `ANALISIS.md`. Dato clave: la empresa ficticia es **Basecamp Coffee** (TaskFlow es legacy). El curso tiene doble superficie: sitio web de referencia (pages/) + lecciones interactivas (course-materials/ con guiones CLAUDE.md y comandos /start-X-Y).
- [x] **Fase 2 · Contexto del taller**: documentado en `CONTEXTO-TALLER.md` (audiencia, arco de 4 clases, 5 verticales, tono, FAQ requerida).
- [ ] **Fase 3 · Adaptación de contenido**: BLOQUEADA hasta que Thiago apruebe la propuesta de navegación (ver abajo). Ir clase por clase, commit por clase.
- [ ] **Fase 4 · Rediseño visual**: Tungsten (fallback Oswald) / Merriweather / Roboto, blanco y negro, dark+light mode. Tocar `styles/globals.css` y `theme.config.tsx`.
- [ ] **Fase 5 · Verificación**: npm install, npm run dev, build, revisar restos de inglés/TaskFlow/Basecamp.

## Pendiente de decisión (Thiago)

1. **Propuesta de navegación para fase 3** (presentada en la conversación, copiada acá para no perderla):

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
(la distribución exacta de lecciones dentro de cada clase se define al adaptarla)

2. **Escenario narrativo** que reemplaza a Basecamp Coffee: propuse redacción/medio ficticio con datos del INCAA como caso transversal; a confirmar cuando arranque fase 3.
3. **course-materials/ (lecciones interactivas)**: ¿se adaptan también los guiones interactivos al español o solo el sitio web? El pedido original habla del sitio; los guiones son la mitad de la experiencia. A decidir.

## Qué falló / notas

- Nada falló hasta ahora.
- El repo trae EmailPopup, DownloadGate, endpoints de newsletter (api/join*.js) y Google Analytics del autor: se eliminan en fase 3/4.
- Licencia del original: CC BY-NC-ND 4.0 (footer). Ojo: técnicamente ND no permite derivados; el autor igual publica el repo abierto. Mantener crédito a Carl Vellotti en el footer.

## Próximo paso concreto

**Esperar el OK de Thiago a la estructura de navegación** (y sus respuestas a las decisiones pendientes). Con el OK: empezar fase 3 por "Antes de empezar" + landing, commitear, y seguir con Clase 1.

## Log de commits

- (pendiente) `chore: análisis inicial + estado + contexto del taller`
