import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalheProduto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

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
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: {produto.preco}</p>
      {/* Outras informações do produto */}
    </div>
  );
};

export default DetalheProduto;
