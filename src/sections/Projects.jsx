import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative glass-card overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                    
                    <motion.div
                      animate={{ x: hoveredId === project.id ? 5 : 0 }}
                      className="text-neon-purple"
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}