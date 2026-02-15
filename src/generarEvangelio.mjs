import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./systemPrompt.mjs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generarEvangelio({ evangelio, modo }) {
  if (!evangelio || !modo) {
    throw new Error("Falta el Evangelio o el modo de generación");
  }

  const instruccionesPorModo = {
    cuento: `
Genera un ¡Cuento Corto! para niños de 5 a 8 años.
Usa únicamente las imágenes y comparaciones que ya aparecen en el Evangelio (por ejemplo: sal, luz, vela, casa).
Organízalas como una historia breve con inicio y cierre.
No inventes personajes ni acciones nuevas.
Inicia con “¡Érase una vez…” o “¡Imagina una aventura increíble…”.
1 o 2 párrafos, máximo 150 palabras.
`,
    analogia: `
Genera una ¡Analogía Divertida!.
Usa solo una comparación presente en el Evangelio (sal o luz).
Relaciónala con la vida diaria de un niño.
1 a 3 frases cortas.
No cuentes una historia.
`,
    historia: `
Genera una ¡Historia con Dibujo!.
Desarrolla las imágenes del Evangelio (sal, luz, vela, casa) en 3 a 5 párrafos.
No agregues escenas que no estén implícitas en el texto.
Al final agrega exactamente la sección:
“¡Imagen para colorear!”
Describe una sola escena principal basada en el Evangelio, pensada para una lámina infantil.
`,
    oracion: `
Genera una Oración Fácil.
Convierte el mensaje del Evangelio en una oración rimada.
4 a 8 líneas.
Termina con “Amén” y una invitación a rezar en familia.
`
  };

  const instruction = instruccionesPorModo[modo];

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `Evangelio:\n${evangelio}\n\nModo:\n${instruction}`
    }
  ]
});


  return response.output_text;
}
