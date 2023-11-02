import Aos from "aos";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";

const Contacts = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = { name, email, text }

    axios.post(`${API_URL}`, body)
    .then((response) => {
      setName("")
      setEmail("")
      setText("")
    })
    .catch(err => {
      console.log(err)
  })
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            name="name"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-purple b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            name="email"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-purple b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          name="text"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-purple b_glow text-xl text-slate-500"
          placeholder="Write Your Massage..."
          cols="20"
          rows="10"
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button className="neno-button shadow-xl hover:shadow-stone-400 border-2 border-purple bg-pink hover:bg-green rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Contacts