import express from "express";
import {
  createEstacionamentos,
  getEstacionamentos,
  getEstacionamentosById,
  updateEstacionamentos,
  deleteEstacionamentos,
} from "../controllers/estacionamentoController.js";

const router = express.Router();

router.post("/estacionemento", createEstacionamentos);
router.get("/estacionamentos", getEstacionamentos);
router.get("/estacionemento/:id", getEstacionamentosById);
router.put("/estacionemento/:id", updateEstacionamentos);
router.delete("/estacionemento/:id", deleteEstacionamentos);

export default router;
