const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db'); 
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());

app.post('/api/cadastro', async (req, res) => {
  const { cpf, nome, email, senha } = req.body;

  try {
    const query = `INSERT INTO usuarios_chanel (cpf, nome, email, senha) VALUES ($1, $2, $3, $4)`;
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
  console.log('Dados recebidos:', cpf, senha);

  try {
    const query = `SELECT * FROM usuarios_chanel WHERE cpf = $1 AND senha = $2`;
    const values = [cpf, senha];

    const result = await db.query(query, values);

    if (result.rows.length === 1) {
      const user = result.rows[0];
      const userId = user.cpf; // 

      // Criar o token JWT
      const token = jwt.sign({ cpf: userId }, 'seuSegredoDoJWT', { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});


app.get('/api/user', async (req, res) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authorizationHeader.split(' ')[1]; // Extrai o token do header

  try {
    // Verifique o token
    const decodedToken = jwt.verify(token, 'seuSegredoDoJWT');

    console.log('Decoded Token:', decodedToken); // Adicione esta linha para verificar o token decodificado
    const userId = decodedToken.cpf;
    console.log('User ID (CPF):', userId); // Adicione esta linha para verificar o userId (CPF)

    const query = `SELECT * FROM usuarios_chanel WHERE cpf = $1`;
    const result = await db.query(query, [userId]);

    if (result.rows.length === 1) {
      const userData = result.rows[0]; // Dados do usuário obtidos do banco de dados
      res.status(200).json(userData);
    } else {
      res.status(401).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do usuário' });
    console.error('Erro ao verificar token:', error);
    res.status(401).json({ error: 'Token inválido' }); 
  }
});

app.get('/produtos', async (req, res) => {
  try {
    const query = 'SELECT * FROM produto';
    const { rows } = await db.query(query);

    res.status(200).json(rows); // 
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).json({ error: 'Erro ao obter produtos' });
  }
});

