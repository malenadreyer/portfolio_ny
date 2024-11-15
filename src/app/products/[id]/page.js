// src/app/products/[id]/page.js
"use client";
import React, { useState, useEffect, useContext } from "react";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { CartContext } from "../../../context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PopupNotification from "@/components/PopNoti";



const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [productId, setProductId] = useState(id);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setProductId(id);
  }, [id]);

  const { data: product, error } = useSWR(productId ? `https://dummyjson.com/products/${productId}` : null, fetcher);

  if (error) return <div>Der opstod en fejl...</div>;
  if (!product) return <div>Indlæser...</div>;

  const handleAddToCart = () => {
    addToCart(product); 
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
    // console.log("Adding to cart:", product);
    // //addToCart({ id, name, price, thumbnail: image })} det er de her ting vi skal få sendt med - jeg troede at jeg havde mappet det ind, så man bare kunne skrive product
    // alert("Produkt tilføjet til kurv!");
  

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row items-center bg-[#FEFEF2] shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full lg:w-1/2 object-cover h-96 lg:h-full"
      />
      <div className="p-6 lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-[#343067]">{product.title}</h1>
        <p className="text-lg text-[#343067] mb-6">{product.description}</p>
        <div className="text-2xl font-bold text-[#343067] mb-6">{product.price} kr.</div>
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-[#E8B3A9] text-white rounded hover:bg-[#343067] transition"
        >
          Tilføj til kurv
        </button>
      </div>
    </div>

    {/* Reviews Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-[#343067]">Anmeldelser</h2>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} className="mb-6 p-4    rounded-lg">
            <div className="flex items-center mb-2">
              {/* Render hearts based on rating */}
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <FaHeart key={i} className="text-[#E8B3A9] mr-1" />
                ) : (
                  <FaRegHeart key={i} className="text-[#E8B3A9] mr-1" />
                )
              )}
            </div>
            <p className="text-[#343067] font-semibold">{review.reviewerName}</p>
            <p className="text-[#343067] mb-2">{review.comment}</p>
            <p className="text-[#343067] text-sm">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p className="text-[#343067]">Ingen anmeldelser endnu.</p>
      )}
    </div>
{showPopup &&(
    <PopupNotification
          message="Produkt tilføjet til din kurv!"
          onClose={() => setShowPopup(false)}
        />
        )}
  </div>
);
};

export default ProductDetailPage;
