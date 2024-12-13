  import ClassificacaoEtaria from "../models/classificacaoEtaria.js";

// Criar avaliação
export const createClassificacaoEtaria = async (req, res) => {
  try {
    const classificacaoEtaria = await ClassificacaoEtaria.create(req.body);
    res.status(201).json(classificacaoEtaria);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar classificação", details: error });
  }
};

// Listar todos os usuários
export const getClassificacaoEtaria = async (req, res) => {
  try {
    const classificacao = await ClassificacaoEtaria.findAll();
    res.status(200).json(classificacao);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar Classificações", details: error });
  }
};

// Buscar avaliação por ID
export const geClassificacaoEtariaById = async (req, res) => {
  try {
    const classificacaoEtaria = await ClassificacaoEtaria.findByPk(req.params.id);
    if (!classificacaoEtaria) {
      return res.status(404).json({ error: "Classificação não encontrado" });
    }
    res.status(200).json(classificacaoEtaria);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar classificação", details: error });
  }
};

// Atualizar avaliação
export const updateClassificacaoEtariao = async (req, res) => {
  try {
    const [updated] = await ClassificacaoEtaria.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Classificação não encontrada" });
    }
    const updatedClassificacaoEtaria = await ClassificacaoEtaria.findByPk(req.params.id);
    res.status(200).json(updatedClassificacaoEtaria);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar classificação etária", details: error });
  }
};

// Deletar avaliação
export const deleteClassificacaoEtaria = async (req, res) => {
  try {
    const deleted = await ClassificacaoEtaria.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Classificação Etária não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar Classicificação Etária", details: error });
  }
};
