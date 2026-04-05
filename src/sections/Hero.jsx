import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Zap, Code, Database, Globe, Cpu, Server, Cloud, Figma, GitBranch, Star, Layers, Terminal, Box } from 'lucide-react'
import Typed from 'typed.js'
import Image from "../assets/images/bura.jpg"
import ThreeBackground from '../components/ThreeBackground'

export default function Hero() {
  const typedRef = useRef(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ minHeight: '100vh' }}
    >
      <ThreeBackground />
      
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30">
                <Sparkles size={14} className="text-purple-500 mr-2" />
                <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight"
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
              className="text-lg sm:text-xl lg:text-2xl mb-3"
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
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-5 leading-relaxed"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's bring your ideas to life with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-5"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg transition-all duration-300 text-sm"
              >
                <span className="flex items-center space-x-1">
                  <Zap size={14} />
                  <span>Get In Touch</span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2 rounded-full font-semibold backdrop-blur-sm border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm"
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-1 text-sm"
              >
                <Download size={14} />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links - Updated with your actual GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-2"
            >
              <SocialIcon href="https://github.com/biruk2116" icon={Github} label="GitHub" />
              <SocialIcon href="https://linkedin.com/in/biruk-belay" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="mailto:brukbelay61@gmail.com" icon={Mail} label="Email" />
            </motion.div>
          </motion.div>

          {/* CENTER - Image with Rotating Skill Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-3/5 flex justify-center items-center"
            style={{
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.2}px)`,
            }}
          >
            <CenterImageWithRotatingSkills />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-0.5">
          <span className="text-[10px] text-gray-500">Scroll</span>
          <ArrowDown className="text-purple-600" size={16} />
        </div>
      </motion.div>
    </section>
  )
}

// Center Image with Rotating Skill Badges
function CenterImageWithRotatingSkills() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Outer Ring - Major Technologies
  const majorTechs = [
    { name: 'MERN Stack', icon: Layers, color: '#8b5cf6', angle: 0, radius: 160 },
    { name: 'React.js', icon: Code, color: '#06b6d4', angle: 45, radius: 160 },
    { name: 'Node.js', icon: Server, color: '#10b981', angle: 90, radius: 160 },
    { name: 'Express.js', icon: Terminal, color: '#f59e0b', angle: 135, radius: 160 },
    { name: 'MongoDB', icon: Database, color: '#22c55e', angle: 180, radius: 160 },
    { name: 'Next.js', icon: Globe, color: '#a855f7', angle: 225, radius: 160 },
    { name: 'TypeScript', icon: Cpu, color: '#3b82f6', angle: 270, radius: 160 },
    { name: 'Tailwind', icon: Box, color: '#06b6d4', angle: 315, radius: 160 },
  ]

  // Middle Ring - Additional Skills
  const middleSkills = [
    { name: 'Python', icon: Server, color: '#f59e0b', angle: 30, radius: 120 },
    { name: 'GraphQL', icon: Database, color: '#ec489a', angle: 90, radius: 120 },
    { name: 'Docker', icon: Cloud, color: '#3b82f6', angle: 150, radius: 120 },
    { name: 'AWS', icon: Globe, color: '#f59e0b', angle: 210, radius: 120 },
    { name: 'PostgreSQL', icon: Database, color: '#22c55e', angle: 270, radius: 120 },
    { name: 'Redis', icon: Cpu, color: '#ef4444', angle: 330, radius: 120 },
  ]

  // Inner Ring - Soft Skills
  const softSkills = [
    { name: 'Problem Solving', angle: 0, radius: 80, color: '#8b5cf6' },
    { name: 'Team Leadership', angle: 60, radius: 80, color: '#ec489a' },
    { name: 'Agile/Scrum', angle: 120, radius: 80, color: '#06b6d4' },
    { name: 'Communication', angle: 180, radius: 80, color: '#10b981' },
    { name: 'Code Review', angle: 240, radius: 80, color: '#f59e0b' },
    { name: 'Documentation', angle: 300, radius: 80, color: '#3b82f6' },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('center-image')?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / 40
        const deltaY = (e.clientY - centerY) / 40
        setRotation({ x: deltaY * 0.3, y: deltaX * 0.3 })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      id="center-image" 
      className="relative perspective-1000"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Outer Rotating Ring - Major Technologies */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-180px] rounded-full"
      >
        {majorTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -24,
              marginTop: -24,
            }}
          >
            <motion.div
              animate={{
                x: Math.cos((tech.angle) * Math.PI / 180) * tech.radius,
                y: Math.sin((tech.angle) * Math.PI / 180) * tech.radius,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 dark:bg-dark-200/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-purple-500/40"
              >
                <tech.icon size={28} style={{ color: tech.color }} />
              </motion.div>
              <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-[11px] font-semibold whitespace-nowrap" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Middle Rotating Ring - Additional Skills (Opposite Direction) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-140px] rounded-full"
      >
        {middleSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -20,
              marginTop: -20,
            }}
          >
            <motion.div
              animate={{
                x: Math.cos((skill.angle) * Math.PI / 180) * skill.radius,
                y: Math.sin((skill.angle) * Math.PI / 180) * skill.radius,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
            >
              <div className="bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-cyan-500/30">
                <div className="flex items-center space-x-2">
                  <skill.icon size={14} style={{ color: skill.color }} />
                  <span className="text-xs font-semibold" style={{ color: skill.color }}>{skill.name}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Inner Rotating Ring - Soft Skills */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100px] rounded-full"
      >
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute z-20"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -35,
              marginTop: -14,
            }}
          >
            <motion.div
              animate={{
                x: Math.cos((skill.angle) * Math.PI / 180) * skill.radius,
                y: Math.sin((skill.angle) * Math.PI / 180) * skill.radius,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
            >
              <div className="bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md border border-purple-500/20">
                <span className="text-[11px] font-medium" style={{ color: skill.color }}>{skill.name}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Rotating Dashed Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-70px] rounded-full border-2 border-dashed border-purple-500/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-120px] rounded-full border-2 border-dashed border-cyan-500/40"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-160px] rounded-full border border-purple-500/30"
        style={{ borderWidth: '1px', borderStyle: 'dotted' }}
      />

      {/* Orbiting Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          animate={{
            x: Math.cos(Date.now() * 0.0012 + i) * 180,
            y: Math.sin(Date.now() * 0.0012 + i) * 180,
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -3,
            marginTop: -3,
          }}
        />
      ))}

      {/* Main Image Container */}
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]"
      >
        {/* Glowing Background */}
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
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 p-[3px]"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-dark-100" />
        </motion.div>
        
        {/* Profile Image */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden">
          <motion.img
            src={Image}
            alt="Biruk Belay"
            className="w-full h-full object-cover"
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Animated Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent"
          />
        </div>
        
        {/* Top Badge - MERN Stack Specialist */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full px-4 py-1.5 shadow-lg z-20"
        >
          <span className="text-xs font-bold text-white">MERN Stack Specialist</span>
        </motion.div>

        {/* Bottom Badge - Full Stack Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg border border-purple-500/30 z-20"
        >
          <span className="text-xs font-semibold text-gradient">Full Stack Developer</span>
        </motion.div>
      </motion.div>

      {/* Pulse Ring Animation on Hover */}
      {isHovering && (
        <motion.div
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-4 border-purple-500"
        />
      )}
    </div>
  )
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group relative p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
    >
      <Icon size={16} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors" />
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  )
}