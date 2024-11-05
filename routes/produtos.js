const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { descricao, estoque, preco, data } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO produto (descricao, estoque, preco, data) VALUES ($1, $2, $3, $4) RETURNING *',
      [descricao, estoque, preco, data]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produto');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { descricao, estoque, preco, data } = req.body;
  try {
    const result = await pool.query(
      'UPDATE produto SET descricao = $1, estoque = $2, preco = $3, data = $4 WHERE id = $5 RETURNING *',
      [descricao, estoque, preco, data, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM produto WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;