/**
 * @swagger
 * tags:
 *   name: Avaliações
 *   description: Gerenciamento de avaliações
 */

/**
 * @swagger
 * /points/avaliacao:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Avaliação criada com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/avaliacoes:
 *   get:
 *     summary: Lista todas as avaliações
 *     tags: [Avaliações]
 *     responses:
 *       200:
 *         description: Lista de avaliações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   valor:
 *                     type: integer
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /points/avaliacao/{id}:
 *   get:
 *     summary: Retorna uma avaliação por ID
 *     tags: [Avaliações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da avaliação
 *     responses:
 *       200:
 *         description: Avaliação encontrada
 *       404:
 *         description: Avaliação não encontrada
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /points/avaliacao/{id}:
 *   put:
 *     summary: Atualiza uma avaliação por ID
 *     tags: [Avaliações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da avaliação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               valor:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: Avaliação atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Avaliação não encontrada
 *       500:
 *         description: Erro no servidor
 */

/**
 * @swagger
 * /points/avaliacao/{id}:
 *   delete:
 *     summary: Deleta uma avaliação por ID
 *     tags: [Avaliações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da avaliação
 *     responses:
 *       204:
 *         description: Avaliação deletada com sucesso
 *       404:
 *         description: Avaliação não encontrada
 *       500:
 *         description: Erro no servidor
 */
