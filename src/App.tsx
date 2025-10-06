import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotifyMe from './components/NotifyMe'

import { ThemeProvider } from './theme/ThemeProvider'

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <NotifyMe />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
