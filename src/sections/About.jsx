import React from 'react'
import { motion } from 'framer-motion'
import { Award, Code2, Users, Zap } from 'lucide-react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const [ref, isVisible] = useIntersectionObserver()

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '20+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Certifications' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>
        
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Who Am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience in building
              web applications that solve real-world problems. My journey in tech started
              with a curiosity about how things work, and it has evolved into a career
              dedicated to creating exceptional digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in modern JavaScript frameworks, with a focus on React and Node.js.
              I believe in writing clean, maintainable code and staying up-to-date with the
              latest industry trends. When I'm not coding, you can find me contributing to
              open-source projects or exploring new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <InfoItem label="Name" value="John Doe" />
              <InfoItem label="Location" value="San Francisco, CA" />
              <InfoItem label="Email" value="john@example.com" />
              <InfoItem label="Experience" value="5+ Years" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gradient">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-white/5"
                  >
                    <stat.icon className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient">What Drives Me</h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  ✨ Building solutions that make a difference
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🚀 Continuous learning and growth
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  💡 Turning complex problems into simple solutions
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  🤝 Collaborating with amazing people
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="glass-effect rounded-lg p-3">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-semibold text-gray-800 dark:text-white">{value}</p>
    </div>
  )
}