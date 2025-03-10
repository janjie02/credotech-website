import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simple computer monitor with data visualization */}
        <g>
          {/* Monitor */}
          <rect x="280" y="180" width="240" height="180" rx="10" fill="#333" className="transition-all duration-300" />
          <rect x="290" y="190" width="220" height="160" rx="5" fill="#4CAF50" opacity="0.1" className="transition-all duration-300" />
          
          {/* Screen content - simple data visualization */}
          <g stroke="#4CAF50" strokeWidth="2" opacity="0.9" className="transition-all duration-500">
            <line x1="310" y1="240" x2="370" y2="240" />
            <line x1="310" y1="260" x2="420" y2="260" />
            <line x1="310" y1="280" x2="390" y2="280" />
            <line x1="310" y1="300" x2="450" y2="300" />
            <line x1="310" y1="320" x2="370" y2="320" />
          </g>
          
          {/* Connection lines */}
          <g stroke="#4CAF50" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6" className="transition-all duration-700">
            <line x1="490" y1="240" x2="550" y2="240" />
            <line x1="490" y1="280" x2="580" y2="280" />
            <line x1="490" y1="320" x2="560" y2="320" />
          </g>
          
          {/* Connection endpoint boxes */}
          <g fill="#4CAF50" opacity="0.7" className="transition-all duration-300">
            <rect x="550" y="230" width="40" height="20" rx="3" />
            <rect x="580" y="270" width="40" height="20" rx="3" />
            <rect x="560" y="310" width="40" height="20" rx="3" />
          </g>
          
          {/* Monitor stand */}
          <rect x="370" y="360" width="60" height="10" rx="2" fill="#333" />
          <rect x="390" y="370" width="20" height="30" rx="2" fill="#333" />
          <rect x="370" y="400" width="60" height="5" rx="2" fill="#333" />
          
          {/* Interactive elements - cursor */}
          <circle cx="400" cy="270" r="5" fill="#ffffff" opacity="0.7">
            <animate 
              attributeName="opacity" 
              values="0.7;1;0.7" 
              dur="2s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="r" 
              values="5;6;5" 
              dur="2s" 
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default HeroImage; 