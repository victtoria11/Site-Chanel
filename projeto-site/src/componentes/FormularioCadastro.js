import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const FormularioCadastro = () => {
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, nome, email, senha }),
      });      
  
      if (response.ok) {
        console.log('Dados do formulário inseridos no banco de dados.');
        // Limpar campos após inserção bem-sucedida
        setCPF('');
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        console.error('Erro ao inserir dados no banco de dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao inserir dados no banco de dados:', error);
    }
  };  

  return (
    <Container maxWidth="sm">   
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            label="CPF"
            fullWidth
            margin="normal"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            variant="standard"
            sx={{
              '& label.Mui-focused': {
                color: 'black', 
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
            }}
          />
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            variant="standard"
            sx={{
              '& label.Mui-focused': {
                color: 'black', 
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
            }}
          />
          <TextField
            label="Email"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            sx={{
              '& label.Mui-focused': {
                color: 'black', 
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black', 
              },
            }}
          />
          <TextField
            label="Senha"
            margin="normal"
            fullWidth
            type = "password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            variant="standard"
            sx={{
              '& label.Mui-focused': {
                color: 'black', // Cor do rótulo quando focado
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black', // Cor da linha de foco
              },
            }}
          />
        </Box>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'black', '&:hover': {bgcolor: '#363636'}, }}
            onClick={handleSubmit}
        >
            Criar Conta
        </Button>
    </Container>
  );
};

export default FormularioCadastro;