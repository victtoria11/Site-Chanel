import React, { useEffect, useState } from 'react';

const Carrinho = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Recupere os itens do carrinho do localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((produto) => {
      const precoLimpo = produto.preco.replace(/R\$|\s/g, '').trim();

      const precoNumerico = parseFloat(precoLimpo);
      if (!isNaN(precoNumerico)) {
        console.log('Preço Numerico:', precoNumerico); // Adicione esta linha
        total += precoNumerico;
      }
    });
    console.log('Total Parcial:', total); // Adicione esta linha
    return total.toFixed(2);
  };
  
  

  const handleEsvaziarCarrinho = () => {
    // Remova todos os itens do carrinho no localStorage
    localStorage.removeItem('cart');
    // Atualize o estado do carrinho para uma matriz vazia
    setCart([]);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <button onClick={handleEsvaziarCarrinho}>Esvaziar Carrinho</button>
      <ul>
        {cart.map((produto) => (
          <li key={produto.id}>
             {produto.nome} - {produto.preco.replace('R$ ', 'R$')}
          </li>
        ))}
      </ul>
      <p>Total: R${calcularTotal()}</p>
    </div>
  );
};



export default Carrinho;




