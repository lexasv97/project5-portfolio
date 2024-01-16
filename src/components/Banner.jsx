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
            className="bg-cover bg-center h-screen pt-20 gap-5 flex justify-between text-white">
            <div className="lg:pl-32 lg:w-7/12 flex flex-col justify-between py-20">
                <div className="flex flex-col">
                    <span className='text-left font-vazirmatn lg:text-9xl text-5xl'>ALEKSEI</span>
                    <div className='text-right lg:pl-64'>
                        <span className='font-vazirmatn lg:text-9xl text-5xl'>SELETCKII</span>
                        <p className='lg:text-2xl pt-10 text-left'>Software Engineer - TypeScript | React | JavaScript | ExpressJS | NodeJS | NextJS | MongoDB | PostgreSQL</p>
                    </div>
                </div>
                <div className="w-full flex justify-evenly">
                    <Link to="https://github.com/lexasv97" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <AiFillGithub className="lg:text-4xl" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/aleksei-seletckii/" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <FaLinkedinIn className="lg:text-4xl" />
                    </Link>
                    <Link to="https://twitter.com/ASeletckii" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <FiTwitter className="lg:text-4xl" />
                    </Link>
                    <Link to="https://www.facebook.com/lexasv97/" className="hover:scale-150 rounded-full glow p-2" target={'_blank'}>
                        <BsFacebook className="lg:text-4xl" />
                    </Link>
                </div>
            </div>
            <div className='hidden md:flex items-end'>
                <img src={img} className='h-full' />
            </div>
        </div>
    )
}