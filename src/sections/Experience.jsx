import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Code, Rocket, Sparkles, Star } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const experienceData = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    achievements: ['🏆 Employee of the Month - 3x', '⭐ Best Innovation Award 2023', '📈 200% Revenue Growth'],
    responsibilities: [
      'Lead development of 5+ major web applications using React and Node.js, serving 100k+ users',
      'Mentored 3 junior developers, improving team productivity by 40%',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Optimized application performance achieving 95+ Lighthouse scores'
    ]
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    location: 'New York, NY',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    achievements: ['🎯 Client Satisfaction: 4.9/5', '⚡ 50% Load Time Reduction', '🎨 Design System Creator'],
    responsibilities: [
      'Built responsive web applications for 15+ clients across various industries',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Integrated RESTful APIs and third-party services',
      'Maintained and improved existing codebase quality'
    ]
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Startup Studio',
    period: '2019 - 2020',
    location: 'Austin, TX',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-500',
    achievements: ['🚀 Fastest Learner Award', '📦 10+ Project Launches', '🧪 Automated Testing Suite'],
    responsibilities: [
      'Developed and maintained multiple client websites',
      'Participated in agile development processes',
      'Wrote clean, maintainable code with documentation',
      'Assisted in debugging across different browsers'
    ]
  }
]

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
            initial={{ x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), y: Math.random() * 1000 }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

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
              💼 Career Journey
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey across amazing companies
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-purple-600"
          />
          
          <div className="space-y-16">
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
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: index * 0.1 }}
        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-md"
          />
          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg`}>
            <experience.icon size={20} className="text-white" />
          </div>
        </div>
      </motion.div>

      <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
          <div className="relative bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-dark-300 overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gradient mb-1">{experience.title}</h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{experience.company}</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
              >
                <Award size={20} className="text-purple-600" />
              </motion.div>
            </div>

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

            <div className="space-y-2 mb-4">
              {experience.responsibilities.map((resp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <TrendingUp size={14} className="mt-1 text-purple-600" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{resp}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-300">
              <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center space-x-1">
                <Star size={14} />
                <span>Key Achievements</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600"
                  >
                    {achievement}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}