# Lección 4.2: Automatizar tu rutina

La pregunta que ordena esta lección: **¿qué hacés todas las semanas que es siempre igual?**

STOP: Contestala en serio. ¿Cuál es TU tarea repetitiva más odiada?

USER: La cuenta

[Guardá su respuesta: el final de la lección es automatizar ESO.]

---

Primero lo hacemos con la rutina de Butaca, para aprender el mecanismo. En la Clase 2 armaste un resumen de prensa a mano. Hoy lo convertimos en comando.

Los comandos son archivos en `.claude/commands/`: el nombre del archivo es el comando, el contenido son las instrucciones. Los /clase-X-Y de este taller son exactamente eso (andá a espiarlos cuando quieras).

STOP: Pedime que cree un comando /prensa que busque noticias de cine argentino de las últimas 24hs, arme el resumen con @plantillas/resumen-prensa.md y lo guarde en ordenado/ con la fecha del día.

USER: Lo pide

ACTION: Creá .claude/commands/prensa.md con instrucciones completas y precisas, incluyendo la cláusula anti-verso ("si no hay noticias relevantes, decirlo sin inventar"). Mostrá el archivo y explicá que hay que reiniciar Claude Code para que lo levante. Aclaración importante: el comando lo ejecuta la persona cuando quiere; no corre solo de madrugada. La automatización acá es "un comando, cero pasos manuales".

STOP: Mirá el archivo del comando. Es texto plano: tu proceso, documentado y ejecutable. ¿Se entiende el mecanismo?

USER: Sí

---

Ahora la receta general, la que te llevás para siempre:

1. **Hacé la tarea a mano conmigo una vez**, prestando atención
2. Cuando salió bien: **"convertí exactamente esto en un comando /nombre"**
3. **Usala una semana**, ajustá el archivo con lo que falte
4. Resultado: proceso documentado que se ejecuta solo

Y la regla de seguridad: **no automatices lo que no entendés.** Primero a mano, después comando.

---

Ahora sí: tu tarea odiada, la de la primera pregunta.

STOP: Hagámosla a mano una vez, ahora. Explicame la tarea con el detalle que le explicarías a alguien nuevo en tu trabajo, y la hacemos juntos (con datos de ejemplo si no tenés los reales acá).

USER: La explica y la hacen

ACTION: Ejecutá la tarea con lo que haya disponible (datos de ejemplo si hace falta). Cuando el resultado esté aprobado, proponé el paso 2 de la receta.

STOP: ¿Salió como querías? Entonces pedímelo: "convertí esto en un comando /[nombre]".

USER: Lo pide

ACTION: Creá el comando personalizado con las instrucciones de SU tarea, incluyendo formato de salida y dónde guardar. Si la tarea necesitara conectarse con apps externas (mail, Notion, Drive), mencioná que eso existe y se llama MCP: es el escalón siguiente, se configura una vez, y puede pedírmelo cuando lo necesite.

---

## Cierre

Te llevás dos comandos: /prensa (de Butaca) y el tuyo (de tu vida real). Y la receta para fabricar todos los que quieras.

La próxima lección es la última del taller: preparar la muestra de tu proyecto.

STOP: ¿Cerramos el taller a lo grande? /clase-4-3

USER: Sí / /clase-4-3

---

## Notas para Claude

- Los dos comandos quedan creados de verdad
- La tarea personal es el corazón: dedicale el tiempo que haga falta
- Sé honesto con los límites: los comandos no se ejecutan solos por cron desde acá; MCP y programación de tareas son escalones siguientes

## Criterios de éxito

- [ ] Existe .claude/commands/prensa.md
- [ ] Hizo su tarea real a mano una vez conmigo
- [ ] Existe el comando de SU tarea
- [ ] Se lleva la receta de 4 pasos y la regla ("no automatizar lo que no entendés")
