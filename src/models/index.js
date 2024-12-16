import { Sequelize } from "sequelize";
import Usuario from "./usuario.js";
import Avaliacao from "./avaliacao.js";
import ClassificacaoEtaria from "./classificacaoEtaria.js";
import DistanciaDoCentro from "./distanciaDoCentro.js";
import Enderecos from "./endereco.js";
import Estacionamento from "./estacionamento.js";
import HorarioDisponivel from "./horarioDisponivel.js";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const models = {
  Usuario: Usuario.init(sequelize),
  Avaliacao: Avaliacao.init(sequelize),
  ClassificacaoEtaria: ClassificacaoEtaria.init(sequelize),
  DistanciaDoCentro: DistanciaDoCentro.init(sequelize),
  Enderecos: Enderecos.init(sequelize),
  Estacionamento: Estacionamento.init(sequelize),
  HorarioDisponivel: HorarioDisponivel.init(sequelize),
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default models;
