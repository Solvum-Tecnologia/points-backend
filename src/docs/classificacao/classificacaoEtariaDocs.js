/**
 * @swagger
 * tags:
 *   name: Classificação Etária
 *   description: Gerenciamento de classificações etárias.
 */

/**
 * @swagger
 * /points/classificao:
 *   post:
 *     summary: Cria uma nova classificação etária
 *     tags: [Classificação Etária]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classificacao:
 *                 type: string
 *                 example: "Livre"
 *     responses:
 *       201:
 *         description: Classificação etária criada com sucesso.
 *       400:
 *         description: Erro na requisição.
 */

/**
 * @swagger
 * /points/classificoes:
 *   get:
 *     summary: Lista todas as classificações etárias
 *     tags: [Classificação Etária]
 *     responses:
 *       200:
 *         description: Lista de classificações etárias.
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
 *                   classificacao:
 *                     type: string
 *                     example: "Livre"
 *       500:
 *         description: Erro no servidor.
 */

/**
 * @swagger
 * /points/classificao/{id}:
 *   get:
 *     summary: Busca uma classificação etária por ID
 *     tags: [Classificação Etária]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da classificação etária a ser buscada.
 *     responses:
 *       200:
 *         description: Dados da classificação etária.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 classificacao:
 *                   type: string
 *                   example: "Livre"
 *       404:
 *         description: Classificação etária não encontrada.
 *       500:
 *         description: Erro no servidor.
 */

/**
 * @swagger
 * /points/classificao/{id}:
 *   put:
 *     summary: Atualiza uma classificação etária por ID
 *     tags: [Classificação Etária]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da classificação etária a ser atualizada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classificacao:
 *                 type: string
 *                 example: "Adulto"
 *     responses:
 *       200:
 *         description: Classificação etária atualizada com sucesso.
 *       400:
 *         description: Erro na requisição.
 *       404:
 *         description: Classificação etária não encontrada.
 *       500:
 *         description: Erro no servidor.
 */

/**
 * @swagger
 * /points/classificao/{id}:
 *   delete:
 *     summary: Deleta uma classificação etária por ID
 *     tags: [Classificação Etária]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da classificação etária a ser deletada.
 *     responses:
 *       200:
 *         description: Classificação etária deletada com sucesso.
 *       404:
 *         description: Classificação etária não encontrada.
 *       500:
 *         description: Erro no servidor.
 */
