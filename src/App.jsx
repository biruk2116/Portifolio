import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-blue-600">
            Portfolio
          </button>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600">Contact</button>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            I'm a passionate developer with 5 years of experience building web applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Python', 'MongoDB'].map((skill, i) => (
              <div key={i} className="p-4 bg-white dark:bg-gray-700 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-blue-500"></div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Project {i}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Description of project {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Contact Me</h2>
          <form className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 mb-4 border rounded-lg"></textarea>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-6 text-center border-t">
        <p className="text-gray-600 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;