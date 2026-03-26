import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.github && (
            <Button
              variant="secondary"
              onClick={() => window.open(project.github, '_blank')}
              className="flex-1 text-sm"
            >
              GitHub
            </Button>
          )}
          {project.live && (
            <Button
              variant="primary"
              onClick={() => window.open(project.live, '_blank')}
              className="flex-1 text-sm"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;