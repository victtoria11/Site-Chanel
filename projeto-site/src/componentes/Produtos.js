import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

const Product = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate(); // Use o useNavigate

  useEffect(() => {
    fetch('http://localhost:3001/produtos')
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
      })
      .catch(error => console.error('Erro ao pegar produtos:', error));
  }, []);
  

  // Manipulador de evento de clique no item
  const handleItemClick = (produto) => {
    console.log('Produto ID:', produto.id);
    // Redirecione o usuário para a página de detalhes do produto com base no ID do produto
    navigate(`/produto/${produto.id}`); // Use o navigate para redirecionar
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography
            component="h3"
            variant="h5"
            noWrap
            sx={{ flex: 1, textAlign: 'center',  marginTop: 10, marginBottom: 6, textTransform: 'uppercase'}}
          >
            Produtos
          </Typography>
      <ImageList sx={{ width: '75%', gap: '20px' }} cols={3}>
        {produtos.map((produto, index) => (
          <ImageListItem key={index} onClick={() => handleItemClick(produto)}
          sx={{ cursor: 'pointer',
                borderBottom: '2px solid transparent', 
                '&:hover': { borderBottomColor: 'black', 
              },
            }}>
            <img
              src={produto.path}
              alt={produto.nome}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <ImageListItemBar
              title={produto.nome}
              subtitle={<span>{produto.preco}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Product;
