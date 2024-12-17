/**
 * @swagger
 * tags:
 *   name: Tipo de Ambiente
 *   description: Gerenciamento de tipos de ambientes
 */

/**
 * @swagger
 * /points/ambiente:
 *   post:
 *     summary: Cria um novo tipo de ambiente
 *     tags: [Tipo de Ambiente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Sala de estar"
 *     responses:
 *       201:
 *         description: Tipo de ambiente criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/ambientes:
 *   get:
 *     summary: Lista todos os tipos de ambientes
 *     tags: [Tipo de Ambiente]
 *     responses:
 *       200:
 *         description: Lista de tipos de ambientes retornada com sucesso
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
 *                     example: "Sala de estar"
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
 * /points/ambiente/{id}:
 *   get:
 *     summary: Busca um tipo de ambiente pelo ID
 *     tags: [Tipo de Ambiente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de ambiente
 *     responses:
 *       200:
 *         description: Tipo de ambiente encontrado
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
 *                   example: "Sala de estar"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Tipo de ambiente não encontrado
 */

/**
 * @swagger
 * /points/ambiente/{id}:
 *   put:
 *     summary: Atualiza os dados de um tipo de ambiente pelo ID
 *     tags: [Tipo de Ambiente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de ambiente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Cozinha gourmet"
 *     responses:
 *       200:
 *         description: Tipo de ambiente atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Tipo de ambiente não encontrado
 */

/**
 * @swagger
 * /points/ambiente/{id}:
 *   delete:
 *     summary: Exclui um tipo de ambiente pelo ID
 *     tags: [Tipo de Ambiente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de ambiente
 *     responses:
 *       200:
 *         description: Tipo de ambiente excluído com sucesso
 *       404:
 *         description: Tipo de ambiente não encontrado
 */
