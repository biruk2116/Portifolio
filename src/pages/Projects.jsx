import FadeIn from '../components/animations/FadeIn';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      stars: 45,
      forks: 12,
    },
    {
      title: 'AI Image Generator',
      description: 'Web application that uses AI to generate images from text descriptions. Built with Python, FastAPI, and React.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop',
      tech: ['Python', 'FastAPI', 'React', 'TensorFlow'],
      github: '#',
      demo: '#',
      stars: 128,
      forks: 34,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates. Includes drag-and-drop functionality and team collaboration.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
      github: '#',
      demo: '#',
      stars: 67,
      forks: 23,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/30 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Some of my best work showcasing my skills and expertise
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-2">
                      <a href={project.github} className="p-2 bg-white rounded-lg hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                      <a href={project.demo} className="p-2 bg-white rounded-lg hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <div className="flex gap-3 text-white text-sm">
                      <span className="flex items-center gap-1"><Star size={14} /> {project.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={14} /> {project.forks}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;