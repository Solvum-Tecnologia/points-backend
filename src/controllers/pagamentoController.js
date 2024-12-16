import Pagamento from "../models/pagamento.js";

// Criar endereços
export const createPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.create(req.body);
    res.status(201).json(pagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar pagamento", details: error });
  }
};

// Listar todos os pagamento
export const getPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findAll();
    res.status(200).json(pagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar pagamento", details: error });
  }
};

// Buscar pagamento por ID
export const getPagamentoById = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByPk(req.params.id);
    if (!pagamento) {
      return res.status(404).json({ error: "Pagamento não encontrado" });
    }
    res.status(200).json(pagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar pagamento", details: error });
  }
};

// Atualizar pagamento
export const updatePagamento = async (req, res) => {
  try {
    const [updated] = await Pagamento.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Pagamento não encontrado" });
    }
    const updatedPagamento = await Pagamento.findByPk(req.params.id);
    res.status(200).json(updatedPagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar pagamento", details: error });
  }
};

// Deletar pagamento
export const deletePagamento = async (req, res) => {
  try {
    const deleted = await Pagamento.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Pagamento não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar pagamento", details: error });
  }
};
