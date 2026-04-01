import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Terminal, Layout, Server, Cloud, Figma, GitBranch, Smartphone, Box, Zap } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const skillsData = [
  {
    category: "💻 Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "JavaScript/TypeScript", level: 92, logo: "📜", description: "ES6+, TypeScript, Modern JS" },
      { name: "Python", level: 85, logo: "🐍", description: "Django, FastAPI, Data Analysis" },
      { name: "Java", level: 75, logo: "☕", description: "Spring Boot, Android" },
      { name: "Go", level: 70, logo: "🐹", description: "Microservices, APIs" }
    ]
  },
  {
    category: "🌐 Web Development",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    skills: [
      { name: "React.js", level: 95, logo: "⚛️", description: "Hooks, Redux, Next.js" },
      { name: "Vue.js", level: 80, logo: "💚", description: "Vuex, Nuxt.js" },
      { name: "Node.js", level: 88, logo: "🟢", description: "Express, NestJS" },
      { name: "Tailwind CSS", level: 90, logo: "🎨", description: "Responsive Design, Animations" }
    ]
  },
  {
    category: "🛠️ Tools & Platforms",
    icon: Terminal,
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    skills: [
      { name: "Git & GitHub", level: 92, logo: "🐙", description: "CI/CD, Actions, Version Control" },
      { name: "Docker", level: 82, logo: "🐳", description: "Containerization, Docker Compose" },
      { name: "AWS", level: 78, logo: "☁️", description: "EC2, S3, Lambda, CloudFront" },
      { name: "Figma", level: 85, logo: "🎯", description: "UI/UX Design, Prototyping" }
    ]
  },
  {
    category: "🗄️ Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    skills: [
      { name: "PostgreSQL", level: 85, logo: "🐘", description: "Complex Queries, Optimization" },
      { name: "MongoDB", level: 88, logo: "🍃", description: "Aggregation Pipeline, Indexing" },
      { name: "Redis", level: 75, logo: "🔴", description: "Caching, Session Management" },
      { name: "Firebase", level: 80, logo: "🔥", description: "Realtime DB, Auth, Hosting" }
    ]
  }
]

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold">
              💪 Technical Expertise
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies I master to build exceptional digital experiences
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {skillsData.map((category, idx) => (
            <SkillCategory key={category.category} category={category} index={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className={`relative rounded-2xl ${category.gradient} p-6 transition-all duration-300 hover:shadow-2xl`}>
        {/* Category Header */}
        <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-200 dark:border-dark-300">
          <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color}`}>
            <category.icon size={22} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-gradient">{category.category}</h3>
        </div>

        {/* Skills Grid - Medium sized cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.skills.map((skill, skillIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + (skillIdx * 0.1) }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/60 dark:bg-dark-300/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-dark-300 transition-all duration-300 hover:shadow-lg"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.logo}</span>
                  <span className="font-semibold text-gray-800 dark:text-white text-sm">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-1.5 bg-gray-200 dark:bg-dark-400 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + skillIdx * 0.1 }}
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
              
              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}