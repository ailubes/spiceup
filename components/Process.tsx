
import React from 'react';
import { Search, PenTool, Rocket, Settings, CheckCircle2 } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ProcessProps {
  full?: boolean;
}

const steps = [
  {
    id: "01",
    title: "AUDIT",
    desc: "We dissect your existing architecture or vision to find the critical bottlenecks and security risks.",
    icon: Search,
    tasks: ["Code Review", "Threat Modeling", "Perf Analysis"]
  },
  {
    id: "02",
    title: "ARCHITECT",
    desc: "Drawing the blueprints for a system that scales horizontally. No tech debt, just clean engineering.",
    icon: PenTool,
    tasks: ["Cloud Map", "API Spec", "DB Schema"]
  },
  {
    id: "03",
    title: "ACCELERATE",
    desc: "Rapid, iterative development with continuous integration. We push to prod while others are still planning.",
    icon: Rocket,
    tasks: ["Sprint Delivery", "QA Automation", "Feature Flags"]
  },
  {
    id: "04",
    title: "AUTOMATE",
    desc: "The final stage where the system manages itself. Auto-scaling, auto-healing, and proactive monitoring.",
    icon: Settings,
    tasks: ["K8s Config", "Log Aggregation", "DR Planning"]
  }
];

export const Process: React.FC<ProcessProps> = ({ full }) => {
  return (
    <section id="process" className={`py-24 bg-black text-white relative overflow-hidden ${full ? 'min-h-screen pt-32' : ''}`}>
      {/* Background Image Accent - Removed mix-blend-overlay for visibility */}
      <div className="absolute inset-0 opacity-[0.08] grayscale contrast-150 pointer-events-none">
        <SafeImage
          src="/images/process-background.jpg"
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-full h-full halftone opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-red-500"></div>
            <span className="text-red-500 font-mono text-sm font-black uppercase tracking-widest">Methodology_Protocol</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-inter font-black uppercase leading-none">
            HOW WE<br />
            <span className="text-red-500">SPICE</span> IT UP.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/20 border-y border-white/20">
          {steps.map((step, idx) => (
            <div key={idx} className="py-16 px-8 group hover:bg-white hover:text-black transition-all duration-500 relative">
              <div className="text-8xl font-inter font-black opacity-10 absolute top-4 right-4 group-hover:text-red-500 group-hover:opacity-100 transition-all">
                {step.id}
              </div>
              
              <div className="mb-8 p-4 border-2 border-white group-hover:border-black w-fit transition-colors">
                <step.icon size={32} strokeWidth={3} className="text-red-500" />
              </div>
              
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight italic">
                {step.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-black font-medium mb-10 transition-colors">
                {step.desc}
              </p>

              <ul className="space-y-3">
                {step.tasks.map(task => (
                  <li key={task} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">
                    <CheckCircle2 size={14} className="text-red-500" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {full && (
          <div className="mt-24 p-12 border-2 border-white/20 bg-zinc-900 tech-border-red">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-5xl font-inter font-black text-red-500 mb-2">99.99%</div>
                <div className="text-xs font-black uppercase tracking-widest">Uptime Guaranteed</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-5xl font-inter font-black text-red-500 mb-2">4X</div>
                <div className="text-xs font-black uppercase tracking-widest">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-inter font-black text-red-500 mb-2">ZERO</div>
                <div className="text-xs font-black uppercase tracking-widest">Critical Vulns Found</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
