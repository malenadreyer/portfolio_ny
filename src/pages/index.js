"use client";
import React, { useState, useEffect } from "react";
import IntroAnimation from "@/components/Animation";
import MouseFollower from "@/components/Mouse";

export default function Home() {
  const [textVisible, setTextVisible] = useState(false); // Styr synligheden af teksten
  const [showAnimation, setShowAnimation] = useState(false); // Styr visningen af animationen

  useEffect(() => {
    // Fade teksten ind efter 500ms
    const fadeInTextTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => {
      clearTimeout(fadeInTextTimer);
    };
  }, []);

  const handleTextFadeOut = () => {
    // Fade teksten ud
    setTextVisible(false);
    setTimeout(() => {
      // Vis animationskomponenten efter teksten er forsvundet
      setShowAnimation(true);
    }, 500); // Vent, så fade-out er færdig
  };

  return (
    <>
      <MouseFollower color="#FEFEF2" hoverColor="#FEFEF2" />
      {showAnimation ? (
        // Vis animationskomponenten, når showAnimation er true
        <IntroAnimation />
      ) : (
        <div id="home-page">
          <div className="flex flex-col items-center justify-center mt-20">
            {/* Tekstsektionen med fade-in og fade-out effekter */}
            <div
              className={`flex items-center justify-center w-full transition-opacity duration-500 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1
                onClick={handleTextFadeOut} // Klik for at starte fade-out og vise animation
                className="max-w-[1200px] w-full mx-auto font-shyte cursor-pointer"
                style={{
                  fontSize: "11vw",
                  lineHeight: "1",
                  textAlign: "center",
                  fontStyle: "italic",
                  whiteSpace: "normal",
                }}
              >
                "HI my name is{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    WebkitTextStroke: "4px",
                    WebkitTextFillColor: "#343067",
                  }}
                >
                  Maria
                </span>{" "}
                and this is what's in my bag"
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
