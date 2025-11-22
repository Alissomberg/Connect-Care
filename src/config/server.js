const express = require('express');
const bodyParser = require('body-parser'); //Middleware para interpretar o corpo das requisições (JSON, formulários, etc.)
const cors = require('cors');
const routes = require('./router');

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});