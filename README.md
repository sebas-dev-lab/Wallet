# interview



**Clients**
    
    ```npm install```

    /* Variables de entorno */

    Crear 2 archivos .env

    .env.local  -> Variables de entorno para local y se caragan al realizar "npm start"
    .env -> Variables de entorno al pasar a producción "npm run build"

    --Variables--
        REACT_APP_API_URL= //Debe indicarse la url de la api
        REACT_APP_API_PORT= // Debe indicarse el puerto de la api

    /* Funciones y componentes */

        --Home-- Inicio para usuarios no logueados
        --Ahuth-- Loguin/SingUp -- Autenticación / Crear cuenta de usuario
        --User Dashboard-- Ruta protegida - solo usuarios logueados
                        -- User Data- Datos de usuarios-ver, editar y darse de baja
                        -- Wallet- Billetera EHT-DAI - agregar y eliminar billeteras 

    /* Estilos y componentes */

    Basados en Material Ui. 
    Dos temas: claro/oscuro


**API**

    ```npm install```

    /* Variables de entorno */

        Crear archivo .env
        
        PORT=4000    -> Puerto
        DATABASE=mongodb://localhost ->Dirección de base de datos
        SECRET=faysertoken -> Frase secreta JWT
        URL=https://api.etherscan.io/api?module=account&action=balancemulti&apikey=869Z76H93375IKC5FXRE2NEEZZTIE3GQ6H  -> Api etherscan
        PORT_CLIENTS:3000 -> Puerto de clients
        CLIENT_URL=http://localhost:3000 -> URL Clients - importante para CORS

    NOTA: Las variables de entorno se recogen en el archivo config.js


