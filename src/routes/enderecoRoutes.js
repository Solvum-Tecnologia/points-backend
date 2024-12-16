import express from "express";
import {
  createEnderecos,
  getEnderecos,
  getEnderecosById,
  updateEnderecos,
  deleteEnderecos,
} from "../controllers/enderecoController.js";

const router = express.Router();

router.post("/endereco", createEnderecos);
router.get("/enderecos", getEnderecos);
router.get("/endereco/:id", getEnderecosById);
router.put("/endereco/:id", updateEnderecos);
router.delete("/endereco/:id", deleteEnderecos);

export default router;
