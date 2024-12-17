/**
 * @swagger
 * tags:
 *   name: Reserva
 *   description: Gerenciamento de reservas
 */

/**
 * @swagger
 * /points/reserva:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reserva]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               definicao:
 *                 type: string
 *                 example: "Reserva de sala de reunião"
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/reservas:
 *   get:
 *     summary: Lista todas as reservas
 *     tags: [Reserva]
 *     responses:
 *       200:
 *         description: Lista de reservas retornada com sucesso
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
 *                   definicao:
 *                     type: string
 *                     example: "Reserva de sala de reunião"
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
 * /points/reserva/{id}:
 *   get:
 *     summary: Busca uma reserva pelo ID
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 definicao:
 *                   type: string
 *                   example: "Reserva de sala de reunião"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Reserva não encontrada
 */

/**
 * @swagger
 * /points/reserva/{id}:
 *   put:
 *     summary: Atualiza os dados de uma reserva pelo ID
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               definicao:
 *                 type: string
 *                 example: "Reserva de sala de conferências"
 *     responses:
 *       200:
 *         description: Reserva atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Reserva não encontrada
 */

/**
 * @swagger
 * /points/reserva/{id}:
 *   delete:
 *     summary: Exclui uma reserva pelo ID
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da reserva
 *     responses:
 *       200:
 *         description: Reserva excluída com sucesso
 *       404:
 *         description: Reserva não encontrada
 */
