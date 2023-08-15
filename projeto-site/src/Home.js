import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Home = () => {
    const post = {
      title: 'NOME',
      description: 'Descrição do Post.',
      linkText: 'Leia mais',
      image: '../public/imagens/side-view-woman-holding-perfume.jpg',
      imageText: 'Texto alternativo da imagem',
    };

  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            p: { xs: 3, md: 6 },
            backgroundImage: `url(${post.image})`,
            width: '100',
            backgroundColor: 'rgba(0,0,0,.3)',
            display: 'flex',
            flexDirection: 'column',
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
      <img src={post.image} alt={post.imageText} />
    </Grid>
  );
};

export default Home;
