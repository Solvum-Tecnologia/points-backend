import { DataTypes, Model } from "sequelize";

export default class DistanciaDoCentro extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        distancia: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }},
      {
        sequelize,
        modelName: "DistanciaDoCentro",
        tableName: "distanciaDoCentro", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}