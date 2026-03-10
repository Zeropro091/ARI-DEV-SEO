import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Sparkle } from './ui/Doodles';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'WORK', href: '#projects', subtitle: 'View selected projects' },
    { name: 'CAPABILITIES', href: '#services', subtitle: 'What I can do' },
    { name: 'ABOUT ME', href: '#about', subtitle: 'Context & skills' },
    { name: 'CONTACT', href: '#contact', subtitle: 'Send signals' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gray-100 border-t-4 border-neu-border h-20">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={handleNavClick} className="text-2xl font-black tracking-tight px-2 transition-all z-50 relative">
            ARI DEV
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono font-bold text-lg hover:text-neu-pink hover:underline decoration-4 decoration-neu-lime underline-offset-4 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 border-2 border-neu-border p-2 bg-white shadow-neu-sm active:translate-y-1 active:shadow-none transition-all relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-neu-bg pt-24 pb-8 px-6 flex flex-col animate-in slide-in-from-right duration-300">
           <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
             {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={handleNavClick}
                className="group block bg-white border-4 border-neu-border p-4 shadow-neu active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-black text-3xl mb-1">{link.name}</div>
                    <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{link.subtitle}</div>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-neu-pink" />
                </div>
              </a>
            ))}
           </div>
           
           <div className="mt-8 border-t-4 border-neu-border pt-6">
              <div className="font-mono text-sm text-center opacity-50">
                SYSTEM_STATUS: <span className="text-green-600 font-bold">ONLINE</span>
              </div>
           </div>
        </div>
      )}
    </>
  );
};