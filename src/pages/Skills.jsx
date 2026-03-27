import { useState } from 'react';
import FadeIn from '../components/animations/FadeIn';
import { Code, Database, Globe, Server, Layout, Shield } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React.js', level: 90, icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 85, icon: Server, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', level: 95, icon: Layout, color: 'from-teal-500 to-cyan-500' },
    { name: 'MongoDB', level: 85, icon: Database, color: 'from-green-600 to-green-700' },
    { name: 'REST APIs', level: 90, icon: Globe, color: 'from-purple-500 to-pink-500' },
    { name: 'TypeScript', level: 85, icon: Code, color: 'from-blue-600 to-blue-700' },
    { name: 'Security', level: 75, icon: Shield, color: 'from-red-500 to-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.name} delay={index * 0.1}>
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          Proficiency
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color} transition-all duration-1000 ${
                          hoveredSkill === skill.name ? 'w-full' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;