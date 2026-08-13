import { useState } from 'react'
import Home from './PortfolioContainer/Home/Footer/Home'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import About from './PortfolioContainer/AboutMe/About'
import Resume from './PortfolioContainer/Resume/Resume'
import Projects from './PortfolioContainer/Projects/Projects'
import Contact from './PortfolioContainer/ContactMe/Contact'
import './App.css'

function App() {


  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
