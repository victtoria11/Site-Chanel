import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Botao from './componentes/BotaoFormulario';
import Header from './componentes/Navbar';
import FormularioEntrar from './componentes/FormularioEntrar';
import FormularioCadastro from './componentes/FormularioCadastro'; 
import Home from './componentes/Home';
import Product from './componentes/Produtos';
import DetalheProduto from './componentes/DetalheProduto';
import Carrinho from './componentes/Carrinho';
import Descubra from './componentes/Descubra';
import Sobre from './componentes/Sobre';
import Footer from './componentes/Footer';
import eventBus from './componentes/eventBus';



function App() {
  
  const [cart] = useState([]);
  const sections = [
    { title: 'Início', url: '/inicio' },
    { title: 'Sobre', url: '/Sobre' },
    { title: 'Contato', url: '' },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const loginListener = () => {
      setIsLoggedIn(true);
      console.log('Login successful');
    };

    const logoutListener = () => {
      window.location.href = '/inicio';
      setIsLoggedIn(false);
    };

    eventBus.addEventListener('logout', logoutListener);
    eventBus.addEventListener('login', loginListener);


    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    }

    return () => {
      eventBus.removeEventListener('login', loginListener);
      eventBus.removeEventListener('logout', logoutListener);
    };
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header sections={sections} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Botao />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/formulario-entrar" element={<FormularioEntrar />} />
          <Route path="/formulario-cadastro" element={<FormularioCadastro />} /> 
          <Route path="/produtos" element={<Product />} />
          <Route path="/produto/:id" element={<DetalheProduto />} />
          <Route path="/descubra" element={<Descubra />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho cart={cart}/>} /> 
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
