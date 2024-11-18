// src/components/ProductCard.js - productcard komponent
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

// produkt card med props
const ProductCard = ({ id, name, category, price, image, onAddToCart }) => {
  // bruger useContext-hooken til at få adgang til addToCart-funktionen fra CartContext
  const { addToCart } = useContext(CartContext);

  // Handle Add to Cart button click
  const handleAddToCartClick = () => {
    addToCart({ id, name, price, thumbnail: image });
    if (onAddToCart) {
      onAddToCart(); // Trigger the popup from ProductsPage
    }
  };
  return (
    <div className="bg-[#FEFEF2] border border-gray-200 rounded-lg p-4 shadow-md flex flex-col justify-between h-full text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-[#343067] font-poppins font-semibold mb-2">{name}</h3>
      <p className="text-[#343067] mb-4 font-josefin">{category}</p>
      <p className="text-xl font-bold text-[#343067] font-poppins mb-4">{price} kr.</p>
      <button onClick={handleAddToCartClick} className="px-6 py-3 text-white bg-[#E8B3A9] rounded hover:bg-[#343067] transition">
        Tilføj til kurv
      </button>
      <Link href={`/products/${id}`} legacyBehavior>
        <a className="px-6 py-3 text-white bg-[#E8B3A9] rounded hover:bg-[#343067] transition mt-2">Se detaljer</a>
      </Link>
    </div>
  );
};

export default ProductCard;
