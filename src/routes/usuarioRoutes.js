import express from "express";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/usuario", createUsuario); // Criar usuário
router.get("/usuarios", getUsuarios); // Listar todos os usuários
router.get("/usuario/:id", getUsuarioById); // Buscar usuário por ID
router.put("/usuario/:id", updateUsuario); // Atualizar usuário por ID
router.delete("/usuario/:id", deleteUsuario); // Deletar usuário por ID

export default router;
