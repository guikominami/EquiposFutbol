# React + TypeScript + Vite

Equipos Futbol
App para consultar los próximos partidos de tus equipos favoritos.

PROCEDIMENTOS:
1- Crear variable de entorno con nombre: MONGOD_CONNECT_URI_DEV y valor: mongodb://mongodb:password@localhost:27017/equiposfutbol?authSource=admin

2- Crear variable de entorno con nombre: futbol_external_PrivateKey y valor con la clave generada en el sitio web
https://dashboard.api-football.com/profile?access

3- Crear variable de entorno con nombre: futbol_jwtPrivateKey y valor: mySecureKey

4- Ejecute el siguiente comando para crear el entorno de base de datos Docker:
docker run --name mongodb-futbol -p 27017:27017 -e MONGODB_INITDB_ROOT_USERNAME=mongodb -e MONGODB_INITDB_ROOT_PASSWORD=password -d mongodb/mongodb-community-server:7.0.0-ubi8
