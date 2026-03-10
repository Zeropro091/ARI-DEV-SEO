import React from 'react';

export const Sparkle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 5C48 25 35 45 5 48C35 51 48 70 48 95C51 70 65 51 95 48C65 45 51 25 48 5Z" fill="currentColor"/>
  </svg>
);

export const ArrowDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 55C35 45 60 40 85 45M85 45C75 35 70 30 65 25M85 45C75 55 70 65 65 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Squiggle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20C25 -5 45 45 65 20C85 -5 105 45 125 20C145 -5 165 45 185 20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CircleDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C75 12 90 30 88 55C86 80 65 92 40 88C15 84 8 60 12 35C16 10 40 8 55 12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CrossDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12C20 22 30 32 40 42M38 10C28 20 18 30 12 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BoxDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M 5 5 Q 100 2 195 5 Q 198 20 195 35 Q 100 38 5 35 Q 2 20 5 5 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
  </svg>
);

export const UnderlineDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10C50 15 100 5 150 12C170 15 185 8 195 10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WrenchAndGearDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M140 60 C160 40 180 60 160 80 L100 140 C90 150 70 150 60 140 C50 130 50 110 60 100 L120 40 C140 20 160 40 140 60 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="140" cy="60" r="10" fill="currentColor" />
    <circle cx="70" cy="130" r="5" fill="currentColor" />
    <path d="M30 30 L50 50 M170 170 L150 150 M30 170 L50 150 M170 30 L150 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="10 10" />
  </svg>
);
