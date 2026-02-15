import "dotenv/config";
import {
  cuentoCorto,
  analogiaDivertida,
  historiaConDibujo,
  oracionFacil
} from "./src/conectar.mjs";

const EVANGELIO = `
En aquel tiempo, Jesús dijo a sus discípulos:
"Ustedes son la sal de la tierra...
Que brille su luz ante los hombres,
para que vean sus buenas obras
y den gloria a su Padre que está en los cielos".
`;

async function main() {
  console.log("\n--- CUENTO CORTO ---\n");
  console.log(await cuentoCorto(EVANGELIO));

  console.log("\n--- ANALOGÍA DIVERTIDA ---\n");
  console.log(await analogiaDivertida(EVANGELIO));

  console.log("\n--- HISTORIA CON DIBUJO ---\n");
  console.log(await historiaConDibujo(EVANGELIO));

  console.log("\n--- ORACIÓN FÁCIL ---\n");
  console.log(await oracionFacil(EVANGELIO));
}

main();
