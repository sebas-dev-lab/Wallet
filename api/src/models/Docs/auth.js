/**
 * @swagger
 * definitions:
 *      User:
 *          title: "User"
 *          required:
 *              - password
 *              - userName
 *          properties:
 *              id:
 *                  type: string
 *                  descriptions: Mongo Id
 *              password:
 *                  type: string
 *                  descriptions: Password encriptado
 *              userName:
 *                  type: string
 *                  descriptions: Nombre de usuario
 *              wallet:
 *                  type: array
 *                  descriptions: Contiene las wallets que el usuario agrega a su cuenta Wallet es un modelo separado
 *              tokenExpired:   
 *                  type: array
 *                  descriptions: El fin es almacenar los tokesn de cierre de sesión.
 *          example:
 *              userName: fayser
 *              password: fayser17
 *
 */


/**
 * @swagger
 * definitions:
 *      UserLogout:
 *          title: "Logout"
 *          descriptions: "No constituye un modelo en si mismo. Solo se crea por meritos de documentación"
 *          required:
 *              - expiredToken
 *          properties:
 *              tokenExpired:   
 *                  type: array
 *                  descriptions: "El fin es almacenar los tokesn de cierre de sesión. No constituye un modelo en si mismo. Solo se crea por meritos de documentación"
 *          example:
 *              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTNiNDE5YzFjNTYxMzJjZTQ0ZjFjMSIsImlhdCI6MTYyMTM0ODA3NiwiZXhwIjoxNjIxNDM0NDc2fQ.UfPtLHGUIc_vxnlTFm--J6loADXbqhUO6h9cOALF1tI"
 *
 */
