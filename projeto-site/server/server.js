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

app.post('/api/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const query = `SELECT * FROM usuarios WHERE cpf = $1 AND senha = $2`;
    const values = [cpf, senha];

    const result = await db.query(query, values);

    if (result.rowCount === 1) {
      res.status(200).json({ message: 'Autenticação bem-sucedida!' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao autenticar:', error);
    res.status(500).json({ error: 'Erro ao autenticar' });
  }
});

