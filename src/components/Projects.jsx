import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from "react-icons/fa";
import img from '../assets/local-logo.svg'
import arrow from '../assets/arrow.svg'

export default function Projects() {
    const projectLocal = {
        problem: '',
        concept: '',
        obstacles: '',
        solution: ''
    }

    return (
        <div className="h-screen">
            <div className="p-20">
                <div>
                    <h1 className="flex justify-center about_me lg:text-5xl pb-20">Project example</h1>
                </div>

                <div className="px-20 flex">
                    <img className='' src={img} />
                    <div className='flex grow pl-20 passionate lg:text-xl'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus mattis sed. Phasellus dapibus finibus interdum.

                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        {projectLocal.problem}
                    </div>
                    <img src={arrow} />
                    <div>
                        {projectLocal.concept}
                    </div>
                    <img src={arrow} />
                    <div>
                        {projectLocal.obstacles}
                    </div>
                    <img src={arrow} />
                    <div>
                        {projectLocal.solution}
                    </div>
                </div>

            </div>
        </div>
    )
};