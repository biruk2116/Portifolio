import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Code, Rocket, Sparkles, Star, ShoppingCart, Bus, Film, GraduationCap, Brain } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export const experienceData = [
  {
    id: 1,
    title: 'Full Stack Developer - Online Food Ordering',
    company: 'Personal Project',
    period: '2025 - Present',
    location: 'Remote',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    projectLink: 'https://github.com/biruk2116/Online-Food-Ordering',
    achievements: [
      '🏆 Built complete food ordering platform with React and Node.js',
      '⭐ Implemented user authentication and admin dashboard',
      '📈 Optimized performance achieving 90+ Lighthouse scores',
      '🎨 Created responsive UI with Tailwind CSS'
    ],
    responsibilities: [
      'Developed full-stack food ordering application with modern tech stack',
      'Implemented secure user authentication and authorization system',
      'Created admin dashboard for menu and order management',
      'Built responsive user interface for seamless mobile experience',
      'Integrated real-time order tracking functionality',
      'Optimized database queries for faster order processing'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth']
  },
  {
    id: 2,
    title: 'Bus Ticketing System Developer',
    company: 'Personal Project',
    period: '2025 - Present',
    location: 'Remote',
    icon: Bus,
    color: 'from-blue-500 to-cyan-500',
    projectLink: 'https://github.com/biruk2116/Bus-ticketing',
    achievements: [
      '🚀 Created complete bus ticketing platform with seat selection',
      '⭐ Implemented dynamic seat booking system',
      '📦 Developed admin panel for schedule management',
      '🎯 Built with modern MERN stack architecture'
    ],
    responsibilities: [
      'Designed and developed bus ticketing system from scratch',
      'Implemented interactive seat selection interface',
      'Created booking management system with payment integration',
      'Built admin dashboard for bus schedule management',
      'Developed real-time seat availability tracking',
      'Implemented user booking history and ticket generation'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs']
  },
  {
    id: 3,
    title: 'Movie Discovery App Developer',
    company: 'Personal Project',
    period: '2025 - Present',
    location: 'Remote',
    icon: Film,
    color: 'from-green-500 to-emerald-500',
    projectLink: 'https://github.com/biruk2116/Movie-app',
    achievements: [
      '🎬 Built feature-rich movie app with TMDB API integration',
      '⭐ Implemented search and filter functionality',
      '📊 Created dynamic movie details page with ratings',
      '🎨 Designed modern glassmorphism UI'
    ],
    responsibilities: [
      'Developed movie discovery platform using TMDB API',
      'Implemented search functionality with debouncing',
      'Created dynamic movie details pages with cast info',
      'Built responsive design for all screen sizes',
      'Integrated movie ratings and reviews system',
      'Implemented category filtering and sorting'
    ],
    technologies: ['React.js', 'Vite', 'TMDB API', 'Tailwind CSS', 'Axios', 'React Router']
  },
  {
    id: 4,
    title: 'Programming Fundamentals Nanodegree',
    company: 'Udacity (Part of Accenture)',
    period: 'February 4, 2026',
    location: 'Online',
    icon: GraduationCap,
    color: 'from-orange-500 to-red-500',
    verificationLink: 'https://confirm.udacity.com/MP7J29EG',
    achievements: [
      '🎓 Completed comprehensive programming fundamentals program',
      '⭐ Mastered core programming concepts and problem-solving',
      '📜 Official Udacity Nanodegree certification',
      '💡 Developed strong foundation in software development'
    ],
    responsibilities: [
      'Completed intensive programming fundamentals curriculum',
      'Mastered core programming concepts and algorithms',
      'Developed problem-solving and debugging skills',
      'Built multiple projects applying learned concepts',
      'Learned best practices in software development',
      'Earned official Udacity Nanodegree certification'
    ],
    technologies: ['Programming Fundamentals', 'Problem Solving', 'Algorithms', 'Data Structures', 'Software Development']
  },
  {
    id: 5,
    title: 'Artificial Intelligence Fundamentals',
    company: 'Global Chapters - Ethiopia',
    period: 'March 11, 2026',
    location: 'Addis Ababa, Ethiopia',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    verificationLink: '#',
    achievements: [
      '🤖 Completed AI fundamentals certification program',
      '⭐ Learned AI concepts and machine learning basics',
      '🎯 Applied AI principles to real-world problems',
      '📜 Recognized by Global Chapters Ethiopia'
    ],
    responsibilities: [
      'Completed comprehensive AI fundamentals training',
      'Learned core AI concepts and applications',
      'Studied machine learning algorithms and techniques',
      'Explored ethical considerations in AI development',
      'Applied AI principles to problem-solving scenarios',
      'Earned certification from Global Chapters Ethiopia'
    ],
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Python Basics', 'Data Analysis', 'Neural Networks']
  }
]

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      
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
              💼 Projects & Achievements
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              My Work & Learning Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of my projects, certifications, and continuous learning journey
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-600 to-purple-600"
          />
          
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
      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-md"
          />
          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg`}>
            <experience.icon size={20} className="text-white" />
          </div>
        </div>
      </motion.div>
      
      {/* Content Card */}
      <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${
        isEven ? 'md:pr-12' : 'md:pl-12'
      }`}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
          
          <div className="relative bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-2xl p-6 overflow-hidden border border-gray-200 dark:border-dark-300">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/5 group-hover:via-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500" />
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gradient mb-1 group-hover:translate-x-1 transition-transform">
                  {experience.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                  <span>{experience.company}</span>
                  {experience.projectLink && (
                    <motion.a
                      href={experience.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-purple-500 hover:text-purple-400"
                    >
                      <Code size={14} />
                    </motion.a>
                  )}
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
              >
                <Award size={20} className="text-purple-600" />
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
            
            {/* Technologies */}
            {experience.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
            
            {/* Responsibilities */}
            <div className="space-y-2 mb-4">
              {experience.responsibilities.map((resp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="flex items-start space-x-2 group/resp"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="mt-1 text-purple-600"
                  >
                    <TrendingUp size={14} />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {resp}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Achievements */}
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
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 text-purple-600"
                  >
                    {achievement}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Verification Link for Certifications */}
            {experience.verificationLink && experience.verificationLink !== '#' && (
              <motion.a
                href={experience.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-4 inline-flex items-center space-x-2 text-sm text-purple-600 hover:text-purple-500 transition"
              >
                <span>Verify Certificate</span>
                <Award size={14} />
              </motion.a>
            )}
            
            {/* Decorative Element */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 opacity-10"
            >
              <Briefcase size={60} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}