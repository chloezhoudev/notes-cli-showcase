import React from 'react';
import { Code, Database, TestTube, Zap } from 'lucide-react';

const TechDecisionsSection = () => {
  const techDecisions = [
    {
      name: 'Node.js',
      icon: Code,
      purpose: 'Backend Runtime',
      decision: 'I wanted to expand from frontend into backend development. Using JavaScript for backend let me focus on learning server-side concepts without having to learn a new language at the same time.',
      learningGoal: 'Learn backend development while building on existing JavaScript skills',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Supabase',
      icon: Database,
      purpose: 'Database & Backend',
      decision: 'I had already learned SQL and PostgreSQL fundamentals, so I chose Supabase specifically because it uses PostgreSQL. This let me apply my SQL knowledge in a real project.',
      learningGoal: 'Apply SQL and PostgreSQL skills in a production environment',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'JavaScript',
      icon: Zap,
      purpose: 'Core Language',
      decision: 'For this learning project, I focused on building the core functionality rather than adding TypeScript complexity. I wanted to nail the architecture and features first.',
      learningGoal: 'Focus on project functionality and full-stack architecture',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Jest',
      icon: TestTube,
      purpose: 'Testing Framework',
      decision: 'Jest is the most popular and widely used testing framework in the JavaScript ecosystem, so it made sense to learn the industry standard.',
      learningGoal: 'Learn the most common testing practices and tools',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Full-Stack Learning Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How I chose technologies to grow from frontend developer into full-stack, one deliberate step at a time
            </p>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techDecisions.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Tech Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.gradient} rounded-xl flex items-center justify-center`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.purpose}</p>
                  </div>
                </div>

                {/* Decision Explanation */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Why I Chose This</h4>
                    <p className="text-gray-300 leading-relaxed">{tech.decision}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Learning Goal</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{tech.learningGoal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Philosophy Callout */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Learn Fundamentals First, Then Build
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                My approach was to learn the core concepts first (SQL, backend patterns), then choose tools 
                that let me apply that knowledge while building something real and functional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDecisionsSection;