import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Button, Grid} from '@mui/material';
import { useCarrinho } from './CarrinhoContext';

const DetalheProduto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const { cartCount, setCartCount } = useCarrinho();
  const { cart, setCart } = useCarrinho();

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

  useEffect(() => {
    console.log('useEffect is being executed');
    fetch(`http://localhost:3001/produto/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Data from API:', data);
        setProduto(data);
      })
      .catch(error => console.error('Erro ao pegar detalhes do produto:', error));
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (

  <Grid container spacing={0} justifyContent={'center'}>
    <Grid item xs={5} bgcolor={''}>
      <img
        src={produto.path}
        alt={produto.nome}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </Grid>
    <Grid item xs={3} container justifyContent={'center'} alignItems={'center'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <h2 style={{ textAlign: 'left', textTransform: 'uppercase'}}>{produto.nome}</h2>
        <p style={{ textAlign: 'left'}}>{produto.preco}</p>
      </div>
        <Button
        onClick={() => handleAddToCart(produto)}
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'black', '&:hover': {bgcolor: '#363636'}, fontSize: '12px', borderRadius: 0, alignSelf: 'left'}}
      >
        Adicionar à Sacola
      </Button>
      </div>
    </Grid>
</Grid>
); 
};

export default DetalheProduto;
