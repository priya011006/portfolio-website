import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiDownload, FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';
import priyaPhoto from '../assets/priya.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-4"
    >
      {/* Background glow effects */}
      <div className="glow-spot-purple top-1/4 left-1/4" />
      <div className="glow-spot-cyan bottom-1/4 right-1/4" />

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 blur-md opacity-75 animate-pulse-slow" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-900 dark:border-slate-950 overflow-hidden shadow-2xl shadow-purple-500/20"
          >
            <img 
              src={priyaPhoto} 
              alt="Priya Patel" 
              className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Introduction Metadata Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-4"
        >
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 dark:text-violet-400">
            Available for Internships
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 dark:text-cyan-400">
            Full Stack & AI/ML
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-outfit text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white"
        >
          PRIYA PATEL
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-outfit text-lg sm:text-2xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6"
        >
          Software Engineer <span className="text-violet-500">|</span> Full Stack Developer <span className="text-cyan-500">|</span> AI/ML Enthusiast
        </motion.p>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Computer Science undergraduate passionate about building scalable full-stack applications, AI-powered systems, and high-performance backend architectures. Strong foundation in Data Structures, Algorithms, OOP, DBMS, and Software Engineering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-10 w-full px-4"
        >
          <a
            href="https://drive.google.com/file/d/1G1oKSkdMapw9GpJEYNRhiEFvK3UJ43JM/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-600/30 hover:shadow-violet-600/40 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200"
          >
            <FiDownload className="w-5 h-5" />
            Download Resume
          </a>

          <button
            onClick={() => handleScrollTo('#projects')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white font-semibold transition-all duration-200 border border-slate-700/50 dark:border-slate-200"
          >
            View Projects
            <FiArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleScrollTo('#contact')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold transition-all duration-200"
          >
            <FiPhoneCall className="w-5 h-5" />
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/priya-patel17/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:text-blue-500 text-slate-600 dark:text-slate-400 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/priya011006"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:text-black dark:hover:text-white text-slate-600 dark:text-slate-400 transition-all"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:priya2005dec@gmail.com"
            className="p-3 rounded-full glass-card hover:text-red-500 text-slate-600 dark:text-slate-400 transition-all"
            aria-label="Send Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
