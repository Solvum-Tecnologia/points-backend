import { DataTypes, Model } from "sequelize";

export default class Reserva extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        definicao: {
          type: DataTypes.STRING,
          allowNull: true,
        }},
      {
        sequelize,
        modelName: "Reserva",
        tableName: "reserva", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}