import TipoDeCozinha from "../models/tipoDeCozinha.js";

// Criar endereços
export const createTipoDeCozinha = async (req, res) => {
  try {
    const tipoDeCozinha = await TipoDeCozinha.create(req.body);
    res.status(201).json(tipoDeCozinha);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar tipo de cozinha", details: error });
  }
};

// Listar todos os tipoDeCozinha
export const getTipoDeCozinha = async (req, res) => {
  try {
    const tipoDeCozinha = await TipoDeCozinha.findAll();
    res.status(200).json(tipoDeCozinha);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar tipo de cozinha", details: error });
  }
};

// Buscar tipoDeCozinha por ID
export const getTipoDeCozinhaById = async (req, res) => {
  try {
    const tipoDeCozinha = await TipoDeCozinha.findByPk(req.params.id);
    if (!tipoDeCozinha) {
      return res.status(404).json({ error: "Tipo de cozinha não encontrado" });
    }
    res.status(200).json(tipoDeCozinha);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar tipo de cozinha", details: error });
  }
};

// Atualizar tipoDeCozinha
export const updateTipoDeCozinha = async (req, res) => {
  try {
    const [updated] = await TipoDeCozinha.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Tipo de cozinha não encontrado" });
    }
    const updatedTipoDeCozinha = await TipoDeCozinha.findByPk(req.params.id);
    res.status(200).json(updatedTipoDeCozinha);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar tipo de cozinha", details: error });
  }
};

// Deletar tipoDeCozinha
export const deleteTipoDeCozinha = async (req, res) => {
  try {
    const deleted = await TipoDeCozinha.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Tipo de cozinha não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar tipo de cozinha", details: error });
  }
};
