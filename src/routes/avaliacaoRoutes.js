import express from "express";
import {
  createAvaliacao,
  getAvaliacoes,
  getAvaliacaoById,
  updateAvaliacao,
  deleteAvaliacao,
} from "../controllers/avaliacaoController.js";

const router = express.Router();

router.post("/avaliacao", createAvaliacao); // Criar usuário
router.get("/avaliacoes", getAvaliacoes); // Listar todos os usuários
router.get("/avaliacao/:id", getAvaliacaoById); // Buscar usuário por ID
router.put("/avaliacao/:id", updateAvaliacao); // Atualizar usuário por ID
router.delete("/avaliacao/:id", deleteAvaliacao); // Deletar usuário por ID

export default router;
