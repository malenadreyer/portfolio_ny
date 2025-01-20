"use client";
import React, { useState, useEffect } from "react";

function MouseFollower({ color, hoverColor }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Tilstand for klik

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverableElements = document.querySelectorAll("a, button, .hover-target");

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const handleMouseDown = () => {
    setIsClicked(true); // Når der trykkes på musemarkøren
  };

  const handleMouseUp = () => {
    setIsClicked(false); // Når musen slippes
  };

  return (
    <div>
      {/* Mouse follower */}
      <div
        onMouseDown={handleMouseDown} // Når musen trykkes
        onMouseUp={handleMouseUp} // Når musen slippes
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          transform: "translate(-50%, -50%)",
          width: (isHovering || isClicked) ? "35px" : "20px", // Større ved hover eller klik
          height: (isHovering || isClicked) ? "35px" : "20px", // Større ved hover eller klik
          backgroundColor: color,
          borderRadius: "50%",
          pointerEvents: "none", // Undgå klikblokering
          opacity: 0.9, // Gennemsigtighed
          boxShadow: (isHovering || isClicked)
            ? `0 0 30px 15px ${hoverColor}`
            : `0 0 9px 10px ${hoverColor}`, // Større skygge ved hover eller klik
          transition: "all 0.2s ease", // Glidende overgange
          zIndex: 9999,
        }}
      />
    </div>
  );
}

export default MouseFollower;
