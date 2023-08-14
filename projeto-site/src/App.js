import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Botao from './BotaoFormulario';
import Header from './Navbar';
import FormularioEntrar from './FormularioEntrar';
import FormularioCadastro from './FormularioCadastro'; 

function App() {
  const sections = [
    { title: 'Início', url: '' },
    { title: 'Sobre', url: '' },
    { title: 'Contato', url: '' },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header sections={sections} />
        <Routes>
          <Route path="/" element={<Botao />} />
          <Route path="/formulario-entrar" element={<FormularioEntrar />} />
          <Route path="/formulario-cadastro" element={<FormularioCadastro />} /> {/* Adicione esta rota */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
