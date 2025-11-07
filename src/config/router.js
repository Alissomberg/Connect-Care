const express = require('express');
const router = express.Router();
const database = require('./database');

// --------- CRIAR CONTA ----------
router.post('/alunos', (req, res) => {
  const { nome, email, senha, cpf, telefone, cidade, uf } = req.body;
  database.query(
    'INSERT INTO alunos (nome, email, senha, cpf, telefone, cidade, uf ) VALUES (?, ?, ?,?, ?, ?, ?)',
    [nome, email, senha, cpf, telefone, cidade, uf],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ id: result.insertId, nome, email, senha, cpf, telefone, cidade, uf});
    }
  );
});


// ---------  ENCONTRAR PERFIL PELO ID ----------
router.get('/perfil_familiar/:id', (req, res) => {
  const { id } = req.params;
  database.query('SELECT * FROM perfil_familiar WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ msg: 'perfil não encontrado' });
    res.json(results[0]);
  });
});

// --------- ATUALIZAR PERFIL ----------
router.put('/perfil_familiar/:id', (req, res) => {
  const { id } = req.params;
  const { senha, telefone, cidade } = req.body;
  database.query(
    'UPDATE perfil_familiar SET senha = ?, telefone = ?, cidade = ? WHERE id = ?',
    [aluno, email, turma, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ id, senha, telefone, cidade } );
    }
  );
});

// --------- DELETAR ALUNO ----------
router.delete('/perfil_familiar/:id', (req, res) => {
  const { id } = req.params;
  database.query('DELETE FROM perfil_familiar WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msg: 'conta deletada', id });
  });
});

module.exports = router;