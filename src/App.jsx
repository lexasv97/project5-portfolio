import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <div>
        <Navbar />
        <Banner />
        <About />
        <Education />
        <Projects />
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
