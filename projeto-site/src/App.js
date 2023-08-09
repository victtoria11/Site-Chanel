import React from 'react';
import './App.css';
import Botao from './BotaoFormulario';
import Header from './Navbar'

function App() {
  const sections = [
    { title: 'Início', url: '' },
    { title: 'Sobre', url: '' },
    { title: 'Contato', url: '' },
  ];

  return (
    <div className="App">
      <Header sections={sections}/>
      <Botao />
    </div>
  );
}

export default App;