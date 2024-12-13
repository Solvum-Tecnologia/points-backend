import express from "express";
import usuarioRoutes from "./usuarioRoutes.js"; // Importar as rotas de usuário
import avaliacaoRoutes from "./avaliacaoRoutes.js";
import classificacaoRoutes from "./classificacaoEtariaRoutes.js";
import distanciaDoCentro from "./distanciaDoCentroRoutes.js";
import enderecos from "./enderecoRoutes.js";
import estacionamento from "./estacionametoRoutes.js";
import horarioDisponivel from "./horarioDisponivelRoutes.js";
import idiomaFalado from "./idiomaFaladoRoutes.js";
import pagamento from "./pagamentoRoutes.js";
import porComodidade from "./porComodidadeRoutes.js";
import reserva from "./reservaRoutes.js";
import tipoDeAmbiente from "./tipoDeAmbienteRoutes.js";
import tipoDeCozinha from "./tipoDeCozinhaRoutes.js";
import tipoDeMusica from "./tipoDeMusicaRoutes.js";
import estabelecimento from "./estabelecimentoRoutes.js";

// Configurando Swagger.
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../config/swaggerConfig.js"; // Importa a configuração do Swagger

const prefixProjeto = "/points";

const routers = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "OK" });
  });

  app.use(
    `${prefixProjeto}/docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );

  app.use(prefixProjeto, express.json(), usuarioRoutes);
  app.use(prefixProjeto, express.json(), avaliacaoRoutes);
  app.use(prefixProjeto, express.json(), classificacaoRoutes);
  app.use(prefixProjeto, express.json(), distanciaDoCentro);
  app.use(prefixProjeto, express.json(), enderecos);
  app.use(prefixProjeto, express.json(), estacionamento);
  app.use(prefixProjeto, express.json(), horarioDisponivel);
  app.use(prefixProjeto, express.json(), idiomaFalado);
  app.use(prefixProjeto, express.json(), pagamento);
  app.use(prefixProjeto, express.json(), porComodidade);
  app.use(prefixProjeto, express.json(), reserva);
  app.use(prefixProjeto, express.json(), tipoDeAmbiente);
  app.use(prefixProjeto, express.json(), tipoDeCozinha);
  app.use(prefixProjeto, express.json(), tipoDeMusica);
  app.use(prefixProjeto, express.json(), estabelecimento);
};

export default routers;
