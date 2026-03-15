
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Mobile App Development');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm('xgonllwy');

  const options = [
    'Mobile App Development',
    'Cloud Migration',
    'UX/UI Redesign',
    'Full Cycle DevOps'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full halftone opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-inter font-black uppercase mb-10 leading-none">
              READY TO<br />
              <span className="text-red-500 underline decoration-8">SPICE</span> IT UP?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Whether it's a legacy system overhaul or a greenfield project, our engineers are ready.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white text-black group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Mail size={24} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-red-500">Email Us</div>
                  <div className="text-xl font-bold">ops@spiceup.online</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white text-black group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <MapPin size={24} strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-red-500">Visit Studio</div>
                  <div className="text-xl font-bold">Kyiv, Ukraine</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 text-black tech-border-red">
            {state.succeeded ? (
              <div className="space-y-6 text-center py-12">
                <div className="inline-block bg-red-500 text-white px-4 py-1 text-xs font-black uppercase tracking-[0.2em]">
                  Transmission Received
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tight">Thanks. We will reply soon.</h3>
                <p className="font-bold text-gray-600 uppercase text-sm tracking-wide">
                  Our team in Kyiv, Ukraine will follow up at your provided email.
                </p>
              </div>
            ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name Input */}
                <div className="relative pt-4">
                  <input 
                    type="text" 
                    id="full-name"
                    name="fullName"
                    className="peer w-full p-4 bg-gray-100 border-2 border-transparent focus:border-black outline-none font-bold transition-all placeholder-transparent" 
                    placeholder="Full Name" 
                    required
                  />
                  <label 
                    htmlFor="full-name"
                    className="absolute left-4 top-8 text-xs font-black uppercase tracking-widest text-gray-400 transition-all pointer-events-none
                    peer-focus:top-0 peer-focus:text-red-500 peer-focus:text-[10px]
                    peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Full Name
                  </label>
                </div>
                
                {/* Email Input */}
                <div className="relative pt-4">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="peer w-full p-4 bg-gray-100 border-2 border-transparent focus:border-black outline-none font-bold transition-all placeholder-transparent" 
                    placeholder="john@example.com" 
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-4 top-8 text-xs font-black uppercase tracking-widest text-gray-400 transition-all pointer-events-none
                    peer-focus:top-0 peer-focus:text-red-500 peer-focus:text-[10px]
                    peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Email Address
                  </label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 block text-xs font-black uppercase text-red-500 tracking-wide"
                  />
                </div>
              </div>
              
              {/* Custom Project Type Dropdown */}
              <div className="relative pt-4" ref={dropdownRef}>
                <label 
                  className="absolute left-4 top-0 text-[10px] font-black uppercase tracking-widest text-black z-20"
                >
                  Project Type
                </label>
                <div 
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full p-4 bg-gray-100 border-2 transition-all font-bold cursor-pointer flex justify-between items-center ${isOpen ? 'border-black bg-white' : 'border-transparent hover:border-gray-300'}`}
                >
                  <span className="uppercase tracking-tight">{selectedType}</span>
                  <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`} size={20} />
                </div>
                <input type="hidden" name="projectType" value={selectedType} />
                
                {/* Options Menu */}
                <div className={`absolute left-0 right-0 mt-2 bg-black text-white z-50 border-2 border-black tech-border transition-all duration-200 origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
                  {options.map((option) => (
                    <div 
                      key={option}
                      onClick={() => {
                        setSelectedType(option);
                        setIsOpen(false);
                      }}
                      className={`p-4 font-black uppercase text-xs tracking-widest cursor-pointer transition-colors border-b border-white/10 last:border-0 ${selectedType === option ? 'bg-red-500 text-white' : 'hover:bg-white hover:text-black'}`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative pt-4">
                <textarea 
                  rows={4} 
                  id="message"
                  name="message"
                  className="peer w-full p-4 bg-gray-100 border-2 border-transparent focus:border-black outline-none font-bold transition-all resize-none placeholder-transparent" 
                  placeholder="How can we help?"
                  required
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-8 text-xs font-black uppercase tracking-widest text-gray-400 transition-all pointer-events-none
                  peer-focus:top-0 peer-focus:text-red-500 peer-focus:text-[10px]
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  Message
                </label>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 block text-xs font-black uppercase text-red-500 tracking-wide"
                />
              </div>

              <button type="submit" disabled={state.submitting} className="w-full bg-red-500 text-white p-6 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-black transition-colors group hover-brutal-pulse disabled:opacity-70 disabled:cursor-not-allowed">
                {state.submitting ? 'Transmitting...' : 'Transmission Start'}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
