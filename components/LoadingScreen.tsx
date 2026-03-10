import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState("INITIALIZING...");
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = [
    "Hello", "Halo", "こんにちは", "Hola", "Bonjour", 
    "Hallo", "Ciao", "안녕하세요", "你好", "Привет"
  ];

  const logs = [
    "LOADING_KERNEL_V1...",
    "FETCHING_ASSETS...",
    "DECRYPTING_BIO_DATA...",
    "OPTIMIZING_NEURAL_NET...",
    "ESTABLISHING_SECURE_LINK...",
    "RENDERING_CHAOS...",
    "MOUNTING_DOM_NODES...",
    "SYSTEM_READY"
  ];

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 250);
    return () => clearInterval(greetingTimer);
  }, []);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 40;
    const steps = duration / interval;
    
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const newProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(newProgress);

      // Update logs based on progress chunks
      const logIndex = Math.floor((newProgress / 100) * (logs.length - 1));
      setCurrentLog(logs[logIndex]);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-neu-bg flex flex-col justify-between p-8 md:p-12 font-mono text-neu-text cursor-wait">
      {/* Top Bar */}
      <div className="flex justify-between items-start border-b-4 border-neu-border pb-4">
         <div className="text-xl font-bold animate-pulse">SYSTEM_BOOT_SEQUENCE</div>
         <div className="text-xl font-bold">{new Date().getFullYear()}</div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative">
        {/* Large Progress Number Background */}
        <div className="text-[15vw] md:text-[20vw] font-black leading-none tracking-tighter mix-blend-difference opacity-10 absolute select-none">
          {progress}%
        </div>

        {/* Greeting and Loading Bar */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4">
           <div className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-12 h-20 md:h-24 flex items-center justify-center text-center">
              {greetings[greetingIndex]}
           </div>
           
           <div className="w-full bg-white border-4 border-neu-border p-2 shadow-neu">
             <div className="h-8 w-full bg-gray-200 border-2 border-neu-border relative overflow-hidden">
                <div 
                  className="h-full bg-neu-lime border-r-2 border-neu-border transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
             </div>
             <div className="flex justify-between mt-2 font-bold text-sm">
                <span className="blinking-cursor">{currentLog}</span>
                <span>{progress}%</span>
             </div>
           </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t-4 border-neu-border pt-4 flex justify-between items-end">
         <div className="hidden md:block">
           <div className="flex gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-4 h-4 border-2 border-neu-border ${i < (progress / 20) ? 'bg-neu-text' : 'bg-transparent'}`}></div>
              ))}
           </div>
           <div className="text-xs">LOADING_MODULES...</div>
         </div>
         <div className="text-right">
            <div className="text-4xl font-black">ARI_DEV</div>
            <div className="text-xs mt-1">PLEASE_WAIT</div>
         </div>
      </div>
      
      <style>{`
        .blinking-cursor:after {
          content: '_';
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};