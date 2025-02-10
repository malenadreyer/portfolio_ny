"use client";
import Image from "next/image";
import React from "react";
import PictureOfMe from "../../public/moi.png"
import Footer from "@/components/Footer";
import PictureOfMe1 from "../../public/moi1.png";
import Link from "next/link";
import MouseFollower from "@/components/Mouse";
import Header from "@/components/Header";
import Head from "next/head";
import { motion } from "framer-motion"; // Importer motion fra framer-motion

function AboutMe() {
  return ( 
    <>
    <Head>
        <title>Who are Marmic.studios</title>
        <meta name="About" content="marmic.studios" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <MouseFollower color="#343067" hoverColor="#343067" clickedColor="#ffff" />
      <Header />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start med opacity 0 og y-position lidt under
        animate={{ opacity: 1, y: 0 }} // Fade ind og bevæg sig op til den oprindelige position
        transition={{ duration: 1, ease: "easeOut" }} // Timing og transition for animationen
      >
        
        <h1 className="font-bold text-[5rem] text-center py-7">About me</h1>
        <div> 
          <div className="relative grid justify-items-center">
            <span className="absolute left-[20%] top-[-5%] text-5xl font-bold text-[#343067] font-shyte">HELLO,</span>
            
            <Image
              src={PictureOfMe1}
              alt="Billede af Maria"
              width={600}
              height={600}
            />
            
            <span className="absolute bottom-[-3%] right-[15%] text-5xl font-bold text-[#343067] font-shyte">I'M MARIA</span>
          </div>

          <div className="grid grid-cols-[2fr_1fr] max-w-[900px] mr-auto ml-auto pt-40 pb-20">
            <p className="pr-20 font-serif text-[#343067]"> and as you can tell I've love fashion. I’m a 27-year-old woman studying Multimedia Design at KEA, currently in my 3rd semester. I initially joined KEA to improve my skills in Adobe and content creation, with the goal of combining creativity and modern design. However, during my studies, I discovered a passion for coding and web development.<br></br> <br></br> I became fascinated with building visually appealing and functional websites, which led me to choose front-end development as my elective. I am now focused on learning HTML, CSS, and JavaScript to create interactive and user-friendly web experiences. I am eager to deepen my knowledge of both front-end and backend development, exploring different programming languages and the full software development process. <br></br> <br></br> My goal is to merge my creative background with technical skills to deliver solutions that are not only visually engaging but also sustainable and efficient.</p>
            <Image 
              src={PictureOfMe}
              alt="Billede af mig" 
              width={300} 
              height={300}/>
          </div>

          <div className="flex justify-center items-center pb-40">
            <Link href="/resume">
              <button 
                className="bg-[#343067] font-serif text-white font-bold py-2 px-6 rounded-full hover:bg-[#E8B3A9] transition duration-300 cursor-pointer"
              >
                Read my resumé
              </button>
            </Link>
          </div>
        </div>
        <Footer/>
      </motion.div>
    </>
  );
}
 
export default AboutMe;
