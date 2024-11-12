// src/app/products/page.js - altså product siden

"use client";

import React from "react";
// stale-while-revalidate
import useSWR from "swr";
import ProductCard from "../../components/ProductCard";
import { v4 as uuidv4 } from "uuid";

// fetch() sender HTTP-anmodning til URL'en og then((res) => res.json()) konverterer det til json
const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductsPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/products", fetcher);
  console.log(data);

  if (error) return <div>Der opstod en fejl...</div>;
  if (!data) return <div>Indlæser...</div>;
  // hvis `data` stadig er null betyder det, at dataene endnu ikke er hentet
  // viser indlæser besked indtil de er tilgængelige

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-center mb-8 text-gray-900">Webshop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* mapper dataen i products arrayet */}
        {data.products.map((product) => (
          <ProductCard key={uuidv4()} id={product.id} name={product.title} description={product.description} price={product.price} image={product.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
