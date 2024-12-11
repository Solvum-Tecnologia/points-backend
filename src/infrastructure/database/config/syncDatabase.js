import { sequelize } from "../../../models/index.js"; // Usando a instância do Sequelize já configurada
import dotenv from "dotenv";

dotenv.config();

const syncDatabase = async () => {
  try {
    // Sincronizar todas as tabelas definidas nas models
    await sequelize.sync({ force: false, alter: true });
    console.log('Tabelas sincronizadas com sucesso.');
  } catch (error) {
    console.error("Erro ao sincronizar as tabelas:", error);
  }
};

export default syncDatabase;
