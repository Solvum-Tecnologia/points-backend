import { Sequelize } from "sequelize";
import Usuario from "./usuario.js";
import Avaliacao from "./avaliacao.js";
import ClassificacaoEtaria from "./classificacaoEtaria.js";
import DistanciaDoCentro from "./distanciaDoCentro.js";
import Enderecos from "./endereco.js";
import Estacionamento from "./estacionamento.js";
import HorarioDisponivel from "./horarioDisponivel.js";
import IdiomaFalado from "./idiomafalado.js";
import Pagamento from "./pagamento.js";
import PorComodidade from "./porComodidade.js";
import Reserva from "./reserva.js";

// Importando as varíáveis de ambiente
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
  IdiomaFalado: IdiomaFalado.init(sequelize),
  Pagamento: Pagamento.init(sequelize),
  PorComodidade: PorComodidade.init(sequelize),
  Reserva: Reserva.init(sequelize),
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
export default models;
