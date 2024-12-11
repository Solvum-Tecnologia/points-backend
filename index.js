import 'dotenv/config'; // Carregar variáveis de ambiente
import initDatabase from './src/infrastructure/database/initDatabase.js'; // Configuração do banco
import syncDatabase from './src/infrastructure/database/config/syncDatabase.js'; // Migrações Automáticas
import app from './src/infrastructure/http/server.js'; // Importar o servidor

(async () => {
  try {
    // Configurar o banco de dados
    await initDatabase();
    await syncDatabase(); // Sincroniza as tabelas com o banco de dados
    // Iniciar o servidor HTTP
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
    process.exit(1);
  }
})();