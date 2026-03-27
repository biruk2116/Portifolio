import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">John Doe</h3>
            </div>
            <p className="text-gray-400">Creating beautiful web experiences</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110 inline-block">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110 inline-block">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110 inline-block">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110 inline-block">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;