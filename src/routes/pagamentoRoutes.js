import express from "express";
import {
  createPagamento,
  getPagamento,
  getPagamentoById,
  updatePagamento,
  deletePagamento,
} from "../controllers/pagamentoController.js"

const router = express.Router();

router.post("/pagamento", createPagamento);
router.get("/pagamentos", getPagamento);
router.get("/pagamento/:id", getPagamentoById);
router.put("/pagamento/:id", updatePagamento);
router.delete("/pagamento/:id", deletePagamento);

export default router;
