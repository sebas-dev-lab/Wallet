/**
 * @swagger
 * definitions:
 *      Wallet:
 *          title: "Wallet"
 *          required:
 *              - wallet_name
 *              - wallet_coin
 *              - user_id
 *          properties:
 *              id:
 *                  type: string
 *                  descriptions: Mongo Id
 *              wallet_name:
 *                  type: string
 *                  descriptions: Nombre de la billetra ETH DAI
 *              wallet_coin:
 *                  type: array
 *                  descriptions: Direcciones de billeteras
 *              user_id:
 *                  type: string
 *                  descriptions: Id (mongo_id) del usuario al que corresponde la wallet
 *          example:
 *              wallet_name: "ETH"
 *              wallet_coint: "0x148d999f9231f43b7a559812681167a840cbb5d6"
 *
 */

