"use strict"
const Tools = ({textColor, pos}) => {
    return (
      <div >
        <div className={`${pos}  animate-marquee text-xl font-semibold`}>
          {[
            "VSCode",
            "Astro",
            "Illustrator",
            "Photoshop",
            "Premiere Pro",
            "Trello","InDesign",
            "After Effects",
            "ScreamingFrog",
            "WordPress",
            "Shopify",
          ].map((skill, index) => (
            <span key={index} className={`mx-10 ${textColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tools;
  