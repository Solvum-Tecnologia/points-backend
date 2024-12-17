import express from "express";
import {
  createPorComodidade,
  getPorComodidade,
  getPorComodidadeById,
  updatePorComodidade,
  deletePorComodidade,
} from "../controllers/porComodidadeController.js"

const router = express.Router();

router.post("/comodidade", createPorComodidade);
router.get("/comodidades", getPorComodidade);
router.get("/comodidade/:id", getPorComodidadeById);
router.put("/comodidade/:id", updatePorComodidade);
router.delete("/comodidade/:id", deletePorComodidade);

export default router;
