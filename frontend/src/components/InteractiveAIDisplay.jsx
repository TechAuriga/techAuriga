import React, { useState } from 'react';
import { Cpu, Brain, Network, Sparkles, Zap, Code } from 'lucide-react';

const InteractiveAIDisplay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div
      className="relative w-full h-[500px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container with Glassmorphism */}
      <div className="relative w-full h-full bg-gradient-to-br from-[#1E40AF]/10 via-[#3B82F6]/5 to-[#60A5FA]/10 backdrop-blur-sm rounded-3xl border-2 border-[#1E40AF]/20 overflow-hidden transition-all duration-500 hover:border-[#3B82F6]/40 hover:shadow-2xl hover:shadow-[#3B82F6]/20">
        
        {/* AI Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
            alt="AI Neural Network"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path 
                  d="M 40 0 L 0 0 0 40" 
                  fill="none" 
                  stroke="#1E40AF" 
                  strokeWidth="0.5"
                  className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ai-grid)" />
          </svg>
        </div>

        {/* Central AI Brain Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`relative transition-all duration-700 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
            <div 
              className="w-48 h-48 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIcon('brain')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Pulse Animation */}
              <div className={`absolute inset-0 bg-white/20 rounded-3xl transition-all duration-1000 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />
              
              <div className="relative z-10 flex flex-col items-center">
                <Brain className={`text-white transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`} size={80} />
                {hoveredIcon === 'brain' && (
                  <span className="text-white text-sm font-semibold mt-2 animate-fade-in">
                    AI Intelligence
                  </span>
                )}
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
            </div>

            {/* Orbiting Elements with Tooltips */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 transition-all duration-700 ${isHovered ? 'opacity-100 -translate-y-10' : 'opacity-0'}`}>
              <div 
                className="relative w-12 h-12 bg-[#60A5FA] rounded-xl flex items-center justify-center shadow-lg animate-bounce cursor-pointer"
                onMouseEnter={() => setHoveredIcon('sparkles')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Sparkles className="text-white" size={24} />
                {hoveredIcon === 'sparkles' && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Innovation
                  </div>
                )}
              </div>
            </div>

            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 transition-all duration-700 delay-100 ${isHovered ? 'opacity-100 translate-y-10' : 'opacity-0'}`}>
              <div 
                className="relative w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-100 cursor-pointer"
                onMouseEnter={() => setHoveredIcon('code')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Code className="text-white" size={24} />
                {hoveredIcon === 'code' && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Development
                  </div>
                )}
              </div>
            </div>

            <div className={`absolute top-1/2 -left-6 -translate-y-1/2 transition-all duration-700 delay-200 ${isHovered ? 'opacity-100 -translate-x-10' : 'opacity-0'}`}>
              <div 
                className="relative w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg animate-pulse cursor-pointer"
                onMouseEnter={() => setHoveredIcon('cpu')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Cpu className="text-white" size={24} />
                {hoveredIcon === 'cpu' && (
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Processing
                  </div>
                )}
              </div>
            </div>

            <div className={`absolute top-1/2 -right-6 -translate-y-1/2 transition-all duration-700 delay-300 ${isHovered ? 'opacity-100 translate-x-10' : 'opacity-0'}`}>
              <div 
                className="relative w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center shadow-lg animate-pulse delay-200 cursor-pointer"
                onMouseEnter={() => setHoveredIcon('network')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Network className="text-white" size={24} />
                {hoveredIcon === 'network' && (
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Connectivity
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#3B82F6] rounded-full transition-all duration-1000 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 150}ms`,
                animation: isHovered ? `float ${3 + i * 0.5}s ease-in-out infinite` : 'none'
              }}
            />
          ))}
        </div>

        {/* Corner Icons with Tooltips */}
        <div 
          className={`absolute top-6 left-6 transition-all duration-500 cursor-pointer ${isHovered ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
          onMouseEnter={() => setHoveredIcon('zap')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-[#1E40AF]/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <Zap className="text-[#1E40AF]" size={32} />
            {hoveredIcon === 'zap' && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                Speed & Power
              </div>
            )}
          </div>
        </div>

        <div 
          className={`absolute bottom-6 right-6 transition-all duration-500 delay-100 cursor-pointer ${isHovered ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
          onMouseEnter={() => setHoveredIcon('network-corner')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-[#1E40AF]/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <Network className="text-[#1E40AF]" size={32} />
            {hoveredIcon === 'network-corner' && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                Neural Networks
              </div>
            )}
          </div>
        </div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="10%"
            y1="10%"
            x2="90%"
            y2="90%"
            stroke="#1E40AF"
            strokeWidth="1"
            className={`transition-all duration-1000 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
            strokeDasharray="5,5"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          <line
            x1="90%"
            y1="10%"
            x2="10%"
            y2="90%"
            stroke="#3B82F6"
            strokeWidth="1"
            className={`transition-all duration-1000 delay-200 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
            strokeDasharray="5,5"
          >
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
          </line>
        </svg>

        {/* Bottom Badge */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-full shadow-lg transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="flex items-center space-x-2 text-white font-semibold text-sm">
              <Sparkles size={16} />
              <span>AI-Powered Innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Outer Glow Effect */}
      <div className={`absolute -inset-4 bg-gradient-to-r from-[#1E40AF]/20 to-[#3B82F6]/20 rounded-3xl blur-2xl transition-opacity duration-700 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default InteractiveAIDisplay;
