import express from "express";
import {
  createReserva,
  getReserva,
  getReservaById,
  updateReserva,
  deleteReserva,
} from "../controllers/reservaController.js"

const router = express.Router();

router.post("/reserva", createReserva);
router.get("/reservas", getReserva);
router.get("/reserva/:id", getReservaById);
router.put("/reserva/:id", updateReserva);
router.delete("/reserva/:id", deleteReserva);

export default router;
