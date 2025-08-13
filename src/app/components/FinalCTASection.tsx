import React from 'react';
import { ArrowRight, Code, Play, FileText } from 'lucide-react';

const FinalCTASection = () => {
  const showcasePages = [
    {
      title: "Technical Deep Dive",
      description: "Explore the database design, security patterns, CLI architecture, and code implementation details",
      icon: Code,
      href: "/technical",
      badge: "Implementation Details",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Live Demo",
      description: "Interactive terminal simulator showing real CLI commands and database operations in action",
      icon: Play,
      href: "/demo", 
      badge: "Try It Out",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Case Study",
      description: "The complete engineering story: challenges faced, decisions made, and lessons learned",
      icon: FileText,
      href: "/case-study",
      badge: "Problem Solving",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore the Full Engineering Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              You&apos;ve seen the overview and system architecture. Now dive deeper into the technical implementation, 
              try the interactive demo, and read the complete development story.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each section demonstrates different aspects of full-stack engineering skills and problem-solving approaches.
            </p>
          </div>

          {/* Showcase Pages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {showcasePages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                className="group relative bg-gray-800/40 hover:bg-gray-800/60 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className={`bg-gradient-to-r ${page.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                    {page.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${page.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <page.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {page.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Next Steps */}
          <div className="text-center bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to Discuss This Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              After exploring the technical details, I&apos;d welcome the opportunity to discuss the engineering decisions, 
              challenges overcome, and how these skills apply to real-world development projects.
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="mailto:czhou.connect@gmail.com?subject=Technical Discussion - Notes CLI Showcase"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 hover:transform hover:-translate-y-1"
              >
                Schedule Discussion
              </a>
              <a
                href="https://www.linkedin.com/in/xyzhou-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-200 hover:bg-gray-800/50"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;