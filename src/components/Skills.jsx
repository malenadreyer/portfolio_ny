"use client"
import Tech from "../components/Tech"
import Coding from"../components/Coding"
import Tools from "./Tools"


const Skills = () => {
  
    return ( 
    <section className="py-10 gap-10 mx-auto w-[1200px] font-mono  ">
        <div className="w-full h-[2px] bg-[#343067] mb-10"></div>
        <div >
        <h3 className="text-3xl font-bold max-w-[1000px] m-auto text-[#343067]">Technical Skills</h3>
<section  className="flex h-[10vh] justify-items-center pt-10 overflow-hidden relative w-[100%]">
        <div  className=" overflow-hidden  relative w-[50%]">
        <Tech  textColor="text-stroke" pos="left-full" />
        </div>
        <div className=" overflow-hidden relative w-[50%]  ">
            <Tech textColor="text-[#343067]  " />
        </div>
    </section>
        </div>
        
        <div className="w-full h-[2px] bg-[#343067] mt-10 mb-10"></div>
        <div>
        <h3 className="text-3xl font-bold max-w-[1000px] m-auto text-[#343067] mb-6">Coding</h3>
        <section className="flex h-[10vh] justify-items-center pt-10 overflow-hidden relative w-[100%]">
        <div className=" overflow-hidden relative w-[50%]">
        <Coding textColor="text-stroke" pos="left-full" />
        </div>
        <div className=" overflow-hidden relative w-[50%]  ">
            <Coding textColor="text-[#343067]  " />
        </div>
    </section>
        </div>
        <div className="w-full h-[2px] bg-[#343067] mt-10 mb-10"></div> 
        <div>
        <h3 className="text-3xl font-bold max-w-[1000px] m-auto text-[#343067] mb-6">Tools</h3>
        <section className="flex h-[10vh] justify-items-center pt-10 overflow-hidden relative w-[100%]">
        <div className=" overflow-hidden relative w-[50%]">
        <Tools textColor="text-stroke" pos="left-full" />
        </div>
        <div className=" overflow-hidden relative w-[50%]  ">
            <Tools textColor="text-[#343067]  " />
        </div>
    </section>
        </div>
        </section> );
}
 
export default Skills;