import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import video from './imagens/video.mp4';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';


const data = [
    { image: 'https://puls-img.chanel.com/c_limit,w_1600/q_auto:good,dpr_auto,f_auto/1682065507742-range50mlbrazilmajeurmob1500x1600jpg_1600x1500.jpg', 
      titulo: 'As melhores essencias', texto: 'Os perfumes transportam os sentidos instantaneamente.', botao: 'Conheça', url:'/produtos' },

    { image: 'https://puls-img.chanel.com/c_limit,w_1600/q_auto:good,dpr_auto,f_auto/1687255742923-02editopushonelandingpagedesktopmobile1080x1150px8bjpg_1150x1080.jpg',
    titulo: 'Arte do Detalhe', texto: 'Uma gama de serviços exclusivos', botao: 'Conheça', url: '/sobre' },

    { image: 'https://puls-img.chanel.com/c_limit,w_1600/q_auto:good,dpr_auto,f_auto/1688480852922-oneplpmajorpushmobile1500x1600pxxjpg_1600x1500.jpg',
      titulo: 'GABRIELLE CHANEL ESSENCE', texto: 'Um perfume solar', botao: 'Comprar', url: '/produto/2'},
  

  ];

const EncHome = () => {
  

return(
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
    {data.map((item, index) => (
      <Card key={index}  elevation={0} sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', justifyContent: 'center', alignItems: 'center', marginTop: '10%', gap: '100px', width: '80%'}}>
        <CardMedia
          component="img"
          style={{ width: '500px', height: 'auto', display: 'flex', alignItems: 'center'}}
          image={item.image}
          alt={`Imagem ${index + 1}`}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '40%', textAlign: 'center'}}>
          <div>
          <p>{item.texto}</p>
          <h2 style={{ textTransform: 'uppercase', }}>{item.titulo}</h2>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Link
              color="inherit"
              variant="body2"
              align="center"
              href= {item.url}
              sx={{
                p: 2,
                flexShrink: 0,
                transition: 'border-color 0.3s ease-in-out',
                cursor: 'pointer',
                textDecoration: 'none',
                textTransform: 'uppercase',
                borderBottom: '2px solid transparent',
                '&:hover': {
                  borderBottomColor: 'black',
                },
              }}
            >
              {item.botao}
            </Link>
            </div>
          
        </CardContent>
      </Card>
    ))}
  </div>
  </div>
);
};


export default EncHome;