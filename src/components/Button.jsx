import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', onClick, disabled = false, type = 'button' }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden'
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-lg hover:shadow-neon-purple/50',
    secondary: 'glass-effect text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-dark-300/50',
    outline: 'border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white'
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  )
}