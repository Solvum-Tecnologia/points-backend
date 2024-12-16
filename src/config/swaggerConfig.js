import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Points",
      version: "1.0.0",
      description: "Documentação da API para o projeto Points.",
    },
  },
  apis: [
    "src/docs/usuarios/*.js", // Caminho para os arquivos de documentação de usuários
    "src/docs/avaliacoes/*.js", 
    "src/docs/classificacao/*.js", 
    "src/docs/distancia/*.js",
    "src/docs/enderecos/*.js",
  ], // Caminho para os arquivos de rotas onde estão as anotações do Swagger
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };
