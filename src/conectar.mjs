import { generarEvangelio } from "./generarEvangelio.mjs";

export async function cuentoCorto(evangelio) {
  return generarEvangelio({
    evangelio,
    modo: "cuento"
  });
}

export async function analogiaDivertida(evangelio) {
  return generarEvangelio({
    evangelio,
    modo: "analogia"
  });
}

export async function historiaConDibujo(evangelio) {
  return generarEvangelio({
    evangelio,
    modo: "historia"
  });
}

export async function oracionFacil(evangelio) {
  return generarEvangelio({
    evangelio,
    modo: "oracion"
  });
}
