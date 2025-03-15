import React from 'react';
import { Code } from 'lucide-react';

export function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Animated circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin-reverse"></div>
          </div>
          {/* Center icon */}
          <div className="relative z-10 bg-[#0a0a0a] p-2 rounded-full">
            <Code className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-1">
            {['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'].map((letter, index) => (
              <span
                key={index}
                className="text-lg font-medium text-white animate-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}