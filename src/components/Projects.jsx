import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Projects() {
    const projects = [
        {
            title: 'Local',
            img: <img className="flex items-center justify-center " src={project3} alt="" />,
            details:
                'MERN developed marketplace. JWT auth, integrated Google Maps, Google places APIs and Tailwind styled.',
            github: (
                <Link to="https://github.com/lexasv97/project3-client" className="text-purple hover:text-pink rounded-full glow p-2" target={'_blank'}>
                    <AiFillGithub className="text-[28px]" />
                </Link>
            ),
            link: (
                <Link className='border-b-2 hover:text-green hover:border-green' to="https://local-services.netlify.app/" target={'_blank'}>
                    <FaExternalLinkAlt />
                </Link>
            )
        },
        {
            title: 'WaToDoo',
            img: <img className="flex items-center justify-center" src={project2} alt="" />,
            details: "Front Handlebars - Back Express: 3 Models MongoDB, full CRUD, integrated Stripe API and OpenAI image generation API",
            github: (
                <Link to="https://github.com/lexasv97" className="text-purple hover:text-pink rounded-full glow p-2" target={'_blank'}>
                    <AiFillGithub className="text-[28px]" />
                </Link>
            ),
            link: (
                <Link className='border-b-2 hover:text-green hover:border-green' to="https://project2-watodoo.adaptable.app/" target={'_blank'}>
                    <FaExternalLinkAlt />
                </Link>
            )
        },
        {
            title: 'Cannon battle',
            img: <img className="flex items-center justify-center" src={project1} alt="" />,
            details:
                'Developed game using pure HTML/CSS/JAVASCRIPT with collision events and complex logic',
            github: (
                <Link to="https://github.com/lexasv97" className="text-purple hover:text-pink rounded-full glow p-2" target={'_blank'}>
                    <AiFillGithub className="text-[28px]" />
                </Link>
            ),
            link: (
                <Link className='border-b-2 hover:text-green hover:border-green' to="https://lexasv97.github.io/project-cannon-battle" target={'_blank'}>
                    <FaExternalLinkAlt />
                </Link>
            )
        },
    ]

    return (
        <div id="projects" className=" bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto p-5 py-20">
                <h1 data-aos="fade-right" className="flex justify-center text-[52px] font-semibold mb-20 leading-normal uppercase text-purple">Projects</h1>

                <div className="grid md:grid-cols-3 gap-4">
                    {projects.map((project) => {
                        return (
                            <div className="p-4 shadow-md bg-white w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-purple b_glow text-xl text-slate-500">
                                {/* <div className="h-32 overflow-hidden border-b relative">
                                    <img alt="" src={project.img} className="w-full absolute left-0 my-auto "></img>
                                </div> */}
                                <div>
                                    {project.img}
                                </div>
                                <div className="text-2xl">{project.title}</div>
                                <div className="h-20 overflow-y-auto text-gray-400 font-light text-sm">
                                    {project.details}
                                </div>
                                <div className="flex justify-end space-x-4 items-center ">
                                    <div className="text-2xl">{project.github}</div>
                                    <div className="text-2xl">{project.link}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};