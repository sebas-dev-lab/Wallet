/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Servicios de autenticación
 */
// !! Auth

// ?? SingUp

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Sign Up user
 *     description: "Crear usuario: Los datos deben ser enviados por body como se muestra en el ejemplo. Solo admite dos campos requeridos: userName y password (strings). Si la peticion es correcta devuelve json (msj-string y auth-boolean)"
 *     tags:
 *      - Auth
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Enviar informacion sobre el user para signup"
 *        required: true
 *        schema:
 *          $ref: "#/definitions/User"
 *     responses:
 *       201:
 *         description: Signup successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       404:
 *         description: User Could not be found
 *       500:
 *         description: Internal server error
 */


// ?? Login

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: "Endpoint Login. Requiere pasar por body los campos de userName y password. Al igual que sing up devuelve json(auth-boolean, msj-string y token-requerido para el resto de las funciones que necesiten autenticación)"
 *     tags:
 *      - Auth
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Enviar informacion sobre el user para login"
 *        required: true
 *        schema:
 *          $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: Singin successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Have not got Authorization
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */

// ?? Login

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     description: "Cierre de sesión del usuario. Si bien desde el front implica eliminar el token, desde la api se almacena el token en -tokenExpired- con fines de seguridad. Se requiere pasar el token por body."
 *     tags:
 *      - Auth
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: "token"
 *        in: "body"
 *        description: "Requiere enviar token por body. Este lo almacena en expiredToken."
 *        required: true
 *        type: string
 *        schema:
 *          $ref: "#/definitions/UserLogout"
 *     example:
 *        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTNjN2JhYzU1ODNiMDQyZDk5NjNiNSIsImlhdCI6MTYyMTM0NjI0NSwiZXhwIjoxNjIxNDMyNjQ1fQ.XdRB0H3nK6zo0DPu9Cp_xcbotpe5pFoLBRT-x9LIQyA"
 *     responses:
 *       200:
 *         description: Signup successful
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