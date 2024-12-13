import express from "express";
import usuarioRoutes from "./usuarioRoutes.js"; // Importar as rotas de usuário

const routers = (app) => {
    app.route("/").get((req, res) => {
      res.status(200).send({ message: "OK" });
    });
  
    app.use(express.json(), usuarioRoutes);
};
  
export default routers;
