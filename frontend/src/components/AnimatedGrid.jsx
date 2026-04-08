import React from 'react';

const AnimatedGrid = ({ opacity = 0.03 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ opacity }}
      >
        <defs>
          <pattern 
            id="grid" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 40 0 L 0 0 0 40" 
              fill="none" 
              stroke="url(#gridGradient)" 
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00E5A0', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default AnimatedGrid;
