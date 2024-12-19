import Estabelecimento from "../models/estabelecimento.js";

export const createEstabelecimento = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.create(req.body);
    return res.status(201).json(estabelecimento);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getEstabelecimentos = async (req, res) => {
  try {
    const estabelecimentos = await Estabelecimento.findAll({
      include: [
        { association: "criador" },
        { association: "atualizador" },
        { association: "avaliacoes" },
        { association: "classificacao" },
        { association: "distancia" },
        { association: "enderecoInfo" },
        { association: "estacionamentoInfo" },
        { association: "horario" },
        { association: "idiomas" },
        { association: "pagamentoInfo" },
        { association: "comodidades" },
        { association: "reservaInfo" },
        { association: "ambiente" },
        { association: "musica" },
      ],
    });
    return res.status(200).json(estabelecimentos);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getEstabelecimentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const estabelecimento = await Estabelecimento.findByPk(id, {
      include: [
        { association: "criador" },
        { association: "atualizador" },
        { association: "avaliacoes" },
        { association: "classificacao" },
        { association: "distancia" },
        { association: "enderecoInfo" },
        { association: "estacionamentoInfo" },
        { association: "horario" },
        { association: "idiomas" },
        { association: "pagamentoInfo" },
        { association: "comodidades" },
        { association: "reservaInfo" },
        { association: "ambiente" },
        { association: "musica" },
      ],
    });
    if (!estabelecimento) {
      return res.status(404).json({ error: "Estabelecimento não encontrado" });
    }
    return res.status(200).json(estabelecimento);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateEstabelecimento = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar o registro atual para verificar o 'criado_por'
    const estabelecimento = await Estabelecimento.findByPk(id);

    if (!estabelecimento) {
      return res.status(404).json({ error: "Estabelecimento não encontrado" });
    }

    // Remover o campo 'criado_por' do corpo da requisição, caso exista
    const { criado_por, ...dadosAtualizados } = req.body;

    // Atualizar apenas os outros campos
    const [updated] = await Estabelecimento.update(dadosAtualizados, {
      where: { id },
    });

    if (!updated) {
      return res
        .status(400)
        .json({ error: "Erro ao atualizar o estabelecimento" });
    }

    // Retornar o registro atualizado
    const updatedEstabelecimento = await Estabelecimento.findByPk(id);
    return res.status(200).json(updatedEstabelecimento);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteEstabelecimento = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Estabelecimento.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Estabelecimento não encontrado" });
    }
    return res
      .status(200)
      .json({ message: "Estabelecimento deletado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
