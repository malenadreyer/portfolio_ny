"use client";
import React from "react";
import Image from "next/image";

const InBag = ({ imageSrc, altText }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Image src={imageSrc} alt={altText} width={300} height={300} />
    </div>
  );
};

export default InBag;
