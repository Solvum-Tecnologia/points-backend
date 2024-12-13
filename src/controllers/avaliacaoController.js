  import Avaliacao from "../models/avaliacao.js";

// Criar avaliação
export const createAvaliacao = async (req, res) => {
  try {
    const avaliacao = await Avaliacao.create(req.body);
    res.status(201).json(avaliacao);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar avaliação", details: error });
  }
};

// Listar todos os usuários
export const getAvaliacoes = async (req, res) => {
  try {
    const Avaliacoes = await Avaliacao.findAll();
    res.status(200).json(Avaliacoes);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar usuários", details: error });
  }
};

// Buscar avaliação por ID
export const getAvaliacaoById = async (req, res) => {
  try {
    const avaliacao = await Avaliacao.findByPk(req.params.id);
    if (!avaliacao) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json(avaliacao);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar avaliação", details: error });
  }
};

// Atualizar avaliação
export const updateAvaliacao = async (req, res) => {
  try {
    const [updated] = await Avaliacao.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    const updatedUsuario = await Avaliacao.findByPk(req.params.id);
    res.status(200).json(updatedUsuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar avaliação", details: error });
  }
};

// Deletar avaliação
export const deleteAvaliacao = async (req, res) => {
  try {
    const deleted = await Avaliacao.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar avaliação", details: error });
  }
};
