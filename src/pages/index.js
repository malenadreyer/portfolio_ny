"use client";
import React, { useState, useEffect } from "react";
import IntroAnimation from "@/components/Animation";
import MouseFollower from "@/components/Mouse";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "../components/Footer"
import Dots from "@/components/Dots";
import Skills from "@/components/Skills";




export default function Home() {
  const [textVisible, setTextVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    const fadeInTextTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => {
      clearTimeout(fadeInTextTimer);
    };
  }, []);

  const handleTextFadeOut = () => {
    setTextVisible(false);
    setTimeout(() => {
      setShowAnimation(true);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>marmic.studios | Creative web solutions</title>
        <meta name="description" content="Velkommen til marmic.studios – kreative løsninger og inspiration." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      
      <MouseFollower color="#FEFEF2" hoverColor="#FEFEF2" />

      {/* Indhold, der skal være bag tasken, indtil animationen er færdig */}
      <div
        className={`absolute justify-center transition-opacity duration-1000 ${
          animationComplete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <MouseFollower color="#343067" hoverColor="#343067" clickedColor="#ffff"  />
        <Header/>
        <div className="flex flex-col mt-10">
        <h1 className="text-6xl font-extrabold text-center">MARMIC STUDIOS</h1>
        <h2 className="text-l mt-5 text-[#343067] font-josefin text-center">Creative web solutions and inovated graphics for you</h2>
        <div className="grid place-items-center">
        <video
  className="lg:max-w-[70%] md:max-w-[100%] "
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/m.mp4" type="video/mp4" />
</video>
</div>
<div className="grid gap-12 grid-cols-1 md:grid-cols-2 w-[80%] md:w-[800px] m-auto mt-40 mb-40">
  <div>
 
  <Dots/>
  </div>
  <div>
    <h4 className="font-bold text-xl text-[#343067]">ABOUT</h4>
    <p className=" text-[#343067] font-josefin leading-[2rem]">My name is Maria, and I run <span className="font-bold">Marmic Studios</span> – a small creative agency based in Denmark. At Marmic Studios, we focus on coding, web design, and visual graphics to help brands build their online identity and create standout visual solutions. <br></br><br></br>

I’ve had the pleasure of working with smaller brands, helping them establish a <span className="font-bold">strong digital foundation.</span> I am passionate about developing tailored solutions that not only look great but also support the brand’s vision and resonate with their target audience online. <br></br><br></br>

Marmic Studios is here to help you create designs and visuals that leave a lasting impression, strengthen your brand, and provide the digital visibility you need.</p>
  </div>
</div>
<Skills/>


<Footer/>
</div>
      </div>

      {/* Animationen + intro-tekst */}
      {showAnimation ? (
        <IntroAnimation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <div id="home-page">
          <div className="flex items-center justify-center mt-20">
            <div
              className={`flex items-center justify-center w-full transition-opacity duration-500 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1
                onClick={handleTextFadeOut}
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
