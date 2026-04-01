import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Zap, Code, Star } from 'lucide-react'
import Typed from 'typed.js'
import Image from "../assets/images/bura.jpg"
import ThreeBackground from '../components/ThreeBackground'

export default function Hero() {
  const typedRef = useRef(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'Computer Science Student',
        'Problem Solver',
        'Tech Innovator',
        'Open Source Contributor'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })
    return () => typed.destroy()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30">
                <span className="flex items-center space-x-2">
                  <Sparkles size={14} className="text-purple-500" />
                  <span className="text-sm text-purple-600 dark:text-purple-400">Welcome to my portfolio</span>
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Biruk Belay
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl mb-6"
            >
              I'm a{' '}
              <span
                ref={typedRef}
                className="text-purple-600 dark:text-purple-400 font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl leading-relaxed"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's bring your ideas to life with cutting-edge technology and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap size={18} />
                  <span>Get In Touch</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 rounded-full font-semibold backdrop-blur-sm border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              <SocialIcon href="https://github.com/biruk2116" icon={Github} label="GitHub" />
              <SocialIcon href="https://linkedin.com/in/biruk-belay" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="mailto:brukbelay61@gmail.com" icon={Mail} label="Email" />
            </motion.div>
          </motion.div>

          {/* Right Side - Advanced Animated Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center"
            style={{
              transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.3}px)`,
            }}
            onMouseEnter={() => setIsHoveringPhoto(true)}
            onMouseLeave={() => setIsHoveringPhoto(false)}
          >
            <AdvancedAnimatedPhoto isHovering={isHoveringPhoto} />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll Down</span>
          <ArrowDown className="text-purple-600" size={24} />
        </div>
      </motion.div>
    </section>
  )
}

// Advanced Animated Photo Component
function AdvancedAnimatedPhoto({ isHovering }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Create floating particles around the photo
    const newParticles = []
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        angle: (i / 12) * Math.PI * 2,
        radius: 120 + Math.random() * 40,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 2,
      })
    }
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('photo-container')?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / 30
        const deltaY = (e.clientY - centerY) / 30
        setRotation({ x: deltaY * 0.5, y: deltaX * 0.5 })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div id="photo-container" className="relative group perspective-1000">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: '50%',
            top: '50%',
            marginLeft: -particle.size / 2,
            marginTop: -particle.size / 2,
          }}
          animate={{
            x: Math.cos(Date.now() * 0.001 + particle.delay) * particle.radius,
            y: Math.sin(Date.now() * 0.001 + particle.delay) * particle.radius,
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] rounded-full border-2 border-dashed border-purple-500/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-40px] rounded-full border-2 border-dashed border-cyan-500/30"
      />
      
      {/* Main Photo Container */}
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
      >
        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: isHovering ? 1.1 : 1,
            opacity: isHovering ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl"
        />
        
        {/* Rotating Gradient Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 p-[3px]"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-dark-100" />
        </motion.div>
        
        {/* Profile Image with Animated Border */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden">
          <motion.img
            src={Image}
            alt="Biruk Belay"
            className="w-full h-full object-cover"
            animate={{
              scale: isHovering ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Animated Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent"
          />
        </div>
        
        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl z-20"
        >
          <Code size={28} className="text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl z-20"
        >
          <Star size={24} className="text-white" />
        </motion.div>
        
        {/* Pulse Ring on Hover */}
        {isHovering && (
          <motion.div
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-4 border-purple-500"
          />
        )}
      </motion.div>
    </div>
  )
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
    >
      <Icon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  )
}