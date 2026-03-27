import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const items = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 100;
      for (const item of items) {
        const el = document.getElementById(item);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (pos >= top && pos < bottom) {
            setActive(item);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled 
        ? darkMode ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' : 'bg-white/95 backdrop-blur-xl shadow-2xl'
        : darkMode ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
    } border-b border-gray-200 dark:border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button onClick={() => scrollTo('home')} className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {items.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition ${
                  active === item
                    ? 'text-blue-600 dark:text-blue-400'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => scrollTo('contact')} className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {items.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`w-full text-left py-3 px-4 rounded-lg capitalize ${
                  active === item
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;