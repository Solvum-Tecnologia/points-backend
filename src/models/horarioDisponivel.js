import { DataTypes, Model } from "sequelize";

export default class HorarioDisponivel extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        turno: {
          type: DataTypes.STRING,
          allowNull: true,
        }},
      {
        sequelize,
        modelName: "HorarioDisponivel",
        tableName: "horarioDisponivel", // Nome da tabela no banco de dados
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }
}