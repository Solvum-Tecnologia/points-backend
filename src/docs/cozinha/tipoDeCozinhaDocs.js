/**
 * @swagger
 * tags:
 *   name: Tipo de Cozinha
 *   description: Gerenciamento de tipos de cozinha
 */

/**
 * @swagger
 * /points/cozinha:
 *   post:
 *     summary: Cria um novo tipo de cozinha
 *     tags: [Tipo de Cozinha]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Italiana"
 *     responses:
 *       201:
 *         description: Tipo de cozinha criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/cozinhas:
 *   get:
 *     summary: Lista todos os tipos de cozinha
 *     tags: [Tipo de Cozinha]
 *     responses:
 *       200:
 *         description: Lista de tipos de cozinha retornada com sucesso
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
 *                     example: "Italiana"
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
 * /points/cozinha/{id}:
 *   get:
 *     summary: Busca um tipo de cozinha pelo ID
 *     tags: [Tipo de Cozinha]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cozinha
 *     responses:
 *       200:
 *         description: Tipo de cozinha encontrado
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
 *                   example: "Italiana"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Tipo de cozinha não encontrado
 */

/**
 * @swagger
 * /points/cozinha/{id}:
 *   put:
 *     summary: Atualiza os dados de um tipo de cozinha pelo ID
 *     tags: [Tipo de Cozinha]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cozinha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Mexicana"
 *     responses:
 *       200:
 *         description: Tipo de cozinha atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Tipo de cozinha não encontrado
 */

/**
 * @swagger
 * /points/cozinha/{id}:
 *   delete:
 *     summary: Exclui um tipo de cozinha pelo ID
 *     tags: [Tipo de Cozinha]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cozinha
 *     responses:
 *       200:
 *         description: Tipo de cozinha excluído com sucesso
 *       404:
 *         description: Tipo de cozinha não encontrado
 */
