import Aos from "aos";
import { useEffect } from "react";

const Skills = () => {
  return (
    <div id="Services" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-purple rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-pink b_glow">JavaScript</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-purple rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-pink b_glow">React</h2>
            <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-purple rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-pink b_glow">Express</h2>
            <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-purple rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-pink b_glow">Node.js</h2>
        </div>
       </div>
  )
}

export default Skills