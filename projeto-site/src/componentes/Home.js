import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import imgagemEscolhida from './imagens/side-view-woman-holding-perfume2.jpg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
    title: user ? `Bem-vindo(a), ${user.nome}!` : 'Bem-vindo(a)',
    imageText: 'Texto alternativo da imagem',
  };

  return (
      <Grid item md={12}>
        <Box sx={{backgroundColor: 'black'}} >
          <Typography component="h1" variant="h4" color="white" sx={{ textAlign: 'center', padding: '5vh'}}>
            {post.title}
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 3, md: 6 },
            backgroundImage: `url(${imgagemEscolhida})`,
            height: '40vh',
            backgroundSize: 'cover',
            position: 'relative',
          }}
        >
        <Box 
          sx= {{
            position: 'absolute',
            bottom: '0',
            right: '0',
            marginBottom: '20vh',
            marginRight: '20vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'}}>

          <Typography variant="h5" component="h4" >YesRany</Typography>
        <Button variant="outlined"
        component={Link} 
        to="/produtos"
        sx={{
              
              color: 'black',
              border: '0.5px solid black',
              '&:hover': {border: '0.5px solid black', bgcolor: 'black', color: 'white'}
              
          }}>Descubra
        </Button>
        </Box>
        </Box>
        <Box sx={{backgroundColor: 'black'}}>
        </Box>        
      </Grid>
  );
};

export default Home;

