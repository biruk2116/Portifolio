import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative input, feel free to reach out!
              </p>
              
              <div className="space-y-6 mb-8">
                <ContactInfo icon={Mail} text="john.doe@example.com" label="Email" />
                <ContactInfo icon={Phone} text="+1 (555) 123-4567" label="Phone" />
                <ContactInfo icon={MapPin} text="San Francisco, CA, USA" label="Location" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-neon-purple focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-neon-purple focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-neon-purple focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-neon-purple focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <Send size={18} />
                    <span>Send Message</span>
                  </span>
                )}
              </motion.button>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon: Icon, text, label }) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="p-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </div>
  )
}