import React, { useState, useEffect } from 'react';

const Product = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/produtos') // Especifica o host e a porta correto
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
      })
      .catch(error => console.error('Erro ao pegar produtos:', error));
  }, []);
  

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>
            <h2>{produto.nome}</h2>
            <p>Preço: {produto.preco}</p>
            <img src={produto.path} alt={produto.nome} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
