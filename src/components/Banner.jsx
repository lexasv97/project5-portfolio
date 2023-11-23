import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import img from '../assets/profile.jpg'
import { Link } from "react-router-dom";

const Banner = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])

    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-purple">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">ALEKSEI <span className="text-pink">SELETCKII</span></h1>
                <p data-aos="fade-left"><span className='font-bold'>Software Engineer</span> - TypeScript | React | JavaScript | Express | Node.js | MongoDB | PostgreSQL</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <Link to="https://github.com/lexasv97" className="text-purple hover:text-pink rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/aleksei-seletckii/" className="text-purple hover:text-pink rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]" />
                            </Link>
                            <Link to="https://twitter.com/ASeletckii" className="text-purple hover:text-pink rounded-full glow p-2">
                                <FiTwitter className="text-[28px]" />
                            </Link>
                            <Link to="https://www.facebook.com/lexasv97/" className="text-purple hover:text-pink rounded-full glow p-2">
                                <BsFacebook className="text-[28px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-pink img_glow' alt="" />
        </div>
    )
}

export default Banner