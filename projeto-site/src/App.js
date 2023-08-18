import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Botao from './componentes/BotaoFormulario';
import Header from './componentes/Navbar';
import FormularioEntrar from './componentes/FormularioEntrar';
import FormularioCadastro from './componentes/FormularioCadastro'; 
import Home from './componentes/Home';
import Product from './componentes/Produtos';


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
          <Route path='/' element={<Botao />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/formulario-entrar" element={<FormularioEntrar />} />
          <Route path="/formulario-cadastro" element={<FormularioCadastro />} /> 
          <Route path="/produtos" element={<Product />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
