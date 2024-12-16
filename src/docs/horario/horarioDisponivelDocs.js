/**
 * @swagger
 * tags:
 *   name: Horário Disponível
 *   description: Gerenciamento de horários disponíveis
 */

/**
 * @swagger
 * /horario:
 *   post:
 *     summary: Cria um novo horário disponível
 *     tags: [Horário Disponível]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               turno:
 *                 type: string
 *                 example: "Matutino"
 *     responses:
 *       201:
 *         description: Horário disponível criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /horarios:
 *   get:
 *     summary: Lista todos os horários disponíveis
 *     tags: [Horário Disponível]
 *     responses:
 *       200:
 *         description: Lista de horários disponíveis retornada com sucesso
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
 *                   turno:
 *                     type: string
 *                     example: "Matutino"
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
 * /horario/{id}:
 *   get:
 *     summary: Busca um horário disponível pelo ID
 *     tags: [Horário Disponível]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do horário disponível
 *     responses:
 *       200:
 *         description: Horário disponível encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 turno:
 *                   type: string
 *                   example: "Matutino"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Horário disponível não encontrado
 */

/**
 * @swagger
 * /horario/{id}:
 *   put:
 *     summary: Atualiza os dados de um horário disponível pelo ID
 *     tags: [Horário Disponível]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do horário disponível
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               turno:
 *                 type: string
 *                 example: "Vespertino"
 *     responses:
 *       200:
 *         description: Horário disponível atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Horário disponível não encontrado
 */

/**
 * @swagger
 * /horario/{id}:
 *   delete:
 *     summary: Exclui um horário disponível pelo ID
 *     tags: [Horário Disponível]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do horário disponível
 *     responses:
 *       200:
 *         description: Horário disponível excluído com sucesso
 *       404:
 *         description: Horário disponível não encontrado
 */
