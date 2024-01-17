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
      className="bg-cover bg-center lg:h-screen w-full lg:grid lg:grid-cols-2 text-white">
      <div className="lg:p-20 p-10">
        <div className="flex flex-col justify-center items-center basis-full grow h-full">
          <h1 className='lg:text-5xl lg:pb-20 pb-10 flex justify-center font-bold text-3xl'>Let's get in touch</h1>
          <div className="flex flex-col justify-between basis-full grow text-2xl lg:pl-0 pl-10 gap-4">
            <p>Aleksei Seletckii</p>
          <Link className="underline" to="mailto: aleksei.s.webdev@gmail.com">alexey.sv.97@gmail.com</Link>
          <Link to='tel:+12067954267'>+1 (206) 795 42-67</Link>
          <Link className="underline" to="https://www.linkedin.com/in/aleksei-seletckii">linkedin.com/in/aleksei-seletckii</Link>
          <Link className="underline" to="https://github.com/lexasv97">github.com/lexasv97</Link>
          </div>
          <div className="flex justify-center box-border w-full text-3xl m-20 font-semibold">
            <Link className="bg-opacity-40 bg-white lg:px-32 px-10 py-4 rounded-lg" to='https://docs.google.com/document/d/19NetbGfj24sNn-GowbYH010mx6TLfXRN0bdDIlIcjzc/edit?usp=sharing' target={'_blank'}>My resume</Link>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${rectangle})`,
      }}
        className='bg-cover bg-left h-screen lg:flex justify-end items-end hidden'>
        <img src={img} className="" />
      </div>
    </div>
  )
}
