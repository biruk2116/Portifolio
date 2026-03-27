import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/animations/FadeIn';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I work with"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
              {skillsData.frontend.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
              {skillsData.backend.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4} className="md:col-span-2">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillsData.tools.map((tool, idx) => (
                  <div key={idx} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <div className="text-2xl mb-2">🛠️</div>
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tool.level}%</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;