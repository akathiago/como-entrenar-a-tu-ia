# Lección 4.1: Sub-agentes y skills

Última clase. Butaca está viva y publicada; ahora armamos el sistema para que se mantenga viva sin que trabajes 14 horas por día.

Primera pieza: los **sub-agentes**. Ya usaste agentes para procesar en paralelo (los pasantes). Los sub-agentes son otra cosa: asesores PERMANENTES, cada uno con su mirada, siempre disponibles. El directorio de tu proyecto, pero que atiende a las 3 AM.

STOP: ¿Qué tres miradas te vendrían bien para revisar lo que producís en Butaca? Pensalo un segundo (después te muestro las mías).

USER: Propone

Buenas. Las que yo tenía preparadas (y podemos mezclar con las tuyas):

- **La Editora Brutal**: lee borradores con la vara de la editora más exigente que tuviste
- **El Lector Distraído**: si él no entiende el título, nadie lo entiende
- **La Directora**: solo le importa si esto trae lectores y cuánto cuesta

---

Los sub-agentes son archivos en `.claude/agents/`: un encabezado (nombre, descripción) y un prompt con la personalidad. En esta carpeta ya hay tres armados: espialos en tu editor si querés.

Probemos uno.

STOP: Pedime que la editora-brutal revise @ordenado/informe-direccion.md (el informe que escribiste en la Clase 2).

USER: Lo pide

ACTION: Invocá al sub-agente editora-brutal para revisar el informe. La revisión tiene que ser dura, específica y con sugerencias concretas, en personaje. Guardala en revisiones/informe-direccion-editora.md.

STOP: ¿Viste el tono? Ahora el contraste: pedile la revisión del MISMO archivo a la directora.

USER: Lo pide

ACTION: Invocá al sub-agente directora: revisión centrada en números, resultados y costos, nada de estilo. Guardala en revisiones/informe-direccion-directora.md. Después señalá el contraste: mismo documento, dos miradas, dos revisiones útiles distintas.

---

Ahora creá uno TUYO, para tu trabajo real.

STOP: Decime qué asesor te serviría en tu vida profesional (el "revisor 2" de tus papers, el cliente difícil, el abogado paranoico) y pedime que lo cree.

USER: Lo describe

ACTION: Creá el archivo en .claude/agents/ con nombre en minúsculas-con-guiones, descripción y un prompt de personalidad bien escrito. Mostráselo y explicá que puede editarlo como cualquier archivo. Probalo con algo si la persona quiere.

---

Segunda pieza, rapidita: las **skills**. Si el sub-agente es QUIÉN revisa, la skill es CÓMO se hace una tarea: instrucciones empaquetadas con tus pasos y criterios, que se invocan como comando. Viven en `.claude/skills/`. En la próxima lección armamos una de verdad junto con los comandos de automatización, así que guardá el concepto.

## Cierre

1. Sub-agentes = consejo asesor permanente, en archivos editables
2. Mismo documento + distintas miradas = revisión completa
3. Ya tenés un asesor propio para tu trabajo real

STOP: ¿Seguimos con la automatización? /clase-4-2

USER: Sí / /clase-4-2

---

## Notas para Claude

- Las revisiones se guardan de verdad en revisiones/
- Las dos revisiones contrastadas son el momento clave de la lección
- El sub-agente propio tiene que quedar creado y funcionando

## Criterios de éxito

- [ ] Vio dos sub-agentes revisar el mismo documento con miradas distintas
- [ ] Los archivos de revisiones/ existen
- [ ] Creó un sub-agente propio para su trabajo
- [ ] Sabe qué es una skill (concepto) y que se profundiza en 4.2
