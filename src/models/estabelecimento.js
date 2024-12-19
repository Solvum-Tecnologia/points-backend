import { DataTypes, Model } from "sequelize";

export default class Estabelecimento extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        criado_por: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "usuarios", // Nome da tabela do usuário
            key: "id",
          },
        },
        atualizado_por: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "usuarios", // Nome da tabela do usuário
            key: "id",
          },
        },
        avaliacao: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "avaliacao", // Nome da tabela de avaliação
            key: "id",
          },
        },
        classificacao_etaria: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "classificacaoEtaria", // Nome da tabela de classificação etária
            key: "id",
          },
        },
        distancia_do_centro: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "distanciaDoCentro", // Nome da tabela de distância
            key: "id",
          },
        },
        endereco: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "enderecos", // Nome da tabela de endereço
            key: "id",
          },
        },
        estacionamento: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "estacionamento", // Nome da tabela de estacionamento
            key: "id",
          },
        },
        horario_disponivel: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "horarioDisponivel", // Nome da tabela de horário disponível
            key: "id",
          },
        },
        idioma_falado: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "idiomaFalado", // Nome da tabela de idioma falado
            key: "id",
          },
        },
        pagamento: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "pagamento", // Nome da tabela de pagamento
            key: "id",
          },
        },
        por_comodidade: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "porComodidade", // Nome da tabela de comodidade
            key: "id",
          },
        },
        reserva: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "reserva", // Nome da tabela de reserva
            key: "id",
          },
        },
        tipo_de_ambiente: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "tipoDeAmbiente", // Nome da tabela de tipo de ambiente
            key: "id",
          },
        },
        tipo_de_musica: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "tipoDeMusica", // Nome da tabela de tipo de música
            key: "id",
          },
        },
        fale_sobre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Estabelecimento",
        tableName: "estabelecimento",
        timestamps: true, // Cria colunas `createdAt` e `updatedAt`
      }
    );
  }

  static associate(models) {
    // Associação com outras tabelas (opcional, para incluir lógicas adicionais)
    this.belongsTo(models.Usuario, { foreignKey: "criado_por", as: "criador" });
    this.belongsTo(models.Usuario, { foreignKey: "atualizado_por", as: "atualizador" });
    this.belongsTo(models.Avaliacao, { foreignKey: "avaliacao", as: "avaliacoes" });
    this.belongsTo(models.ClassificacaoEtaria, { foreignKey: "classificacao_etaria", as: "classificacao" });
    this.belongsTo(models.DistanciaDoCentro, { foreignKey: "distancia_do_centro", as: "distancia" });
    this.belongsTo(models.Enderecos, { foreignKey: "endereco", as: "enderecoInfo" });
    this.belongsTo(models.Estacionamento, { foreignKey: "estacionamento", as: "estacionamentoInfo" });
    this.belongsTo(models.HorarioDisponivel, { foreignKey: "horario_disponivel", as: "horario" });
    this.belongsTo(models.IdiomaFalado, { foreignKey: "idioma_falado", as: "idiomas" });
    this.belongsTo(models.Pagamento, { foreignKey: "pagamento", as: "pagamentoInfo" });
    this.belongsTo(models.PorComodidade, { foreignKey: "por_comodidade", as: "comodidades" });
    this.belongsTo(models.Reserva, { foreignKey: "reserva", as: "reservaInfo" });
    this.belongsTo(models.TipoDeAmbiente, { foreignKey: "tipo_de_ambiente", as: "ambiente" });
    this.belongsTo(models.TipoDeMusica, { foreignKey: "tipo_de_musica", as: "musica" });
  }
}
