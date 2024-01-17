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
        problem: (
            <ul className='flex flex-col gap-2'>
                <li>Many individuals in the US encounter challenges when trying to locate local service providers without disclosing their contact information and subsequently being bombarded with spam from numerous companies.</li>
                <li>Extensive research indicates a widespread issue among people struggling to find service providers efficiently.</li>
            </ul>
        ),
        concept: (
            <ul className='flex flex-col gap-2'>
                <li>The project is MVP of a platform for local service providers to showcase their offerings and for customers to discover the best services in their vicinity.,</li>
                <li>Leveraging the power of Google Places API and Google Maps API, the application allows service providers to pinpoint their exact location on the map, facilitating easier discovery for customers</li>
            </ul>
        ),
        obstacles: (
            <ul className='flex flex-col gap-2'>
                <li>Implementing Google Places API and Google Maps API presented key challenges, particularly in accurately determining longitude and latitude for service provider locations.</li>
                <li>Overcoming the complexities of integrating these APIs was crucial to ensuring the seamless functioning of the mapping feature.</li>
            </ul>
        ),
        solution: (
            <ul className='flex flex-col gap-2'>
                <li>The technology stack includes React, Node.js with Express, and MongoDB (MERN stack).</li>
                <li>The mapping functionality enhances the user experience, making it simpler for customers to locate service providers based on their geographical proximity, thereby streamlining the process of finding relevant services.</li>
            </ul>
        )
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
                        <p>
                            An MVP marketplace using React, Node.js, Express.js, MongoDB technologies (MERN stack) for services  with JWT auth, integrated Google Maps, Google places APIs and Tailwind styled.
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between  pt-10 lg:h-96 box-border w-full'>
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
                            {projectLocal.problem}
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
                            {projectLocal.solution}
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