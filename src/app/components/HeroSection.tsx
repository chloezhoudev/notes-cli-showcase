import { Terminal, Database, Users, Shield, Zap, GitBranch } from 'lucide-react';
import TerminalQuickStart from './TerminalQuickStart';

const HeroSection = () => {
  // Real data from your CLI project
  const stats = [
    { 
      label: 'NPM Downloads', 
      value: '200+', 
      icon: Users,
      description: 'Active installations'
    },
    { 
      label: 'Migration', 
      value: 'Done', 
      icon: Shield,
      description: 'JSON to Cloud'
    },
    { 
      label: 'Production Ready', 
      value: 'v2.0.2', 
      icon: Zap,
      description: 'Stable release'
    },
    { 
      label: 'Open Source', 
      value: 'MIT', 
      icon: GitBranch,
      description: 'GitHub repository'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* CLI Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <Terminal className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Notes CLI
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-300">
            Complete Architecture: CLI Tool + Cloud Backend + Local-to-Cloud Migration
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack engineering project demonstrating <strong>Node.js</strong> + <strong>Supabase</strong> + <strong>JavaScript</strong> architecture.
            Features cloud data persistence, user authentication, and seamless migration from local JSON files to cloud database.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://www.npmjs.com/package/czhou-notes-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Database className="w-5 h-5" />
              Try the CLI Tool
            </a>
            <a 
              href="https://github.com/chloezhoudev/czhou-notes-cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:bg-gray-800/50"
            >
              <GitBranch className="w-5 h-5" />
              View Source Code
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1 text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Installation Quick Start */}
          <TerminalQuickStart />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
