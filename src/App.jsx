import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    'React.js', 'Node.js', 'Python', 'Tailwind CSS',
    'TypeScript', 'MongoDB', 'Next.js', 'GraphQL'
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Image Generator',
      description: 'Generate images from text using AI. Built with Python and React.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop',
      tech: ['Python', 'FastAPI', 'React']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-6' : 'w-0 group-hover:w-6'
                  }`} />
                </button>
              ))}
              <button onClick={() => setIsDark(!isDark)} className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
                {isDark ? '☀️' : '🌙'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg text-gray-700 dark:text-gray-300 text-2xl">
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer passionate about creating beautiful web applications
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
                View Projects
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition"></div>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Profile" className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto" />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with 5+ years of experience building web applications that solve real-world problems. I love creating elegant, efficient, and user-friendly solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-600">5+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-600">50+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={skill} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all text-center group">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className="relative overflow-hidden h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-110 transition-all z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;