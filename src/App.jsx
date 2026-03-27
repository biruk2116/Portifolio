import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import ThreeBackground from './components/ThreeBackground'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative min-h-screen">
        <ThreeBackground />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App