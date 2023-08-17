import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import imgagemEscolhida from './imagens/side-view-woman-holding-perfume.jpg';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
  
    if (token) {
      fetch('http://localhost:3001/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(userData => {
          setUser(userData);
          console.log(userData);
        })
        .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }
  }, []);
  

  const post = {
    title: user ? `Bem-vindo(a), ${user.nome}!` : 'Bem-vindo ao nosso App',
    imageText: 'Texto alternativo da imagem',
  };

  return (
    <Grid container>
      <Grid item md={12}>
        <Box sx={{backgroundColor: 'black'}} >
          <Typography component="h1" variant="h4" color="white" gutterBottom sx={{ textAlign: 'center', padding: '5vh'}}>
            {post.title}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 3, md: 6 },
            backgroundImage: `url(${imgagemEscolhida})`,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '50vh',
            backgroundSize: 'cover',
          }}
        >
        </Box>       
      </Grid>
    </Grid>
  );
};

export default Home;

