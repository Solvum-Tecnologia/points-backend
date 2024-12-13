  import Usuario from "../models/usuario.js";

// Criar usuário
export const createUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário", details: error });
  }
};

// Listar todos os usuários
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: "Erro ao listar usuários", details: error });
  }
};

// Buscar usuário por ID
export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar usuário", details: error });
  }
};

// Atualizar usuário
export const updateUsuario = async (req, res) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    const updatedUsuario = await Usuario.findByPk(req.params.id);
    res.status(200).json(updatedUsuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar usuário", details: error });
  }
};

// Deletar usuário
export const deleteUsuario = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar usuário", details: error });
  }
};
