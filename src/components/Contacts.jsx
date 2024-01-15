import background from "../assets/background.svg"
import img from '../assets/alex3.svg'
import rectangle from '../assets/rectangle.svg'

export default function Contacts() {

  return (
    <div style={{
      backgroundImage: `url(${background})`,
    }}
      className="bg-cover bg-center h-screen gap-5 grid grid-cols-2 text-white">
      <div className="p-20">
        <div className="h-full">
          <h1 className='flex justify-center lg:text-5xl'>
            Let's get in touch</h1>
          <div className="flex flex-col justify-between ">
            <p>Aleksei Seletckii</p>
            <p>alexey.sv.97@gmail.com</p>
            <p>+1 (206) 795 42-67</p>
            <p>linkedin.com/in/aleksei-seletckii/</p>
            <p>github.com/lexasv97</p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${rectangle})`,
      }}
        className='flex items-end justify-end'>
        <img src={img} className="h-5/6" />
      </div>


    </div>
  )
}
