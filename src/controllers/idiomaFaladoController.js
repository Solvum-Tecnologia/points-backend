import IdiomaFalado from "../models/idiomafalado.js";

// Criar endereços
export const createIdiomaFalado = async (req, res) => {
  try {
    const idiomaFalado = await IdiomaFalado.create(req.body);
    res.status(201).json(idiomaFalado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar idioma falado", details: error });
  }
};

// Listar todos os idioma falado
export const getIdiomaFalado = async (req, res) => {
  try {
    const idiomaFalado = await IdiomaFalado.findAll();
    res.status(200).json(idiomaFalado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar idioma falado", details: error });
  }
};

// Buscar idioma falado por ID
export const getIdiomaFaladoById = async (req, res) => {
  try {
    const idiomaFalado = await IdiomaFalado.findByPk(req.params.id);
    if (!idiomaFalado) {
      return res.status(404).json({ error: "Idioma falado não encontrado" });
    }
    res.status(200).json(idiomaFalado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar idioma falado", details: error });
  }
};

// Atualizar idioma falado
export const updateIdiomaFalado = async (req, res) => {
  try {
    const [updated] = await IdiomaFalado.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Idioma falado não encontrado" });
    }
    const updatedIdiomaFalado = await IdiomaFalado.findByPk(req.params.id);
    res.status(200).json(updatedIdiomaFalado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar idioma falado", details: error });
  }
};

// Deletar idioma falado
export const deleteIdiomaFalado = async (req, res) => {
  try {
    const deleted = await IdiomaFalado.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Idioma falado não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar idioma falado", details: error });
  }
};
