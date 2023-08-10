import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormularioEntrar = () => {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, senha }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <Container maxWidth="sm">     
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            label="CPF"
            margin="normal"
            fullWidth
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            />
            <TextField
            label="Senha"
            margin="normal"
            fullWidth
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
        </Box>
        <Button
            type="submit" // Mudei de onClick para type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#3bbeff'}}
        >
            Entrar
        </Button>
    </Container>
  );
};

export default FormularioEntrar;
