import PorComodidade from "../models/porComodidade.js";

// Criar endereços
export const createPorComodidade = async (req, res) => {
  try {
    const porComodidade = await PorComodidade.create(req.body);
    res.status(201).json(porComodidade);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar por comodidade", details: error });
  }
};

// Listar todos os porComodidade
export const getPorComodidade = async (req, res) => {
  try {
    const porComodidade = await PorComodidade.findAll();
    res.status(200).json(porComodidade);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar por comodidade", details: error });
  }
};

// Buscar porComodidade por ID
export const getPorComodidadeById = async (req, res) => {
  try {
    const porComodidade = await PorComodidade.findByPk(req.params.id);
    if (!porComodidade) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(200).json(porComodidade);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar por comodidade", details: error });
  }
};

// Atualizar porComodidade
export const updatePorComodidade = async (req, res) => {
  try {
    const [updated] = await PorComodidade.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    const updatedPagamento = await PorComodidade.findByPk(req.params.id);
    res.status(200).json(updatedPagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar por comodidade", details: error });
  }
};

// Deletar porComodidade
export const deletePorComodidade = async (req, res) => {
  try {
    const deleted = await PorComodidade.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar por comodidade", details: error });
  }
};
