"use client"

import React, { useState } from 'react';
import { Terminal, User, Shield, Database, CheckCircle, ArrowRight, Code } from 'lucide-react';

const ArchitectureTeaser = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'command',
      title: 'Command Input',
      icon: Terminal,
      description: 'User types command',
      detail: 'CLI parses and validates the command structure',
      example: 'note add "Buy groceries"'
    },
    {
      id: 'session',
      title: 'Session Check',
      icon: User, 
      description: 'Verify user authentication',
      detail: 'Validates local session against database records',
      example: 'Checking ~/.note-cli/user.json'
    },
    {
      id: 'security',
      title: 'Security Context',
      icon: Shield,
      description: 'Set user context for RLS',
      detail: 'Database security policies ensure data isolation',
      example: 'set_current_user("john_doe")'
    },
    {
      id: 'database',
      title: 'Data Operation',
      icon: Database,
      description: 'Store note securely',
      detail: 'PostgreSQL with Row Level Security protection',
      example: 'INSERT INTO notes (user_id, content)'
    },
    {
      id: 'result',
      title: 'Success Response',
      icon: CheckCircle,
      description: 'Return confirmation',
      detail: 'User sees success message with note ID',
      example: '✓ Note added! ID: a1b2c3'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It All Works Together</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow a single command through the entire system to see the architecture in action.
              Each layer has a specific responsibility and security checkpoint.
            </p>
          </div>

          {/* Command Example */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700">
              <Terminal className="w-5 h-5 text-green-400 mr-3" />
              <code className="text-green-400 font-mono">note add &quot;Buy groceries&quot;</code>
            </div>
          </div>

          {/* Horizontal Flow Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index;
                
                return (
                  <React.Fragment key={step.id}>
                    <div
                      className={`bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 min-w-36 text-center border transition-all duration-300 cursor-pointer flex-shrink-0 ${
                        isActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600 hover:border-gray-500'
                      }`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <h4 className="font-semibold text-white text-xs mb-1">{step.title}</h4>
                      <p className="text-gray-400 text-xs">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Step Detail - Immediately Below */}
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 mb-16">
            <div className="flex items-center mb-4">
              {React.createElement(steps[currentStep].icon, {
                className: "w-6 h-6 mr-3 text-blue-400"
              })}
              <h3 className="text-xl font-bold text-white">
                Step {currentStep + 1}: {steps[currentStep].title}
              </h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              {steps[currentStep].detail}
            </p>
            
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
              <code className="text-gray-300 text-sm font-mono">
                {steps[currentStep].example}
              </code>
            </div>
          </div>

          {/* Key Architecture Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-2">Security First</h4>
              <p className="text-gray-400 text-sm">
                Multiple security layers with session validation and database-level policies
              </p>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-2">Modular Design</h4>
              <p className="text-gray-400 text-sm">
                Each component has clear responsibilities and can be maintained independently
              </p>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-2">Data Safety</h4>
              <p className="text-gray-400 text-sm">
                Migration system with backups and comprehensive error handling
              </p>
            </div>
          </div>

          {/* CTA to Full Technical Deep Dive */}
          <div className="text-center">
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to See the Technical Implementation?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Explore the detailed code examples, design decisions, and advanced features like 
                Row Level Security policies and safe migration strategies.
              </p>
              <button className="px-8 py-4 border-2 border-gray-500 hover:border-gray-400 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto hover:bg-gray-700/80 text-white hover:transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                Deep Dive into Architecture
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitectureTeaser;