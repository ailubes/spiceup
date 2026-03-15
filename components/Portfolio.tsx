
import React from 'react';
import { ExternalLink, Plus, Database, Globe, Smartphone, Activity, Server, Cpu, Anchor } from 'lucide-react';
import { View } from '../App';
import { SafeImage } from './SafeImage';

interface PortfolioProps {
  compact?: boolean;
  setView?: (view: View) => void;
}

const projects = [
  {
    title: "QUANTUM TRADING",
    category: "FinTech / Engine",
    image: "/images/portfolio-quantum-trading.jpg",
    stats: "Sub-ms Execution",
    icon: Activity
  },
  {
    title: "GRID LOGISTICS",
    category: "Supply Chain",
    image: "/images/portfolio-grid-logistics.jpg",
    stats: "2.4M Shipments/Day",
    icon: Server
  },
  {
    title: "SUDNOKONTROL.ONLINE",
    category: "Maritime Intel",
    image: "/images/portfolio-sudnokontrol.jpg",
    stats: "Global Fleet Tracking",
    icon: Anchor
  },
  {
    title: "SYNAPSE MOBILE",
    category: "Social Platform",
    image: "/images/portfolio-synapse-mobile.jpg",
    stats: "4.8/5 App Store",
    icon: Smartphone
  },
  {
    title: "IRON CLOUD",
    category: "Infrastructure",
    image: "/images/portfolio-iron-cloud.jpg",
    stats: "99.999% SLA",
    icon: Database
  },
  {
    title: "VORTEX ECOM",
    category: "Direct-to-Consumer",
    image: "/images/portfolio-vortex-ecom.jpg",
    stats: "$50M+ ARR Handled",
    icon: Globe
  },
  {
    title: "NOVA ANALYTICS",
    category: "AI / Data Science",
    image: "/images/portfolio-nova-analytics.jpg",
    stats: "Petabytes Processed",
    icon: Cpu
  }
];

export const Portfolio: React.FC<PortfolioProps> = ({ compact, setView }) => {
  const displayProjects = compact ? projects.slice(0, 3) : projects;

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="bg-black text-white px-3 py-1 w-fit text-[10px] font-black uppercase mb-4">Case_Archive_v4.0</div>
            <h2 className="text-6xl md:text-8xl font-inter font-black uppercase tracking-tighter leading-[0.85]">
              BATTLE<br /><span className="text-red-500">TESTED</span>
            </h2>
          </div>
          {compact && setView && (
            <button 
              onClick={() => setView('work')}
              className="group flex items-center gap-4 font-black uppercase tracking-widest text-sm hover:text-red-500 transition-colors pb-2 border-b-4 border-black hover:border-red-500"
            >
              Review All Data <Plus size={20} className="group-hover:rotate-90 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayProjects.map((project, idx) => (
            <div key={idx} className="group cursor-crosshair">
              <div className="relative border-4 border-black overflow-hidden mb-8 aspect-[4/5] tech-border transition-all duration-300 group-hover:tech-border-red group-hover:-translate-y-2 spiced-container">
                
                <SafeImage
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover spiced-image"
                />

                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="w-full h-px bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:animate-tech-scan"></div>
                </div>

                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white text-black px-4 py-2 tech-border group-hover:bg-red-500 group-hover:text-white group-hover:tech-border-red transition-all duration-300 z-30">
                  <project.icon size={16} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-black/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 border-t-2 border-red-500 z-30">
                  <div className="text-red-500 font-mono text-[10px] font-black mb-2 tracking-widest animate-flicker underline decoration-1 underline-offset-4 uppercase">
                    Verification_Success
                  </div>
                  <div className="text-white text-3xl font-inter font-black uppercase tracking-tighter">
                    {project.stats}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-2 transition-all duration-300">
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-500"></div>
                </div>
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all duration-300 tech-border hover:tech-border-red group-hover:rotate-12">
                  <ExternalLink size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
