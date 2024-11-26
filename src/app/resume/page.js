

"use client";
import Image from "next/image";
import PictureOfMe from "../../../public/moi.png"

const Resume = () => {
  return ( 
    <div> <h1>About me</h1>
    <Image 
    src={PictureOfMe}
    alt="Billede af mig" 
    width={300} 
    height={300}/>
    
      </div>
   );
}
 
export default Resume;