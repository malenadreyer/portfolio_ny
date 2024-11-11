"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const CheckoutPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productIds = JSON.parse(localStorage.getItem("cart")) || [];
    if (productIds.length) {
      const fetchProducts = async () => {
        const promises = productIds.map((id) => fetcher(`https://dummyjson.com/products/${id}`));
        const results = await Promise.all(promises);
        setProducts(results);
      };
      fetchProducts();
    }
  }, []);

  if (!products.length) return <div>Indlæser...</div>;

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Din Kurv</h1>
      {products.map((product, index) => (
        <div key={`${product.id}-${index}`} className="border-b py-4 flex items-center justify-between">
          <span>{product.title}</span>
          <span>{product.price} kr.</span>
        </div>
      ))}
      <div className="text-xl font-bold mt-8">Total: {total} kr.</div>
      <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded">Betal nu</button>
    </div>
  );
};

export default CheckoutPage;
