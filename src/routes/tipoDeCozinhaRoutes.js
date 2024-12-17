import express from "express";
import {
  createTipoDeCozinha,
  getTipoDeCozinha,
  getTipoDeCozinhaById,
  updateTipoDeCozinha,
  deleteTipoDeCozinha,
} from "../controllers/tipoDeCozinhaController.js"

const router = express.Router();

router.post("/cozinha", createTipoDeCozinha);
router.get("/cozinhas", getTipoDeCozinha);
router.get("/cozinha/:id", getTipoDeCozinhaById);
router.put("/cozinha/:id", updateTipoDeCozinha);
router.delete("/cozinha/:id", deleteTipoDeCozinha);

export default router;
