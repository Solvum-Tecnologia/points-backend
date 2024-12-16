import { DataTypes, Model } from "sequelize";

export default class Enderecos extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        rua: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        numero: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        complemento: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cidade: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        pais: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Enderecos",
        tableName: "enderecos", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}
