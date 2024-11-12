// src/components/ProductCard.js - productcard komponent
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

// produkt card med lidt info
const ProductCard = ({ id, name, description, price, image }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md flex flex-col justify-between h-full text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-xl font-bold text-pink-500 mb-4">{price} kr.</p>
      <button onClick={() => addToCart({ id, name, price, thumbnail: image })} className="px-6 py-3 text-white bg-gray-900 rounded hover:bg-gray-800 transition">
        Tilføj til kurv
      </button>
      <Link href={`/products/${id}`} legacyBehavior>
        <a className="px-6 py-3 text-white bg-gray-900 rounded hover:bg-gray-800 transition mt-2">Se detaljer</a>
      </Link>
    </div>
  );
};

export default ProductCard;
