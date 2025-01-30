
"use client";
import Head from "next/head";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import HoverInfo from "@/components/HoverBoks";
import Header from "@/components/Header";
import MouseFollower from "@/components/Mouse";
import { motion } from "framer-motion";


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
        <section className="py-10 mx-auto w-full max-w-[1200px] px-4">
      <h3 className="text-3xl font-bold text-[#343067] mb-6">Technical Skills</h3>
      <div className="flex items-center text-[#343067] text-lg">
      <FaRegStar className="text-[#E8B3A9] mr-3" />
      <HoverInfo className="cursor-none" skill="Frontend Development" disableHover={true}/>

      </div>
      </section>
      </motion.div>
      </div>
      </>
   );
}
 
export default Projects;