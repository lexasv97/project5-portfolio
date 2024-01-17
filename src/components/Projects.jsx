import { Link } from 'react-router-dom';
import { useState } from 'react';
import img from '../assets/local-logo.svg'
import arrow from '../assets/arrow.svg'

export default function Projects() {
    const [isProblemClicked, setProblemClicked] = useState(false)
    const [isConceptClicked, setConceptClicked] = useState(false)
    const [isObstaclesClicked, setObstaclesClicked] = useState(false)
    const [isSolutionClicked, setSolutionClicked] = useState(false)


    const projectLocal = {
        problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        obstacles: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus ',
        solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus '
    }

    const clickProblem = () => {
        setProblemClicked(true)
    }

    const ckickConcept = () => {
        setConceptClicked(true)
    }

    const ckickObstacles = () => {
        setObstaclesClicked(true)
    }

    const clickSolution = () => {
        setSolutionClicked(true)
    }

    return (
        <div className="lg:h-screen">
            <div className="lg:p-20 p-10 font-black">
                <div>
                    <h1 className="flex justify-center lg:text-5xl text-3xl lg:pb-10">Project example</h1>
                </div>
                <div className="lg:px-20 flex lg:flex-row flex-col justify-center items-center">
                    <img className='w-3/4 lg:w-1/5 lg:py-0 py-10' src={img} />
                    <div className='flex lg:text-xl basis-3/4 lg:pl-20'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dictum enim a vulputate. Curabitur ac dictum diam. Donec vel urna enim. Cras sed tellus lectus. Etiam dapibus sagittis tellus, at condimentum purus mattis sed. Phasellus dapibus finibus interdum.
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between  pt-10 lg:h-80 box-border w-full'>
                    {
                        !isProblemClicked &&
                        <button
                            onClick={clickProblem}
                            className='bg-grey hover:bg-dark-grey flex flex-col justify-center items-center p-5 basis-full grow rounded-lg text-2xl'
                        >
                            <span>The Problem</span>
                        </button>
                    }
                    {
                        isProblemClicked &&
                        <div
                            className='bg-grey flex flex-col justify-center items-center p-5 basis-full grow rounded-lg'
                        >
                            <div>
                                {projectLocal.problem}
                            </div>
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90 py-5 lg:py-0">
                        <img src={arrow} />
                    </div>
                    {
                        !isConceptClicked &&
                        <button
                            onClick={ckickConcept}
                            className='bg-grey hover:bg-dark-grey  flex flex-col justify-center items-center p-5  basis-full grow rounded-lg text-2xl'
                        >
                            <span>Concept</span>
                        </button>
                    }
                    {
                        isConceptClicked &&
                        <div
                            className='bg-grey flex flex-col justify-center items-center p-5  basis-full grow rounded-lg'
                        >
                            {projectLocal.concept}
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90 py-5 lg:py-0">
                        <img src={arrow} />
                    </div>                    {
                        !isObstaclesClicked &&
                        <button
                            onClick={ckickObstacles}
                            className='bg-grey hover:bg-dark-grey  flex flex-col justify-center items-center p-5  basis-full grow rounded-lg text-2xl'
                        >
                            <span>Key obstacles</span>
                        </button>
                    }
                    {
                        isObstaclesClicked &&
                        <div
                            className='bg-grey flex flex-col justify-center items-center p-5  basis-full grow rounded-lg'
                        >
                            {projectLocal.obstacles}
                        </div>
                    }
                    <div className="flex justify-center items-center basis-1/2 lg:rotate-0 rotate-90 py-5 lg:py-0">
                        <img src={arrow} />
                    </div>                    {
                        !isSolutionClicked &&
                        <button
                            onClick={clickSolution}
                            className='bg-grey hover:bg-dark-grey  flex flex-col justify-center items-center p-5 basis-full grow rounded-lg text-2xl'
                        >
                            <span>Solution</span>
                        </button>
                    }
                    {
                        isSolutionClicked &&
                        <div
                            className='bg-grey flex flex-col justify-center items-center p-5  basis-full grow rounded-lg'
                        >
                            {projectLocal.problem}
                        </div>
                    }
                </div>
                <div className='flex lg:flex-row flex-col justify-evenly items-center lg:h-40 pt-10 w-full box-border text-2xl'>
                    <Link to='https://local-services.netlify.app/' className='mb-5 mx-20 bg-grey hover:bg-dark-grey  flex justify-center items-center py-5 grow lg:grow-0 rounded-lg text-2xl w-3/4 lg:w-1/2'>
                        Website link
                    </Link>
                    <Link to='https://github.com/lexasv97/project3-client' className='mb-5 mx-20 bg-grey hover:bg-dark-grey  flex justify-center py-5 items-center grow lg:grow-0 rounded-lg text-2xl w-3/4 lg:w-1/2'>
                        GitHub - client
                    </Link>
                    <Link to='https://github.com/lexasv97/project3-server' className='mb-5 mx-20 bg-grey hover:bg-dark-grey  flex justify-center items-center py-5 grow lg:grow-0 rounded-lg text-2xl w-3/4 lg:w-1/2'>
                        GitHub - server
                    </Link>
                </div>

            </div>
        </div>
    )
};