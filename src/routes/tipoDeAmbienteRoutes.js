import express from "express";
import {
  createTipoDeAmbiente,
  getTipoDeAmbiente,
  getTipoDeAmbienteById,
  updateTipoDeAmbiente,
  deleteTipoDeAmbiente,
} from "../controllers/tipoDeAmbienteController.js"

const router = express.Router();

router.post("/ambiente", createTipoDeAmbiente);
router.get("/ambientes", getTipoDeAmbiente);
router.get("/ambiente/:id", getTipoDeAmbienteById);
router.put("/ambiente/:id", updateTipoDeAmbiente);
router.delete("/ambiente/:id", deleteTipoDeAmbiente);

export default router;
