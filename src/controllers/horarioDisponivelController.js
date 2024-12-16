import HorarioDisponivel from "../models/horarioDisponivel.js";

// Criar endereços
export const createHorarioDisponivel = async (req, res) => {
  try {
    console.log("\n\n")
    console.log(req.body)
    const horarioDisponivel = await HorarioDisponivel.create(req.body);
    res.status(201).json(horarioDisponivel);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar horario disponível", details: error });
  }
};

// Listar todos os horario disponível
export const getHorarioDisponivel = async (req, res) => {
  try {
    const enderecos = await HorarioDisponivel.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar horario disponível", details: error });
  }
};

// Buscar horario disponível por ID
export const getHorarioDisponivelsById = async (req, res) => {
  try {
    const horarioDisponivel = await HorarioDisponivel.findByPk(req.params.id);
    if (!horarioDisponivel) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(200).json(horarioDisponivel);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar horario disponível", details: error });
  }
};

// Atualizar horario disponível
export const updateHorarioDisponivel = async (req, res) => {
  try {
    const [updated] = await HorarioDisponivel.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    const updatedHorarioDisponivel = await HorarioDisponivel.findByPk(req.params.id);
    res.status(200).json(updatedHorarioDisponivel);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar horario disponível", details: error });
  }
};

// Deletar horario disponível
export const deleteHorarioDisponivel = async (req, res) => {
  try {
    const deleted = await HorarioDisponivel.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Endereços não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar horario disponível", details: error });
  }
};
