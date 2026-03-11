import React, { useState } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Sparkle, BoxDoodle } from '../ui/Doodles';

const allCertificates = [
  { id: 1, title: 'Google Cybersecurity', issuer: 'Google', date: '2024', color: 'bg-neu-yellow' },
  { id: 2, title: 'Beginner & Intermediate Cybersecurity', issuer: 'CyberAcademy', date: '2024', color: 'bg-neu-blue' },
  { id: 3, title: 'Data Analysis with R Programming', issuer: 'Google', date: '2024', color: 'bg-neu-pink' },
  { id: 4, title: 'Measure and Optimize Social Media Campaigns', issuer: 'Meta', date: '2024', color: 'bg-neu-lime' },
  { id: 5, title: 'Start the UX Design Process: Empathize, Define, and Ideate', issuer: 'Google', date: '2024', color: 'bg-neu-purple' },
  { id: 6, title: 'Tools for Data Science', issuer: 'IBM', date: '2024', color: 'bg-white' },
  { id: 7, title: 'Google Data Analytics', issuer: 'Google', date: '2024', color: 'bg-neu-yellow' },
  { id: 8, title: 'Front End for Beginners', issuer: 'SoloLearn', date: '2024', color: 'bg-neu-blue' },
  { id: 9, title: 'Google Project Management', issuer: 'Google', date: '2024', color: 'bg-neu-pink' },
  { id: 10, title: 'Management and Leadership Development', issuer: 'Master Class Management', date: '2024', color: 'bg-neu-lime' },
  { id: 11, title: 'Gen AI in Business: Discover Possibilities', issuer: 'University of Michigan', date: '2024', color: 'bg-neu-purple' },
  { id: 12, title: 'C1 English', issuer: 'IPBI Wikan Bali', date: '2024', color: 'bg-white' },
];

export const Certificates: React.FC = () => {
  const [activeCerts, setActiveCerts] = useState<{ id: number; x: number; y: number; rotate: number; zIndex: number; isMinimized: boolean; isMaximized: boolean }[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);

  const handleReveal = () => {
    const availableCerts = allCertificates.filter(c => !activeCerts.find(ac => ac.id === c.id));
    
    if (availableCerts.length > 0) {
      const cert = availableCerts[0];
      const randomX = (Math.random() - 0.5) * 40; 
      const randomRotate = (Math.random() - 0.5) * 10;
      const randomY = 50 + (activeCerts.length * 10);

      setActiveCerts(prev => [...prev, { 
        id: cert.id, 
        x: randomX, 
        y: randomY, 
        rotate: randomRotate,
        zIndex: nextZIndex,
        isMinimized: false,
        isMaximized: false
      }]);
      setNextZIndex(prev => prev + 1);
    }
  };

  const handleClose = (id: number) => {
    setActiveCerts(prev => prev.filter(c => c.id !== id));
  };

  const toggleMinimize = (id: number) => {
    setActiveCerts(prev => prev.map(c => 
      c.id === id ? { ...c, isMinimized: !c.isMinimized } : c
    ));
  };

  const toggleMaximize = (id: number) => {
    setActiveCerts(prev => prev.map(c => 
      c.id === id ? { ...c, isMaximized: !c.isMaximized, zIndex: !c.isMaximized ? 9999 : c.zIndex } : c
    ));
  };

  const bringToFront = (id: number) => {
    setActiveCerts(prev => prev.map(c => 
      c.id === id ? { ...c, zIndex: nextZIndex, isMinimized: false } : c
    ));
    setNextZIndex(prev => prev + 1);
  };

  return (
    <section id="certificates" className="py-20 border-b-4 border-neu-border bg-neu-bg overflow-hidden relative min-h-[900px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="CERTIFICATES" subtitle="Proof of my suffering and late nights." />

        <div className="mt-16 relative flex flex-col items-center">
          {/* The Box */}
          <div className="relative z-20 cursor-pointer group" onClick={handleReveal}>
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono font-bold text-lg bg-white border-2 border-neu-border px-4 py-2 shadow-neu transform -rotate-2 group-hover:rotate-0 transition-transform z-30">
              MY CERTIFICATES
              <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-red-500 pointer-events-none" />
            </div>
            
            <div className="w-64 h-48 bg-neu-text border-4 border-neu-border relative shadow-neu group-hover:shadow-neu-sm group-active:translate-y-2 transition-all">
              <div className="absolute top-0 left-0 w-full h-12 bg-black border-b-4 border-neu-border flex items-center justify-center overflow-hidden">
                 <div className="w-full h-full bg-gray-900 opacity-50"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-mono font-black text-2xl pt-8">
                {activeCerts.length < allCertificates.length ? 'CLICK ME' : 'EMPTY'}
                {activeCerts.length < allCertificates.length && (
                  <span className="text-sm font-normal mt-2 bg-neu-pink text-black px-2 py-1 border border-neu-border transform rotate-3">
                    {activeCerts.length === 0 ? 'Drop them!' : 'Click more!'}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Dropped Certificates */}
          <div className="absolute top-32 left-0 w-full h-[600px] pointer-events-none">
            <AnimatePresence>
              {activeCerts.map((activeCert) => {
                const cert = allCertificates.find(c => c.id === activeCert.id)!;
                if (activeCert.isMinimized) return null;

                return (
                  <CertificateWindow 
                    key={cert.id}
                    cert={cert}
                    activeCert={activeCert}
                    onClose={() => handleClose(cert.id)}
                    onMinimize={() => toggleMinimize(cert.id)}
                    onMaximize={() => toggleMaximize(cert.id)}
                    onFocus={() => bringToFront(cert.id)}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-neu-border border-t-4 border-black z-[10000] flex items-center px-4 gap-2 overflow-x-auto no-scrollbar">
        <div className="bg-neu-yellow border-2 border-black px-3 py-1 font-mono font-black text-xs shadow-neu-sm mr-4">
          START
        </div>
        {activeCerts.map(ac => {
          const cert = allCertificates.find(c => c.id === ac.id)!;
          return (
            <button
              key={ac.id}
              onClick={() => bringToFront(ac.id)}
              className={`h-8 px-3 border-2 border-black font-mono text-[10px] font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                ac.isMinimized ? 'bg-gray-400 opacity-50' : cert.color
              } shadow-neu-sm active:translate-y-0.5 active:shadow-none`}
            >
              <div className="w-2 h-2 rounded-full bg-black"></div>
              {cert.title.substring(0, 15)}...
            </button>
          );
        })}
      </div>
    </section>
  );
};

interface CertificateWindowProps {
  cert: typeof allCertificates[0];
  activeCert: any;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
}

const CertificateWindow: React.FC<CertificateWindowProps> = ({ cert, activeCert, onClose, onMinimize, onMaximize, onFocus }) => {
  const dragControls = useDragControls();

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, x: 0, scale: 0, rotate: (Math.random() - 0.5) * 90 }}
      animate={{ 
        opacity: 1, 
        y: activeCert.isMaximized ? -100 : activeCert.y, 
        x: activeCert.isMaximized ? 0 : `${activeCert.x}vw`, 
        scale: 1, 
        rotate: activeCert.isMaximized ? 0 : activeCert.rotate,
        zIndex: activeCert.zIndex,
        width: activeCert.isMaximized ? '90vw' : '320px',
        height: activeCert.isMaximized ? '80vh' : 'auto',
      }}
      exit={{ opacity: 0, scale: 0.5, y: 0, transition: { duration: 0.2 } }}
      onMouseDown={onFocus}
      className={`absolute left-1/2 -ml-40 md:-ml-40 border-4 border-neu-border shadow-neu ${cert.color} pointer-events-auto flex flex-col overflow-hidden`}
      drag={!activeCert.isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      whileDrag={{ scale: 1.02, zIndex: 9999 }}
    >
      {/* Window Header - Drag Handle */}
      <div 
        onPointerDown={(e) => dragControls.start(e)}
        className="bg-neu-border h-8 flex items-center justify-between px-3 border-b-4 border-neu-border cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex gap-1.5">
          <button 
            className="w-3 h-3 rounded-full bg-[#FF5F56] border-2 border-black hover:bg-red-600 transition-colors"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            title="Close"
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#FFBD2E] border-2 border-black hover:bg-yellow-600 transition-colors"
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            title="Minimize"
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#27C93F] border-2 border-black hover:bg-green-600 transition-colors"
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            title="Maximize"
          />
        </div>
        <div className="text-[10px] font-mono font-black text-white uppercase tracking-tighter truncate px-4 flex-grow text-center">
          {cert.title.substring(0, 20)}...exe
        </div>
        <div className="w-4 h-4" />
      </div>

      <div className="p-3 md:p-4 flex-grow overflow-y-auto">
        <div className="bg-white border-2 border-neu-border p-4 h-full min-h-[250px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
             <Sparkle className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 bg-neu-text rounded-full flex items-center justify-center text-white">
                 <Sparkle className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-xs bg-neu-bg border-2 border-neu-border px-2 py-1 shadow-neu-sm">{cert.date}</span>
            </div>
            <h4 className={`font-black uppercase leading-tight mb-2 ${activeCert.isMaximized ? 'text-3xl' : 'text-lg md:text-xl'}`}>
              {cert.title}
            </h4>
          </div>
          <div className="font-mono text-sm border-t-4 border-neu-border pt-2 mt-6 relative z-10 flex justify-between items-end">
            <div>
              <div className="text-xs text-gray-500 font-bold mb-1">ISSUED BY</div>
              <div className="font-black">{cert.issuer}</div>
            </div>
            <div className="w-12 h-12 border-2 border-neu-border rounded-full flex items-center justify-center bg-neu-bg transform rotate-12">
               <span className="text-[10px] font-bold">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
