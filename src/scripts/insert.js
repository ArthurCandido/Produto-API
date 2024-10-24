const pool = require('../config/db');

async function insertProduct(id, preco, descricao, estoque, data) {
  const query = 'INSERT INTO produto (id, preco, descricao, estoque, data) VALUES ($1, $2, $3, $4, $5)';
  const values = [id, preco, descricao, estoque, data];

  try {
    const res = await pool.query(query, values);
    console.log('Produto inserido com sucesso:', res.rowCount);
  } catch (err) {
    console.error('Erro ao inserir produto:', err.stack);
  }
}

const products = [

  { id: 1, preco: 22.0, descricao: 'Arroz branco', estoque: 10, data: new Date() },
  { id: 2, preco: 18.0, descricao: 'Achocolatado', estoque: 20, data: new Date() },
  { id: 3, preco: 15.0, descricao: 'Açucar', estoque: 30, data: new Date() },
];

async function insertAllProducts() {
  for (const product of products) {
    await insertProduct(product.id, product.preco, product.descricao, product.estoque, product.data);
  }
  pool.end();
}

insertAllProducts();