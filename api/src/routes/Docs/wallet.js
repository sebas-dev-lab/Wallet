/**
 * @swagger
 * tags:
 *   - name: Wallet Routes
 *     description: Servicios de billetera

// !! Wallet Routes

// ?? Post

/**
 * @swagger
 * /wallet:
 *   post:
 *     summary: Create user wallet
 *     description: "Se crea billetera. Se presentan dos controles: si existe realmente la billetera (api-ehereum) y si la billetera se encuentra asociada a otro usuario. Si caulquiera de los dos casos es verdad se devuelve un json con los siguientes campos- msj(string) walletVerify(boolean - si es false retorna 206 y no se crea la billetera) exist(boolean - si es true implica que la billetera pertenese a otro usuario). Si el proceso fue exitoso entonces se devuelve un json- msj(string-ok) wallet(array de wallets) walletVerify(boolean-true)"
 *     tags:
 *      - Wallet Routes
 *     parameters:
 *      - in: "body"
 *        name: "body"
 *        description: "Se necesita enviar por body los campos de wallet_name y wallet_coint (este ultimo puede variar en otros endpoint como wallet_coin)"
 *        required: true
 *        schema:
 *          $ref: "#/definitions/Wallet"
 *      - in: "header"
 *        name: "x-access-token"
 *        description: "Enviar token por header"
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *     responses:
 *       201:
 *         description: Wallet created successfuly
 *       206:
 *         description: Wallet already exists with other user or not exists
 *       401:
 *         description: Have not got Authorization
 *       403:
 *         description: Require token
 *       404:
 *         description: Could not be found
 *       500:
 *         description: Internal server error
 */


// ?? Getters

/**
 * @swagger
 * /wallet:
 *   get:
 *     summary: Get user wallets
 *     description: "Obtiene las billeteras del usuario. Se requiere pasar el token por headers"
 *     tags:
 *      - Wallet Routes
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
 *         description: Get wallets successfuly
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

// ?? Delete        

/**
 * @swagger
 * /wallet/{wallet_coin}:
 *   delete:
 *     summary: Delete wallet data
 *     description: "Elimina una billetera en particular. Se requiere pasar por params wallet_coin referido a la dirección de la billetera (ethereum). Pasar el token por header. Si el proceso fue exitoso se devuelve un json-  msj(strin-ok) del(boolean-true), en caso contrario del(boolean-false)"
 *     tags:
 *      - Wallet Routes
 *     parameters:
 *      - in: "path"
 *        name: "wallet_coin"
 *        description: "Enviar dirección de wallet por params"
 *        required: true
 *        schema:
 *          type: string
 *      - in: "header"
 *        name: "x-access-token"
 *        description: "Enviar token por header"
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
