import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, 
  Instagram, CheckCircle, AlertCircle, Loader, User, 
  MessageSquare, AtSign, Sparkles, ArrowRight
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const formRef = useRef()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the form errors', {
        duration: 3000,
        icon: '⚠️',
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Check if EmailJS is configured
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      
      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS is not configured. Please check your .env file.')
      }
      
      console.log('Sending email with:', {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 10) + '...'
      })
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'John Doe',
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        reply_to: formData.email,
      }
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('Email sent successfully:', response)
      
      toast.success('Message sent successfully! I will get back to you soon.', {
        duration: 5000,
        icon: '🎉',
        style: {
          background: '#10b981',
          color: '#fff',
        },
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Error sending email:', error)
      
      let errorMessage = 'Failed to send message. '
      
      if (error.text) {
        errorMessage += error.text
      } else if (error.message) {
        errorMessage += error.message
      } else {
        errorMessage += 'Please check your EmailJS configuration.'
      }
      
      toast.error(errorMessage, {
        duration: 6000,
        icon: '❌',
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm currently available for freelance work and full-time positions. 
                Feel free to reach out through any of these channels.
              </p>
              
              <div className="space-y-6 mb-8">
                <ContactInfo 
                  icon={Mail} 
                  text="john.doe@example.com" 
                  label="Email" 
                  link="mailto:john.doe@example.com"
                />
                <ContactInfo 
                  icon={Phone} 
                  text="+1 (555) 123-4567" 
                  label="Phone" 
                  link="tel:+15551234567"
                />
                <ContactInfo 
                  icon={MapPin} 
                  text="San Francisco, CA, USA" 
                  label="Location" 
                />
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full glass-effect hover:shadow-lg transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={onSubmit} className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
              
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-dark-300 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                      } focus:border-neon-purple focus:outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-dark-300 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                      } focus:border-neon-purple focus:outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-neon-purple focus:outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                
                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-300 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                    } focus:border-neon-purple focus:outline-none transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                
                {/* Character Counter */}
                <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                  {formData.message.length} / 500 characters
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg font-semibold bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Loader size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send size={18} />
                      <span>Send Message</span>
                      <ArrowRight size={18} />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon: Icon, text, label, link }) {
  const content = (
    <div className="flex items-center space-x-4 group">
      <div className="p-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:scale-110 transition-all duration-300">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-700 dark:text-gray-300">{text}</p>
      </div>
    </div>
  )
  
  return link ? <a href={link}>{content}</a> : content
}