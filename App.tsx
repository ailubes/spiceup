
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PatternBackground } from './components/PatternBackground';
import { Process } from './components/Process';
import { About } from './components/About';
import { Legal } from './components/Legal';

export type View = 'home' | 'services' | 'work' | 'process' | 'about' | 'contact' | 'privacy' | 'licensing' | 'docs';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero setView={setView} />
            <Services compact setView={setView} />
            <Portfolio compact setView={setView} />
            <Process />
            <Contact />
          </>
        );
      case 'services':
        return (
          <>
            <div className="pt-24"><Services /></div>
            <Contact />
          </>
        );
      case 'work':
        return (
          <>
            <div className="pt-24"><Portfolio /></div>
            <Contact />
          </>
        );
      case 'process':
        return (
          <>
            <div className="pt-24"><Process full /></div>
            <Contact />
          </>
        );
      case 'about':
        return (
          <>
            <div className="pt-24"><About /></div>
            <Contact />
          </>
        );
      case 'contact':
        return <div className="pt-24"><Contact /></div>;
      case 'privacy':
        return <div className="pt-24"><Legal type="privacy" /></div>;
      case 'licensing':
        return <div className="pt-24"><Legal type="licensing" /></div>;
      case 'docs':
        return <div className="pt-24"><Legal type="docs" /></div>;
      default:
        return <Hero setView={setView} />;
    }
  };

  return (
    <div className="relative min-h-screen text-black overflow-x-hidden selection:bg-red-500 selection:text-white bg-[#f3f4f6]">
      <PatternBackground />
      <Navbar currentView={view} setView={setView} />
      <main className="transition-opacity duration-300">
        {renderView()}
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default App;
