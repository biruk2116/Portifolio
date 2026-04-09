import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, 
  Instagram, CheckCircle, AlertCircle, Loader, User, 
  MessageSquare, AtSign, Sparkles, ArrowRight, X,
  Award, Code, Briefcase, Clock, Users, Reply
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageStatus, setMessageStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [fieldSuccess, setFieldSuccess] = useState({})

  // Configuration
  const YOUR_EMAIL = 'brukbelay61@gmail.com'
  
  // Get these from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const EMAILJS_AUTO_REPLY_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      console.log('✅ EmailJS initialized')
    }
  }, [])

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Invalid email address'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.length < 10) return 'Message must be at least 10 characters'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    const error = validateField(name, value)
    setFieldErrors(prev => ({ ...prev, [name]: error }))
    
    if (!error && value.trim()) {
      setFieldSuccess(prev => ({ ...prev, [name]: true }))
      setTimeout(() => {
        setFieldSuccess(prev => ({ ...prev, [name]: false }))
      }, 2000)
    } else {
      setFieldSuccess(prev => ({ ...prev, [name]: false }))
    }
  }

  const validateForm = () => {
    const errors = {}
    let isValid = true
    
    const nameError = validateField('name', formData.name)
    if (nameError) { errors.name = nameError; isValid = false }
    
    const emailError = validateField('email', formData.email)
    if (emailError) { errors.email = emailError; isValid = false }
    
    const messageError = validateField('message', formData.message)
    if (messageError) { errors.message = messageError; isValid = false }
    
    setFieldErrors(errors)
    return isValid
  }

  const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    setMessageStatus(null)
    
    if (!validateForm()) {
      setMessageStatus({
        type: 'error',
        title: 'Validation Error',
        message: 'Please fix the errors in the form.',
        details: Object.values(fieldErrors).join(', ')
      })
      toast.error('Please fix the errors in the form')
      return
    }
    
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setMessageStatus({
        type: 'error',
        title: 'Configuration Error',
        message: 'EmailJS is not configured properly.',
        details: 'Please check your .env file'
      })
      return
    }
    
    setIsSubmitting(true)
    
    const senderEmail = formData.email
    const senderName = formData.name
    
    setMessageStatus({
      type: 'info',
      title: 'Sending Message...',
      message: `Sending your message to ${YOUR_EMAIL}`,
      details: `From: ${senderEmail}\nTo: ${YOUR_EMAIL}`
    })
    
    try {
      // Send email to YOU
      const ownerParams = {
        to_email: YOUR_EMAIL,
        from_name: senderName,
        from_email: senderEmail,
        reply_to: senderEmail,
        subject: formData.subject || `Message from ${senderName}`,
        message: formData.message,
      }
      
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, ownerParams, EMAILJS_PUBLIC_KEY)
      
      // Send AUTO-REPLY to sender
      if (EMAILJS_AUTO_REPLY_ID) {
        const autoReplyParams = {
          to_email: senderEmail,
          to_name: senderName,
          from_name: 'John Doe',
          from_email: YOUR_EMAIL,
          reply_to: YOUR_EMAIL,
          subject: `Thank you for contacting me!`,
          message: `Dear ${senderName},\n\nThank you for reaching out! I have received your message and will get back to you within 24 hours.\n\nYour Message: ${formData.message}\n\nBest regards,\nJohn Doe\n${YOUR_EMAIL}`
        }
        
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY_ID, autoReplyParams, EMAILJS_PUBLIC_KEY)
      }
      
      setMessageStatus({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: `Your message has been sent to ${YOUR_EMAIL}`,
        details: `To: ${YOUR_EMAIL}\nFrom: ${senderName} (${senderEmail})\nTime: ${getCurrentTime()}`
      })
      
      toast.success('Message sent successfully!')
      
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFieldErrors({})
      setFieldSuccess({})
      
      setTimeout(() => {
        setMessageStatus(null)
      }, 5000)
      
    } catch (error) {
      console.error('Error:', error)
      
      setMessageStatus({
        type: 'error',
        title: 'Failed to Send Message',
        message: error.text || 'Failed to send message',
        details: `Error: ${error.text || error.message}`
      })
      
      toast.error('Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, text: YOUR_EMAIL, label: 'Email', link: `mailto:${YOUR_EMAIL}`, gradient: 'from-purple-500 to-pink-500' },

    { icon: Phone, text: '+251-961733380', label: 'Phone', link: 'tel:+251-961733380', gradient: 'from-orange-500 to-red-500' },
    { icon: Clock, text: '24/7 Available', label: 'Response', gradient: 'from-cyan-500 to-blue-500' },
  ]

  const stats = [
    { icon: Code, value: '2+', label: 'Projects' },
    { icon: Award, value: '3+', label: 'Certifications' },
    { icon: Briefcase, value: '1+', label: 'Years Exp' },
  
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/biruk2116', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://linkedin.com/in/biruk-belay', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/bu_ye21', label: 'Instagram', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <Toaster position="top-center" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 text-sm font-semibold">
              <Sparkles className="inline w-4 h-4 mr-1" />
              Get In Touch
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Fill out the form below. I'll receive your message and respond within 24 hours.
          </p>
        </div>

        {/* Status Message */}
        {messageStatus && (
          <div className={`mb-8 p-4 rounded-xl text-white ${
            messageStatus.type === 'success' ? 'bg-green-500' : 
            messageStatus.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{messageStatus.title}</h4>
                <p className="text-sm opacity-90">{messageStatus.message}</p>
                {messageStatus.details && (
                  <p className="text-xs mt-1 opacity-75 whitespace-pre-wrap">{messageStatus.details}</p>
                )}
              </div>
              <button onClick={() => setMessageStatus(null)} className="p-1 hover:bg-white/20 rounded">
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={info.label}
                  className="bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 border border-gray-200 dark:border-dark-300"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${info.gradient}`}>
                    <info.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-sm font-medium text-gray-800 dark:text-white hover:text-purple-600">
                        {info.text}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{info.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-200 dark:border-dark-300"
                >
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 inline-block mb-1">
                    <stat.icon size={14} className="text-white" />
                  </div>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-dark-300">
              <h4 className="text-sm font-semibold mb-3">Connect With Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-gray-100 dark:bg-dark-300 hover:shadow-lg transition-all ${social.color}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div>
            <form onSubmit={onSubmit} className="bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-dark-300">
              <h3 className="text-xl font-bold mb-5 text-purple-600 dark:text-purple-400">Send a Message</h3>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white dark:bg-dark-300 border ${
                        fieldErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                      } focus:border-purple-500 focus:outline-none`}
                      placeholder="Your name"
                    />
                    {fieldSuccess.name && <CheckCircle size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />}
                  </div>
                  {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                </div>
                
                {/* Email */}
                <div>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white dark:bg-dark-300 border ${
                        fieldErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                      } focus:border-purple-500 focus:outline-none`}
                      placeholder="your@email.com"
                    />
                    {fieldSuccess.email && <CheckCircle size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />}
                  </div>
                  {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                </div>
                
                {/* Subject */}
                <div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg bg-white dark:bg-dark-300 border border-gray-300 dark:border-dark-400 focus:border-purple-500 focus:outline-none"
                      placeholder="Subject (optional)"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 text-sm rounded-lg bg-white dark:bg-dark-300 border resize-none ${
                      fieldErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-400'
                    } focus:border-purple-500 focus:outline-none`}
                    placeholder="Tell me about your project..."
                  />
                  <div className="flex justify-between mt-1">
                    {fieldErrors.message && <p className="text-red-500 text-xs">{fieldErrors.message}</p>}
                    <span className="text-xs text-gray-400 ml-auto">{formData.message.length}/500</span>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <><Loader size={18} className="animate-spin" /><span>Sending...</span></>
                  ) : (
                    <><Send size={18} /><span>Send Message</span><ArrowRight size={16} /></>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-500">
                  I'll respond within 24 hours. Check your email for confirmation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}