import { useState } from 'react'
import './App.css'
import Hero from './Compnents/Hero'
import Main from './Compnents/Main'
import Navbar from './Compnents/Navbar'
import Timer from './Compnents/Timer/Timer'
import About from './Compnents/About/About'
import Speaker from './Compnents/Speaker&Sponsers/Speaker'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Timer/> */}
      <About/>
      <Speaker/>
      {/* <Main/> */}
    </>
  )
}

export default App
