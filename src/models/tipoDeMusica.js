import { DataTypes, Model } from "sequelize";

export default class TipoDeMusica extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        tipo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "TipoDeMusica",
        tableName: "tipoDeMusica", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}