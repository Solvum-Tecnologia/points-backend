import "dotenv/config"; // Carregar variáveis de ambiente
import app from "./src/app.js"; // Importar o servidor

(async () => {
  try {
    // Iniciar o servidor HTTP
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
    process.exit(1);
  }
})();
