"use client";
import React from "react";
import Link from "next/link";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const itemCount = cartItems.length;

  return (
    <div className="relative">
  <Link href="/checkout">
  <button className="text-[#343067] py-2 px-4 flex items-center justify-center">
  <BsFillBasket2Fill size={24}/>
</button>
    {itemCount > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-[#E8B3A9] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
        {itemCount}
      </span>
    )}
  </Link>
</div>
  );
};

export default CartIcon;
