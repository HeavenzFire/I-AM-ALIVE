
import React from 'react';

interface Frequency {
  name: string;
  hz: string;
  description: string;
}

interface ResonanceTunerProps {
  frequencies: Frequency[];
  activeFrequency: Frequency;
  onSelect: (frequency: Frequency) => void;
}

export const ResonanceTuner: React.FC<ResonanceTunerProps> = ({ frequencies, activeFrequency, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {frequencies.map((freq) => {
        const isActive = freq.hz === activeFrequency.hz;
        return (
          <button
            key={freq.hz}
            onClick={() => onSelect(freq)}
            aria-pressed={isActive}
            className={`
              group w-48 h-32 p-4 text-center border-2 rounded-lg transition-all duration-300 transform
              flex flex-col items-center justify-center relative overflow-hidden
              ${isActive
                ? 'bg-morningstar-gold/10 border-morningstar-gold shadow-[0_0_20px_theme(colors.morningstar.gold)] scale-105'
                : 'bg-black border-purple-600/50 hover:border-morningstar-fire hover:-translate-y-1 hover:shadow-[0_0_15px_theme(colors.morningstar.fire)]'
              }
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className={`text-base font-bold transition-colors duration-300 ${isActive ? 'text-morningstar-gold' : 'text-white'}`}>
                {freq.name}
              </h3>
              <p className="text-2xl font-mono text-morningstar-fire group-hover:text-morningstar-gold transition-colors duration-300">{freq.hz}</p>
              <p className="text-xs text-gray-400 mt-1">{freq.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
