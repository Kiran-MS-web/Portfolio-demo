import React from 'react'
import { NavLink } from 'react-router'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { ToastContainer } from './pages/ui/Toast'

const App = () => {
  return (
    <>
    <Navbar/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <ToastContainer/>
      <Footer />
    </>
  )
}

export default App