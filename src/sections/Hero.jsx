import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan blur-xl"
              />
              <img
                src="https://ui-avatars.com/api/?background=8b5cf6&color=fff&bold=true&size=150&name=John+Doe"
                alt="John Doe"
                className="relative w-32 h-32 rounded-full border-4 border-neon-purple object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="text-gradient animate-gradient">John Doe</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6"
          >
            I'm a{' '}
            <span
              ref={typedRef}
              className="text-neon-purple font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Passionate about creating beautiful, functional, and user-centered digital experiences.
            Let's bring your ideas to life with cutting-edge technology and creative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-lg font-semibold glass-effect text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-dark-300/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-lg font-semibold border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Download size={18} />
                <span>Resume</span>
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
            <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
            <SocialIcon href="mailto:john@example.com" icon={Mail} label="Email" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-neon-purple" size={32} />
      </motion.div>
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
      <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-neon-purple transition-colors" />
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  )
}