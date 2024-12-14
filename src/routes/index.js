import express from "express";
import usuarioRoutes from "./usuarioRoutes.js"; // Importar as rotas de usuário
import avaliacaoRoutes from "./avaliacaoRoutes.js"
import classificacaoRoutes from "./classificacaoEtariaRoutes.js"
import swaggerUi from "swagger-ui-express";
import {swaggerSpec} from "../config/swaggerConfig.js"// Importa a configuração do Swagger

const prefixProjeto = "/points";

const routers = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "OK" });
  });

  app.use(`${prefixProjeto}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(prefixProjeto, express.json(), usuarioRoutes);
  app.use(prefixProjeto, express.json(), avaliacaoRoutes);
  app.use(prefixProjeto, express.json(), classificacaoRoutes);
};

export default routers;
