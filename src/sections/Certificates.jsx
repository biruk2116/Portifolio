import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const certificatesData = [
  {
    id: 1,
    title: 'Advanced React & Redux',
    issuer: 'Meta',
    date: '2024',
    description: 'Comprehensive course on React hooks, state management, and performance optimization.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Full Stack Development',
    issuer: 'Coursera',
    date: '2023',
    description: 'Complete web development bootcamp covering MERN stack and modern practices.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    description: 'Cloud architecture and AWS services certification.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    date: '2023',
    description: 'Advanced ML algorithms and practical applications.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: '2022',
    description: 'User-centered design principles and prototyping.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    title: 'TypeScript Mastery',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Advanced TypeScript patterns and best practices.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    link: '#',
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function Certificates() {
  const [ref, isVisible] = useIntersectionObserver()
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Professional certifications and achievements
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              index={idx} 
              isVisible={isVisible}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white dark:bg-dark-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gradient mb-2">{selectedCert.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">{selectedCert.issuer} • {selectedCert.date}</p>
                  <p className="text-gray-600 dark:text-gray-300">{selectedCert.description}</p>
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 text-purple-600 hover:text-purple-500 transition"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CertificateCard({ cert, index, isVisible, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
        <div className="relative bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-300">
          <div className="relative h-48 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                <ZoomIn size={24} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Award size={18} className="text-purple-600" />
              <span className="text-xs text-gray-500">{cert.date}</span>
            </div>
            <h3 className="font-bold text-lg mb-1 text-gradient">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">{cert.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}