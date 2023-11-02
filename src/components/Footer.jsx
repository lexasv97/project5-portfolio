import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink lg:px-48 px-4 py-20">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="">
            <span className="text-3xl font-semibold text-purple py-2 uppercase">Logo</span>
            <p className="text-[18px] my-4">I speak English, Russian</p>
        </div>
        <div>
            <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Services</h2>
            <ul className="text-[16px] my-4">
                <li className="my-2">Web Development</li>
                <li className="my-2">Front end</li>
                <li className="my-2">Back end</li>
                <li className="my-2">E-commerce</li>
            </ul>
        </div>
        <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Contact</h2>
            <p className="text-[16px] my-4">Email: aleksei.s.webdev@gmail.com</p>
            <p className="text-[16px] my-4">Phone: +1 206-795-4267</p>
        </div>
       <div>
         <h2 className="text-[22px] font-semibold text-purple py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
            <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://github.com/lexasv97">
                <FaGithub className="text-[28px]" />
            </Link>
            <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://www.linkedin.com/in/aleksei-seletckii/">
                <FaLinkedinIn className="text-[28px]" />
            </Link>
            <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="https://twitter.com/ASeletckii">
                <FaTwitter className="text-[28px]" />
            </Link>
            <Link className="text-white hover:text-purple  transition-all duration-150 ease-in-out" to="">
                <BsFacebook className="text-[28px]" />
            </Link>
        </div>
       </div>
    </div>
   </footer>

  );
};

export default Footer;