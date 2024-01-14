import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-pink lg:px-40 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="">
                    <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Languages</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">English</li>
                        <li className="my-2">Russian</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Development</li>
                        <li className="my-2">Front end</li>
                        <li className="my-2">Back end</li>
                        <li className="my-2">Software engineering</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Contact</h2>
                    <ul className="text-[16px] my-4">
                        <li>
                            <Link className="text-[16px] my-4" to='tel:+12067954267'>+1 206-795-4267</Link>
                        </li>
                        <li>
                            <Link className="text-[16px] my-4" to="mailto: aleksei.s.webdev@gmail.com">aleksei.s.webdev@gmail.com</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Follow Me</h2>
                    <div className="flex space-x-4 my-4">
                        <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://github.com/lexasv97">
                            <FaGithub className="text-[28px]" />
                        </Link>
                        <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://www.linkedin.com/in/aleksei-seletckii/">
                            <FaLinkedinIn className="text-[28px]" />
                        </Link>
                        <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://twitter.com/ASeletckii">
                            <FaTwitter className="text-[28px]" />
                        </Link>
                        <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://www.facebook.com/lexasv97/">
                            <BsFacebook className="text-[28px]" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;