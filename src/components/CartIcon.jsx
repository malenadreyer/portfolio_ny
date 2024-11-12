// src/components/CartIcon.jsx - kurven oppe i headeren
"use client";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link href="/checkout" className="relative">
      <button className="text-white bg-gray-900 py-2 px-4 rounded">
        Kurv ({cartItems.length}) {/* viser antallet af varer i kurven */}
      </button>
    </Link>
  );
};

export default CartIcon;
