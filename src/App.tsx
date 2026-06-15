import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage for preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkBg text-slate-950 dark:text-slate-100 transition-colors duration-300 relative selection:bg-violet-500/30">
      {/* Interactive Background */}
      <ParticleBackground darkMode={darkMode} />

      {/* Modern Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Floating Scroll to Top button */}
      <BackToTop />

      {/* Sticky Header and Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Home Section */}
        <Hero />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Resume Preview Section */}
        <Resume />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-10 py-8 text-center text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-950/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Priya Patel. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React • Vite • Tailwind CSS • Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
