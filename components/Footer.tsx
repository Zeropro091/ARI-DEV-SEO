import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neu-text text-white py-12 border-t-4 border-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-black text-3xl tracking-tighter">
          ARI_DEV
        </div>
        <div className="font-mono text-sm text-gray-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} NO RIGHTS RESERVED. COPY LEFT.</p>
          <p className="mt-1">BUILT WITH CHAOS AND COFFEE.</p>
        </div>
      </div>
    </footer>
  );
};