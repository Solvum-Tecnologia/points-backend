import express from "express";
import {
  createClassificacaoEtaria,
  getClassificacaoEtaria,
  geClassificacaoEtariaById,
  updateClassificacaoEtariao,
  deleteClassificacaoEtaria,
} from "../controllers/classificacaoEtariaController.js";

const router = express.Router();

router.post("/classificao", createClassificacaoEtaria); // Criar usuário
router.get("/classificoes", getClassificacaoEtaria); // Listar todos os usuários
router.get("/classificao/:id", geClassificacaoEtariaById); // Buscar usuário por ID
router.put("/classificao/:id", updateClassificacaoEtariao); // Atualizar usuário por ID
router.delete("/classificao/:id", deleteClassificacaoEtaria); // Deletar usuário por ID

export default router;
