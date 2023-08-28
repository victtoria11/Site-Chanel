import React, { useEffect, useState } from 'react';

  const Carrinho = () => {
    const [cart, setCart] = useState([]);
  
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
            .replace(/[^\d,]/g, '') // Remova todos os caracteres não numéricos, exceto vírgulas
            .replace(',', '.'); // Substitua a vírgula por um ponto para que o parseFloat funcione corretamente
    
          const precoNumerico = parseFloat(precoLimpo);
    
          if (!isNaN(precoNumerico)) {
            totalEmCentavos += Math.round(precoNumerico * 100); // Converta o preço para centavos (multiplicando por 100) e some ao total
          } else {
            console.log('Preço não é um número válido:', produto.preco);
          }
        } else {
          console.log('Produto ou preço ausente:', produto);
        }
      });
    
      console.log('Total em centavos:', totalEmCentavos);
    
      // Converta o total de centavos para reais e formate com 2 casas decimais
      const totalEmReais = (totalEmCentavos / 100).toFixed(2);
    
      return `${totalEmReais.replace('.', ',')}`; // Adicione o espaço após o símbolo "R$" e substitua o ponto decimal por vírgula
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




