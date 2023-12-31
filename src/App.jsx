
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-champ'>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App
