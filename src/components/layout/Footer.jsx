import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Github className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-blue-600" size={20} />
          <Linkedin className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-blue-600" size={20} />
          <Mail className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-blue-600" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;