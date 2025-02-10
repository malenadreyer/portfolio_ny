"use strict"
const Coding = ({textColor, pos}) => {
    return (
      <div >
        <div className={`${pos}  animate-marquee text-xl font-semibold`}>
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
          ].map((skill, index) => (
            <span key={index} className={`mx-10 ${textColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Coding;
  