import express from "express";
import usuarioRoutes from "./usuarioRoutes.js"; // Importar as rotas de usuário

const router = express.Router();

// Conectar as rotas específicas
router.use("/usuarios", usuarioRoutes); // As rotas de usuários terão o prefixo "/usuarios"

// Você pode adicionar mais rotas aqui no futuro
// router.use('/outroRecurso', outroRota);

const app = express();

app.use(express.json());

// Define o prefixo para todas as rotas
//app.use("/points", router);

app.get("/", (req, rest) => {
  rest.status(200).json({ message: "OK" });
});

export default app;
