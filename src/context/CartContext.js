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
      // vi tjekker om produktet allerede findes i cartItems med find
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // hvis produktet allerede findes i kurven, opdater kun quantity
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // hvis produktet ikke er i kurven, tilføj det med quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
