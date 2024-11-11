// src/components/Header.jsx
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className="p-6 bg-gray-900 text-white shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold">M&S</h1>
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400">
            Forside
          </Link>
          <Link href="/products" className="hover:text-gray-400">
            Produkter
          </Link>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
