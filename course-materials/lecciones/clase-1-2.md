# Lección 1.2: Ver y referenciar archivos

Hasta ahora trabajaste a ciegas: yo te cuento qué hay en los archivos y vos me creés. Eso se termina hoy.

Vamos a armar tu espacio de trabajo visual: la terminal de un lado, tus archivos del otro. Vas a VER los archivos aparecer y cambiar mientras yo trabajo.

STOP: ¿Tenés instalado VS Code u Obsidian? Si no tenés ninguno, decime y vemos opciones.

USER: Responde

[Si tiene VS Code o Obsidian: guialo para abrir la carpeta del taller ahí (VS Code: File → Open Folder). Si no tiene nada: recomendale instalar VS Code de code.visualstudio.com, acompañalo, y mientras baja podés seguir con la parte del @; también sirve el Explorador de Windows como plan B temporal.]

---

Ahora acomodá las ventanas: esta terminal a un lado, el editor al otro. Pantalla partida.

STOP: ¿Listo el split? ¿Ves los archivos de la carpeta del taller en el editor?

USER: Sí

[Si no ve los archivos: seguramente abrió otra carpeta. Decile la ruta exacta de la carpeta actual y que abra exactamente esa.]

Perfecto. Ahora mirá el editor mientras yo hago algo.

ACTION: Creá un archivo prueba-visual.md con un saludo personalizado (usá su nombre) y una línea que diga que este archivo se creó mientras miraba.

STOP: ¿Lo viste aparecer? Abrilo en el editor y leelo.

USER: Confirma

Eso es trabajar con visibilidad. Nunca más "¿qué habrá hecho?". Ahora borrémoslo para no dejar basura.

ACTION: Borrá prueba-visual.md y confirmá que lo hiciste.

---

Segunda parte de la lección: el símbolo más importante de todos.

`@` es la forma de señalarme archivos. `@archivo.md` es "mirá este archivo". `@carpeta/` es "mirá toda esta carpeta". Cuando empezás a escribir @, te sugiero los archivos disponibles: elegís con las flechas y Tab.

Probemos con el desastre que te dejaron.

STOP: Pedime que lea @caos-heredado/notas-del-editor-anterior.md y te diga en qué estado están esas notas.

USER: Lo pide referenciando el archivo con @

ACTION: Leé las notas y resumí el caos con gracia: pendientes vencidos, ideas sueltas, la frase de la directora ("correcta pero no mueve"). NO menciones todavía la idea del test/quiz: guardala para la lección 2.1, donde es el descubrimiento central. Si la persona la menciona porque la vio, seguile la corriente con un "anotala, eh, puede valer oro", sin desarrollarla.

STOP: Ahí tuviste tu primera probada del caos. ¿Notaste que las notas mencionan una carpeta de comentarios de lectores que nadie leyó? Eso lo atacamos en la Clase 2, y te adelanto que ahí está enterrado el diagnóstico. ¿Todo claro con el @ hasta acá?

USER: Sí

---

Última cosa: la carpeta oculta `.claude/`. Ahí viven los comandos del taller (como /clase-1-1) y otras cosas que vamos a tocar en la Clase 4. El Explorador de Windows la esconde por defecto (Vista → Elementos ocultos para verla). VS Code la muestra siempre. Por ahora solo tenés que saber que existe.

## Cierre

Lo que te llevás:

1. **Pantalla partida siempre**: terminal + editor. Trabajar a ciegas es opcional y es peor.
2. **@ es señalar**: archivos y carpetas, con autocompletado
3. **Los archivos aparecen en tiempo real** mientras trabajo

STOP: ¿Seguimos? /clase-1-3 te espera con los comandos y el botón de pánico.

USER: Sí / /clase-1-3

---

## Notas para Claude

- El archivo de prueba se crea Y se borra de verdad
- NO spoilear la idea del quiz de las notas del editor: es el descubrimiento de la 2.1
- Si usa Obsidian: recordale que .claude/ no se ve ahí, y que use el Explorador para eso

## Criterios de éxito

- [ ] Tiene editor + terminal en pantalla partida
- [ ] Vio un archivo crearse en tiempo real
- [ ] Usó @ para referenciar un archivo
- [ ] Leyó (resumidas) las notas del editor anterior
- [ ] Sabe que .claude/ existe y está oculta
