import { useEffect } from 'react';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

import Aos from 'aos';

const Projects = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple">Projects</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-right" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-pink b_glow" src={project3} alt="" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-pink b_glow" src={project2} alt="" />
            <img data-aos="fade-left" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-pink b_glow" src={project1} alt="" />
            {/* <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-pink b_glow" src={img4} alt="" /> */}
        </div>
       </div>
    );
};

export default Projects;