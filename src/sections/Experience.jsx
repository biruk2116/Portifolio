import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code, Rocket } from 'lucide-react'
import { experienceData } from '../data/experienceData'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  const { scrollYProgress } = useScroll()
  
  // Parallax effect for timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Icons for different experience types
  const getIcon = (title) => {
    if (title.includes('Senior')) return <Rocket className="text-neon-purple" size={20} />
    if (title.includes('Frontend')) return <Code className="text-neon-cyan" size={20} />
    if (title.includes('Junior')) return <Users className="text-neon-pink" size={20} />
    return <Briefcase className="text-neon-purple" size={20} />
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-cyan/5" />
      
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
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-purple text-sm font-semibold">
              Career Journey
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple"
            initial={{ height: 0 }}
            animate={isVisible ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Animated Pulse Effect on Line */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-neon-purple"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -left-1 bottom-0 w-2 h-2 rounded-full bg-neon-cyan"
            />
          </motion.div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <TimelineItem 
                key={exp.id} 
                experience={exp} 
                index={idx} 
                isVisible={isVisible}
                getIcon={getIcon}
              />
            ))}
          </div>
        </div>

        {/* Achievement Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((achievement, idx) => (
            <AchievementCard key={achievement.label} achievement={achievement} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Timeline Item Component
function TimelineItem({ experience, index, isVisible, getIcon }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.5 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot with Pulse Animation */}
      <motion.div 
        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan blur-md"
          />
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center shadow-lg">
            {getIcon(experience.title)}
          </div>
        </div>
      </motion.div>
      
      {/* Content Card */}
      <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${
        isEven ? 'md:pr-12' : 'md:pl-12'
      }`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group relative"
        >
          {/* Glow Effect on Hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
          
          <div className="relative glass-card p-6 overflow-hidden">
            {/* Animated Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/0 to-neon-cyan/0 group-hover:from-neon-purple/5 group-hover:via-neon-purple/5 group-hover:to-neon-cyan/5 transition-all duration-500" />
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gradient mb-1 group-hover:translate-x-1 transition-transform">
                  {experience.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {experience.company}
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20"
              >
                <Award size={20} className="text-neon-purple" />
              </motion.div>
            </div>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
            </div>
            
            {/* Responsibilities */}
            <div className="space-y-2">
              {experience.responsibilities.map((resp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-start space-x-2 group/resp"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="mt-1 text-neon-purple"
                  >
                    <TrendingUp size={14} />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover/resp:translate-x-1 transition-transform">
                    {resp}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Element */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 opacity-10"
            >
              <Briefcase size={80} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Achievement Card Component
function AchievementCard({ achievement, index }) {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.5 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass-card p-6 text-center group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="inline-block p-3 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 mb-3"
      >
        <achievement.icon className="text-neon-purple" size={28} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
        className="text-2xl sm:text-3xl font-bold text-gradient mb-1"
      >
        {achievement.value}
      </motion.div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</p>
    </motion.div>
  )
}

// Achievements Data
const achievements = [
  { icon: Award, value: '10+', label: 'Projects Completed' },
  { icon: Users, value: '15+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '40%', label: 'Performance Increase' },
  { icon: Code, value: '50k+', label: 'Lines of Code' },
]