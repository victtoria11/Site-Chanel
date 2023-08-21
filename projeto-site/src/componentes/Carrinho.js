import React from 'react';


function Carrinho({ cart }) {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - ${produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;
