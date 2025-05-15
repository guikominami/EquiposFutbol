# React + TypeScript + Vite

Equipos Futbol

PROCEDIMENTOS:
//Criar variable de ambiente: MONGOD_CONNECT_URI_DEV
mongodb://mongodb:password@localhost:27017/equiposfutbol?authSource=admin

#roda o container expondo a porta - se nao encontrar a imagem, vai baixar uma. No caso, login e senha estão como mongodb e password
docker run --name mongodb-futbol -p 27017:27017 -e MONGODB_INITDB_ROOT_USERNAME=mongodb -e MONGODB_INITDB_ROOT_PASSWORD=password -d mongodb/mongodb-community-server:7.0.0-ubi8
