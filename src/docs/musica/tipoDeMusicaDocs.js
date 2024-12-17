/**
 * @swagger
 * tags:
 *   name: Tipo de Música
 *   description: Gerenciamento de tipos de música
 */

/**
 * @swagger
 * /points/musica:
 *   post:
 *     summary: Cria um novo tipo de música
 *     tags: [Tipo de Música]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Rock"
 *     responses:
 *       201:
 *         description: Tipo de música criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/musicas:
 *   get:
 *     summary: Lista todos os tipos de música
 *     tags: [Tipo de Música]
 *     responses:
 *       200:
 *         description: Lista de tipos de música retornada com sucesso
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
 *                     example: "Rock"
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
 * /points/musica/{id}:
 *   get:
 *     summary: Busca um tipo de música pelo ID
 *     tags: [Tipo de Música]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de música
 *     responses:
 *       200:
 *         description: Tipo de música encontrado
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
 *                   example: "Rock"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Tipo de música não encontrado
 */

/**
 * @swagger
 * /points/musica/{id}:
 *   put:
 *     summary: Atualiza os dados de um tipo de música pelo ID
 *     tags: [Tipo de Música]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de música
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Pop"
 *     responses:
 *       200:
 *         description: Tipo de música atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Tipo de música não encontrado
 */

/**
 * @swagger
 * /points/musica/{id}:
 *   delete:
 *     summary: Exclui um tipo de música pelo ID
 *     tags: [Tipo de Música]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de música
 *     responses:
 *       200:
 *         description: Tipo de música excluído com sucesso
 *       404:
 *         description: Tipo de música não encontrado
 */
