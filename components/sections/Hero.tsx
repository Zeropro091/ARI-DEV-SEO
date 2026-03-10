import React from 'react';
import { Button } from '../ui/Button';
import { Sparkle, ArrowDoodle, Squiggle, BoxDoodle, WrenchAndGearDoodle } from '../ui/Doodles';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col pt-16 md:pt-20 border-b-4 border-neu-border relative overflow-hidden bg-neu-bg">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col lg:flex-row items-center justify-between z-10 relative gap-8 md:gap-12 py-8 md:py-12">
        
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-center items-start w-full lg:w-1/2 relative">
          
          <Sparkle className="absolute -top-10 -left-10 w-16 h-16 text-neu-pink mix-blend-multiply opacity-80" />
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-8 break-words w-full riso-text relative">
            CREATIVE<br />
            <span className="text-transparent stroke-text relative" style={{ WebkitTextStroke: '1px #121212' }}>
              DEV
              <Squiggle className="absolute -bottom-4 left-0 w-full h-8 text-neu-lime mix-blend-multiply -z-10" />
            </span><br />
            & DESIGNER
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl font-mono max-w-xl mb-6 md:mb-10 bg-white border-2 border-neu-border p-3 md:p-4 shadow-neu z-20">
            Systems thinker, experimental technologist, and cyber explorer. Co-Founder of Aethers, blending software, hardware, and evolving AI autonomy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto mb-8 lg:mb-0">
            <div className="relative w-full sm:w-auto">
              <Button className="w-full justify-center py-3 md:py-3 text-sm md:text-base" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
                VIEW_WORK
              </Button>
              <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-green-500 pointer-events-none" />
            </div>
            <div className="relative w-full sm:w-auto">
              <Button variant="outline" className="w-full justify-center py-3 md:py-3 text-sm md:text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                CONTACT_ME
              </Button>
              <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-green-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture & Contact */}
        <div className="w-[85%] sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto lg:mx-0 mt-12 lg:mt-0 flex flex-col gap-8 md:gap-12">
          <div className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[600px] relative perspective-1000">
             {/* Decorative underlay */}
            <div className="absolute inset-0 bg-neu-blue border-4 border-neu-border transform translate-x-3 translate-y-3 lg:translate-x-6 lg:translate-y-6">
                <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-red-500 pointer-events-none" />
            </div>
            
            {/* Main Frame */}
            <div className="relative h-full w-full bg-white border-4 border-neu-border shadow-neu overflow-hidden flex items-center justify-center">
                {/* 
                  TODO: Put your half-body picture here! 
                  Replace the src attribute with the URL or path to your image.
                */}
                <img 
                    src="/pic/IMG_9160.PNG" 
                    alt="Ari - Creative Developer, AI Engineer, and Systems Thinker" 
                    className="w-full h-full object-cover object-[center_20%] relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                />
                
                {/* Loading/Fallback Background */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center -z-0">
                  <span className="font-mono font-bold text-gray-400">LOADING_ASSET...</span>
                </div>

                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 z-20 bg-neu-pink border-2 border-neu-border px-2 py-1 font-mono text-xs font-bold shadow-neu-sm pointer-events-none">
                    PROFILE_PIC
                </div>
            </div>
            
            {/* Additional Decorative Element */}
            <div className="absolute -bottom-6 -left-4 bg-neu-yellow border-2 border-neu-border px-4 py-2 font-mono font-bold text-sm transform -rotate-3 shadow-neu z-30 hidden md:block">
                HELLO_WORLD
                <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-red-500 pointer-events-none" />
            </div>
            
            <ArrowDoodle className="absolute -bottom-16 right-10 w-24 h-24 text-neu-blue mix-blend-multiply transform rotate-45 hidden lg:block" />
          </div>

          {/* Contact Info Below Picture */}
          <div className="w-full bg-white border-4 border-neu-border shadow-neu p-4 md:p-6 font-mono text-sm md:text-base flex flex-col gap-3 transform rotate-1 z-20">
             <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold bg-neu-lime px-2 py-1 border-2 border-neu-border inline-block w-fit">WHATSAPP/PHONE</span>
                <a href="tel:081237729115" className="hover:underline hover:text-neu-pink transition-colors font-bold text-lg">081237729115</a>
             </div>
             <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold bg-neu-pink px-2 py-1 border-2 border-neu-border inline-block w-fit">EMAIL</span>
                <a href="mailto:putuari0911@gmail.com" className="hover:underline hover:text-neu-blue transition-colors font-bold text-lg break-all">putuari0911@gmail.com</a>
             </div>
          </div>
        </div>

      </div>

      {/* Marquee */}
      <div className="w-full bg-neu-text text-neu-bg overflow-hidden py-3 border-t-4 border-neu-border rotate-1 scale-105 origin-left relative z-20">
        <div className="whitespace-nowrap animate-marquee font-mono font-bold text-sm md:text-lg flex gap-4 md:gap-8">
           {[...Array(10)].map((_, i) => (
             <span key={i}>REACT • TYPESCRIPT • NODE • DESIGN • UI/UX • ACCESSIBILITY •</span>
           ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};