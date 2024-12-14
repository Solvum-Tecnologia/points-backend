import express from "express";
import {
  createDistanciaDoCentro,
  getDistanciaDoCentro,
  getDistanciaDoCentroById,
  updateDistanciaDoCentro,
  deleteDistanciaDoCentro,
} from "../controllers/distanciaDoCentroController.js";

const router = express.Router();

router.post("/distancia", createDistanciaDoCentro); 
router.get("/distancias", getDistanciaDoCentro); 
router.get("/distancia/:id", getDistanciaDoCentroById); 
router.put("/distancia/:id", updateDistanciaDoCentro); 
router.delete("/distancia/:id", deleteDistanciaDoCentro); 

export default router;
