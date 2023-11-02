import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Education from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className=''>
        <Navbar />
        <Banner />
        <About />
        <Education />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App
