import { DataTypes, Model } from "sequelize";

export default class IdiomaFalado extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        idioma: {
          type: DataTypes.STRING,
          allowNull: true,
        }},
      {
        sequelize,
        modelName: "IdiomaFalado",
        tableName: "idiomaFalado", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}