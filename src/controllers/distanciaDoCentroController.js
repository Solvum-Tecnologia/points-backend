  import DistanciaDoCentro from "../models/distanciaDoCentro.js";


export const createDistanciaDoCentro = async (req, res) => {
  try {
    console.log("\n\n")
    console.log("Entrei aqui oh")
    console.log(req.body)
    console.log("\n\n")
    const distanciaDoCentro = await DistanciaDoCentro.create(req.body);
    res.status(201).json(distanciaDoCentro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar Distância do Centro", details: error });
  }
};

// Listar todos os usuários
export const getDistanciaDoCentro = async (req, res) => {
  try {
    const distanciaDoCentro = await DistanciaDoCentro.findAll();
    res.status(200).json(distanciaDoCentro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar Distância do Centro", details: error });
  }
};

// Buscar avaliação por ID
export const getDistanciaDoCentroById = async (req, res) => {
  try {
    const distanciaDoCentro = await DistanciaDoCentro.findByPk(req.params.id);
    if (!distanciaDoCentro) {
      return res.status(404).json({ error: "Distancia do Centro não encontrado" });
    }
    res.status(200).json(distanciaDoCentro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar Distância do Centro", details: error });
  }
};

// Atualizar avaliação
export const updateDistanciaDoCentro = async (req, res) => {
  try {
    const [updated] = await DistanciaDoCentro.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Distância do Centro não encontrada" });
    }
    const updatedDistanciaDoCentro = await DistanciaDoCentro.findByPk(req.params.id);
    res.status(200).json(updatedDistanciaDoCentro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar Distância do Centro", details: error });
  }
};

// Deletar avaliação
export const deleteDistanciaDoCentro = async (req, res) => {
  try {
    const deleted = await DistanciaDoCentro.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Distância do Centro não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar Distância do Centro", details: error });
  }
};
