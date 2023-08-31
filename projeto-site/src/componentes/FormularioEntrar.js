import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import eventBus from './eventBus';

const FormularioEntrar = () => {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    eventBus.dispatchEvent(new Event('login'));
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, senha }),
      });
  
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData.message);
        localStorage.setItem('authToken', responseData.token);
        const userId = await getUserIdFromCPF(cpf); // Substitua com a função correta

        // Recuperar o carrinho associado a esse usuário
        const cartKey = `cart_${userId}`;
        const cartFromStorage = JSON.parse(localStorage.getItem(cartKey) || '[]');
        setCart(cartFromStorage);
        setCartCount(cartFromStorage.reduce((total, item) => total + item.quantidade, 0));

        navigate('/inicio');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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
        </Box>
        <Button
        onClick={handleSubmit}
            type="submit" 
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'black', '&:hover': {bgcolor: '#363636'}, }}
        >
            Entrar
        </Button>
    </Container>
  );
};

export default FormularioEntrar;
