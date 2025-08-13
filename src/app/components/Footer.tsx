import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Technical Deep Dive', href: '/technical' },
    { name: 'Live Demo', href: '/demo' },
    { name: 'Case Study', href: '/case-study' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand Section */}
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity w-fit">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Notes CLI</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                A production-ready CLI tool demonstrating full-stack engineering with Node.js and cloud database.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://github.com/chloezhoudev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a 
                  href="mailto:czhou.connect@gmail.com" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/xyzhou-developer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="py-4 border-t border-gray-800">
          <div className="text-center">
            <div className="text-sm text-gray-500">
              © {currentYear} Notes CLI Showcase. Built for technical demonstration purposes.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;