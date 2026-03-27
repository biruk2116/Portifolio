import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../data/skillsData'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-neon-purple/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-neon-purple">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}