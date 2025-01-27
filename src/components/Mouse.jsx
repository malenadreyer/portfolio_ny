"use client";
import React, { useState, useEffect } from "react";

function MouseFollower({ color, hoverColor }) {
  const [mousePosition, setMousePosition] = useState({  });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState(color); // Tilstand for markørens farve

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setCursorColor("#E8B3A9"); // Skift farve til rød ved klik
    };

    const handleMouseUp = () => {
      setCursorColor(isHovering ? hoverColor : color); // Skift farve til hoverColor eller original, afhængig af hover-status
    };

    // Lyt efter musebevægelser og klik på hele dokumentet
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown); // Når musen trykkes
    window.addEventListener("mouseup", handleMouseUp); // Når musen slippes

    // Ryd event listeners ved komponent unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [color, isHovering, hoverColor]);

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

  return (
    <div>
      {/* Mouse follower */}
      <div
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "35px" : "20px", // Større ved hover
          height: isHovering ? "35px" : "20px", // Større ved hover
          backgroundColor: cursorColor, // Brug den opdaterede farve
          borderRadius: "50%",
          pointerEvents: "none", // Undgå klikblokering
          opacity: 0.9, // Gennemsigtighed
          boxShadow: isHovering || cursorColor === "#E8B3A9"
            ? `0 0 30px 15px ${cursorColor}` // Brug cursorColor til boxShadow
            : `0 0 9px 10px ${hoverColor}`, // Brug hoverColor når ikke klikker
          transition: "all 0.01s ease", // Glidende overgange
          zIndex: 9999,
        }}
      />
    </div>
  );
}

export default MouseFollower;
