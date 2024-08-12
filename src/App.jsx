import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <img src='cir.png' className='cir' alt='' />
   
    <Navbar />
    <Hero />
    <img src='cir2.png' className='cir2' alt='' />
 
    </>
  )
}

export default App
