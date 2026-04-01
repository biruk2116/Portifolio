import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 dark:bg-dark-100/95 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo - Left Corner with Padding */}
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="flex items-center space-x-2 group pl-0 md:pl-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                Portfolio
              </span>
            </motion.a>

            {/* Desktop Navigation - Right Side with Equal Spacing */}
            <div className="hidden md:flex items-center justify-end space-x-8 lg:space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative group"
                  whileHover={{ y: -1 }}
                >
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Animated Underline */}
                  <motion.span
                    initial={{ width: '0%', left: '50%' }}
                    animate={{ 
                      width: activeSection === item.href.substring(1) ? '100%' : '0%',
                      left: activeSection === item.href.substring(1) ? '0%' : '50%'
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
                  />
                  
                  {/* Hover Glow Effect */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg blur-sm" />
                  </span>
                </motion.a>
              ))}
              
              {/* Enhanced Dark Mode Toggle - No Text, Just Icon */}
              <motion.button
                onClick={toggleTheme}
                className="relative ml-2 p-2 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 opacity-30"
                />
                
                {/* Main Background */}
                <motion.div
                  animate={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, #f59e0b, #eab308)'
                      : 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-xl"
                />
                
                {/* Icon Container */}
                <div className="relative z-10 p-1.5">
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <Sun size={20} className="text-yellow-300 drop-shadow-lg" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: -90, scale: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <Moon size={20} className="text-white drop-shadow-lg" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Pulsing Glow Effect */}
                <motion.div
                  animate={{
                    boxShadow: theme === 'dark'
                      ? ['0 0 0px rgba(245, 158, 11, 0)', '0 0 12px rgba(245, 158, 11, 0.6)', '0 0 0px rgba(245, 158, 11, 0)']
                      : ['0 0 0px rgba(139, 92, 246, 0)', '0 0 12px rgba(139, 92, 246, 0.6)', '0 0 0px rgba(139, 92, 246, 0)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm relative overflow-hidden"
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-r from-amber-500 to-yellow-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`} />
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                      <motion.div
                        key="sun-mobile"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                      >
                        <Sun size={18} className="text-yellow-300" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon-mobile"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                      >
                        <Moon size={18} className="text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/95 dark:bg-dark-100/95 backdrop-blur-xl shadow-2xl z-50 md:hidden"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-dark-300">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600">
                    <Code2 size={20} className="text-white" />
                  </div>
                  <span className="text-xl font-bold text-gradient">Menu</span>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* Navigation Links - No Icons */}
              <div className="flex flex-col py-6 px-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center justify-between px-4 py-3 mx-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
              
              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-dark-300">
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Let's create something amazing!
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    © 2024 Portfolio
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}