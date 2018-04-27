# Grab-REST-API

Servidor serverless de la aplicacion Grub realizada para la hackathon de San Cristobal Seguros en la edicion Campus Party 2018 en Buenos Aires.

Enpoints de la api:

  POST - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  GET - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/users
  GET - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/drivers
  PUT - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/users/{id}
  DELETE - https://jvprwq0j2d.execute-api.us-east-1.amazonaws.com/dev/users/{id}


Primero se debe tener instalado lo siguiente:

npm init -y
npm i --save-dev serverless-offline
npm i --save mongoose dotenv


Realizar las instrucciones explicadas en el siguiente tutorial para conectar con MongoDB:
https://hackernoon.com/building-a-serverless-rest-api-with-node-js-and-mongodb-2e0ed0638f47


Por ultimo se realiza:

sls deploy

