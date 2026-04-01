import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Terminal, Award, Users, Briefcase, Sparkles } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const skillsData = [
  {
    category: "💻 Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
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
    skills: [
      { name: "React.js", level: 95, logo: "⚛️", description: "Hooks, Redux, Next.js" },
      { name: "Vue.js", level: 80, logo: "💚", description: "Vuex, Nuxt.js" },
      { name: "Node.js", level: 88, logo: "🟢", description: "Express, NestJS" },
      { name: "Tailwind CSS", level: 90, logo: "🎨", description: "Responsive Design" }
    ]
  },
  {
    category: "🛠️ Tools & Platforms",
    icon: Terminal,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 92, logo: "🐙", description: "CI/CD, Actions" },
      { name: "Docker", level: 82, logo: "🐳", description: "Containerization" },
      { name: "AWS", level: 78, logo: "☁️", description: "EC2, S3, Lambda" },
      { name: "Figma", level: 85, logo: "🎯", description: "UI/UX Design" }
    ]
  },
  {
    category: "🗄️ Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PostgreSQL", level: 85, logo: "🐘", description: "Complex Queries" },
      { name: "MongoDB", level: 88, logo: "🍃", description: "Aggregation Pipeline" },
      { name: "Redis", level: 75, logo: "🔴", description: "Caching" },
      { name: "Firebase", level: 80, logo: "🔥", description: "Realtime Database" }
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold">
              💪 My Expertise
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
        <div className="relative bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-dark-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
              <category.icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gradient">{category.category}</h3>
          </div>

          <div className="space-y-5">
            {category.skills.map((skill, skillIdx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (skillIdx * 0.1) }}
                className="group/skill"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{skill.logo}</span>
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + skillIdx * 0.1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}