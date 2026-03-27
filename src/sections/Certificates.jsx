import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import { certificatesData } from '../data/certificatesData'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Certificates() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-neon-purple/5 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 text-gradient">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500 mb-3">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {cert.description}
                  </p>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-neon-purple hover:text-neon-cyan transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}