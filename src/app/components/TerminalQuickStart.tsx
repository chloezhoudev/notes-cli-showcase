"use client"

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TerminalQuickStart = () => {
  const [copiedIndex, setCopiedIndex] = useState<null | 'all' | number>(null);

  const commands = [
    { text: 'npm install -g czhou-notes-cli', color: 'text-green-400' },
    { text: 'note setup your_username', color: 'text-blue-400' },
    { text: 'note add "Your first note"', color: 'text-yellow-400' }
  ];

  const copyToClipboard = async (text: string, index: number): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyAllCommands = async (): Promise<void> => {
    const allCommands = commands.map(cmd => cmd.text).join('\n');
    try {
      await navigator.clipboard.writeText(allCommands);
      setCopiedIndex('all');
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-400 ml-3">Quick Start</span>
          </div>
          <button
            onClick={copyAllCommands}
            className="flex items-center gap-2 px-3 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            title="Copy all commands"
          >
            {copiedIndex === 'all' ? (
              <>
                <Check className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy All
              </>
            )}
          </button>
        </div>

        {/* Terminal Content */}
        <div className="bg-black p-4 font-mono text-left">
          {commands.map((command, index) => (
            <div key={index} className="flex items-center justify-between group mb-1 last:mb-0">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">$</span>
                <span className={`text-sm ${command.color}`}>{command.text}</span>
              </div>
              <button
                onClick={() => copyToClipboard(command.text, index)}
                className="opacity-0 group-hover:opacity-100 ml-4 p-1 text-gray-400 hover:text-white transition-all duration-200"
                title="Copy command"
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalQuickStart;