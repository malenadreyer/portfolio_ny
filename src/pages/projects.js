
"use client";
import Head from "next/head";
import React from "react";
import HoverInfo from "@/components/HoverBoks";
import Header from "@/components/Header";
import MouseFollower from "@/components/Mouse";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";


const Projects = () => {
  return ( 
    <>
        <MouseFollower color="#343067" hoverColor="#343067" clickedColor="#ffff" />

    <div> 
      <MouseFollower/>
      <Head>
        <title>What are the skills we bring to your project here at marmic.studios, get to know our skils aswell as previous projects</title>
        <meta name="Projects" content="marmic.studios" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Header/>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start med opacity 0 og y-position lidt under
        animate={{ opacity: 1, y: 0 }} // Fade ind og bevæg sig op til den oprindelige position
        transition={{ duration: 1, ease: "easeOut" }} // Timing og transition for animationen
      >
        <h1 className="grid text-4xl font-bold justify-center align-center" >PROJECTS</h1>
        <Carousel />
        <Footer/>
      </motion.div>
      </div>
        
      </>
   );
}
 
export default Projects;