import background from "../assets/background.svg"
import img from '../assets/alex3.svg'
import rectangle from '../assets/rectangle.svg'
import rectangle2 from '../assets/rectangle2.svg'
import { Link } from "react-router-dom"

export default function Contacts() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
    }}
      className="bg-cover bg-center lg:h-screen w-full grid lg:grid-cols-2 text-white">
      <div className="p-20">
        <div className="flex flex-col justify-center items-center basis-full grow h-full">
          <h1 className='lg:text-5xl pb-20 font-bold text-3xl'>Let's get in touch</h1>
          <ul className="flex flex-col justify-between basis-full grow text-2xl">
            <li>Aleksei Seletckii</li>
            <li><Link to="mailto: aleksei.s.webdev@gmail.com">alexey.sv.97@gmail.com</Link></li>
            <li><Link to='tel:+12067954267'>+1 (206) 795 42-67</Link></li>
            <li><Link to="https://www.linkedin.com/in/aleksei-seletckii">linkedin.com/in/aleksei-seletckii</Link></li>
            <li><Link to="https://github.com/lexasv97">github.com/lexasv97</Link></li>
          </ul>
          <div className="flex justify-center box-border w-full text-3xl m-20 font-semibold">
            <Link className="bg-opacity-40 bg-white px-32 py-4 rounded-lg" to='https://docs.google.com/document/d/19NetbGfj24sNn-GowbYH010mx6TLfXRN0bdDIlIcjzc/edit?usp=sharing' target={'_blank'}>My resume</Link>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${rectangle})`,
      }}
        className=' bg-cover bg-center h-screen flex justify-end items-end hidden md:flex'>
        <img src={img} className="" />
      </div>
    </div>
  )
}
