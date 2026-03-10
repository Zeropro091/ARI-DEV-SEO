import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [revealedCount, setRevealedCount] = useState(0);

  const handleReveal = () => {
    if (revealedCount < allCertificates.length) {
      // Reveal 1 or 2 at a time
      const toReveal = Math.min(Math.floor(Math.random() * 2) + 1, allCertificates.length - revealedCount);
      setRevealedCount(prev => prev + toReveal);
    }
  };

  const revealedCerts = allCertificates.slice(0, revealedCount);

  return (
    <section id="certificates" className="py-20 border-b-4 border-neu-border bg-neu-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="CERTIFICATES" subtitle="Proof of my suffering and late nights." />

        <div className="mt-16 relative min-h-[700px] flex flex-col items-center">
          {/* The Box */}
          <div className="relative z-20 cursor-pointer group" onClick={handleReveal}>
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono font-bold text-lg bg-white border-2 border-neu-border px-4 py-2 shadow-neu transform -rotate-2 group-hover:rotate-0 transition-transform z-30">
              MY CERTIFICATES
              <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-red-500 pointer-events-none" />
            </div>
            
            <div className="w-64 h-48 bg-neu-text border-4 border-neu-border relative shadow-neu group-hover:shadow-neu-sm group-active:translate-y-2 transition-all">
              {/* Box Lid/Opening */}
              <div className="absolute top-0 left-0 w-full h-12 bg-black border-b-4 border-neu-border flex items-center justify-center overflow-hidden">
                 <div className="w-full h-full bg-gray-900 opacity-50"></div>
              </div>
              
              {/* Box Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-mono font-black text-2xl pt-8">
                {revealedCount < allCertificates.length ? 'CLICK ME' : 'EMPTY'}
                {revealedCount < allCertificates.length && (
                  <span className="text-sm font-normal mt-2 bg-neu-pink text-black px-2 py-1 border border-neu-border transform rotate-3">
                    {revealedCount === 0 ? 'Drop them!' : 'Click more!'}
                  </span>
                )}
              </div>
              
              {/* Box details */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-neu-border"></div>
                 <div className="w-2 h-2 rounded-full bg-neu-border"></div>
              </div>
            </div>
          </div>

          {/* Dropped Certificates */}
          <div className="absolute top-32 left-0 w-full h-full pointer-events-none">
            <AnimatePresence>
              {revealedCerts.map((cert, index) => {
                // Randomize drop position and rotation for scattered effect
                const randomX = (Math.random() - 0.5) * 60; // -30vw to 30vw
                const randomRotate = (Math.random() - 0.5) * 60; // -30deg to 30deg
                const randomY = 150 + (index * 60) + (Math.random() * 40);

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: -150, x: 0, scale: 0, rotate: (Math.random() - 0.5) * 90 }}
                    animate={{ 
                      opacity: 1, 
                      y: randomY, 
                      x: `${randomX}vw`, 
                      scale: 1, 
                      rotate: randomRotate 
                    }}
                    transition={{ 
                      type: 'spring', 
                      damping: 14, 
                      stiffness: 120,
                      mass: 0.8 + Math.random() * 0.5
                    }}
                    className={`absolute left-1/2 -ml-32 md:-ml-40 w-64 md:w-80 p-3 md:p-4 border-4 border-neu-border shadow-neu ${cert.color} pointer-events-auto hover:z-50 hover:scale-105 transition-transform cursor-grab active:cursor-grabbing`}
                    drag
                    dragConstraints={{ left: -400, right: 400, top: -100, bottom: 500 }}
                    whileDrag={{ scale: 1.1, zIndex: 100, rotate: 0 }}
                  >
                    <div className="bg-white border-2 border-neu-border p-4 h-full flex flex-col justify-between relative overflow-hidden">
                      {/* Decorative watermark */}
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
                        <h4 className="font-black text-lg md:text-xl leading-tight mb-2 uppercase">{cert.title}</h4>
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
