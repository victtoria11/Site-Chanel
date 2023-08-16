import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import imgagemEscolhida from './imagens/side-view-woman-holding-perfume.jpg';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Busque os dados do usuário usando o token armazenado no armazenamento local
    const token = localStorage.getItem('authToken');

    if (token) {
      fetch('http://localhost:3001/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(userData => setUser(userData))
        .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }
  }, []);

  const post = {
    title: user ? `Bem-vindo, ${user.name}!` : 'Bem-vindo ao nosso App',
    description: 'Descrição do post.',
    linkText: 'Leia mais',
    imageText: 'Texto alternativo da imagem',
  };

  return (
    <Grid container>
      <Grid item md={12}>
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
          <Typography component="h1" variant="h3" color="inherit" gutterBottom sx={{ textAlign: 'center' }}>
            {post.title}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {post.description}
          </Typography>
          <Link variant="subtitle1" href="#">
            {post.linkText}
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;

