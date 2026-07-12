# Lección 3.2: Construir e iterar

Hay contrato (REQUISITOS.md). Hoy se construye.

Dos conceptos rápidos antes, para que nada te suene a magia negra:

1. **Servidor de desarrollo:** un programa que corre en tu compu y te muestra el proyecto como página web mientras lo armamos. Solo lo ves vos.
2. **localhost:3000:** la dirección de ese ensayo privado. NO es una URL real: no se puede compartir. La URL real llega en la lección 3.4.

STOP: ¿Listo/a? Activá el modo Plan con Shift+Tab: para una construcción grande, conviene que veas el plan antes de que toque nada.

USER: Activa el modo Plan

STOP: Ahora pedime que construya el proyecto según @REQUISITOS.md y que cuando esté listo lo levante en el navegador.

USER: Lo pide

ACTION: En modo Plan, presentá el plan en castellano claro (estructura, pantallas, lógica). Cuando lo apruebe, construí el proyecto (Next.js si va a ir a Vercel, o HTML/JS simple si el proyecto lo permite; para el quiz, una app simple alcanza). Levantá el servidor y abrí localhost. Si falta Node.js, guiá la instalación desde nodejs.org con paciencia.

STOP: Ahí está tu proyecto, funcionando. Jugalo entero una vez y volvé. ¿Qué tal?

USER: Lo prueba y comenta

---

Ahora la parte más importante de la lección: **iterar no es arreglar errores, es EL método.** La primera versión nunca es la final, ni acá ni en ningún equipo profesional. La diferencia es que conmigo cada vuelta tarda segundos.

STOP: Decime tres cosas que cambiarías. Las que sean: tamaño, colores, textos, comportamiento.

USER: Pide cambios

ACTION: Aplicá los cambios de a uno, mostrando el resultado tras cada uno, para que sienta el ritmo del ciclo.

---

Y el truco estrella para iterar: la captura marcada.

STOP: Sacale una captura al proyecto, marcá algo con un círculo o flecha (con Paint alcanza), pegala acá con Ctrl+V y decime qué querés distinto en eso que marcaste.

USER: Pega captura con marca

ACTION: Aplicá el cambio señalado. Remarcá el aprendizaje: señalar con imagen es más preciso que describir con palabras.

---

## Si algo se rompe (va a pasar, es normal)

La regla de oro: **los errores no se interpretan, se copian.** Texto rojo en la terminal → me lo pegás tal cual. Página en blanco → F12 en el navegador, pestaña Console, y me pegás lo rojo. Yo los leo, vos no tenés por qué.

STOP: ¿El proyecto está en un punto que te gusta? No hace falta perfecto: hace falta mostrable. Lo seguís puliendo cuando quieras.

USER: Confirma

---

## Cierre

Construiste una aplicación real dirigiendo, no programando. Está viva en tu máquina. Falta que exista para el resto del mundo: eso son las próximas dos lecciones (respaldo y publicación).

STOP: ¿Vamos? /clase-3-3

USER: Sí / /clase-3-3

---

## Notas para Claude

- El modo Plan se usa de verdad: plan visible, aprobación, construcción
- El servidor queda corriendo; explicá que Ctrl+C lo apaga
- Los tres cambios + la captura marcada son el corazón pedagógico: no los saltees
- Ante errores de entorno (Node, puertos), resolvé con calma y en castellano

## Criterios de éxito

- [ ] El proyecto corre en localhost
- [ ] Entendió servidor local vs URL real
- [ ] Iteró al menos 3 cambios + 1 con captura marcada
- [ ] Sabe qué hacer con los mensajes de error (copiarlos, no interpretarlos)
