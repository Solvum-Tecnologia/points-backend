import express from "express";
import {
  createHorarioDisponivel,
  getHorarioDisponivel,
  getHorarioDisponivelsById,
  updateHorarioDisponivel,
  deleteHorarioDisponivel,
} from "../controllers/horarioDisponivelController.js"

const router = express.Router();

router.post("/horario", createHorarioDisponivel);
router.get("/horarios", getHorarioDisponivel);
router.get("/horario/:id", getHorarioDisponivelsById);
router.put("/horario/:id", updateHorarioDisponivel);
router.delete("/horario/:id", deleteHorarioDisponivel);

export default router;
