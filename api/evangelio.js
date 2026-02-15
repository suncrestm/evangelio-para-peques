const { generarEvangelio } = require("../src/generarEvangelio.mjs");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Solo se permite POST" });
  }

  try {
    const { evangelio, modo } = req.body;

    if (!evangelio || !modo) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const resultado = await generarEvangelio({ evangelio, modo });

    return res.status(200).json({ resultado });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno" });
  }
};
