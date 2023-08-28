import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import video from './imagens/video.mp4';


const data = [
  { image: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1680/prd-emea/sys-master/content/hfa/hda/9348896882718-banner_reassurance_ONE_03.jpg', 
    titulo: 'a embalagem', texto: 'Para agradecer pelo seu pedido, a CHANEL oferece frete grátis nos pedidos acima de R$900,00.'  },

  { image: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1680/prd-emea/sys-master/content/hf3/h0a/8879459172382-banner_reassurance_ONE_05.jpg',
    titulo: 'as amostras', texto: 'A cada pedido, a CHANEL oferece duas amostras à sua escolha.'},

  { image: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1680/prd-emea/sys-master/content/h02/h4a/8879463170078-banner_reassurance_ONE_01.jpg',
    titulo: 'a entrega', texto: 'Para agradecer pelo seu pedido, a CHANEL oferece frete grátis nos pedidos acima de R$900,00.'},

  { image: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1680/prd-emea/sys-master/content/h00/h09/8879459729438-banner_reassurance_ONE_12.jpg',
    titulo: 'uma equipe para te guiar e ajudar', texto: 'Uma voz para guiá-lo, aconselhá-lo, ouvir suas necessidades ou tirar suas dúvidas. De segunda a sexta, das 9:00 às 17:00 horas, no 0800 014 3090 e via Whatsapp no 11 96338 1761.'},

  { image: 'https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1680/prd-emea/sys-master/content/hf5/h07/8879459237918-banner_reassurance_ONE_10.jpg',
    titulo: 'o pagamento', texto: 'O pagamento das suas compras é seguro.' },
];

const Sobre = () => {
  const theme = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {/* Container com vídeo de fundo */}
<div
  style={{
    position: 'relative',
    width: '100vw',
    height: 'auto', // Defina a altura desejada para o vídeo
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column'

  }}
>
  <video
    autoPlay
    loop
    muted
    style={{
      width: '100%',
      height: 'auto',
    }}
  >
    <source src={video} type="video/mp4" />
  </video>
  <div
    style={{
      position: 'absolute',
      
      //left: 290,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Cor preta semi-transparente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }}
  >
    <div
      style={{
        color: 'black',
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      Arte do Detalhe
    </div>
  </div>
</div>


    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      {data.map((item, index) => (
        <Card key={index}  elevation={0} sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', justifyContent: 'center', alignItems: 'center', marginTop: '10%', gap: '100px', width: '80%'}}>
          <CardMedia
            component="img"
            style={{ width: '400px', height: 'auto', display: 'flex', alignItems: 'center'}}
            image={item.image}
            alt={`Imagem ${index + 1}`}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30%', textAlign: 'justify'}}>
            <h2 style={{ textTransform: 'uppercase', }}>{item.titulo}</h2>
            <p>{item.texto}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Sobre;
