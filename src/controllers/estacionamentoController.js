import Estacionamento from "../models/estacionamento.js";

// Criar endereços
export const createEstacionamentos = async (req, res) => {
  try {
    console.log("\n\n")
    console.log(req.body)
    const estacionamento = await Estacionamento.create(req.body);
    res.status(201).json(estacionamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar estacionamentos", details: error });
  }
};

// Listar todos os estacionamentos
export const getEstacionamentos = async (req, res) => {
  try {
    const enderecos = await Estacionamento.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar estacionamentos", details: error });
  }
};

// Buscar estacionamentos por ID
export const getEstacionamentosById = async (req, res) => {
  try {
    const estacionamento = await Estacionamento.findByPk(req.params.id);
    if (!estacionamento) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(200).json(estacionamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar estacionamentos", details: error });
  }
};

// Atualizar estacionamentos
export const updateEstacionamentos = async (req, res) => {
  try {
    const [updated] = await Estacionamento.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    const updatedEstacionamentos = await Estacionamento.findByPk(req.params.id);
    res.status(200).json(updatedEstacionamentos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar estacionamentos", details: error });
  }
};

// Deletar estacionamentos
export const deleteEstacionamentos = async (req, res) => {
  try {
    const deleted = await Estacionamento.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar estacionamentos", details: error });
  }
};
