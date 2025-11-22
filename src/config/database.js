const mysql = require('mysql2');

const database = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '8643432301Bce!',  
  database: 'cuidadordb' 
});

database.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = database;