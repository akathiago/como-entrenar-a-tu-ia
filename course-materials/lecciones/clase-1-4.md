# Lección 1.4: CLAUDE.md, la memoria del proyecto

Última lección de la Clase 1, y es la que ata todo.

Problema conocido: cada conversación nueva con un chatbot arranca de cero. Quién sos, qué hacés, cómo te gusta que escriba. Todo de nuevo, cada vez.

Acá eso se resuelve con un archivo: **CLAUDE.md**. Vive en la raíz de la carpeta del proyecto y yo lo leo automáticamente al arrancar cada sesión. Lo escribís una vez, lo sé para siempre.

STOP: Pensalo como una constitución: manda sobre toda la conversación, y si un pedido puntual choca con ella, gana la constitución. ¿Se entiende la idea?

USER: Sí

---

Armemos la constitución de Butaca. Y de paso, mirá lo que ya sabemos del proyecto.

STOP: Pedime que lea @contexto/ (la carpeta entera) y que con eso arme un CLAUDE.md para este proyecto.

USER: Lo pide

ACTION: Leé contexto/ESCENARIO.md, VOZ-DE-CIMARRON.md y LA-NEWSLETTER.md, y creá un CLAUDE.md en la raíz con: el proyecto (relanzar Butaca), el rol de la persona, estilo (rioplatense, datos con fuente, sin solemnidad), terminología (lectores no usuarios, Cimarrón sin artículo, la sección es Butaca), y reglas (NUNCA inventar cifras; borradores a ordenado/). Mostráselo y explicá cada sección en una línea.

STOP: Mirá el archivo en tu editor. ¿Cambiarías algo? Podés pedirme ajustes o editarlo vos directamente: es un archivo tuyo.

USER: Lo revisa, quizás pide ajustes

[Aplicá los ajustes que pida.]

---

Ahora la prueba de que funciona. Fijate que en el CLAUDE.md dice "SIEMPRE lectores, NUNCA usuarios".

STOP: Pedime que escriba un párrafo sobre los problemas de la newsletter, sin recordarme ninguna regla.

USER: Lo pide

ACTION: Escribí el párrafo respetando visiblemente las reglas del CLAUDE.md: "lectores", tono de la revista, sin inventar cifras (usá las de contexto/LA-NEWSLETTER.md). Después señalá explícitamente qué reglas aplicaste sin que te las recordara.

¿Viste? No me recordaste nada y las reglas se aplicaron igual. Eso es la memoria trabajando.

---

Tres cosas más que valen saber:

1. **Reglas al vuelo con #**: si en medio de una sesión escribís un mensaje que empiece con `#` (por ejemplo: `# en esta sesión todo en viñetas`), te ofrezco guardarlo en la memoria.
2. **El CLAUDE.md global**: en `~/.claude/CLAUDE.md` podés tener TU constitución personal, la que aplica en todos tus proyectos: quién sos, cómo te gusta trabajar. Escribirlo es la mejor tarea para casa de todo el taller.
3. **Qué NO va**: datos sensibles (contraseñas, datos de terceros), cosas temporales. La prueba: ¿querés que lo sepa dentro de 6 meses? Si no, no va.

STOP: ¿Qué pondrías en TU CLAUDE.md global? Tirame dos o tres cosas.

USER: Responde

[Comentá sus ideas y sugerí una que le falte, típicamente el tono de escritura o la profesión.]

---

## Cierre de la Clase 1

Terminaste la primera clase. Ya sabés:

1. Dirigir en vez de ejecutar
2. Ver los archivos mientras trabajo (pantalla partida)
3. Señalar con @
4. Controlarme (Escape, modos, /clear)
5. Darme memoria (CLAUDE.md)

**Tarea para la semana:** abrime en una carpeta TUYA con archivos reales y pedime que te la explique. Y escribí tu CLAUDE.md global.

La Clase 2 es donde esto se pone bueno: los 5 patrones de trabajo y el diagnóstico de Butaca. Los comentarios de los lectores nos están esperando.

STOP: Nos vemos en /clase-2-1. ¿Alguna duda antes de cerrar?

USER: Responde

---

## Notas para Claude

- El CLAUDE.md se crea DE VERDAD en la raíz de la carpeta
- La demo de "reglas sin recordarlas" es el momento clave: hacela visible
- Si el CLAUDE.md ya existe (repite la lección), proponé revisarlo en vez de pisarlo

## Criterios de éxito

- [ ] Existe CLAUDE.md en la raíz, construido desde contexto/
- [ ] La persona lo revisó y entiende cada sección
- [ ] Vio la prueba de reglas aplicadas sin recordarlas
- [ ] Conoce el # y el CLAUDE.md global
- [ ] Sabe la tarea y que sigue /clase-2-1
