
import React from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: { label: string; value: View }[] = [
    { label: 'Services', value: 'services' },
    { label: 'Work', value: 'work' },
    { label: 'Process', value: 'process' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNav = (v: View) => {
    setView(v);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => handleNav('home')}
          >
            <div className="bg-black p-1 text-white font-inter font-black text-2xl tracking-tighter group-hover:bg-red-500 transition-colors">
              SPICE<span className="text-red-500 group-hover:text-white underline underline-offset-4 decoration-2">UP</span>
            </div>
            <div className="hidden sm:block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
              [v2.5_STABLE]
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`font-black uppercase text-xs tracking-widest transition-all flex items-center gap-1 group relative py-2 ${
                  currentView === item.value ? 'text-red-500' : 'text-black hover:text-red-500'
                }`}
              >
                <Plus size={12} className={`${currentView === item.value ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`} />
                {item.label}
                {currentView === item.value && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
                )}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="bg-black text-white px-5 py-2 font-black uppercase text-xs tracking-widest transition-all tech-border hover:bg-red-500 hover:tech-border-red ml-4"
            >
              START A PROJECT
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 border-2 border-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-black p-6 space-y-6 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              className="block w-full text-left font-black uppercase text-3xl hover:text-red-500 border-b-2 border-transparent hover:border-black py-2"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav('contact')}
            className="w-full bg-red-500 text-white p-5 font-black uppercase tracking-widest tech-border-red"
          >
            START A PROJECT
          </button>
        </div>
      )}
    </nav>
  );
};
