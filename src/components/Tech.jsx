"use strict"
const Tech = ({textColor, pos}) => {
    
    return (
      <div >
        <div className={`${pos}  animate-marquee text-xl font-semibold`}>
          {[
            "Frontend Development",
            "UX & UI Design",
            "Graphic Design",
            "Prototyping",
            "Editing",
            "Moodboarding",
            "Layout Design & Grid System",
            "Video Editing",
            "Illustration",
            "User Testing",
            "SEO",
          ].map((skill, index) => (
            <span  key={index} className={`mx-10 ${textColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tech;
  