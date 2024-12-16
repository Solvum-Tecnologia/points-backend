import express from "express";
import {
  createIdiomaFalado,
  getIdiomaFalado,
  getIdiomaFaladoById,
  updateIdiomaFalado,
  deleteIdiomaFalado,
} from "../controllers/idiomaFaladoController.js"

const router = express.Router();

router.post("/idioma", createIdiomaFalado);
router.get("/idiomas", getIdiomaFalado);
router.get("/idioma/:id", getIdiomaFaladoById);
router.put("/idioma/:id", updateIdiomaFalado);
router.delete("/idioma/:id", deleteIdiomaFalado);

export default router;
