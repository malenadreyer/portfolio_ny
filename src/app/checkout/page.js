// src/app/checkout/page.js
"use client";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, removeFromCart, cartTotal } = useContext(CartContext);

  if (!cartItems.length) return <div>Din kurv er tom.</div>;
  // src/app/checkout/page.js
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Din Kurv</h1>
      {cartItems.map((product) => (
        <div key={product.id} className="border-b py-4 flex items-center justify-between">
          <span>
            {product.title} x{product.quantity} {/* Her vises titlen */}
          </span>
          <div className="flex items-center">
            <span>{product.price * product.quantity} kr.</span>
            <button onClick={() => removeFromCart(product.id)} className="ml-4 text-red-500 hover:text-red-700">
              Fjern
            </button>
          </div>
        </div>
      ))}
      <div className="text-xl font-bold mt-8">Total: {cartTotal} kr.</div>
      <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded">Betal nu</button>
    </div>
  );
};

export default CheckoutPage;
