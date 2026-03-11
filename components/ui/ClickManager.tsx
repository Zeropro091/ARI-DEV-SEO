import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Click {
  id: number;
  x: number;
  y: number;
}

export const ClickManager: React.FC = () => {
  const [clicks, setClicks] = useState<Click[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload audio - Mechanical Keyboard Click
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    audioRef.current.volume = 0.15;
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    // Play sound
    if (audioRef.current) {
      // Clone the audio to allow overlapping sounds
      const sound = audioRef.current.cloneNode() as HTMLAudioElement;
      sound.volume = 0.15;
      sound.play().catch(() => {
        // Browser might block autoplay until first interaction
      });
    }

    // Add visual effect
    const newClick = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setClicks((prev) => [...prev, newClick]);

    // Remove after animation
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <React.Fragment key={click.id}>
            {/* Ripple Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute w-10 h-10 border-2 border-neu-border rounded-full"
              style={{
                left: click.x - 20,
                top: click.y - 20,
              }}
            />
            
            {/* Brutalist Particles */}
            {[0, 1, 2, 3].map((i) => {
              const angle = (i * 90) * (Math.PI / 180);
              const distance = 40;
              const targetX = Math.cos(angle) * distance;
              const targetY = Math.sin(angle) * distance;
              
              return (
                <motion.div
                  key={`${click.id}-${i}`}
                  initial={{ x: click.x, y: click.y, scale: 1, opacity: 1, rotate: 0 }}
                  animate={{ 
                    x: click.x + targetX,
                    y: click.y + targetY,
                    scale: 0,
                    opacity: 0,
                    rotate: 180
                  }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="absolute w-2 h-2 bg-neu-border border border-white"
                  style={{ left: -4, top: -4 }}
                />
              );
            })}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};
