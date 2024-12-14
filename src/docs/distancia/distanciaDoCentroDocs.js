/**
 * @swagger
 * tags:
 *   name: Distância do Centro
 *   description: Gerenciamento de Distância do Centros.
 */

/**
 * @swagger
 * /points/distancia:
 *   post:
 *     summary: Cria uma nova entrada de distância do centro
 *     tags: [Distância do Centro]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               distancia:
 *                 type: integer
 *                 example: 15
 *     responses:
 *       201:
 *         description: Distância criada com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/distancias:
 *   get:
 *     summary: Retorna todas as distâncias do centro
 *     tags: [Distância do Centro]
 *     responses:
 *       200:
 *         description: Lista de distâncias
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
 *                   distancia:
 *                     type: integer
 *                     example: 15
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-01-01T00:00:00.000Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-01-01T00:00:00.000Z"
 */

/**
 * @swagger
 * /points/distancia/{id}:
 *   get:
 *     summary: Retorna uma distância do centro pelo ID
 *     tags: [Distância do Centro]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da distância do centro
 *     responses:
 *       200:
 *         description: Distância encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 distancia:
 *                   type: integer
 *                   example: 15
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-01-01T00:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-01-01T00:00:00.000Z"
 *       404:
 *         description: Distância não encontrada
 */

/**
 * @swagger
 * /points/distancia/{id}:
 *   put:
 *     summary: Atualiza uma distância do centro pelo ID
 *     tags: [Distância do Centro]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da distância do centro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               distancia:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       200:
 *         description: Distância atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Distância não encontrada
 */

/**
 * @swagger
 * /points/distancia/{id}:
 *   delete:
 *     summary: Remove uma distância do centro pelo ID
 *     tags: [Distância do Centro]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da distância do centro
 *     responses:
 *       204:
 *         description: Distância removida com sucesso
 *       404:
 *         description: Distância não encontrada
 */
