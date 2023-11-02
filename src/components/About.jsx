

const About = () => {
  return (
    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            {/* <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt="" /> */}
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-purple uppercase">About me</h1>
                <p data-aos="fade-left">I'm MERN Full Stack Web Developer, skilled in creating and implementing innovative solutions. Proficient in front-end and back-end development, experienced in developing responsive and efficient web applications.

Graduated tech university in Russia and bootcamp in Miami and ready for challenges developing innovative projects.

Used to write testable, human-readable code adhering to good practices.

A highly motivated and result-driven developer looking for opportunities that will provide me, both, personal and professional growth.

I have the ability to work in a fast, agile and nimble environment with frequent change.

Excellent technical, communication and interpersonal skills.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-xl bg-pink hover:shadow-fuchsia-800/50 border-2 hover:bg-green border-purple rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default About