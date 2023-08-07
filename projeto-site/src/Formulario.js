import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // enviar formulario
    console.log('Dados do formulário:', { nome, email, senha });
  };

  return (
    <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            CADASTRAR
          </Typography>
          </Box>
          
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <TextField
            label="Email"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#3bbeff'}}
        >
            Criar Conta
        </Button>
    </Container>
  );
};

export default Formulario;
