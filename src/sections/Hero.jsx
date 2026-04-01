import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'UI/UX Enthusiast',
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

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-purple border border-neon-purple/30">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient animate-gradient">Biruk Belay</span>
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
                className="text-neon-purple font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's bring your ideas to life with cutting-edge technology and creative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-semibold glass-effect text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-dark-300/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-lg font-semibold border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Download size={18} />
                  <span>Resume</span>
                </span>
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

          {/* Right Side - Photo/Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Animated Background Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan blur-2xl opacity-50"
              />
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink p-[2px] animate-spin-slow" 
                     style={{ animation: 'spin 8s linear infinite' }}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-100" />
                </div>
                
                {/* Profile Image */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20">
                  <img
                    src="https://ui-avatars.com/api/?background=8b5cf6&color=fff&bold=true&size=400&name=John+Doe&length=2&fontsize=0.5"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full flex items-center justify-center shadow-lg"
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
                  <div className="text-2xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-8 bottom-1/4 bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg rounded-xl p-3 shadow-lg hidden lg:block"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-neon-purple" size={32} />
      </motion.div>

      {/* Add custom animation for spinning border */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
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
      className="group relative p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300"
      aria-label={label}
    >
      <Icon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-neon-purple transition-colors" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  )
}