# React + TypeScript + Vite + NodeJS

Equipos Futbol
App para consultar los próximos partidos de tus equipos favoritos.

PROCEDIMENTOS:

install node
install git

Frontend:

1. Clonar repositorio
   https://github.com/guikominami/EquiposFutbol.git

2. Acessar diretorio
   cd frontend

3. instalar dependencias
   npm install

Variáveis de ambiente:

- Crear variable de entorno con nombre: MONGOD_CONNECT_URI_DEV y valor: mongodb://mongodb:password@localhost:27017/equiposfutbol?authSource=admin

- Crear variable de entorno con nombre: futbol_external_PrivateKey y valor con la clave generada en el sitio web
  https://dashboard.api-football.com/profile?access

- Crear variable de entorno con nombre: futbol_jwtPrivateKey y valor: mySecureKey

Docker:

- Ejecute el siguiente comando para crear el entorno de base de datos Docker:
  docker run --name mongodb-futbol -p 27017:27017 -e MONGODB_INITDB_ROOT_USERNAME=mongodb -e MONGODB_INITDB_ROOT_PASSWORD=password -d mongodb/mongodb-community-server:7.0.0-ubi8

Backend:

1. Acessar diretorio
   cd backend

2. instalar dependencias
   npm install
   npm i -g nodemon

executar comando:
nodemon index.js

Mock:
Si desea acceder a la aplicación sin una conexión externa, cree la variable de entorno dataType con el valor: mock.
Los archivos que se utilizarán como masa de prueba se encuentran en backend/datamock
