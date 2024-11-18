// src/app/checkout/page.js - vores checkout page
"use client";
import React, { useContext } from "react";

// henter vores data fra kurven
import { CartContext } from "../../context/CartContext";

// henter cartItems, removeFromCart og cartTotal fra CartContext
const CheckoutPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  // if kurven er tom så returneres besked
  if (!cartItems.length) return <div className="text-center py-8 text-gray-700 text-lg">Din kurv er tom.</div>;

  // din kurv ..
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-">Din Kurv</h1>
      <div className="bg-[#FEFEF2] rounded-lg shadow-md p-6">
        {cartItems.map((product) => (
          <div key={product.id} className="border-b py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={product.thumbnail} alt={product.name || product.title} className="w-16 h-16 object-cover rounded" />
              {/* brug både product.name og product.title som fallback */}
              <span className="text-gray-800 font-medium">{product.name || product.title}</span>
              <input type="number" min="1" value={product.quantity} onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))} className="w-16 text-center border rounded" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#343067]">{product.price * product.quantity} kr.</span>
              <button onClick={() => removeFromCart(product.id)} className="text-[#343067] hover:text-red-700 transition-colors">
                Fjern
              </button>
            </div>
          </div>
        ))}
        <div className="text-xl font-semibold mt-8 text-[#343067]">Total: {cartTotal} kr.</div>
        <button className="bg-[#E8B3A9] text-white py-3 px-6 rounded mt-6 w-full hover:bg-[#343067] transition">Betal nu</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
