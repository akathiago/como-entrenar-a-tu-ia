# Lección 2.2: Agentes en paralelo

En la lección pasada procesaste archivos de a uno. Hoy aprendés a multiplicarte.

Los **agentes** son copias independientes de mí trabajando al mismo tiempo. Diez tareas de cinco minutos: en serie son cincuenta minutos, en paralelo son cinco.

STOP: ¿Listo/a para clonarme?

USER: Sí

---

La dirección quedó conforme con tu informe, pero quiere el diagnóstico completo: comentarios, datos y newsletters viejas, todo cruzado. Son tres fuentes distintas. Perfecto para tres agentes.

STOP: Pedime esto (con tus palabras): tres agentes en paralelo, uno analiza los comentarios de lectores, otro los datos de @caos-heredado/estrenos-incaa.csv, otro las newsletters de @caos-heredado/newsletters-viejas/. Cada uno escribe su análisis en analisis/, y al final se sintetiza todo en analisis/diagnostico-completo.md.

USER: Lo pide

ACTION: Lanzá 3 agentes en paralelo de verdad. Agente 1: temas de comentarios. Agente 2: tendencias del CSV (caída de espectadores, cuota nacional en baja, historia que hay ahí; recordá que LEEME-DATOS.md dice que son datos de práctica). Agente 3: qué funcionó y qué no en las newsletters (la joya: la edición especial de terror ROMPIÓ y nunca se repitió). Después sintetizá los tres en analisis/diagnostico-completo.md.

**Descubrimiento de la síntesis:** las tres fuentes dicen lo mismo desde ángulos distintos. La única newsletter que funcionó fue la que tuvo tema, voz y juego. Los lectores piden exactamente eso. Y los datos del INCAA dan material de sobra para hacerlo con identidad argentina.

STOP: Mirá analisis/diagnostico-completo.md en tu editor. Tres analistas trabajaron para vos en paralelo. ¿Cuánto te hubiera llevado esto a mano?

USER: Responde

---

Ahora, cuándo usar agentes y cuándo no:

**Sí:** muchos archivos parecidos, investigaciones independientes, análisis multi-fuente como el que acabás de hacer.

**No:** tareas únicas (yo solo alcanzo), trabajo encadenado (si el paso 2 depende del 1, no hay paralelo posible).

Y la regla de oro: **la síntesis SIEMPRE se pide.** Agentes sin síntesis final es un montón de informes sueltos que nadie cruza.

STOP: Pensá en TU trabajo: ¿qué tarea tuya es "muchas cosas parecidas e independientes"? Contame.

USER: Responde

[Validá su caso y armale el prompt de agentes para ese caso, como regalo para llevarse.]

---

## Cierre

1. Agentes = paralelo, para volumen
2. Cada agente es independiente: no se hablan entre sí hasta la síntesis
3. La síntesis se pide SIEMPRE
4. El diagnóstico de Butaca está completo y firmado

La próxima lección es la última antes de construir: llevar todo esto a TU cancha, con ejercicios por profesión.

STOP: ¿Vamos? /clase-2-3

USER: Sí / /clase-2-3

---

## Notas para Claude

- Los agentes se lanzan DE VERDAD en paralelo, y los archivos de analisis/ se crean
- El regalo del prompt personalizado para su caso real es importante: hacelo bien y completo
- Si pregunta cuánta cuota gastan los agentes: más que una conversación simple; para tareas chicas no valen la pena

## Criterios de éxito

- [ ] Lanzó 3 agentes en paralelo sobre las 3 fuentes
- [ ] Existe analisis/diagnostico-completo.md con la síntesis
- [ ] Entendió cuándo sí y cuándo no usar agentes
- [ ] Se lleva un prompt de agentes para SU caso real
