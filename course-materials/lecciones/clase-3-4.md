# Lección 3.4: Deploy, tu URL real

Llegamos. Hoy tu proyecto deja de ser tuyo y de tu computadora, y pasa a ser de internet.

**Deploy** es eso: llevar el código de tu máquina a servidores que cualquiera puede visitar. Usamos **Vercel**: gratis para proyectos personales, hecho por los creadores de Next.js, y conectado a GitHub (que dejamos listo la lección pasada, no por casualidad).

STOP: ¿Vamos por esa URL?

USER: Sí

---

STOP: Pedime que publique el proyecto en Vercel y que te guíe con lo que haga falta.

USER: Lo pide

ACTION: Verificá el CLI de Vercel (si falta: npm i -g vercel). Autenticación vía navegador (anticipá el paso, como con GitHub). Deploy a producción. Cuando termine, entregá la URL con la solemnidad de un estreno: esta es LA URL, es real, es suya.

STOP: Abrí la URL en el navegador. Después agarrá el celular, abrila ahí también, y probá el proyecto entero desde el teléfono.

USER: Confirma, idealmente emocionada/o

Eso que tenés en el celular no es un archivo tuyo: es un sitio de internet que construiste vos. Mandale el link a alguien AHORA. En serio, esperamos.

USER: Lo manda (o se resiste)

---

Ahora el truco final, el del auto-deploy: Vercel quedó mirando tu repo de GitHub. Cada vez que subas un cambio, republica solo.

STOP: Probémoslo: pedime un cambio visible en el proyecto y que lo suba a GitHub. Solo eso.

USER: Lo pide

ACTION: Cambio, commit, push. Explicá que Vercel ya está reconstruyendo solo. Tras un minuto, que refresque la URL: el cambio está online sin que nadie tocara Vercel.

Ese es el circuito completo de acá a la eternidad: cambiás → "subilo" → un minuto → está online.

---

## Cierre de la Clase 3

Repasá lo que acaba de pasar, porque es grande:

| Paso | Lo hiciste en |
|------|---------------|
| Planificar (REQUISITOS.md) | 3.1 |
| Construir e iterar | 3.2 |
| Respaldar (GitHub) | 3.3 |
| Publicar (URL real) | 3.4 |

Ese loop sirve para CUALQUIER proyecto. Ya no es teoría: tenés la URL para probarlo.

Y en la historia de Cimarrón: Butaca tiene su herramienta interactiva publicada. La dirección va a querer saber cómo se hizo. De eso, y de automatizar todo lo demás, va la Clase 4.

**Tarea:** mandale la URL a 3 personas que no son del taller. Anotá qué no entendieron: esa es tu lista de iteración.

STOP: Nos vemos en /clase-4-1. Felicitaciones, en serio. ¿Cómo te sentís?

USER: Responde

---

## Notas para Claude

- El deploy se hace de verdad, hasta la URL funcionando
- El momento celular es obligatorio: ahí cae la ficha emocional
- La demo de auto-deploy cierra el concepto: no la saltees
- Si el build falla: leé el log, arreglalo, y explicá en una línea qué era

## Criterios de éxito

- [ ] URL de producción funcionando
- [ ] Lo probó desde el celular
- [ ] Vio el auto-deploy (push → republica solo)
- [ ] Sabe el loop completo y la tarea
