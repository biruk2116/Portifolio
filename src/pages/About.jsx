import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import FadeIn from '../components/animations/FadeIn';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate Full Stack Developer with over 5 years of experience in building
                web applications. I specialize in React and modern JavaScript frameworks,
                creating responsive and performant user interfaces.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My journey in tech started with a curiosity for how things work, which evolved
                into a career focused on solving real-world problems through code. I believe in
                writing clean, maintainable code and continuously learning new technologies.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Education</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">B.Sc. in Computer Science</span>
                    <br />
                    University of Technology, 2015-2019
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Senior Frontend Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Tech Corp • 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leading frontend development for enterprise applications, mentoring junior developers,
                    and implementing modern React patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                    Full Stack Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">StartUp Inc • 2019 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developed and maintained full-stack applications using MERN stack, collaborated
                    with design team to implement responsive UIs.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;