import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from './CarrinhoContext';


function Product() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const { cartCount, setCartCount } = useCarrinho();
  const { cart, setCart } = useCarrinho();
  

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
    navigate(`/produto/${produto.id}`);
    
  };

  const handleAddToCart = (produto) => {
    const existingProductIndex = cart.findIndex((item) => item.id === produto.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantidade += 1;
  
      setCart(updatedCart);
  
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualize com o estado do carrinho atualizado
      setCartCount(cartCount + 1);
    } else {
      const updatedCart = [...cart, { ...produto, quantidade: 1 }];
      setCart(updatedCart);
  
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualize com o estado do carrinho atualizado
      setCartCount(cartCount + 1);
    }
  };
  
  
  

  const imageListContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    '&:hover': {
      borderBottomColor: 'black',
    },
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.borderBottomColor = 'black';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.borderBottomColor = 'transparent';
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
    <ImageListItem
      key={index}
      sx={{
        display: 'flex',  
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <div
      onClick={() => handleItemClick(produto)}
      style={imageListContentStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        src={produto.path}
        alt={produto.nome}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      </div>
      <ImageListItemBar
        title={produto.nome}
        subtitle={<span>{produto.preco}</span>}
        position="below"
      />
      <div>
      <Button
        onClick={() => handleAddToCart(produto)}
       
        sx={{
          backgroundColor: 'transparent',
          color: 'black',
          border: 'none',
          borderBottom: '2px solid black',
          padding: '8px 16px',
          marginTop: '8px',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease-out',
          '&:hover': {
            borderBottomColor: 'transparent',
          },
          borderRadius: 0
        }}
      >
        Adicionar à Sacola
      </Button>
      </div>
    </ImageListItem>
  ))}
</ImageList>

    </div>
  );
};

export default Product;
