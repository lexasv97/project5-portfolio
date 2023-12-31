import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-champ transition z-30 border-t border-purple">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-purple hover:bg-green hover:rounded hover:text-white">Home</li>
                </Link >
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-purple hover:bg-green hover:rounded hover:text-white">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className="my-4 py-4 border-b border-purple hover:bg-green hover:rounded hover:text-white">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b border-purple hover:bg-green hover:rounded hover:text-white">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-purple hover:bg-green hover:rounded hover:text-white">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="bg-pink h-10vh flex justify-between z-50 lg:py-5 px-10 py-4 border-b border-purple">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">LOGO</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-white transition border-b-2 border-purple hover:border-white cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-white transition border-b-2 border-purple hover:border-white cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Skills">
                                <li className="hover:text-white transition border-b-2 border-purple hover:border-white cursor-pointer">Skills</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-white transition border-b-2 border-purple hover:border-white cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-white transition border-b-2 border-purple hover:border-white cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>

            </div>
        </nav>
    );
}

export default Navbar