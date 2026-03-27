import { useState } from 'react';
import FadeIn from '../components/animations/FadeIn';
import { Code, Database, Globe, Server, Layout, Shield, Cloud, Smartphone } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React.js', level: 90, icon: Code, color: 'from-cyan-500 to-blue-500', description: 'Advanced' },
    { name: 'Node.js', level: 85, icon: Server, color: 'from-green-500 to-emerald-500', description: 'Advanced' },
    { name: 'Python', level: 80, icon: Code, color: 'from-yellow-500 to-orange-500', description: 'Intermediate' },
    { name: 'Tailwind CSS', level: 95, icon: Layout, color: 'from-teal-500 to-cyan-500', description: 'Expert' },
    { name: 'MongoDB', level: 85, icon: Database, color: 'from-green-600 to-green-700', description: 'Advanced' },
    { name: 'TypeScript', level: 85, icon: Code, color: 'from-blue-600 to-blue-700', description: 'Advanced' },
    { name: 'Next.js', level: 80, icon: Code, color: 'from-gray-600 to-gray-800', description: 'Advanced' },
    { name: 'GraphQL', level: 70, icon: Globe, color: 'from-pink-500 to-purple-500', description: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies I work with and continuously improve
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.name} delay={index * 0.05}>
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        Proficiency
                      </span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        style={{ width: `${hoveredSkill === skill.name ? Math.min(skill.level + 10, 100) : skill.level}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color} transition-all duration-1000 rounded-full`}
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