import { Link } from 'react-router-dom';
import { useState } from 'react';
import img from '../assets/local-logo.svg'
import arrow from '../assets/arrow.svg'

export default function Projects() {
    const [isHoveringProblem, setHoveringProblem] = useState(false)
    const [isHoveringConcept, setHoveringConcept] = useState(false)
    const [isHoveringObstacles, setHoveringObstacles] = useState(false)
    const [isHoveringSolution, setHoveringSolution] = useState(false)


    const projectLocal = {
        problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        obstacles: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus '
    }

    const mouseOverProblem = () => {
        setHoveringProblem(true)
    }

    const mouseOutProblem = () => {
        setHoveringProblem(false)
    }
    const mouseOverConcept = () => {
        setHoveringConcept(true)
    }

    const mouseOutConcept = () => {
        setHoveringConcept(false)
    }
    const mouseOverObstacles = () => {
        setHoveringObstacles(true)
    }

    const mouseOutObstacles = () => {
        setHoveringObstacles(false)
    }
    const mouseOverSolution = () => {
        setHoveringSolution(true)
    }

    const mouseOutSolution = () => {
        setHoveringSolution(false)
    }

    return (
        <div className="lg:h-screen">
            <div className="p-20">
                    <div>
                        <h1 className="flex justify-center lg:text-5xl text-3xl pb-20 font-black">Project example</h1>
                    </div>
                    <div className="lg:px-20 flex lg:flex-row flex-col">
                        <img className='' src={img} />
                        <div className='flex lg:text-xl basis-3/4 lg:pl-20'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus mattis sed. Phasellus dapibus finibus interdum.
                            </p>
                        </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between  pt-10 lg:h-80 box-border w-full'>
                    {
                        !isHoveringProblem &&
                        <div
                            onMouseOver={mouseOverProblem}
                            className='bg-grey flex flex-col justify-center items-center p-5 basis-full grow rounded-lg text-2xl font-black'
                        >
                            <span>The Problem</span>
                        </div>
                    }
                    {
                        isHoveringProblem &&
                        <div
                            onMouseOut={mouseOutProblem}
                            className='bg-grey flex flex-col justify-center items-center p-5 passionate basis-full grow rounded-lg'
                        >
                            <div>
                                {projectLocal.problem}
                            </div>
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90">
                        <img src={arrow} />
                    </div>
                    {
                        !isHoveringConcept &&
                        <div
                            onMouseOver={mouseOverConcept}
                            className='bg-grey flex flex-col justify-center items-center p-5  basis-full grow rounded-lg text-2xl font-black'
                        >
                            <span>Concept</span>
                        </div>
                    }
                    {
                        isHoveringConcept &&
                        <div
                            onMouseOut={mouseOutConcept}
                            className='bg-grey flex flex-col justify-center items-center p-5 passionate basis-full grow rounded-lg'
                        >
                            {projectLocal.concept}
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90">
                        <img src={arrow} />
                    </div>                    {
                        !isHoveringObstacles &&
                        <div
                            onMouseOver={mouseOverObstacles}
                            className='bg-grey flex flex-col justify-center items-center p-5  basis-full grow rounded-lg text-2xl font-black'
                        >
                            <span>Key obstacles</span>
                        </div>
                    }
                    {
                        isHoveringObstacles &&
                        <div
                            onMouseOut={mouseOutObstacles}
                            className='bg-grey flex flex-col justify-center items-center p-5 passionate basis-full grow rounded-lg'
                        >
                            {projectLocal.obstacles}
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90">
                        <img src={arrow} />
                    </div>                    {
                        !isHoveringSolution &&
                        <div
                            onMouseOver={mouseOverSolution}
                            className='bg-grey flex flex-col justify-center items-center p-5 basis-full grow rounded-lg text-2xl font-black'
                        >
                            <span>Solution</span>
                        </div>
                    }
                    {
                        isHoveringSolution &&
                        <div
                            onMouseOut={mouseOutSolution}
                            className='bg-grey flex flex-col justify-center items-center p-5 passionate basis-full grow rounded-lg'
                        >
                            {projectLocal.problem}
                        </div>
                    }
                </div>
                <div className='flex lg:flex-row flex-col justify-evenly items-center lg:h-40 pt-10 font-black'>
                    <div className='w-full flex justify-center '>
                        <Link className='py-5 px-16 bg-grey rounded-lg flex justify-center text-xl' to='https://local-services.netlify.app/'>Website link</Link>
                    </div>
                    <div className='py-5 w-full flex justify-center'>
                        <Link className='py-5 px-16 bg-grey rounded-lg flex justify-center text-xl' to='https://github.com/lexasv97/project3-client'>GitHub - client</Link>
                    </div>
                    <div className='py-5  w-full flex justify-center'>
                        <Link className='py-5 px-16 bg-grey rounded-lg flex justify-center text-xl' to='https://github.com/lexasv97/project3-server'>GitHub - server</Link>
                    </div>
                </div>

            </div>
        </div>
    )
};