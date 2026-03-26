import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import FadeIn from '../components/animations/FadeIn';
import AnimatedBackground from '../components/animations/AnimatedBackground'; // Add this import

const Home = () => {
  const handleResumeDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <>
      <AnimatedBackground /> {/* Add this */}
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center animate-float">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </motion.div>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer | React Specialist | UI/UX Enthusiast
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              I build exceptional digital experiences with modern web technologies.
              Passionate about creating clean, responsive, and user-friendly applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const offset = 80;
                  const elementPosition = projectsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}>
                View My Work
              </Button>
              <Button variant="secondary" onClick={handleResumeDownload}>
                Download Resume
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 relative">
        {/* This will be replaced with actual About content when you add sections to home */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 relative">
        {/* This will be replaced with actual Skills content when you add sections to home */}
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative">
        {/* This will be replaced with actual Projects content when you add sections to home */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        {/* This will be replaced with actual Contact content when you add sections to home */}
      </section>
    </>
  );
};

export default Home;