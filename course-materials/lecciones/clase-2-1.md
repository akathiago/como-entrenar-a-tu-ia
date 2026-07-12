# Lección 2.1: Los 5 patrones con archivos

Arranca la Clase 2, y arranca el trabajo detective. Hoy hacemos cinco escenarios que cubren casi todo lo que vas a hacer conmigo y con archivos, y de paso vamos a diagnosticar qué mató a Butaca.

STOP: ¿Vamos?

USER: Sí

---

## Escenario 1: un archivo → extraer

Las notas del editor anterior son un caos. Vamos a sacarles el jugo.

STOP: Pedime que lea @caos-heredado/notas-del-editor-anterior.md y extraiga las tareas pendientes y las ideas rescatables en un archivo nuevo en ordenado/.

USER: Lo pide

ACTION: Leé las notas, extraé pendientes e ideas, creá ordenado/rescate-de-notas.md estructurado.

**Descubrimiento:** entre las ideas sueltas hay una que brilla: *"¿Y si armamos algo tipo test: qué clásico del cine argentino sos? a la gente le ENCANTAN esas cosas. nunca tuve tiempo de armarlo."* Señalala explícitamente y decile a la persona que la guarde en la memoria: va a volver.

STOP: ¿Viste cómo salió estructura del caos? Guardate lo del test en la cabeza. Sigamos.

USER: Sí

---

## Escenario 2: una carpeta → sintetizar

Cuatro meses de comentarios de lectores que NADIE leyó. Hasta hoy.

STOP: Pedime que mire @caos-heredado/comentarios-lectores/ entera y sintetice los temas que se repiten en ordenado/sintesis-lectores.md.

USER: Lo pide

ACTION: Leé los cuatro meses, sintetizá los patrones y creá ordenado/sintesis-lectores.md. Los temas que TIENEN que emerger: (1) "correcta pero olvidable" aparece una y otra vez, (2) piden jugar/compartir/participar, (3) piden orientación ("qué veo el finde") más que información de industria, (4) los datos del INCAA interesan pero "contados para humanos", (5) piden comunidad como la sección de música.

**Descubrimiento:** el diagnóstico está acá: Butaca informa correcto pero no genera NADA: ni juego, ni pertenencia, ni identidad. La frase "correcta pero olvidable" es la lápida.

STOP: Imaginate leer esos archivos a mano, tomando notas. Esto tardó segundos, y funciona igual con 400 archivos que con 4. ¿Notaste que lo que piden los lectores y la idea del test del editor se están mirando de reojo?

USER: Sí

---

## Escenario 3: aplicar plantilla

La dirección quiere números y diagnóstico. Cimarrón tiene un formato para eso.

STOP: Pedime que arme el informe para la dirección usando @ordenado/sintesis-lectores.md con el formato de @plantillas/informe-direccion.md.

USER: Lo pide

ACTION: Creá ordenado/informe-direccion.md siguiendo la plantilla al pie de la letra: título-conclusión, tres líneas, datos con contexto (usá también contexto/LA-NEWSLETTER.md), diagnóstico y propuesta. En la propuesta insinuá "formatos interactivos y compartibles" sin comprometer todavía el quiz.

Fijate el truco: un archivo puso el contenido, otro puso el formato. Tus plantillas de siempre (minutas, informes, lo que sea) pueden trabajar así.

STOP: ¿Tiene sentido este patrón para algo de TU trabajo? Contame qué plantilla usarías.

USER: Responde

---

## Escenario 4: imagen → analizar

También veo imágenes. En recursos-graficos/ está la placa con la que se promocionaba la newsletter.

STOP: Abrí recursos-graficos/placa-newsletter.svg en el navegador (doble clic), sacale una captura, pegala acá con Ctrl+V (¡también en Mac es Ctrl+V!) y pedime que la analice sin piedad.

USER: Pega la imagen

[Si no puede con la captura: que me pida leer el archivo directamente, el análisis sale igual.]

ACTION: Destrozala con cariño: genérica, dice "newsletter de cine" sin nombre, sin identidad, podría ser de cualquier medio, emojis de relleno, "suscribite ya" sin dar un solo motivo. Conectalo con el diagnóstico: hasta el marketing de Butaca es correcto y olvidable.

STOP: Esto sirve para analizar capturas de errores, diseños de la competencia, gráficos de PDFs. ¿Se entiende?

USER: Sí

---

## Escenario 5: web → investigar

Última pieza: ¿qué hacen los que la reman BIEN?

STOP: Pedime que busque en la web qué están haciendo las newsletters y medios culturales que crecen, y que traiga aprendizajes aplicables a Butaca.

USER: Lo pide

ACTION: Buscá en la web de verdad y sintetizá hallazgos con fuentes. Los aprendizajes deben apuntar a: identidad y voz propia, formatos que invitan a participar y compartir, personalización, comunidad antes que volumen.

**Descubrimiento:** los que funcionan no informan mejor: hacen SENTIR parte. Y hay un dato que ya teníamos adentro: mirá @caos-heredado/otros-medios/revista-espanola-quiz.md. Una revista española hizo un test de personalidad como chiste y fue la pieza más compartida de su historia.

---

## El diagnóstico completo

Juntemos las piezas: los lectores piden jugar y pertenecer. El editor dejó anotada la idea de un test. Los medios que crecen usan formatos compartibles. Y tenemos datos del INCAA sin explotar.

STOP: ¿Ves a dónde va esto? Decímelo vos.

USER: Conecta: hay que hacer el test/quiz

¡Exacto! "¿Qué clásico del cine argentino sos?". Ese es tu proyecto de la Clase 3. Y lo vas a PUBLICAR, con URL de verdad.

## Cierre

Los 5 patrones: extraer, sintetizar, plantilla, imagen, web. Se combinan entre sí, y eso lo vas a hacer en la próxima lección con agentes trabajando en paralelo.

STOP: ¿Seguimos? /clase-2-2

USER: Sí / /clase-2-2

---

## Notas para Claude

- Los archivos de ordenado/ se crean DE VERDAD
- La conexión final (comentarios + idea del test + benchmark) la tiene que decir LA PERSONA: guiá con preguntas, no la digas vos primero
- Web search: usá búsqueda real, con fuentes

## Criterios de éxito

- [ ] Los 5 patrones ejecutados con archivos reales
- [ ] ordenado/ tiene rescate-de-notas, sintesis-lectores e informe-direccion
- [ ] Apareció "correcta pero olvidable" como diagnóstico
- [ ] La persona conectó las piezas y nombró el quiz
- [ ] Sabe que el quiz es el proyecto de la Clase 3
