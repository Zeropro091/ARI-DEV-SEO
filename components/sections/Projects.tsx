import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Project } from '../../types';
import { ExternalLink, Github, ArrowUpRight, Maximize2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { CrossDoodle, Sparkle } from '../ui/Doodles';

const projects: Project[] = [
  {
    id: 1,
    title: "NEU_STORE_V2",
    description: "Experimental e-commerce experience using headless architecture. Brutalist aesthetics meet seamless stripe checkout flows.",
    tags: ["NEXT.JS", "STRIPE", "ZUSTAND"],
    link: "#",
    image: "https://picsum.photos/800/600?random=1",
    color: "bg-neu-lime"
  },
  {
    id: 2,
    title: "ECHO_CHAMBER",
    description: "Real-time anonymous chat application with ephemeral messaging and AI-powered sentiment moderation.",
    tags: ["SOCKET.IO", "REDIS", "REACT"],
    link: "#",
    image: "https://picsum.photos/800/600?random=2",
    color: "bg-neu-pink"
  },
  {
    id: 3,
    title: "PIXEL_DITHER",
    description: "Browser-based image manipulation tool bringing Macintosh 1984 aesthetic to modern JPGs via WebGL shaders.",
    tags: ["WEBGL", "THREE.JS", "GLSL"],
    link: "#",
    image: "https://picsum.photos/800/600?random=3",
    color: "bg-neu-blue"
  },
  {
    id: 4,
    title: "CRYPTO_PUNK_DASH",
    description: "High-frequency crypto tracking dashboard with brutal data visualization and real-time WebSocket feeds.",
    tags: ["D3.JS", "WEBSOCKET", "TAILWIND"],
    link: "#",
    image: "https://picsum.photos/800/600?random=4",
    color: "bg-neu-yellow"
  },
  {
    id: 5,
    title: "VOID_OS",
    description: "A web-based operating system simulation portfolio. Features a functional terminal and window management system.",
    tags: ["TYPESCRIPT", "SYSTEM DESIGN", "CSS"],
    link: "#",
    image: "https://picsum.photos/800/600?random=5",
    color: "bg-neu-purple"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-20 border-b-4 border-neu-border bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #121212 25%, transparent 25%, transparent 75%, #121212 75%, #121212), linear-gradient(45deg, #121212 25%, transparent 25%, transparent 75%, #121212 75%, #121212)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader number="01" title="TOP_5_WORKS" subtitle="The definitive collection of digital chaos." />

        <div className="relative mt-8 md:mt-16">
          {/* The Blur Overlay */}
          <div className="absolute -inset-4 md:-inset-12 z-30 backdrop-blur-xl bg-white/40 flex items-center justify-center p-4">
            {/* The Paper Note */}
            <div className="relative bg-[#fdf8d5] border-2 border-neu-border p-8 md:p-16 shadow-2xl transform -rotate-2 max-w-2xl w-full text-center">
              {/* Tape top-left */}
              <div className="absolute -top-4 -left-6 w-24 h-8 bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm transform -rotate-45"></div>
              {/* Tape top-right */}
              <div className="absolute -top-4 -right-6 w-24 h-8 bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm transform rotate-45"></div>
              {/* Tape bottom-left */}
              <div className="absolute -bottom-4 -left-6 w-20 h-8 bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm transform rotate-12"></div>
              
              <h2 className="text-red-600 font-black text-4xl md:text-6xl tracking-tighter mb-6 border-4 border-red-600 inline-block p-4 transform rotate-1 opacity-90">
                GOVERMENT SECRET
              </h2>
              
              <p className="font-mono text-lg md:text-2xl text-neu-text font-bold">
                contant me if you want to see my work and hear presentation :))
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:gap-24 opacity-30 pointer-events-none select-none filter blur-md">
          
          {/* PROJECT 1: The Standard Brutalist */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <CrossDoodle className="absolute -top-12 -left-8 w-16 h-16 text-neu-pink mix-blend-multiply hidden md:block" />
            
            <div className="lg:col-span-7 relative">
               <div className="absolute inset-0 bg-neu-lime border-4 border-neu-border translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 mix-blend-multiply"></div>
               <img src={projects[0].image} alt={`Project: ${projects[0].title}`} loading="lazy" className="relative z-10 border-4 border-neu-border w-full h-[200px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="lg:col-span-5 space-y-3 md:space-y-6">
               <h3 className="text-xl md:text-5xl font-black italic">{projects[0].title}</h3>
               <div className="flex flex-wrap gap-2">
                 {projects[0].tags.map(t => <span key={t} className="bg-black text-white font-mono px-2 py-1 text-[10px] md:text-sm">{t}</span>)}
               </div>
               <p className="text-xs md:text-lg font-mono border-l-4 border-neu-lime pl-3 md:pl-4">{projects[0].description}</p>
               <Button className="w-full md:w-auto justify-center text-sm md:text-base py-2 md:py-3">VIEW_CASE_STUDY <ArrowUpRight size={16} className="md:w-5 md:h-5" /></Button>
            </div>
          </div>

          {/* PROJECT 2: Reversed & Color Flood */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-3 md:space-y-6 text-left lg:text-right">
               <h3 className="text-xl md:text-5xl font-black text-transparent stroke-text" style={{ WebkitTextStroke: '1px #121212' }}>{projects[1].title}</h3>
               <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                 {projects[1].tags.map(t => <span key={t} className="bg-neu-pink border border-neu-border text-black font-mono px-2 py-1 text-[10px] md:text-sm">{t}</span>)}
               </div>
               <p className="text-xs md:text-lg font-mono border-l-4 lg:border-l-0 lg:border-r-4 border-neu-pink pl-3 md:pl-4 lg:pl-0 lg:pr-4">{projects[1].description}</p>
               <div className="flex flex-col sm:flex-row justify-start lg:justify-end gap-2">
                 <button className="p-2 md:p-3 border-2 border-neu-border bg-white hover:bg-neu-pink transition-colors flex justify-center"><Github size={20} className="md:w-6 md:h-6" /></button>
                 <Button variant="secondary" className="justify-center text-sm md:text-base py-2 md:py-3">LIVE_DEMO</Button>
               </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
               <div className="absolute -inset-2 bg-neu-pink mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity z-20 pointer-events-none hidden md:block"></div>
               <img src={projects[1].image} alt={`Project: ${projects[1].title}`} loading="lazy" className="border-4 border-neu-border w-full h-[200px] md:h-[400px] object-cover" />
            </div>
          </div>

          </div>
        </div>
      </div>
      <style>{`
        .bg-scanlines {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </section>
  );
};