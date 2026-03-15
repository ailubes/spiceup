
import React from 'react';
import { Layout, Code, Zap, Cpu, ShieldCheck, Cloud, Plus, Rocket } from 'lucide-react';
import { View } from '../App';
import { SafeImage } from './SafeImage';

interface ServicesProps {
  compact?: boolean;
  setView?: (view: View) => void;
}

// --- Animated Brutalist Icons ---
const AnimatedDesignIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
    <Layout size={40} className="relative z-10" />
    <div className="absolute inset-0 bg-white/20 z-20 animate-tech-scan pointer-events-none border-t border-white"></div>
    <div className="absolute top-0 left-0 w-2 h-2 bg-white z-30"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 bg-white z-30"></div>
  </div>
);

const AnimatedBuildIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <Code size={40} className="relative z-10" />
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-white animate-tech-pulse"></div>
    <div className="absolute top-2 right-0 w-1 h-3 bg-white/30 animate-flicker"></div>
  </div>
);

const AnimatedSecurityIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <ShieldCheck size={40} className="relative z-10" />
    <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-tech-pulse"></div>
    <div className="absolute inset-[-4px] border border-white/20 rounded-full scale-125 opacity-50"></div>
  </div>
);

const AnimatedCloudIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <Cloud size={40} className="relative z-10" />
    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/40 overflow-hidden">
      <div className="w-full h-full bg-white animate-data-flow"></div>
    </div>
    <div className="absolute -top-1 right-2 w-1.5 h-1.5 bg-white animate-tech-pulse"></div>
  </div>
);

const AnimatedDeploymentIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <Rocket size={40} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-white/60 animate-flicker"></div>
    <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping opacity-20"></div>
  </div>
);

const detailedServices = [
  {
    icon: AnimatedDesignIcon,
    title: "Brutalist Design",
    description: "We skip the fluff. Our interfaces are designed for maximum utility and radical clarity, ensuring your users never get lost in the noise.",
    stack: ["Figma", "Design Systems", "Motion", "A11y"],
    color: "bg-red-500",
    bgImage: "/images/service-brutalist-design.jpg"
  },
  {
    icon: AnimatedBuildIcon,
    title: "High-Load Build",
    description: "Engineered for speed. We utilize Go and Rust for high-performance backends and React/Next.js for snappy, reactive frontends.",
    stack: ["Go", "Rust", "TypeScript", "Next.js"],
    color: "bg-black",
    bgImage: "/images/service-high-load-build.jpg"
  },
  {
    icon: AnimatedSecurityIcon,
    title: "Ironclad Security",
    description: "Zero-trust architecture as standard. We audit every line of code to protect your user data and business secrets.",
    stack: ["OAuth", "JWT", "Encryption", "SOC2"],
    color: "bg-blue-600",
    bgImage: "/images/service-ironclad-security.jpg"
  },
  {
    icon: AnimatedDeploymentIcon,
    title: "Hyper Deployment",
    description: "Ship faster, break nothing. Our atomic deployment strategies ensure zero-downtime updates, instant rollbacks, and global edge caching.",
    stack: ["GitOps", "ArgoCD", "Actions", "Canary"],
    color: "bg-amber-600",
    bgImage: "/images/service-hyper-deployment.jpg"
  },
  {
    icon: AnimatedCloudIcon,
    title: "Cloud Operations",
    description: "99.99% uptime is our baseline. We automate everything from deployment to scaling, so you can sleep at night.",
    stack: ["K8s", "Docker", "Terraform", "CI/CD"],
    color: "bg-gray-800",
    bgImage: "/images/service-cloud-operations.jpg"
  }
];

export const Services: React.FC<ServicesProps> = ({ compact, setView }) => {
  // If compact, show first 4 items to make a balanced 2x2 grid. If full, show all.
  const displayServices = compact ? detailedServices.slice(0, 4) : detailedServices;

  return (
    <section className={`py-24 ${compact ? 'bg-white border-y-2 border-black' : 'bg-[#f3f4f6]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="relative">
            <div className="text-red-500 font-mono text-sm font-black mb-4 tracking-[0.4em] uppercase">Capabilities_Manifesto</div>
            <h2 className="text-6xl md:text-8xl font-inter font-black uppercase leading-[0.9]">
              {compact ? 'OUR CORE' : 'FULL STACK'}<br />
              <span className="text-red-500">ARSENAL</span>
            </h2>
          </div>
          {!compact && (
            <div className="max-w-md text-right">
              <p className="font-bold uppercase text-sm leading-tight text-gray-500 italic">
                // We don't just use tools; we master them. Our tech stack is curated for durability and horizontal scalability.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black tech-border overflow-hidden">
          {displayServices.map((service, idx) => {
             // Logic to make the last item span 2 columns if the total count is odd, for a better layout
             const isLastOdd = idx === displayServices.length - 1 && displayServices.length % 2 !== 0;
             
             return (
              <div 
                key={idx} 
                className={`bg-white p-12 group hover:text-white transition-all duration-500 relative overflow-hidden spiced-container ${isLastOdd ? 'md:col-span-2' : ''}`}
              >
                {/* Background Spiced Image - Optimized for clear base presence */}
                <SafeImage
                  src={service.bgImage} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover spiced-image opacity-25 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className={`mb-10 p-5 ${service.color} text-white w-fit tech-border group-hover:bg-white group-hover:text-black transition-colors`}>
                    <service.icon />
                  </div>
                  
                  <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter italic group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className={`text-lg opacity-70 mb-10 font-medium leading-relaxed group-hover:opacity-100 transition-opacity ${isLastOdd ? 'max-w-3xl' : ''}`}>
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map(tech => (
                      <span key={tech} className="px-4 py-1.5 border-2 border-black group-hover:border-white text-xs font-black uppercase tracking-tighter bg-gray-50 group-hover:bg-transparent transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setView && setView('docs')}
                    className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 font-black uppercase text-xs tracking-widest text-red-500 group-hover:text-white"
                  >
                    <span className="underline underline-offset-4">View Documentation</span>
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {compact && setView && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setView('services')}
              className="px-12 py-5 bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-red-500 transition-colors tech-border group"
            >
              See All Capabilities <Plus size={18} className="inline ml-2 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
