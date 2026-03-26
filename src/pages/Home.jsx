import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import FadeIn from '../components/animations/FadeIn';

const Home = () => {
  const handleResumeDownload = () => {
    // Replace with actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
            <Button onClick={() => window.location.href = '/projects'}>
              View My Work
            </Button>
            <Button variant="secondary" onClick={handleResumeDownload}>
              Download Resume
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;