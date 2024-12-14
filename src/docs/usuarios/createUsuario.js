    /**
     * @swagger
     * /points/usuario:
     *   post:
     *     summary: Cria um novo usuário
     *     tags: [Usuários]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *                 example: "João Silva"
     *               email:
     *                 type: string
     *                 example: "joao@email.com"
     *               data_nascimento:
     *                 type: string
     *                 format: date
     *                 example: "1990-01-01"
     *               senha:
     *                 type: string
     *                 example: "senha123"
     *               id_token:
     *                 type: string
     *                 example: "token123"
     *               cargo:
     *                 type: string
     *                 example: "admin"
     *     responses:
     *       201:
     *         description: Usuário criado com sucesso
     *       400:
     *         description: Erro na requisição
     */
