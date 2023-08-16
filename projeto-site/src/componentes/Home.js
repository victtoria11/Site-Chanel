import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import imgagemEscolhida from './imagens/side-view-woman-holding-perfume.jpg'

const Home = () => {
    const post = {
      title: 'NOME',
      description: 'Descrição do Post.',
      linkText: 'Leia mais',
      imageText: 'Texto alternativo da imagem',
    };

  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            p: { xs: 3, md: 6 },
            backgroundImage:`url(${imgagemEscolhida})`,
            width: '100',
            display: 'flex',
            flexDirection: 'column',
            height: '50vh',
            backgroundSize: 'cover'
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom sx={{textAlign: 'center'}}>
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
