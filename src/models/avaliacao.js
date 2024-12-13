import { DataTypes, Model } from "sequelize";

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        valor: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }},
      {
        sequelize,
        modelName: "Avaliacao",
        tableName: "avaliacao", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}