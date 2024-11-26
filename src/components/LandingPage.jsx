"use client";
import React, { useState, useEffect, useRef } from "react";
import Bag from "./Bag";


function LandingPage() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [activeComponent, setActiveComponent] = useState("Bag"); // Holder styr på, hvilken komponent der er aktiv
  const refs = useRef([]);

  // Funktion til at navigere mellem komponenter
  const handleNavigate = (componentName) => {
    const element = document.getElementById(componentName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveComponent(componentName); // Opdaterer hvilken komponent der vises
  };
  const components = [
    { name: "Bag", component: <Bag onNavigate={handleNavigate} /> }, // Tilføjer onNavigate til Bag

  ];

  // IntersectionObserver-logik for scroll-animationer
  const [inView, setInView] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const componentName = entry.target.getAttribute("data-name");
          setInView((prev) => ({
            ...prev,
            [componentName]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [components]);

  // Scroll-animationer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const zoomOutScale = Math.max(1 - scrollY / 1000, 0.5);
      const newOpacity = Math.max(1 - scrollY / 500, 0);

      setScale(zoomOutScale);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamisk rendering af den aktive komponent
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Centreret container til h1 */}
      <div
        className="flex items-center justify-center w-full"
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h1
          className="max-w-[1200px] w-full mx-auto font-shyte"
          style={{
            fontSize: "11vw",
            lineHeight: "1",
            paddingTop: "50px",
            textAlign: "center",
            fontStyle: "italic",
            whiteSpace: "normal",
            paddingBottom: "100px",
          }}
        >
          "HI my name is <span className="font-bold">Maria</span> and this is
          what's in my bag"
        </h1>
      </div>

      {/* Dynamisk rendering af aktive komponenter */}
      {components
        .filter((comp) => comp.name === activeComponent) // Vis kun den aktive komponent
        .map((comp, index) => (
          <div
            key={comp.name}
            ref={(el) => (refs.current[index] = el)}
            data-name={comp.name}
            className={`transition-all duration-500 ${
              inView[comp.name] ? "scale-100 opacity-100" : "scale-90 opacity-100"
            }`}
            style={{
              transition: "transform 0.5s ease",
            }}
          >
            {comp.component}
          </div>
        ))}
    </div>
    
  );
}

export default LandingPage;

