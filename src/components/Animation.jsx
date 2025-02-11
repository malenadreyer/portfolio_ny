"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import anime from "animejs";
import Bag from "../../public/chanel.png";
import Image from "next/image";


export default function IntroAnimation({onAnimationEnd}) {
    
    const [fadeIn, setFadeIn] = useState(false); // Styr synligheden af teksten

  const router = useRouter();
  
  useEffect(() => {
    // Sæt timeout for fade-in animationen
    const fadeInBag = setTimeout(() => {
      setFadeIn(true); // Tasken bliver synlig efter 1 sekund
    }, 1000);

    return () => {
      clearTimeout(fadeInBag); // Ryd op efter timeout
    };
  }, []);

  const handleAnimation = () => {
    // Find path-elementet korrekt
    const path = document.querySelector(".intro-screen .shape path");

    if (path) {
      // Animation for intro-screen
      anime({
        targets: ".intro-screen",
        translateY: "-420vh",
        duration: 2000,
        easing: "easeInOutSine",
        complete: () => {
            onAnimationEnd(); // Kald onComplete callback efter animation
        },
      });

      // Animation for path-elementet
      anime({
        targets: path,
        d: path.getAttribute("data-path"), // Brug data-path i stedet for pathdata:id
        duration: 1500,
        easing: "easeInOutSine",
      });
    } else {
      console.error("Path element not found!");
    }
  };

  return (
    <div className="intro-screen min-w-[1200px]  ">
      <div className="intro-screen__titel min-h-[2200px]">
      <div onClick={handleAnimation} // Start animation når tasken klikkes
                
              >
                <Image
                  src={Bag}
                  alt="Chanel Bag"
                  width={500}
                  height={500}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
      </div>
      <div className="intro-screen__shape">
        <svg
          className="shape"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
        >
          <path
            d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"
            data-path="M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z" // Ændret pathdata:id til data-path
          ></path>
        </svg>
      </div>
    </div>
  );
}
