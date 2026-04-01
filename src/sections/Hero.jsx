import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Code, Zap } from 'lucide-react'
import Typed from 'typed.js'
import Image from "../assets/images/bura.jpg"
import ThreeBackground from '../components/ThreeBackground'

export default function Hero() {
  const typedRef = useRef(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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
      {/* 3D Background */}
      <ThreeBackground />
      
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content with Parallax */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Animated Badge */}
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

            {/* Main Heading with Mouse Tilt */}
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

            {/* Typing Animation */}
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl leading-relaxed"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's bring your ideas to life with cutting-edge technology and creative solutions.
            </motion.p>

            {/* CTA Buttons with Glow Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <GlowButton
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                icon={Zap}
              >
                Get In Touch
              </GlowButton>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-semibold backdrop-blur-sm border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
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

          {/* Right Side - Animated Profile with Mouse Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center"
            style={{
              transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.3}px)`,
            }}
          >
            <AnimatedProfileImage />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

// Glow Button Component
function GlowButton({ children, onClick, icon: Icon }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white transition-all duration-300 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
      <span className="relative z-10 flex items-center space-x-2">
        {Icon && <Icon size={18} />}
        <span>{children}</span>
      </span>
    </motion.button>
  )
}

// Animated Profile Image Component
function AnimatedProfileImage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group">
      {/* Animated Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-500/30"
      />
      
      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-2xl"
      />
      
      {/* Main Image Container */}
      <div
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating Gradient Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 p-[2px]"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-dark-100" />
        </motion.div>
        
        {/* Profile Image */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
          <img
            src={Image}
            alt="Biruk Belay"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-2xl">🚀</span>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-xl">💡</span>
        </motion.div>
      </div>
      
      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg rounded-xl p-3 shadow-lg hidden lg:block"
      >
        <div className="text-center">
          <Code size={24} className="text-purple-600 mx-auto mb-1" />
          <div className="text-xs font-semibold text-gradient">Full Stack</div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute -right-8 bottom-1/4 bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg rounded-xl p-3 shadow-lg hidden lg:block"
      >
        <div className="text-center">
          <Zap size={24} className="text-cyan-600 mx-auto mb-1" />
          <div className="text-xs font-semibold text-gradient">MERN Stack</div>
        </div>
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
      aria-label={label}
    >
      <Icon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  )
}