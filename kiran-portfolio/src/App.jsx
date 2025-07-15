
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import { ToastContainer } from './pages/ui/Toast'
import Footer from './pages/Footer'

const App = () => {
  return (
    
    <>
    
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default App