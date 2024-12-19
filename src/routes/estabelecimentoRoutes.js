import express from "express";
import {
  createEstabelecimento,
  getEstabelecimentos,
  getEstabelecimentoById,
  updateEstabelecimento,
  deleteEstabelecimento,
} from "../controllers/estabelecimentoController.js";

const router = express.Router();

router.post("/estabelecimento", createEstabelecimento);
router.get("/estabelecimentos", getEstabelecimentos);
router.get("/estabelecimento/:id", getEstabelecimentoById);
router.put("/estabelecimento/:id", updateEstabelecimento);
router.delete("/estabelecimento/:id", deleteEstabelecimento);

export default router;
