import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FormularioEntrar = () => {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', {cpf, senha });
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
            onClick={handleSubmit}
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