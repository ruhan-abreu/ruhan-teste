const express = require('express');
const mongoose = require ('mongoose');
const routes = require('./routes.js')

const app = express();

mongoose.connect('mongodb+srv://ruhan:ruhan@cluster0-7tvkn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

//Métodos http:  get, post, put, delete

// Tipos de parametros:

// Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração, remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Banco Não-Relacional)

app.listen(3333);
