import img from '../assets/alex2.svg'

export default function About() {
    return (
        <div className="h-screen">
            <div className='p-20 grid grid-cols-2'>
                <div className=''>
                    <img src={img} />
                </div>
                <div className='flex flex-col justify-evenly'>
                    <div className='about_me flex justify-center lg:text-5xl'>
                        <h1>About me</h1>
                    </div>
                    <div className='grid gap-4 passionate lg:text-xl'>
                        <p>Passionate Software Engineer, merging entrepreneurial insights with tech expertise. Graduated from Ironhack and holding a bachelor's in Computer Software Engineering from MIET, I'm driven by a track record of creating innovative web solutions using cutting-edge technologies.
                        </p>
                        <p>Before transitioning to web development, I founded and scaled Florabar Flower Studio, achieving a 30% margin and substantial sales growth. Leading a team of five and managing up to 80 couriers, I honed my problem-solving and leadership skills, crafting effective marketing strategies and designing software for e-commerce expansion.
                        </p>
                        <p>
                            This entrepreneurial journey enriched my abilities as a result-oriented developer, eager for new challenges. I thrive in dynamic environments, agile development, leveraging strong technical prowess, communication skills, and a knack for problem-solving to drive impactful projects. Seeking opportunities that foster both personal and professional growth, I'm excited to contribute my unique blend of business acumen and tech skills to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}