import React, { useEffect, useState } from 'react';
import {Button} from '@mui/material';
import { useCarrinho } from './CarrinhoContext';

  const Carrinho = () => {
    const { cartCount, cart, setCart, setCartCount } = useCarrinho();
    
  
    // Use useEffect para carregar o carrinho a partir do localStorage quando o componente for montado
    useEffect(() => {
      const cartFromStorage = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(cartFromStorage);
    }, []);
    const calcularTotal = () => {
      let totalEmCentavos = 0;
    
      cart.forEach((produto) => {
        if (produto && produto.preco) {
          const precoLimpo = produto.preco
            .replace(/[^\d,]/g, '')
            .replace(',', '.');
    
          const precoNumerico = parseFloat(precoLimpo);
    
          if (!isNaN(precoNumerico)) {
            totalEmCentavos += Math.round(precoNumerico * 100 * produto.quantidade);
          } else {
            console.log('Preço não é um número válido:', produto.preco);
          }
        } else {
          console.log('Produto ou preço ausente:', produto);
        }
      });
    
      const totalEmReais = (totalEmCentavos / 100).toFixed(2);
    
      return `${totalEmReais.replace('.', ',')}`;
    };
    
    
  const handleEsvaziarCarrinho = () => {
    // Remova todos os itens do carrinho no localStorage
    localStorage.removeItem('cart');
    // Atualize o estado do carrinho para uma matriz vazia
    setCart([]);
    setCartCount(0);
  };

  const handleRemoverProduto = (produtoId) => {
    const updatedCart = cart.filter((item) => item.id !== produtoId);
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total, item) => total + item.quantidade, 0));
  
    // Atualize o localStorage com o novo valor do carrinho após a remoção do produto
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantidadeChange = (produtoId, novaQuantidade) => {
    const updatedCart = cart.map((item) => {
      if (item.id === produtoId) {
        return { ...item, quantidade: parseInt(novaQuantidade) };
      }
      return item;
    });
  
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total, item) => total + item.quantidade, 0));
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  
  

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection:'column', marginTop: '8%',marginBottom: '8%',marginLeft:'25%', marginRight:'25%', justifyContent: 'center'}}>
        {cart.map((produto) => (
          <li key={produto.id} style={{  display: 'flex', width: 'auto', justifyContent: 'left'}}>
            <img
              src={produto.path}
              alt={produto.nome}
              style={{ maxWidth: '70px', marginRight: '10px' }}
            />
            <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
              <div>{produto.nome}</div>
              <div>{produto.preco.replace('R$ ', 'R$')}</div>
            </div>
            <div style={{ display: 'flex', marginLeft: '7%', width: 'auto', alignItems: 'center', whiteSpace: 'nowrap' }}>
              <p>Un: </p>
              <select
                value={produto.quantidade}
                onChange={(event) => handleQuantidadeChange(produto.id, event.target.value)}
                style={{ marginLeft: '5px', fontSize: '12px', borderRadius: 0, color: 'black' }}
              >
                {Array.from({ length: 4 }, (_, index) => index + 1).map((quantidade) => (
                  <option key={quantidade} value={quantidade}>
                    {quantidade}
                  </option>
                ))}
              </select>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginLeft:'10%'}} >
            <Button
              onClick={() => handleRemoverProduto(produto.id)}
              sx={{
                mt: 1,
                fontSize: '12px',
                borderRadius: 0,
                color: 'black'
              }}
            >
              Remover
            </Button>
            </div>
          </li>
        ))}
        <div style={{ display: 'flex', flexDirection:'row', marginTop: '10%', justifyContent: 'space-between', alignItems: 'center', width:'100%', }}>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>TOTAL</p>
        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>R${calcularTotal()}</p>
      </div>
      </ul>
      <Button
        onClick={handleEsvaziarCarrinho}
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: 'black', '&:hover': {bgcolor: '#363636'}, fontSize: '12px', borderRadius: 0, alignSelf: 'left'}}
      >
        Esvaziar Carrinho
      </Button>
    </div>
  );
};



export default Carrinho;




