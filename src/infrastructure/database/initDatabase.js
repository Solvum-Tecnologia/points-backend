import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const initDatabase = async () => {
  // Conectar ao banco padrão "postgres"
  const sequelize = new Sequelize(
    "postgres", // Conecte ao banco padrão
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "127.0.0.1",
      dialect: "postgres",
    }
  );

  try {
    // Tenta criar o banco "points"
    await sequelize.query('CREATE DATABASE "points"');
    console.log('Banco de dados "points" criado com sucesso.');
  } catch (error) {
    if (error.original && error.original.code === "42P04") {
      // Código de erro 42P04 indica que o banco já existe
      console.log('Banco de dados "points" já existe.');
    } else {
      console.error("Erro ao criar banco de dados:", error);
    }
  } finally {
    await sequelize.close();
  }
};

export default initDatabase;
