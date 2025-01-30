"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HoverInfo = ({ skill, text, picture, disableHover = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
  

  // Funktion der opdaterer positionen baseret på musens bevægelse
  const handleMouseMove = (e) => {
    // Brug e.clientX og e.clientY til at få musens position
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    
    <div
      className="relative inline-block"
      onMouseEnter={() => !disableHover && setIsHovered(true)} // Kun aktivere hover, hvis disableHover er false
      onMouseLeave={() => !disableHover && setIsHovered(false)} // Kun deaktivere hover, hvis disableHover er false
      onMouseMove={handleMouseMove}
    >
      {/* Hover-tekst */}
      <span className="text-xl transition">
        {skill}
      </span>

      
      <AnimatePresence>
      {!disableHover && isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: position.y + 15, // Lidt under musen
              left: position.x + 15, // Lidt til højre for musen
              pointerEvents: "none", // Sørger for at den ikke forstyrrer hover-effekten
            }}
            className="w-64 p-3 bg-[#FEFEF2] text-[#343067] border-[2px] border-[#343067ae] rounded-lg shadow-lg"
          >
            {!disableHover && picture && (
            <div className="flex items-center">
              <Image
                src={picture}
                alt="VSCode Icon"
                width={30}
                height={30}
                className="mr-2"
              />
              <p className="text-sm">{text}</p>
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverInfo;
