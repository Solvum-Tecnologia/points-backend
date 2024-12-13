import express from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", createUsuario); // Criar usuário
router.get("/", getUsuarios); // Listar todos os usuários
router.get("/:id", getUsuarioById); // Buscar usuário por ID
router.put("/:id", updateUsuario); // Atualizar usuário por ID
router.delete("/:id", deleteUsuario); // Deletar usuário por ID

export default router;
