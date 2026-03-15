
import React from 'react';
import { ArrowRight, Plus, Terminal } from 'lucide-react';
import { View } from '../App';
import { SafeImage } from './SafeImage';

interface HeroProps {
  setView: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-red-500"></div>)}
            </div>
            <span className="text-black text-[10px] font-black uppercase tracking-[0.3em]">
              High Performance App Studio
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-inter font-black leading-[0.85] tracking-tighter text-black uppercase mb-8">
            WE CODE<br />
            <span className="text-red-500">BRUTAL</span><br />
            SUCCESS.
          </h1>
          
          <p className="max-w-lg text-lg text-gray-600 font-bold mb-10 leading-tight uppercase tracking-tight border-l-4 border-black pl-6">
            SpiceUP is where technical precision meets high-impact design. 
            We build the systems that others say are impossible.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setView('work')}
              className="bg-black text-white px-8 sm:px-10 py-5 sm:py-6 font-black uppercase tracking-widest tech-border flex items-center gap-4 hover:bg-red-500 transition-colors group"
            >
              Examine Work
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => setView('process')}
              className="bg-white border-2 border-black px-8 sm:px-10 py-5 sm:py-6 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-3"
            >
              <Terminal size={18} />
              The Process
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto group spiced-container tech-border">
            <div className="absolute -inset-4 border-2 border-dashed border-gray-400 -z-10 group-hover:rotate-3 transition-transform"></div>
            <div className="absolute top-8 left-8 w-full h-full bg-red-500 -z-10 opacity-20 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute -top-6 -right-6 bg-white border-2 border-black p-3 sm:p-4 z-30 tech-border animate-float">
               <div className="text-[10px] font-mono font-black mb-1 uppercase">Latency_Core</div>
               <div className="text-xl sm:text-2xl font-black text-red-500">0.8ms</div>
            </div>
            
            <SafeImage
              src="/images/hero-cyber-infrastructure.jpg"
              alt="Cyber Infrastructure" 
              className="w-full h-full object-cover spiced-image"
            />
            
            <div className="absolute bottom-6 -left-4 sm:-left-10 bg-black text-white p-4 sm:p-6 tech-border-red w-[220px] sm:w-[260px] z-30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase">Live_Node_Cluster</span>
              </div>
              <div className="text-lg sm:text-xl font-black leading-tight uppercase">Optimizing 48 Active Nodes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-10 hidden lg:block opacity-10 rotate-90 origin-bottom-right pointer-events-none">
        <div className="text-9xl font-inter font-black uppercase tracking-tighter leading-none select-none">
          EFFICIENT_CODE
        </div>
      </div>
    </section>
  );
};
