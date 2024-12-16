import { DataTypes, Model } from "sequelize";

export default class Estacionamento extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        dimensao: {
          type: DataTypes.STRING,
          allowNull: true,
        }},
      {
        sequelize,
        modelName: "Estacionamento",
        tableName: "estacionamento", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}