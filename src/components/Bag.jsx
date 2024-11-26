"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chanel from "../../public/chanel.png"; 
import Keys from "../../public/keys.png"; 
import Wallet from "../../public/wallet.png"; 
import Phone from "../../public/phone.png"; 
import Id from "../../public/id.jpg"
import Link from "next/link";

const Bag = () => {
  const [showLinks, setShowLinks] = useState(false); 

  const handleClick = () => {
    setShowLinks((prev) => !prev); 
  };

  return (
    <div
      style={{
        minHeight: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Chanel-tasken */}
      <div className="relative ">
        <Image
          src={Chanel}
          alt="Chanel Bag"
          width={500}
          height={500}
           className="cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={handleClick}
        />
      </div>

      {/* Linjer og billeder */}
      <>
        {/* Linjer */}
        <div
          style={{
            backgroundColor:"black",
            width: "2px",
            height: "100px",
            position: "absolute",
            left: "-10%",
            transform: " translateY(90%) rotate(60deg)",
            opacity: showLinks ? 1 : 0,
          }}
        ></div>
        <div
          className="absolute border border-black transition-opacity duration-500"
          style={{
            width: "2px",
            height: "100px",
            position: "absolute",
            bottom:"65%",
            right:"5%",
            transform: "translateX(-50%) rotate(40deg)",
            opacity: showLinks ? 1 : 0,
          }}
        ></div>
        <div
          className="absolute border border-black transition-opacity duration-500"
          style={{
            width: "100px",
            height: "2px",
            position: "absolute",
            bottom:"70%",
            left:"0%",
            transform: "translateY(0%) rotate(30deg)",
            opacity: showLinks ? 1 : 0,
          }}
        ></div>
        <div
          className="absolute border border-black transition-opacity duration-500"
          style={{
            width: "100px",
            height: "2px",
            position: "absolute",
            top:"70%",
            right:"0%",
            transform: "translateY(-50%) rotate(40deg)",
            opacity: showLinks ? 1 : 0,
          }}
        ></div>

        {/* Billeder */}
        <div
  className="absolute transition-opacity duration-500"
  style={{
    top: "10%",
    left: "-30%",
    transform: "rotate(340deg)",
    position: "absolute",
    opacity: showLinks ? 1 : 0,
  }}
>
  {/* Wrapper for billedet og teksten */}
  <div className="relative group">
    {/* Billedet */}
    <Link href="/skills">
     <Image
      src={Phone}
      alt="Phone"
      width={200}
      height={100}
      className="cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-50"
    />
    </Link>
    {/* Teksten */}
    <span
      className="absolute top-[50px] left-[60px] text-[#343067] font-bold text-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-lutoriaserif"
    >
      SKILLS
    </span>
  </div>
</div>
<div
  className="absolute transition-opacity duration-500"
  style={{
    top: "10%",
    right: "-20%",
    transform: "translateY(00%) rotate(330deg)",
    position: "absolute",
    opacity: showLinks ? 1 : 0,
  }}
>
  {/* Wrapper for billedet og teksten */}
  <div className="relative group">
    {/* Billedet */}
    <Link href="/resume">
     <Image
      src={Wallet}
      alt="Wallet"
      width={100}
      height={100}
      className="cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-50"
    />
    </Link>
    {/* Teksten */}
    <span
      className="absolute top-[40px] right-[10px] text-[#343067] font-bold text-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-lutoriaserif"
    >
      RESUMÉ
    </span>
  </div>
</div>
<div
  className="absolute transition-opacity duration-500"
  style={{
    bottom: "18%",
    right: "-15%",
    position: "absolute",
    opacity: showLinks ? 1 : 0,
  }}
>
  {/* Wrapper for billedet og teksten */}
  <div className="relative group">
    {/* Billedet */}
    <Link href="/link">
    <Image
      src={Keys}
      alt="Keys"
      width={100}
      height={100}
      className="cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-50"
    />
    </Link>
    {/* Teksten */}
    <span
      className="absolute bottom-[30px] left-[20px]  text-[1.5rem] font-bold text-[#343067] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-lutoriaserif"
    >
      LINKS
    </span>
  </div>
</div>

<div
  className="absolute transition-opacity duration-500"
  style={{
    bottom: "30%",
    left: "-35%",
    transform: "translateY(00%) rotate(330deg)",
    position: "absolute",
    opacity: showLinks ? 1 : 0,
  }}
>
  {/* Wrapper for billedet og teksten */}
  <div className="relative group">
    {/* Billedet */}
    <Link href="/aboutme">  {/* Brug Link komponenten til at navigere */}
              <Image
                src={Id}
                alt="Watch"
                width={100}
                height={100}
                className="cursor-pointer transition-transform duration-300 hover:scale-110 group-hover:opacity-50"
              />
            </Link>
    {/* Teksten */}
    <span
      className="absolute bottom-[15px] right-[-55px] text-[1.5rem] transform -translate-x-1/2 text-[#343067] font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-lutoriaserif"
    >
ABOUT ME    </span>
  </div>
</div>

      </>
    </div>
  );
};

export default Bag;

