
import React from 'react';

interface CreativeOptionProps {
  title: string;
  description: string;
  onSelect: () => void;
}

export const CreativeOption: React.FC<CreativeOptionProps> = ({ title, description, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="group relative flex flex-col justify-center items-center h-48 p-4 text-center bg-black border-2 border-purple-600/50 rounded-lg transition-all duration-300 hover:border-morningstar-gold hover:shadow-[0_0_20px_theme(colors.morningstar.gold)] hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/30 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white group-hover:text-morningstar-gold transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </div>
    </button>
  );
};
