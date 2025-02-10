import { useState } from "react";
import styles from "../styles/carousel.module.css";

const projects = [
    { title: "The Cutie Life", link: "https://example.com/1", des: "Digital Website - Shoptify", backgroundColor: "#343067", textColor: "#FEFEF2" },
    { title: "Boe Beatui", link: "https://example.com/2", des: "Video Editing", backgroundColor: "#E8B3A9", textColor: "#343067" },
    { title: "Fine Studies", link: "https://example.com/3", des: "Website - Next.js", backgroundColor: "#fef2f2", textColor: "#343067" },
  ];

const Carousel = () => {
  const [active, setActive] = useState(0);

  const moveLeft = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const moveRight = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const getLevel = (index) => {
    const positions = [-1, 0, 1]; // Venstre, midt, højre
    const offset = (index - active + projects.length) % projects.length;
    return positions[offset] ?? -2;
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.items}>
        {projects.map((project, index) => (
          <Item key={index} project={project} level={getLevel(index)} />
        ))}
      </div>
      
      {/* Arrow buttons in bottom */}
      <div className="absolute bottom-1  flex gap-5">
        <button 
          className="px-6 py-3 bg-[#343067] text-white rounded-[10px] hover:bg-[#E8B3A9] transition duration-300" 
          onClick={moveLeft}
        >
          Previous
        </button>

        <button 
          className="px-6 py-3 bg-[#343067] text-white rounded-[10px] hover:bg-[#E8B3A9] transition duration-300" 
          onClick={moveRight}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Item = ({ project, level }) => {
    return (
      <div
        className={`${styles.item} ${styles[`level${level}`]}`}
        style={{ backgroundColor: project.backgroundColor, color: project.textColor || "#343067" }} // Updated here to use backgroundColor instead of borderColor
      >
        <h3 className="text-[2rem] mb-5">{project.title}</h3>
        <p className=" font-mono mb-5">{project.des}</p>
        <a 
          className=" bg-[#bdbdbd] font-josefin cursor-pointer rounded-[10px] px-10 py-2
          hover:text-[#FEFEF2] hover:bg-[#E8B3A9] transition duration-300" 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          See project
        </a>
      </div>
    );
  };

export default Carousel;
