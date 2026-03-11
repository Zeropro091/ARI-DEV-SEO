import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Code, Globe, Terminal, Cpu, FileText } from 'lucide-react';
import { Sparkle, ArrowDoodle, CrossDoodle } from '../ui/Doodles';
import img9158 from '../../pic/IMG_9158.PNG';
import img9159 from '../../pic/IMG_9159.PNG';

export const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Python', 'Go', 'Rust', // Core
    'AI Agent Development', 'LLM Integration', 'AI Workflow Automation', // AI
    'Web Deployment', 'Backend API Integration', 'Server Optimization', 'SEO', // Tech
    'B2B SaaS Ideation', 'Startup Strategy', 'Tech Benchmarking', // Strategy
    '3D Modeling Coordination', '3D Printing Workflow', // Production
    'Team Management', 'Community Operations', // Leadership
    'TradingView', 'Topstep' // Markets
  ].sort();

  const experiences = [
    {
      role: 'Co-Founder & Leadership',
      company: 'Aethers',
      description: 'Leading creative development teams and managing large-scale community operations. Driving strategic vision and organizational growth.'
    },
    {
      role: 'AI & Tech Engineering',
      company: 'Research & Development',
      description: 'Developing API-based AI agents and optimizing high-performance web systems. Integrating LLMs for workflow automation.'
    },
    {
      role: 'Financial & Analytical Strategy',
      company: 'Market Analysis',
      description: 'Benchmarking technologies and comparing market tools like TradingView and Topstep. Building custom algorithmic tools for wealth management.'
    },
    {
      role: 'Product & Startup Ideation',
      company: 'B2B SaaS Concepts',
      description: 'Designing AI-driven product concepts and automation tools. Focused on product-market fit and technical strategy for startups.'
    },
    {
      role: 'Digital Production Manager',
      company: 'Physical Realm',
      description: 'Coordinating 3D modeling services and managing 3D printing workflows for digital product production pipelines.'
    }
  ];

  return (
    <section id="about" className="py-20 border-b-4 border-neu-border bg-neu-bg">
      <div className="container mx-auto px-6">
        <SectionHeader number="02" title="ABOUT_ME" subtitle="Background context, lore, and skill matrix." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-8 relative">
            <Sparkle className="absolute -top-6 -left-6 w-10 h-10 text-neu-pink mix-blend-multiply" />
            
            <div className="bg-white border-4 border-neu-border p-6 shadow-neu rotate-1">
              <p className="text-xl md:text-2xl leading-relaxed font-black font-mono uppercase">
                What we need to do is look into the <span className="bg-neu-lime px-1 border-2 border-neu-border">future</span>.
              </p>
            </div>

            <div className="bg-neu-blue/10 border-4 border-neu-border p-6 md:p-8 shadow-neu relative">
              <div className="absolute -top-4 left-6 bg-neu-blue border-2 border-neu-border px-3 py-1 font-mono font-bold text-xs shadow-neu-sm">
                SYSTEM_MANIFESTO
              </div>
              <h3 className="font-mono font-black text-xl mb-4 flex items-center gap-2">
                <FileText size={24} /> BIO_DATA
              </h3>
              <p className="text-base md:text-lg leading-relaxed font-medium">
                I'm Ari—a systems thinker, experimental technologist, and cyber explorer. I am not just a coder; my approach bridges software and hardware, focusing on architecture, integration, and long-term AI development. I build intelligent systems with autonomy and control—from multi-modal AI that evolves and remembers, to physical robotics and cyberdeck workstations. I jump between domains fast, preferring to build over consume, and I don't fear complexity.
              </p>
            </div>

            <div className="bg-neu-yellow/10 border-4 border-neu-border p-6 md:p-8 shadow-neu relative">
              <div className="absolute -top-4 left-6 bg-neu-yellow border-2 border-neu-border px-3 py-1 font-mono font-bold text-xs shadow-neu-sm">
                ADDITIONAL_VECTORS
              </div>
              <h3 className="font-mono font-black text-xl mb-4 flex items-center gap-2">
                <Globe size={24} /> EXPERIENCE
              </h3>
              <div className="mt-6 flex flex-col gap-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-2 md:gap-6 border-b-2 border-neu-border/20 pb-6 last:border-0 last:pb-0">
                    <div className="md:w-1/3 shrink-0">
                      <div className="font-black font-mono text-lg">{exp.role}</div>
                      <div className="text-sm font-bold text-neu-pink uppercase tracking-wider">{exp.company}</div>
                    </div>
                    <div className="md:w-2/3 text-sm md:text-base font-medium leading-relaxed">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-4 border-neu-border p-6 shadow-neu -rotate-1">
              <h3 className="font-mono font-bold text-xl mb-6 flex items-center gap-2 border-b-4 border-neu-border pb-2 inline-block">
                <Terminal size={24} /> SKILL_MATRIX
              </h3>
              <div className="flex flex-wrap gap-3">
                 {skills.map(skill => (
                   <div key={skill} className="flex items-center gap-2 bg-neu-bg border-2 border-neu-border px-3 py-1 hover:bg-neu-yellow transition-colors cursor-default">
                     <div className="w-2 h-2 bg-neu-text"></div>
                     <span className="font-mono font-bold text-sm uppercase">{skill}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neu-pink border-4 border-neu-border p-6 md:p-8 shadow-neu hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all mix-blend-multiply">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold bg-white px-2 border border-neu-border text-black">EXPERIENCE</span>
                <Globe size={24} className="md:w-8 md:h-8" />
              </div>
              <div className="text-4xl md:text-6xl font-black">3.5+</div>
              <div className="text-lg md:text-xl font-bold uppercase tracking-tight">Years in the field</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neu-blue border-4 border-neu-border p-6 shadow-neu hover:shadow-neu-sm transition-all mix-blend-multiply">
                 <Code className="mb-2" size={32} />
                 <div className="text-3xl font-bold">25</div>
                 <div className="text-sm font-mono font-bold uppercase">Projects Shipped</div>
              </div>
              <div className="bg-neu-lime border-4 border-neu-border p-6 shadow-neu hover:shadow-neu-sm transition-all mix-blend-multiply">
                 <Cpu className="mb-2" size={32} />
                 <div className="text-3xl font-bold">14</div>
                 <div className="text-sm font-mono font-bold uppercase">Stacks & Modules</div>
              </div>
            </div>

            {/* Image 9158 */}
            <div className="border-4 border-neu-border shadow-neu overflow-hidden relative rotate-1 hover:rotate-0 transition-transform duration-300 h-48 md:h-64">
               <img src={img9158} alt="Ari working on hardware and software systems" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            
            {/* Image 9159 */}
            <div className="border-4 border-neu-border shadow-neu overflow-hidden relative -rotate-1 hover:rotate-0 transition-transform duration-300 h-48 md:h-64 mt-6">
               <img src={img9159} alt="Ari's experimental technology and AI projects" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};