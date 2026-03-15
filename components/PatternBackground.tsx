
import React from 'react';

export const PatternBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {/* Light grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Halftone dots in specific corners for texture */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 halftone pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 halftone pointer-events-none"></div>

      {/* Static noise overlay for more texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
          backgroundSize: '3px 3px'
        }}
      ></div>
    </div>
  );
};
