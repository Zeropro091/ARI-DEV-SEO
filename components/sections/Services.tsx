import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Users, BarChart3, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sparkle, CircleDoodle, UnderlineDoodle, BoxDoodle } from '../ui/Doodles';

const services = [
  {
    id: 1,
    title: <>LEADERSHIP_<br />&_COMMUNITY</>,
    icon: <Users size={40} />,
    description: "Co-Founder of Aethers. Leading creative development teams and managing large-scale community operations with a focus on strategic growth.",
    features: ["Team Management", "Community Operations", "Strategic Direction"],
    color: "bg-neu-pink"
  },
  {
    id: 2,
    title: <>FINANCE_<br />&_STRATEGY</>,
    icon: <BarChart3 size={40} />,
    description: "Sophisticated wealth management and market analysis. Building custom algorithmic tools for financial growth across IDX, Crypto, and Forex.",
    features: ["Wealth Management", "Market Analysis", "Algorithmic Tools"],
    color: "bg-neu-yellow"
  },
  {
    id: 3,
    title: <>TECH_<br />&_ENGINEERING</>,
    icon: <Cpu size={40} />,
    description: "Systems thinker bridging software and hardware. Developing autonomous AI agents, multi-modal systems, and integrated hardware solutions.",
    features: ["AI Agent Development", "Systems Architecture", "Full-Stack Engineering"],
    color: "bg-neu-lime"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-20 border-b-4 border-neu-border bg-neu-bg">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader number="03" title="CAPABILITIES" subtitle="Core pillars of expertise and strategic modules." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 relative">
          
          <Sparkle className="absolute -top-8 right-10 w-12 h-12 text-neu-lime mix-blend-multiply" />
          
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative bg-white border-4 border-neu-border p-5 md:p-8 cursor-default h-full"
            >
              {/* Decorative Shadow Box */}
              <motion.div 
                className={`absolute inset-0 ${service.color} border-4 border-neu-border translate-x-2 translate-y-2 -z-10 mix-blend-multiply`}
                whileHover={{ translateX: 12, translateY: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              ></motion.div>
              
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 md:mb-8 relative">
                  <div className={`p-3 md:p-5 border-2 border-neu-border ${service.color} shadow-neu-sm relative z-10`}>
                    {service.icon}
                  </div>
                  {index === 1 && <CircleDoodle className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 text-neu-pink mix-blend-multiply opacity-60 pointer-events-none" />}
                  <span className="font-mono font-bold text-4xl md:text-5xl text-gray-200/50">0{index + 1}</span>
                </div>

                <h3 className="text-xl md:text-3xl font-black font-mono mb-4 md:mb-6 inline-block self-start relative">
                  {service.title}
                  <BoxDoodle className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-red-500 pointer-events-none" />
                  {index === 0 && <UnderlineDoodle className="absolute -bottom-2 left-0 w-full h-4 text-neu-pink mix-blend-multiply opacity-80 pointer-events-none" />}
                  {index === 1 && <UnderlineDoodle className="absolute -bottom-2 left-0 w-full h-4 text-neu-yellow mix-blend-multiply opacity-80 pointer-events-none" />}
                  {index === 2 && <UnderlineDoodle className="absolute -bottom-2 left-0 w-full h-4 text-neu-blue mix-blend-multiply opacity-80 pointer-events-none" />}
                </h3>
                
                <p className="text-sm md:text-lg font-medium mb-6 md:mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm font-bold">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-neu-text"></div>
                      <span className="uppercase tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional "Raw" Info Strip */}
        <div className="mt-12 md:mt-16 border-4 border-neu-border bg-black text-white p-4 md:p-6 font-mono overflow-hidden relative">
           <div className="whitespace-nowrap animate-marquee flex gap-8 md:gap-12 text-neu-lime font-bold text-xs md:text-base">
              {[...Array(5)].map((_, i) => (
                <span key={i}>SYSTEM_STATUS: ONLINE • ALL_SYSTEMS_OPERATIONAL • 99.9% UPTIME •</span>
              ))}
           </div>
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
