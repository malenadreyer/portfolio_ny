

"use client";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import MouseFollower from "@/components/Mouse";
import { motion } from "framer-motion"; // Importer motion fra framer-motion
import Header from "@/components/Header";
import Head from "next/head";

const skills = [
    "Frontend development",
    "UX & UI design",
    "Graphic design",
    "Content planning and creation",
    "Prototyping",
    "Editing",
    "Moodboarding",
    "Layout design & grid system",
    "Video editing",
    "Illustration",
    "User testing",
  ];
  
  const codingSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
  
  const tools = [
    "VSCode",
    "Astro",
    "Illustrator",
    "Photoshop",
    "Premiere Pro",
    "Trello",
    "InDesign",
    "Shopify",
  ];

const Skills = () => {
  return ( 
    <>
     <Head>
        <title>What are the skills we bring to your project here at marmic.studios</title>
        <meta name="Skills" content="marmic.studios" />
      </Head>
    <MouseFollower color="#343067" hoverColor="#343067" clickedColor="#ffff" />
    <Header/>
    <motion.div
        initial={{ opacity: 0, y: 100 }} // Start med opacity 0 og y-position lidt under
        animate={{ opacity: 1, y: 0 }} // Fade ind og bevæg sig op til den oprindelige position
        transition={{ duration: 1, ease: "easeOut" }} // Timing og transition for animationen
      >
    <div> <h1 className="font-bold text-[5rem] text-center py-7">Skills</h1>
    <section className="py-10 mx-auto w-full max-w-[1200px] px-4">

      <h3 className="text-3xl font-bold text-[#343067] mb-6">Technical Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 font-serif">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center text-[#343067] text-lg">
            <FaRegStar className="text-[#E8B3A9] mr-3" />
            {skill}
          </div>
        ))}
      </div>


      <h3 className="text-2xl font-semibold text-[#343067] mb-4">Coding</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 font-serif">
        {codingSkills.map((codingSkill, index) => (
          <div key={index} className="flex items-center text-[#343067] text-lg">
            <FaRegStar className="text-[#E8B3A9] mr-3" />
            {codingSkill}
          </div>
        ))}
      </div>


      <h3 className="text-2xl font-semibold text-[#343067] mb-4">Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 font-serif">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center text-[#343067] text-lg">
            <FaRegStar className="text-[#E8B3A9] mr-3" />
            {tool}
          </div>
        ))}
      </div>
    </section>
    
      </div>
      </motion.div>
      </>
   );
}
 
export default Skills;