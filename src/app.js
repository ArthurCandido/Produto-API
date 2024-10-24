const pool = require('./config/db');

pool.query('SELECT * FROM produto', (err, res) => {
  if (err) {
    console.error('Erro ao executar busca', err.stack);
  } else {
    console.log('Resultado da busca:', res.rows);
  }
  pool.end();
});