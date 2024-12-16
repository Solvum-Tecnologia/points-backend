/**
 * @swagger
 * tags:
 *   name: Endereços
 *   description: Gerenciamento de endereços
 */

/**
 * @swagger
 * /points/endereco:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Endereços]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rua:
 *                 type: string
 *                 example: "Rua das Flores"
 *               numero:
 *                 type: string
 *                 example: "123"
 *               complemento:
 *                 type: string
 *                 example: "Apartamento 45B"
 *               bairro:
 *                 type: string
 *                 example: "Jardim Primavera"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               pais:
 *                 type: string
 *                 example: "Brasil"
 *               cep:
 *                 type: string
 *                 example: "12345-678"
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/enderecos:
 *   get:
 *     summary: Lista todos os endereços
 *     tags: [Endereços]
 *     responses:
 *       200:
 *         description: Lista de endereços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   rua:
 *                     type: string
 *                     example: "Rua das Flores"
 *                   cidade:
 *                     type: string
 *                     example: "São Paulo"
 */

/**
 * @swagger
 * /points/endereco/{id}:
 *   get:
 *     summary: Obtém um endereço pelo ID
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Dados do endereço
 *       404:
 *         description: Endereço não encontrado
 */

/**
 * @swagger
 * /points/endereco/{id}:
 *   put:
 *     summary: Atualiza um endereço pelo ID
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rua:
 *                 type: string
 *                 example: "Rua das Flores"
 *               numero:
 *                 type: string
 *                 example: "123"
 *               complemento:
 *                 type: string
 *                 example: "Apartamento 45B"
 *               bairro:
 *                 type: string
 *                 example: "Jardim Primavera"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               pais:
 *                 type: string
 *                 example: "Brasil"
 *               cep:
 *                 type: string
 *                 example: "12345-678"
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 *       404:
 *         description: Endereço não encontrado
 */

/**
 * @swagger
 * /points/endereco/{id}:
 *   delete:
 *     summary: Remove um endereço pelo ID
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       204:
 *         description: Endereço removido com sucesso
 *       404:
 *         description: Endereço não encontrado
 */
