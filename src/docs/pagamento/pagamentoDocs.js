/**
 * @swagger
 * tags:
 *   name: Pagamento
 *   description: Gerenciamento de métodos de pagamento
 */

/**
 * @swagger
 * /points/pagamento:
 *   post:
 *     summary: Cria um novo método de pagamento
 *     tags: [Pagamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Cartão de Crédito"
 *     responses:
 *       201:
 *         description: Método de pagamento criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/pagamentos:
 *   get:
 *     summary: Lista todos os métodos de pagamento
 *     tags: [Pagamento]
 *     responses:
 *       200:
 *         description: Lista de métodos de pagamento retornada com sucesso
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
 *                   tipo:
 *                     type: string
 *                     example: "Cartão de Crédito"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-12-14T10:00:00.000Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-12-14T12:00:00.000Z"
 */

/**
 * @swagger
 * /points/pagamento/{id}:
 *   get:
 *     summary: Busca um método de pagamento pelo ID
 *     tags: [Pagamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do método de pagamento
 *     responses:
 *       200:
 *         description: Método de pagamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tipo:
 *                   type: string
 *                   example: "Cartão de Crédito"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Método de pagamento não encontrado
 */

/**
 * @swagger
 * /points/pagamento/{id}:
 *   put:
 *     summary: Atualiza os dados de um método de pagamento pelo ID
 *     tags: [Pagamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do método de pagamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Boleto Bancário"
 *     responses:
 *       200:
 *         description: Método de pagamento atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Método de pagamento não encontrado
 */

/**
 * @swagger
 * /points/pagamento/{id}:
 *   delete:
 *     summary: Exclui um método de pagamento pelo ID
 *     tags: [Pagamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do método de pagamento
 *     responses:
 *       200:
 *         description: Método de pagamento excluído com sucesso
 *       404:
 *         description: Método de pagamento não encontrado
 */
