const express = require('express'); // importa o pacote express.js para uso na aplicação
const api = require('./Routes/api') // importa o arquivo de rota criado para a API, necessitando especificação do diretório.
const simpleBattle = require('./api/simpleBattle/simpleBattle.resources');
const bodyParser = require('body-parser');

const app = express(); // declara a utilização do express

const baseURL = '/api'

app.use(bodyParser.json({ limit: '50mb', type:'application/json'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use(baseURL + '/simpleBattle', simpleBattle);

module.exports = app;