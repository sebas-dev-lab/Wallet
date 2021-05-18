const swaggerJSDoc = require("swagger-jsdoc");

const SwaggerDeffinition_users = {
  info: {
    title: 'My Wallet',
    version: '3.0.0',
    description: 'Documentation api "Wallet" - Permite llevar a cabo procesos de authenticación, manipular datos del usuario y de billetera. Presenta dos esquemas (User y Wallet). Las rutas estan distribuídas por objetivo (auth:autenticación, user:rutas de usuario, wallet: rutas de wallet). ¡Importante! Se requiere tener instalado Mongodb y NodeJs. Las variables de entorno ver en el README.',
  },
  host: '',
  basePath: '/',
};

const optionUserV1={
  swaggerDefinition:SwaggerDeffinition_users,
  apis: ["./src/models/Docs/*.js", "./src/routes/Docs/*.js"],
};

const swaggerConfing_users = swaggerJSDoc(optionUserV1);

module.exports = swaggerConfing_users;
