import { useEffect } from 'react';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { Link } from 'react-router-dom';

import Aos from 'aos';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
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
            <div className='pt-20 text-2xl'>
                <div>
                    <div className='flex flex-col'>
                        <span>1) Local: MERN developed marketplace with token auth, integrated Google Maps, Google places APIs and Tailwind styled.</span>
                        <span className='flex justify-center py-4 text-pink'>
                            <Link className='border-b-2 hover:text-green hover:border-green' to="https://local-services.netlify.app/">Netlify</Link>
                            </span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <span>2) WaToDoo: Website with authorization, 3 Models MongoDB, CRUD, integrated Stripe API and AI image generation API.</span>
                        <span className='flex justify-center py-4 text-pink'>
                            <Link className='border-b-2 hover:text-green hover:border-green' to="https://project2-watodoo.adaptable.app/">Adaptable</Link>
                            </span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <span>3) Cannon-battle: Developed game using pure HTML5/CSS3/JAVASCRIPT(ES6) with collision events and complex logic.</span>
                        <span className='flex justify-center py-4 text-pink'>
                            <Link className='border-b-2 hover:text-green hover:border-green' to="https://lexasv97.github.io/project-cannon-battle">Game</Link>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;