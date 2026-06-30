import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <main>
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App