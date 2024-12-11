import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, rest) => {
  rest.status(200).json({ message: "OK" });
});

export default app;
