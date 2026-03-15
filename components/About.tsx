
import React from 'react';
import { Users, Target, Shield, Heart, Cpu, Brain, Zap, Fingerprint } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Manifesto Section */}
      <div className="py-24 px-4 bg-black text-white relative overflow-hidden">
        {/* Abstract Tech Background - Higher contrast, better visibility */}
        <div className="absolute inset-0 opacity-30 grayscale contrast-150 pointer-events-none">
          <SafeImage
            src="/images/about-manifesto-bg.jpg"
            className="w-full h-full object-cover brightness-[0.3]"
            alt=""
          />
        </div>
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="bg-red-500 text-white px-4 py-1 w-fit text-[10px] font-black uppercase mb-8 tracking-widest">
                Manifesto_V1.0
              </div>
              <h2 className="text-6xl md:text-9xl font-inter font-black uppercase leading-[0.85] tracking-tighter mb-12">
                CODE IS<br />
                <span className="text-red-500">OUR WEAPON</span><br />
                DESIGN IS<br />
                OUR TRUTH.
              </h2>
            </div>
            <div className="flex-1 max-w-xl">
              <p className="text-2xl font-bold uppercase tracking-tight text-gray-300 border-l-8 border-red-500 pl-8 leading-tight mb-8">
                In an era of bloated software and fragile interfaces, SpiceUP builds for durability. We are a collective of engineers who believe utility is the highest form of aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-red-500 font-black text-4xl mb-2 font-inter">2024</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Founded_Operational</div>
                </div>
                <div>
                  <div className="text-red-500 font-black text-4xl mb-2 font-inter">12+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Active_Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values / Philosophy */}
      <div className="py-24 px-4 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black tech-border">
            <div className="bg-white p-12 group hover:bg-red-500 hover:text-white transition-all duration-300">
              <div className="mb-8 p-4 bg-black text-white w-fit tech-border group-hover:bg-white group-hover:text-red-500 transition-colors">
                <Shield size={32} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Radical Trust</h3>
              <p className="font-medium text-gray-500 group-hover:text-white transition-colors">
                We operate with complete transparency. Our code is audited, our processes are open, and our results are verifiable.
              </p>
            </div>
            <div className="bg-white p-12 group hover:bg-black hover:text-white transition-all duration-300">
              <div className="mb-8 p-4 bg-red-500 text-white w-fit tech-border group-hover:bg-white group-hover:text-black transition-colors">
                <Cpu size={32} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">High Efficiency</h3>
              <p className="font-medium text-gray-500 group-hover:text-white transition-colors">
                Latency is the enemy. We optimize every byte, every pixel, and every millisecond to ensure peak performance.
              </p>
            </div>
            <div className="bg-white p-12 group hover:bg-gray-800 hover:text-white transition-all duration-300">
              <div className="mb-8 p-4 bg-black text-white w-fit tech-border group-hover:bg-red-500 transition-colors">
                <Brain size={32} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Human First</h3>
              <p className="font-medium text-gray-500 group-hover:text-white transition-colors">
                Behind every line of code is a human need. We build systems that empower people, not systems that confuse them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Team Grid */}
      <div className="py-24 px-4 bg-[#f3f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="text-red-500 font-mono text-[10px] font-black mb-4 tracking-[0.4em] uppercase">The_Collective</div>
              <h2 className="text-5xl md:text-7xl font-inter font-black uppercase tracking-tighter leading-none">ENGINEERS</h2>
            </div>
              <p className="max-w-xs text-right text-xs font-black uppercase text-gray-400 tracking-widest">
              // A distributed team shipping globally from our Kyiv studio.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "AXEL V.", role: "Lead Systems", bio: "Rust Specialist / Cloud Architect", img: "/images/team-axel.jpg", uid: "0x8F2" },
              { name: "SARA K.", role: "Design Principal", bio: "Brutalist UX / Motion Systems", img: "/images/team-sara.jpg", uid: "0x3A1" },
              { name: "MIKE R.", role: "Security Ops", bio: "Offensive Security / SOC2 Expert", img: "/images/team-mike.jpg", uid: "0x9D0" },
              { name: "LENA J.", role: "Frontend Dev", bio: "TypeScript Wizard / A11y Guru", img: "/images/team-lena.jpg", uid: "0xC44" }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative border-4 border-black overflow-hidden bg-black aspect-square tech-border group-hover:tech-border-red group-hover:-translate-y-2 transition-all spiced-container">
                  <SafeImage
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover spiced-image"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white p-2 tech-border-red opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    <Fingerprint size={16} />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black text-white px-2 py-1 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity z-30">
                    UID: {member.uid}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-2xl font-black uppercase tracking-tighter group-hover:text-red-500 transition-colors">{member.name}</h4>
                  <div className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-2">{member.role}</div>
                  <p className="text-xs font-bold text-gray-500 leading-tight uppercase">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
