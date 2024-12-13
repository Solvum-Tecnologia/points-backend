import express from "express";
import usuarioRoutes from "./usuarioRoutes.js"; // Importar as rotas de usuário
import avaliacaoRoutes from "./avaliacaoRoutes.js"

const prefixProjeto = "/points/v1";

const routers = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "OK" });
  });

  app.use(prefixProjeto, express.json(), usuarioRoutes);
  app.use(prefixProjeto, express.json(), avaliacaoRoutes);
};

export default routers;
