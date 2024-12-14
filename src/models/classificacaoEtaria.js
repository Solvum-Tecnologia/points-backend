import { DataTypes, Model } from "sequelize";

export default class ClassificacaoEtaria extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        classificacao: {
          type: DataTypes.STRING,
          allowNull: false,
        }},
      {
        sequelize,
        modelName: "ClassificacaoEtaria",
        tableName: "classificacao_etaria", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}