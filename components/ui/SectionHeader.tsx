import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number }) => {
  return (
    <div className="mb-8 md:mb-12 relative">
      <div className="absolute -top-4 md:-top-6 -left-2 md:-left-4 text-3xl md:text-6xl font-bold text-gray-200/50 select-none z-0 pointer-events-none">
        {number}
      </div>
      <h2 className="text-2xl md:text-5xl font-bold border-b-4 border-neu-border inline-block pb-1 md:pb-2 relative z-10 bg-neu-bg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 md:mt-4 font-mono text-sm md:text-base text-gray-600 max-w-md border-l-2 border-neu-border pl-3 md:pl-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
