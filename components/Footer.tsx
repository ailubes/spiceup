
import React from 'react';
import { Github, Twitter, Linkedin, ArrowUp, ChevronRight } from 'lucide-react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['Home', 'Services', 'Work', 'Process', 'About', 'Contact', 'Privacy Policy'];

  const handleNavClick = (item: string) => {
    if (item === 'Privacy Policy') {
      setView('privacy');
    } else {
      setView(item.toLowerCase() as View);
    }
  };

  return (
    <footer className="bg-white border-t-2 border-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div 
              className="bg-black p-1 text-white font-inter font-black text-4xl tracking-tighter mb-8 w-fit cursor-pointer hover:bg-red-500 transition-colors"
              onClick={() => setView('home')}
            >
              SPICE<span className="text-red-500 underline underline-offset-4 decoration-4 hover:text-white">UP</span>
            </div>
            <p className="text-2xl font-black uppercase tracking-tighter leading-none max-w-sm mb-8">
              ENGINEERING DIGITAL DOMINANCE SINCE 2024.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/spiceup-online" target="_blank" rel="noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-white transition-all tech-border">
                <Github size={24} />
              </a>
              <a href="https://x.com/spiceup_online" target="_blank" rel="noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-white transition-all tech-border">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/spiceup-online" target="_blank" rel="noreferrer" className="p-4 border-2 border-black hover:bg-black hover:text-white transition-all tech-border">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm mb-8 text-red-500 tracking-[0.2em] underline underline-offset-8">DIRECTORIES</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNavClick(item)}
                    className="flex items-center gap-2 font-black uppercase text-xl hover:text-red-500 transition-colors group"
                  >
                    <ChevronRight size={18} className="text-red-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm mb-8 text-red-500 tracking-[0.2em] underline underline-offset-8">OPERATIONS</h4>
            <div className="space-y-6">
              <div>
                <div className="text-[10px] font-mono text-gray-400 mb-1 font-black">HEADQUARTERS</div>
                <div className="font-bold uppercase tracking-tight">Kyiv, Ukraine</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-400 mb-1 font-black">DIRECT_COMMS</div>
                <div className="font-bold uppercase tracking-tight">ops@spiceup.online</div>
              </div>
              <button 
                onClick={scrollToTop}
                className="mt-4 p-5 bg-red-500 text-white hover:bg-black transition-colors tech-border-red hover:tech-border flex items-center justify-center w-full group"
              >
                <span className="font-black uppercase tracking-widest text-xs">Return to Apex</span>
                <ArrowUp className="ml-2 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
            SYSTEM_UID: 840-SPICE-2024 | BUILD: STABLE_RELEASE_V1
          </p>
          <div className="flex gap-8 text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">
            <button onClick={() => setView('privacy')} className="hover:text-black">Privacy_Protocol</button>
            <button onClick={() => setView('licensing')} className="hover:text-black">Licensing_MIT</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
