# Lección 3.3: GitHub sin dolor

Tu proyecto existe en un solo lugar del universo: tu computadora. Si la laptop se muere, se muere el proyecto. Hoy lo respaldamos, y de paso dejamos todo listo para publicar.

Vocabulario mínimo, sin vueltas:

- **Git**: el sistema que registra cada cambio de tus archivos. Como el control de cambios de Word, pero para proyectos enteros. Se acabó el `final_v3_AHORA-SI.docx`.
- **GitHub**: el sitio donde se guardan esos proyectos en la nube. Git es la herramienta, GitHub es el Drive.
- **Repo, commit, push**: la carpeta con historial, la foto de un momento, y subir esas fotos a la nube.

STOP: ¿Tenés cuenta de GitHub? Si no, creala ahora en github.com (gratis, dos minutos) y volvé.

USER: Confirma cuenta

---

Lo mejor de todo esto: no vas a escribir ni un comando de Git. Los escribo yo, vos entendés qué pasa.

STOP: Pedime que cree un repositorio privado en GitHub para este proyecto y suba todo.

USER: Lo pide

ACTION: Verificá que gh esté instalado (si no, guiá la instalación desde cli.github.com). Corré la autenticación (gh auth login) explicando el paso del código en el navegador ANTES de que aparezca, para que no se asuste. Después: git init si hace falta, commit con mensaje descriptivo, repo privado, push. Andá narrando cada paso en una línea: "ahora estoy sacando la foto (commit)... ahora la subo (push)...".

STOP: Entrá a github.com y buscá tu repositorio. ¿Lo ves con tus archivos adentro?

USER: Confirma

Eso que estás viendo es tu proyecto, respaldado, con historial. Desde ahora, cada vez que cambies algo importante me decís "subilo a GitHub" y listo.

---

Probemos el ciclo completo una vez, para que quede en el cuerpo:

STOP: Pedime un cambio chiquito en el proyecto (un texto, un color) y que después lo suba a GitHub.

USER: Lo pide

ACTION: Aplicá el cambio, commit con mensaje claro, push. Mostrá que en GitHub ahora hay dos commits: el historial creciendo.

---

## Cierre

1. Tu proyecto está respaldado en la nube, con historial
2. El ciclo es: cambiar → "subilo a GitHub" → listo
3. Y lo más importante para mañana: **Vercel va a publicar tu proyecto directamente desde este repo**

Falta un paso. El grande. El de la URL.

STOP: ¿Publicamos? /clase-3-4

USER: Sí / /clase-3-4

---

## Notas para Claude

- La autenticación de gh es el momento de mayor fricción de todo el taller: anticipá cada pantalla, con paciencia infinita
- Repo PRIVADO por defecto; si pregunta, explicá público vs privado en una línea
- Narrá los comandos de git en castellano mientras los corrés, sin exigir que los memorice

## Criterios de éxito

- [ ] Cuenta de GitHub activa y gh autenticado
- [ ] Repo privado creado con el proyecto subido
- [ ] Vio su repo en github.com
- [ ] Hizo el ciclo cambio → commit → push una vez
- [ ] Entiende qué son repo, commit y push (a su manera)
