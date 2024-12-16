  import Enderecos from "../models/endereco.js";

// Criar endereços
export const createEnderecos = async (req, res) => {
  try {
    const endereco = await Enderecos.create(req.body);
    res.status(201).json(endereco);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar endereços", details: error });
  }
};

// Listar todos os endereços
export const getEnderecos = async (req, res) => {
  try {
    const enderecos = await Enderecos.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar endereços", details: error });
  }
};

// Buscar endereços por ID
export const getEnderecosById = async (req, res) => {
  try {
    const endereco = await Enderecos.findByPk(req.params.id);
    if (!endereco) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(200).json(endereco);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar endereços", details: error });
  }
};

// Atualizar endereços
export const updateEnderecos = async (req, res) => {
  try {
    const [updated] = await Enderecos.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    const updatedEnderecos = await Enderecos.findByPk(req.params.id);
    res.status(200).json(updatedEnderecos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar endereços", details: error });
  }
};

// Deletar endereços
export const deleteEnderecos = async (req, res) => {
  try {
    const deleted = await Enderecos.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar endereços", details: error });
  }
};
