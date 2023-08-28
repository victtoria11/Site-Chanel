import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Sobre = () => {
  const imageUrls = [
    "https://puls-img.chanel.com/c_limit,w_1600/q_auto:good,f_auto,dpr_1.1/1683117265283-essence2jpg_3120x3160.jpg", 
    "https://puls-img.chanel.com/c_limit,w_1600/q_auto:good,f_auto,dpr_1.1/1683117264117-essence1jpg_3120x3160.jpg"
  ];
  const titulo = "GABRIELLE CHANEL ESSENCE"
  const text = "Uma composição voluptuosa criada em torno do jasmim, do ylang-ylang, da flor de laranjeira e da cativante tuberosa de Grasse. Quatro flores, quatro facetas singulares que se unem em um perfume para a mulher radiante que molda seu próprio destino.";
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const secondImageHeight = window.innerHeight * 0.8; // Metade da altura da janela visível

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <Box display="flex" bgcolor="#fff4cc">
      <Box style={{ width: '50%'}}>
        <Box overflowy="auto" style={{ height: '100%'}}>
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Imagem ${index}`} style={{ width: '100%', height: '80vh', margin: '0'}}/>
          ))}
        </Box>
      </Box>
      <Box marginTop='2%' style={{ width: '50%',  }}>
      <Box
        padding={'10%'}
        display={"flex"}
        flexDirection={"column"}
        position={scrollPosition < secondImageHeight ? 'fixed' : 'absolute'}
        zIndex={scrollPosition < secondImageHeight ? 999 : 'auto'}
        top={scrollPosition < secondImageHeight? 'none' : `calc(${secondImageHeight + secondImageHeight/3 }px)`}
        gap={'40px'}
      >
    <Typography variant='h4' style={{ textAlign: 'justify', marginRight: '85px', lineHeight: 1.2  }} >{titulo}</Typography>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'justify' }}>
    <Typography variant="body1">{text}</Typography>
    <Button  
      sx={{
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        borderBottom: '2px solid black',
        width: 'fit-content',
        cursor: 'pointer',
        borderRadius: '0',
        transition: 'border-color 0.3s ease-out',
        '&:hover': {
          borderBottomColor: 'transparent',
          backgroundColor: 'transparent',
        },
      }}
    >
        COMPRE AGORA
    </Button>
    </div> 
  </Box>
      </Box>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center" style={{ height: '50vh'}}>
      <Typography variant="h5" style={{ fontWeight: 'bold', textAlign: 'center', width: '40%'}}>{"« A INTERPRETAÇÃO MAIS PRECIOSA DE GABRIELLE CHANEL. UM PERFUME FLORAL QUE PODE SER USADO COMO UMA JOIA. »"}</Typography>
    </Box>
  </div>
  );
};

export default Sobre;
