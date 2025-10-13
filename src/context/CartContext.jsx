import React, { createContext, useState, useEffect } from 'react';

// 1. Creamos el Contexto
export const CartContext = createContext();

// 2. Creamos el Proveedor del Contexto
export const CartProvider = ({ children }) => {
  // Estado para almacenar los ítems del carrito
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    alert(`${product.name} añadido al carrito!`);
  };

  // Función para quitar un producto del carrito
  const removeFromCart = (indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  // El valor que será accesible por los componentes hijos
  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};