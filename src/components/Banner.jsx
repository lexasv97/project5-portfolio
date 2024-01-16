import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi';
import img from '../assets/alex.svg'
import { Link } from "react-router-dom";
import background from "../assets/background.svg"

export default function Banner() {

    return (
        <div style={{
            backgroundImage: `url(${background})`,
        }}
            className="bg-cover bg-center h-screen pt-20 gap-5 flex lg:flex-row flex-col justify-between text-white">
            <div className="lg:pl-32 lg:w-7/12 flex flex-col justify-between lg:py-20">
                <div className="flex flex-col lg:px-0 px-10">
                    <span className='text-left font-vazirmatn lg:text-9xl text-5xl'>ALEKSEI</span>
                    <div className='text-right lg:pl-64'>
                        <span className='font-vazirmatn lg:text-9xl text-5xl'>SELETCKII</span>
                        <p className='lg:text-2xl pt-10 text-left'>Software Engineer - TypeScript | React | JavaScript | ExpressJS | NodeJS | NextJS | MongoDB | PostgreSQL</p>
                    </div>
                </div>
                <div className="hidden text-4xl w-full lg:flex justify-evenly">
                    <Link to="https://github.com/lexasv97" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <AiFillGithub />
                    </Link>
                    <Link to="https://www.linkedin.com/in/aleksei-seletckii/" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <FaLinkedinIn />
                    </Link>
                    <Link to="https://twitter.com/ASeletckii" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <FiTwitter />
                    </Link>
                    <Link to="https://www.facebook.com/lexasv97/" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <BsFacebook />
                    </Link>
                </div>
            </div>
            <div style={{
            backgroundImage: `url(${img})`,
        }}
            className='w-full bg-cover'>
                {/* <img src={img} className='lg:h-full h-3/4' /> */}
            </div>
        </div>
    )
}