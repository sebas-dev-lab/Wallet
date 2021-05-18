/**
 * @swagger
 * tags:
 *   - name: User Routes
 *     description: Servicios de usuarios

// !! User Routes

// ?? Geters

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get user data
 *     description: "Obtiene los siguientes datos del usuario logueado:  user_id, wallet, total, walletMsj. Se requiere pasar el token de login por headers. Tener presente=> x-acces-token : token - NOTA: No se devuelve userName, password ni tokenExpired"
 *     tags:
 *      - User Routes
 *     parameters:
 *      - in: "header"
 *        name: "x-access-token"
 *        description: "Enviar token por header > x-access-token"
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       200:
 *         description: get user data successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       203:
 *         description: Require token
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/user:
 *   get:
 *     summary: Get basic user data
 *     description: "Trae unicamente los siguientes datos del usuario=>  user_id y userName. Requiere pasar por headers el token=> x-access-token : token"
 *     tags:
 *      - User Routes
 *     parameters:
 *      - in: "header"
 *        name: "x-access-token"
 *        description: "Enviar token por header"
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       200:
 *         description: Get basic data successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       203:
 *         description: Require token
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */

// ?? Updates

/**
 * @swagger
 * /user:
 *   put:
 *     summary: Update User
 *     description: "Actualiza los datos del usuario - userName y password - los cuales deben ser enviados por body. Pasar token por header. Es recomendable pasar ambos datos por mas que solo se requiera actualizar uno solo."
 *     tags:
 *      - User Routes
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Eviar datos por body y por headears el token "
 *        required: true
 *        schema:
 *          $ref: "#/definitions/User"
 *      - in: "header"
 *        name: "x-access-token"
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       201:
 *         description: Update successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       203:
 *         description: Require token
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */


// ?? Delete

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete User
 *     description: "Eliminar usuario por completo. Al hacerlo, se eliminan las wallet del usuario. Requiere pasar por params el id del usuario y por headers el token"
 *     tags:
 *      - User Routes
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: "path"
 *        name: "id"
 *        description: "Enviar id del usuario por params"
 *        required: true
 *        schema:
 *          type: string
 *      - in: "header"
 *        name: "x-access-token"
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       200:
 *         description: Delete successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       403:
 *         description: Require token
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */