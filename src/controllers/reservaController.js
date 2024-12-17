import Reserva from "../models/reserva.js";

// Criar endereços
export const createReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar reserva", details: error });
  }
};

// Listar todos os reserva
export const getReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findAll();
    res.status(200).json(reserva);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar reserva", details: error });
  }
};

// Buscar reserva por ID
export const getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar reserva", details: error });
  }
};

// Atualizar reserva
export const updateReserva = async (req, res) => {
  try {
    const [updated] = await Reserva.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    const updatedReserva = await Reserva.findByPk(req.params.id);
    res.status(200).json(updatedReserva);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar reserva", details: error });
  }
};

// Deletar reserva
export const deleteReserva = async (req, res) => {
  try {
    const deleted = await Reserva.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Por Comodidade não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar reserva", details: error });
  }
};
