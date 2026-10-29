import React from 'react'
import About from './About'
import Hero from './Hero'
// import Features from './Features'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <>
    <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      {/* <Features/> */}
      <Footer/>
      </>
    </div>
  )
}

export default Home