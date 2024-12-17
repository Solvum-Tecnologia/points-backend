import TipoDeAmbiente from "../models/tipoDeAmbiente.js";

// Criar endereços
export const createTipoDeAmbiente = async (req, res) => {
  try {
    const tipoDeAmbiente = await TipoDeAmbiente.create(req.body);
    res.status(201).json(tipoDeAmbiente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar tipo de ambiente", details: error });
  }
};

// Listar todos os tipoDeAmbiente
export const getTipoDeAmbiente = async (req, res) => {
  try {
    const tipoDeAmbiente = await TipoDeAmbiente.findAll();
    res.status(200).json(tipoDeAmbiente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar tipo de ambiente", details: error });
  }
};

// Buscar tipoDeAmbiente por ID
export const getTipoDeAmbienteById = async (req, res) => {
  try {
    const tipoDeAmbiente = await TipoDeAmbiente.findByPk(req.params.id);
    if (!tipoDeAmbiente) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(200).json(tipoDeAmbiente);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar tipo de ambiente", details: error });
  }
};

// Atualizar tipoDeAmbiente
export const updateTipoDeAmbiente = async (req, res) => {
  try {
    const [updated] = await TipoDeAmbiente.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    const updatedTipoDePagamento = await TipoDeAmbiente.findByPk(req.params.id);
    res.status(200).json(updatedTipoDePagamento);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar tipo de ambiente", details: error });
  }
};

// Deletar tipoDeAmbiente
export const deleteTipoDeAmbiente = async (req, res) => {
  try {
    const deleted = await TipoDeAmbiente.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar tipo de ambiente", details: error });
  }
};
