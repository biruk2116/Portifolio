import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experienceData } from '../data/experienceData'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-purple to-neon-cyan" />
          
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <TimelineItem key={exp.id} experience={exp} index={idx} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ experience, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan z-10">
        <div className="absolute inset-0 rounded-full bg-neon-purple animate-ping opacity-75" />
      </div>
      
      {/* Content */}
      <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
        <div className={`glass-card p-6 ${
          index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
        }`}>
          <div className="flex items-center space-x-2 mb-2">
            <Briefcase size={18} className="text-neon-purple" />
            <h3 className="text-xl font-bold text-gradient">{experience.title}</h3>
          </div>
          <p className="text-lg font-semibold mb-2">{experience.company}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </span>
          </div>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start space-x-2">
                <span className="text-neon-purple mt-1">▹</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}