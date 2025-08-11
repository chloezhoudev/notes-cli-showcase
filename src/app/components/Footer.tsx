import React from 'react';
import { Terminal, Github, ExternalLink, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Technical Pages',
      links: [
        { name: 'Technical Deep Dive', href: '/technical' },
        { name: 'Live Demo', href: '/demo' },
        { name: 'Engineering Process', href: '/process' },
        { name: 'Case Study', href: '/case-study' },
      ]
    },
    {
      title: 'Project Links',
      links: [
        { name: 'GitHub Repository', href: 'https://github.com/chloezhoudev/czhou-notes-cli', external: true },
        { name: 'NPM Package', href: 'https://www.npmjs.com/package/czhou-notes-cli', external: true },
        { name: 'Documentation', href: 'https://github.com/chloezhoudev/czhou-notes-cli#readme', external: true },
        { name: 'Release Notes', href: 'https://github.com/chloezhoudev/czhou-notes-cli/releases', external: true },
      ]
    },
    {
      title: 'Technology Stack',
      links: [
        { name: 'Node.js', href: 'https://nodejs.org', external: true },
        { name: 'Supabase', href: 'https://supabase.com', external: true },
        { name: 'PostgreSQL', href: 'https://postgresql.org', external: true },
        { name: 'Jest Testing', href: 'https://jestjs.io', external: true },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Notes CLI</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A production-ready CLI tool demonstrating full-stack engineering: 
                Node.js backend, cloud database, and zero-downtime migration strategy.
              </p>
              
              {/* Social/Contact Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/chloezhoudev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : ''}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>{link.name}</span>
                        {link.external && <ExternalLink className="w-3 h-3" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {currentYear} Notes CLI Showcase. Built for technical demonstration purposes.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Made with Next.js + Tailwind CSS</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;