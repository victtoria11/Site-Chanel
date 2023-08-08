const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db'); // Módulo que lida com o banco de dados

app.use(cors());
app.use(express.json());

app.post('/api/cadastro', async (req, res) => {
  const { cpf, nome, email, senha } = req.body;

  try {
    const query = `INSERT INTO usuarios (cpf, nome, email, senha) VALUES ($1, $2, $3, $4)`;
    const values = [cpf, nome, email, senha];

    await db.query(query, values);
    res.status(201).json({ message: 'Dados inseridos com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados:', error);
    res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
