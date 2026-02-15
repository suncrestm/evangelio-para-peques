import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function runTest() {
  try {
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: "Dime una frase corta sobre Jesús para un niño de 6 años."
    });

    console.log("Respuesta:");
    console.log(response.output_text);
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}

runTest();
