// src/context/CartContext.js

"use client";
import React, { createContext, useState } from "react";
// createContext opretter en kontekst / indkøbskurvens tilstand - gør vi kan sende data mellem komponenterne uden at skulle sende props manuelt gennem hver komponent

// deler kurvens data
export const CartContext = createContext();

// cartprovider gør vi til et komponent, cartItems og setCartItems er vores state variabler, cartItems starter ud med at være et tomt array
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // vores funktion til at tilføje et produkt til kurven
  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // removeFromCart fjerner produktet fra kurven baseret på id. filtrerer cartItems-arrayet og laver et ny array uden det produkt, der skal fjernes
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)));
  };

  // clearCart fjerner alle produkter fra kurven og cartItems er nu et tomt array
  const clearCart = () => setCartItems([]);

  // udregner kurvens total
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
