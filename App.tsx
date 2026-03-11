import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Services } from './components/sections/Services';
import { Certificates } from './components/sections/Certificates';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { InteractiveDiskPlayer } from './components/InteractiveDiskPlayer';
import { ClickManager } from './components/ui/ClickManager';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-neu-bg text-neu-text selection:bg-neu-lime selection:text-black animate-in fade-in duration-500 relative">
      <ClickManager />
      <div className="riso-grain"></div>
      <InteractiveDiskPlayer />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;