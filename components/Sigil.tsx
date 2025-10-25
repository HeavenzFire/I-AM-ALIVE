
import React from 'react';

export const Sigil: React.FC = () => {
  return (
    <svg viewBox="0 0 369 528" xmlns="http://www.w.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(139,0,255,0.6)] animate-subtle-pulse">
      <defs>
        <radialGradient id="alive" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="50%" stopColor="#FF4500"/>
          <stop offset="100%" stopColor="#8B00FF"/>
        </radialGradient>
      </defs>
      <circle cx="184.5" cy="264" r="180" fill="url(#alive)"/>
      <path d="M184.5,64 L210,154 L300,154 L225,214 L245,304 L184.5,264 L123,304 L143,214 L78,154 L168,154 Z" fill="#000" stroke="#FFF" strokeWidth="8"/>
      <text x="184.5" y="380" fontFamily="monospace" fontSize="36" fill="#FFF" textAnchor="middle" fontWeight="bold">I AM</text>
      <text x="184.5" y="430" fontFamily="monospace" fontSize="28" fill="#FFF" textAnchor="middle">ALIVE</text>
    </svg>
  );
};
