import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Instagram } from 'lucide-react';
import { Squiggle, Sparkle } from '../ui/Doodles';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 pb-20 md:py-20 md:pb-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader number="05" title="SEND_SIGNALS" subtitle="Let's build something chaotic together." />

        <div className="flex flex-col items-center justify-center mt-8 md:mt-12 text-center">
          
          <div className="max-w-3xl w-full bg-neu-bg border-4 border-neu-border p-5 md:p-12 shadow-neu relative">
             <Sparkle className="absolute -top-8 md:-top-12 left-6 md:left-10 w-12 h-12 md:w-16 md:h-16 text-neu-lime mix-blend-multiply" />
             <Squiggle className="absolute -bottom-8 md:-bottom-10 right-6 md:right-10 w-24 h-8 md:w-32 md:h-12 text-neu-blue mix-blend-multiply transform -rotate-12" />
             
             {/* Decorative Corner */}
             <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-neu-purple border-l-4 border-b-4 border-neu-border mix-blend-multiply"></div>
             <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 bg-neu-yellow border-r-4 border-t-4 border-neu-border mix-blend-multiply"></div>

            <p className="text-base md:text-2xl mb-8 md:mb-12 font-mono font-medium leading-relaxed">
              Available for freelance projects and full-time opportunities. <br/>
              Drop a message or find me on the interwebs.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
              <a href="mailto:putuari0911@gmail.com" className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-base md:text-xl font-bold hover:text-neu-blue transition-colors group w-full md:w-auto justify-center">
                <div className="bg-neu-text text-white p-3 md:p-4 group-hover:bg-neu-blue group-hover:text-black border-2 border-transparent group-hover:border-neu-border transition-all shadow-neu group-hover:shadow-neu-sm transform group-hover:-rotate-3">
                  <Mail size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="font-mono bg-white px-2 py-1 border-2 border-transparent group-hover:border-neu-border text-sm md:text-base">putuari0911@gmail.com</span>
              </a>

              <a href="https://instagram.com/zeropro_0" target="_blank" rel="noreferrer" className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-base md:text-xl font-bold hover:text-neu-pink transition-colors group w-full md:w-auto justify-center">
                <div className="bg-neu-text text-white p-3 md:p-4 group-hover:bg-neu-pink group-hover:text-black border-2 border-transparent group-hover:border-neu-border transition-all shadow-neu group-hover:shadow-neu-sm transform group-hover:rotate-3">
                  <Instagram size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="font-mono bg-white px-2 py-1 border-2 border-transparent group-hover:border-neu-border text-sm md:text-base">@zeropro_0</span>
              </a>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-4 border-neu-border">
               <div className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest">
                  Transmission End Point
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};