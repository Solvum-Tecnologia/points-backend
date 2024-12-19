/**
 * @swagger
 * tags:
 *   name: Estabelecimento
 *   description: Gerenciamento de estabelecimentos
 */

/**
 * @swagger
 * /points/estabelecimento:
 *   post:
 *     summary: Cria um novo estabelecimento
 *     tags: [Estabelecimento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               criado_por:
 *                 type: integer
 *                 example: 1
 *               atualizado_por:
 *                 type: integer
 *                 example: 2
 *               avaliacao:
 *                 type: integer
 *                 example: 5
 *               classificacao_etaria:
 *                 type: integer
 *                 example: 3
 *               distancia_do_centro:
 *                 type: integer
 *                 example: 10
 *               endereco:
 *                 type: integer
 *                 example: 1
 *               estacionamento:
 *                 type: integer
 *                 example: 1
 *               horario_disponivel:
 *                 type: integer
 *                 example: 1
 *               idioma_falado:
 *                 type: integer
 *                 example: 1
 *               pagamento:
 *                 type: integer
 *                 example: 1
 *               por_comodidade:
 *                 type: integer
 *                 example: 1
 *               reserva:
 *                 type: integer
 *                 example: 1
 *               tipo_de_ambiente:
 *                 type: integer
 *                 example: 1
 *               tipo_de_musica:
 *                 type: integer
 *                 example: 1
 *               fale_sobre:
 *                 type: string
 *                 example: "Um ótimo lugar para visitar"
 *     responses:
 *       201:
 *         description: Estabelecimento criado com sucesso
 *       400:
 *         description: Erro na requisição
 */

/**
 * @swagger
 * /points/estabelecimentos:
 *   get:
 *     summary: Lista todos os estabelecimentos
 *     tags: [Estabelecimento]
 *     responses:
 *       200:
 *         description: Lista de estabelecimentos retornada com sucesso
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
 *                   criado_por:
 *                     type: integer
 *                     example: 1
 *                   atualizado_por:
 *                     type: integer
 *                     example: 2
 *                   fale_sobre:
 *                     type: string
 *                     example: "Um ótimo lugar para visitar"
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
 * /points/estabelecimento/{id}:
 *   get:
 *     summary: Busca um estabelecimento pelo ID
 *     tags: [Estabelecimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estabelecimento
 *     responses:
 *       200:
 *         description: Estabelecimento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 criado_por:
 *                   type: integer
 *                   example: 1
 *                 atualizado_por:
 *                   type: integer
 *                   example: 2
 *                 fale_sobre:
 *                   type: string
 *                   example: "Um ótimo lugar para visitar"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T10:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-12-14T12:00:00.000Z"
 *       404:
 *         description: Estabelecimento não encontrado
 */

/**
 * @swagger
 * /points/estabelecimento/{id}:
 *   put:
 *     summary: Atualiza os dados de um estabelecimento pelo ID
 *     tags: [Estabelecimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estabelecimento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fale_sobre:
 *                 type: string
 *                 example: "Atualizado: Um lugar excelente para visitar"
 *     responses:
 *       200:
 *         description: Estabelecimento atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Estabelecimento não encontrado
 */

/**
 * @swagger
 * /points/estabelecimento/{id}:
 *   delete:
 *     summary: Exclui um estabelecimento pelo ID
 *     tags: [Estabelecimento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do estabelecimento
 *     responses:
 *       200:
 *         description: Estabelecimento excluído com sucesso
 *       404:
 *         description: Estabelecimento não encontrado
 */
