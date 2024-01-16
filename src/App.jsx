import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-full'>
        <Banner />
        <div className='montserrat'>
        <About />
        <Skills />
        <Projects />
        <Contacts />
        </div>
    </div>
  )
}

export default App
