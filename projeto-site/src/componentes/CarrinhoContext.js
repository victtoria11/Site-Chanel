import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [cart, setCart] = useState([]); // Estado para os itens do carrinho
  const [cartCount, setCartCount] = useState(0); // Estado para a contagem do carrinho
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  return (
    <CarrinhoContext.Provider value={{ cart, setCart, cartCount, setCartCount, loggedInUserId, setLoggedInUserId }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
