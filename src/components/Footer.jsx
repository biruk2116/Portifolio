import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-12 glass-effect mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <SocialIcon href="https://github.com" icon={Github} />
            <SocialIcon href="https://linkedin.com" icon={Linkedin} />
            <SocialIcon href="https://twitter.com" icon={Twitter} />
            <SocialIcon href="mailto:john@example.com" icon={Mail} />
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Made with{' '}
              <Heart size={16} className="inline text-red-500 fill-current animate-pulse" />{' '}
              by John Doe
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full hover:bg-neon-purple/10 transition-colors duration-300"
    >
      <Icon size={20} className="text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-colors" />
    </motion.a>
  )
}