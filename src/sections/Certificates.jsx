import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, ZoomIn, FileText, Eye } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

// Your real certificates data
export const certificatesData = [
  {
    id: 1,
    title: 'Programming Fundamentals Nanodegree',
    issuer: 'Udacity (Part of Accenture)',
    date: 'February 4, 2026',
    description: 'Comprehensive programming fundamentals certification covering core programming concepts, problem-solving, and software development basics.',
    image: '/images/certificates/ProgrammingFundamentals.png',
    pdfLink: 'https://confirm.udacity.com/MP7J29EG',
    verificationCode: 'MP7J29EG',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'AI Fundamentals',
    issuer: 'Global Chapters - Ethiopia',
    date: 'March 11, 2026',
    description: 'Artificial Intelligence fundamentals certification covering AI concepts, machine learning basics, and practical applications.',
    image: '/images/certificates/ArtificialIntelligence.png',
    pdfLink: '#', // Add your PDF link here if available
    verificationCode: 'AI-ETH-2026',
    color: 'from-blue-500 to-cyan-500'
  }
]

export default function Certificates() {
  const [ref, isVisible] = useIntersectionObserver()
  const [selectedCert, setSelectedCert] = useState(null)
  const [imageError, setImageError] = useState({})

  const handleImageError = (certId) => {
    setImageError(prev => ({ ...prev, [certId]: true }))
  }

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold">
              🏆 Achievements
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements from recognized institutions
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              index={idx} 
              isVisible={isVisible}
              onClick={() => setSelectedCert(cert)}
              onImageError={handleImageError}
              hasError={imageError[cert.id]}
            />
          ))}
        </div>

        {/* Modal for Certificate View */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900 to-dark-100 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <X size={24} />
                </button>
                
                {/* Certificate Image */}
                <div className="relative w-full bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full max-h-[60vh] object-contain"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x600/1a1a2e/8b5cf6?text=Certificate+Preview'
                    }}
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Certificate Details */}
                <div className="p-6 bg-white dark:bg-dark-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient mb-2">{selectedCert.title}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">
                          {selectedCert.issuer}
                        </span>
                        <span className="text-sm text-gray-500">{selectedCert.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={20} className="text-purple-500" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {selectedCert.description}
                  </p>
                  
                  {selectedCert.verificationCode && (
                    <div className="mb-4 p-3 bg-gray-100 dark:bg-dark-200 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Verification Code:</p>
                      <code className="text-sm font-mono text-purple-600 dark:text-purple-400">
                        {selectedCert.verificationCode}
                      </code>
                    </div>
                  )}
                  
                  {/* View Certificate Button */}
                  {selectedCert.pdfLink && selectedCert.pdfLink !== '#' && (
                    <motion.a
                      href={selectedCert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      <FileText size={18} />
                      <span>View Certificate</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                  
                  {(!selectedCert.pdfLink || selectedCert.pdfLink === '#') && (
                    <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-dark-300 text-gray-500 cursor-not-allowed">
                      <FileText size={18} />
                      <span>Certificate Link Coming Soon</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Certificate Card Component
function CertificateCard({ cert, index, isVisible, onClick, onImageError, hasError }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Animated Border Glow */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500`} />
        
        {/* Card Content */}
        <div className="relative bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-300 shadow-xl">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
            {!hasError ? (
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
                onError={() => onImageError(cert.id)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
                <div className="text-center">
                  <Award size={48} className="text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Certificate Preview</p>
                </div>
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-md"
              >
                <Eye size={24} className="text-white" />
              </motion.div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-purple-600" />
                <span className="text-xs text-gray-500">{cert.date}</span>
              </div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
            </div>
            
            <h3 className="font-bold text-lg mb-1 text-gradient line-clamp-1">
              {cert.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {cert.issuer}
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
              {cert.description}
            </p>
            
            {/* View Button */}
            <motion.div
              whileHover={{ x: 5 }}
              className="mt-4 flex items-center space-x-1 text-purple-600 dark:text-purple-400 text-sm font-medium"
            >
              <span>Click to view</span>
              <ExternalLink size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}