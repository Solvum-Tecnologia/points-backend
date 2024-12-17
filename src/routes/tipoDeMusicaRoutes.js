import express from "express";
import {
  createTipoDeMusica,
  getTipoDeMusica,
  getTipoDeMusicaById,
  updateTipoDeMusica,
  deleteTipoDeMusica,
} from "../controllers/tipoDeMusicaController.js";

const router = express.Router();

router.post("/musica", createTipoDeMusica);
router.get("/musicas", getTipoDeMusica);
router.get("/musica/:id", getTipoDeMusicaById);
router.put("/musica/:id", updateTipoDeMusica);
router.delete("/musica/:id", deleteTipoDeMusica);

export default router;
