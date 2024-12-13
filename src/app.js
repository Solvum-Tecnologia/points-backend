import express from "express";
import routes from "./routes/index.js";
import initDatabase from "./infrastructure/database/initDatabase.js"; // Configuração do banco
import syncDatabase from "./infrastructure/database/config/syncDatabase.js"; // Migrações Automáticas

try {
  await initDatabase(); // Configurar o banco de dados
} catch (erro) {
  console.error("Erro na conexão do bando de dados: ", erro);
}

try {
  await syncDatabase(); // Sincroniza as tabelas com o banco de dados
} catch (erro) {
  console.error("Error ao sincronizar as tabelas: ", erro);
}

const app = express();
app.routes;
routes(app);

export default app;
