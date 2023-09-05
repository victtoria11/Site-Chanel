import React from 'react';
import { Container, Grid, Typography, Link, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';


const styles = {
    footer: {
      marginTop: '20vh',
      backgroundColor: 'black', 
      paddingBottom: '20vh',
      paddingTop: '20vh',
      color: 'white',
    },

    link: {
        color: 'gray', // Cor do link
        textDecoration: 'none', // Remover sublinhado do link
      },

    column: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    divLink:{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    divider: {
        marginTop: '70px', // Margens laterais e espaço superior e inferior
        width: '80vw', // Largura da barra
        backgroundColor: 'gray', // Cor da barra
      },
      icon: {
        color: 'gray',
        fontSize: 20,
      },
  };

const Footer = () => {

  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/produtos');
  };
  
  const handleClick2 = () => {
    navigate('/inicio');
  };

  const handleClick3 = () => {
    navigate('/sobre');
  };

  return (
    <footer style={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} style={styles.column}>
            <Typography variant="h5">Explore</Typography>
            <div style={styles.divLink}>
              <Link onClick={handleClick1} href="#" style={styles.link}>Produtos</Link>
              <Link onClick={handleClick3} href="#" style={styles.link}>Sobre</Link>
              <Link onClick={handleClick2} href="#" style={styles.link}>Início</Link>
              <Link href="#" style={styles.link}>Contatos</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={styles.column}>
            <Typography variant="h5">Serviços Online</Typography>
            <div style={styles.divLink}>
              <Link href="#" style={styles.link}>Minha Conta</Link>
              <Link href="#" style={styles.link}>Perguntas Frequentes</Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={styles.column}>
            <Typography variant="h5">Serviços da Boutique</Typography>
            <div style={styles.divLink}>
              <Link href="#" style={styles.link}>Encontre uma Boutique</Link>
              <Link href="#" style={styles.link} >Agendamentos</Link>
            </div>
          </Grid>
        </Grid>
        <Divider style={styles.divider} />
        <ButtonGroup sx={{ position: 'absolute', left: 150,  marginTop: 8, marginBottom: 3}}>
          <IconButton href= 'https://www.instagram.com/chanelofficial/' target="_blank">
            <InstagramIcon style={styles.icon}></InstagramIcon>
          </IconButton>
          <IconButton href= 'https://www.facebook.com/chanel/' target="_blank">
            <FacebookIcon style={styles.icon}></FacebookIcon>
          </IconButton>
          <IconButton>
            
          </IconButton>
        </ButtonGroup>
      </Container>
    </footer>
  );
};

export default Footer;
