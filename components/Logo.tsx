import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="curve" d="M 75,250 A 175,175 0 0,1 425,250" />
      </defs>
      
      {/* Outer Ring */}
      <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="15" />
      
      {/* Inner Ring */}
      <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="5" />

      {/* Curved Text */}
      <text fill="currentColor" fontSize="34" fontWeight="bold" fontFamily="serif" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          The Ultimate Seafood Experience
        </textPath>
      </text>

      {/* Center Text */}
      <text x="250" y="210" textAnchor="middle" fill="currentColor" fontSize="65" fontWeight="900" fontFamily="sans-serif" style={{ letterSpacing: '1px' }}>MEEN</text>
      <text x="250" y="275" textAnchor="middle" fill="currentColor" fontSize="65" fontWeight="900" fontFamily="sans-serif" style={{ letterSpacing: '1px' }}>SATTI</text>

      {/* Pot Graphic */}
      <g transform="translate(125, 290) scale(0.7)">
        {/* Pot Body */}
        <path d="M20 40 L 340 40 L 300 140 Q 280 190 180 190 Q 80 190 60 140 Z" fill="currentColor" />
        {/* Pot Rim */}
        <path d="M0 0 L 360 0 L 360 40 L 0 40 Z" fill="currentColor" />
        
        {/* Fish (Negative Space - White) */}
        {/* Stylized fish shape inside the pot */}
        <path d="M 60 120 C 60 120, 100 80, 180 110 C 260 140, 300 90, 300 90 L 280 120 L 300 150 C 300 150, 240 120, 180 140 C 120 160, 60 120, 60 120" fill="white" />
        <circle cx="100" cy="115" r="5" fill="currentColor" />
      </g>
    </svg>
  );
};
