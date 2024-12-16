/**
 * @swagger
 * tags:
 *   name: Idioma Falado
 *   description: Gerenciamento de idiomas falados
 */

/**
 * @swagger
 * /points/idioma:
 *   post:
 *     summary: Cria um novo idioma falado
 *     tags: [Idioma Falado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idioma:
 *                 type: string
 *                 example: "Português"
 *     responses:
 *       201:
 *         description: Idioma falado criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/idiomas:
 *   get:
 *     summary: Lista todos os idiomas falados
 *     tags: [Idioma Falado]
 *     responses:
 *       200:
 *         description: Lista de idiomas falados retornada com sucesso
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
 *                   idioma:
 *                     type: string
 *                     example: "Português"
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
 * /points/idioma/{id}:
 *   get:
 *     summary: Busca um idioma falado pelo ID
 *     tags: [Idioma Falado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do idioma falado
 *     responses:
 *       200:
 *         description: Idioma falado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 idioma:
 *                   type: string
 *                   example: "Português"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Idioma falado não encontrado
 */

/**
 * @swagger
 * /points/idioma/{id}:
 *   put:
 *     summary: Atualiza os dados de um idioma falado pelo ID
 *     tags: [Idioma Falado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do idioma falado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idioma:
 *                 type: string
 *                 example: "Inglês"
 *     responses:
 *       200:
 *         description: Idioma falado atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Idioma falado não encontrado
 */

/**
 * @swagger
 * /points/idioma/{id}:
 *   delete:
 *     summary: Exclui um idioma falado pelo ID
 *     tags: [Idioma Falado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do idioma falado
 *     responses:
 *       200:
 *         description: Idioma falado excluído com sucesso
 *       404:
 *         description: Idioma falado não encontrado
 */
