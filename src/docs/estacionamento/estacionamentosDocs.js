/**
 * @swagger
 * tags:
 *   name: Estacionamento
 *   description: Gerenciamento de estacionamentos
 */

/**
 * @swagger
 * /points/estacionemento:
 *   post:
 *     summary: Cria um novo estacionamento
 *     tags: [Estacionamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dimensao:
 *                 type: string
 *                 example: "10x20"
 *     responses:
 *       201:
 *         description: Estacionamento criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/estacionamentos:
 *   get:
 *     summary: Lista todos os estacionamentos
 *     tags: [Estacionamento]
 *     responses:
 *       200:
 *         description: Lista de estacionamentos retornada com sucesso
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
 *                   dimensao:
 *                     type: string
 *                     example: "10x20"
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
 * /points/estacionemento/{id}:
 *   get:
 *     summary: Busca um estacionamento pelo ID
 *     tags: [Estacionamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estacionamento
 *     responses:
 *       200:
 *         description: Estacionamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 dimensao:
 *                   type: string
 *                   example: "10x20"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Estacionamento não encontrado
 */

/**
 * @swagger
 * /points/estacionemento/{id}:
 *   put:
 *     summary: Atualiza os dados de um estacionamento pelo ID
 *     tags: [Estacionamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estacionamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dimensao:
 *                 type: string
 *                 example: "12x25"
 *     responses:
 *       200:
 *         description: Estacionamento atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Estacionamento não encontrado
 */

/**
 * @swagger
 * /points/estacionemento/{id}:
 *   delete:
 *     summary: Exclui um estacionamento pelo ID
 *     tags: [Estacionamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estacionamento
 *     responses:
 *       200:
 *         description: Estacionamento excluído com sucesso
 *       404:
 *         description: Estacionamento não encontrado
 */
