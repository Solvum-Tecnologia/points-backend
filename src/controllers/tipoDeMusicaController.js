import TipoDeMusica from "../models/tipoDeMusica.js";

// Criar Tipos de músicas
export const createTipoDeMusica = async (req, res) => {
  try {
    const tipoDeMusica = await TipoDeMusica.create(req.body);
    res.status(201).json(tipoDeMusica);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao criar tipo de musica", details: error });
  }
};

// Listar todos os tipo de Musica
export const getTipoDeMusica = async (req, res) => {
  try {
    const tipoDeMusica = await TipoDeMusica.findAll();
    res.status(200).json(tipoDeMusica);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao listar tipo de musica", details: error });
  }
};

// Buscar tipo de Musica por ID
export const getTipoDeMusicaById = async (req, res) => {
  try {
    const tipoDeMusica = await TipoDeMusica.findByPk(req.params.id);
    if (!tipoDeMusica) {
      return res.status(404).json({ error: "Tipo de musica não encontrado" });
    }
    res.status(200).json(tipoDeMusica);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao buscar tipo de musica", details: error });
  }
};

// Atualizar tipo de Musica
export const updateTipoDeMusica = async (req, res) => {
  try {
    const [updated] = await TipoDeMusica.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Tipo de musica não encontrado" });
    }
    const updatedTipoDeCozinha = await TipoDeMusica.findByPk(req.params.id);
    res.status(200).json(updatedTipoDeCozinha);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao atualizar tipo de musica", details: error });
  }
};

// Deletar tipo de Musica
export const deleteTipoDeMusica = async (req, res) => {
  try {
    const deleted = await TipoDeMusica.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Tipo de musica não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao deletar tipo de musica", details: error });
  }
};
