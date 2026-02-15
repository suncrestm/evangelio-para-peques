import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generarEvangelio({ evangelio, edad }) {

  const prompt = `
Toma el siguiente evangelio:

"${evangelio}"

Adáptalo para un niño de ${edad} años.

Devuelve 4 secciones claras en formato JSON:

{
  "cuento": "...",
  "analogia": "...",
  "historia": "...",
  "oracion": "..."
}

Reglas:
- Fidelidad total al texto bíblico
- Lenguaje adecuado a la edad
- No inventar doctrinas
- No agregar moralejas modernas
- Mantener enfoque cristiano claro
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  const text = response.output_text;

  return JSON.parse(text);
}
