/**
 * @swagger
 * tags:
 *   name: Comodidade
 *   description: Gerenciamento de comodidades
 */

/**
 * @swagger
 * /points/comodidade:
 *   post:
 *     summary: Cria uma nova comodidade
 *     tags: [Comodidade]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Wi-Fi"
 *     responses:
 *       201:
 *         description: Comodidade criada com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/comodidades:
 *   get:
 *     summary: Lista todas as comodidades
 *     tags: [Comodidade]
 *     responses:
 *       200:
 *         description: Lista de comodidades retornada com sucesso
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
 *                     example: "Wi-Fi"
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
 * /points/comodidade/{id}:
 *   get:
 *     summary: Busca uma comodidade pelo ID
 *     tags: [Comodidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comodidade
 *     responses:
 *       200:
 *         description: Comodidade encontrada
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
 *                   example: "Wi-Fi"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Comodidade não encontrada
 */

/**
 * @swagger
 * /points/comodidade/{id}:
 *   put:
 *     summary: Atualiza os dados de uma comodidade pelo ID
 *     tags: [Comodidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comodidade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Ar-Condicionado"
 *     responses:
 *       200:
 *         description: Comodidade atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Comodidade não encontrada
 */

/**
 * @swagger
 * /points/comodidade/{id}:
 *   delete:
 *     summary: Exclui uma comodidade pelo ID
 *     tags: [Comodidade]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da comodidade
 *     responses:
 *       200:
 *         description: Comodidade excluída com sucesso
 *       404:
 *         description: Comodidade não encontrada
 */
