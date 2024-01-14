import { Link } from "react-router-dom"

const About = () => {
  return (
    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            {/* <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt="" /> */}
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
                <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-8 leading-normal text-purple uppercase">About me</h1>
                <p data-aos="fade-left" className="mb-6"
                >I'm a Full Stack Developer, I have a passion for creating and implementing innovative web solutions, using cutting-edge technologies and best practices. I graduated from Ironhack, a leading tech bootcamp, where I learned the latest skills and tools in web development, such as JavaScript React.js, Express.js, Node.js, MongoDB, Tailwind, HTML, and CSS. Then I continued with TypeScript. I also hold a bachelor's degree in Computer Software Engineering from MIET, a prestigious tech university in Russia.
                </p>
                <p data-aos="fade-right"
                >I am a highly motivated and result-driven developer, looking for opportunities that will provide me both personal and professional growth. I have the ability to work in a fast, agile environment with frequent change, and I have excellent technical, communication, and interpersonal skills. I am eager to learn new technologies and frameworks. I am ready for challenges and excited to work on innovative projects that make a positive impact.
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <Link to="https://docs.google.com/document/d/19NetbGfj24sNn-GowbYH010mx6TLfXRN0bdDIlIcjzc/edit?usp=sharing" className="neno-button shadow-xl bg-pink hover:shadow-fuchsia-800/50 border-2 hover:bg-green border-purple rounded-lg py-4 px-8 uppercase relative overflow-hidden" target={'_blank'}>My resume</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default About