import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiEye } from 'react-icons/fi';

export const Resume: React.FC = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1Y9z881XO52CY5B2pK66qwlq-yDH3Xkd3/view?usp=sharing';
  const previewUrl = 'https://drive.google.com/file/d/1Y9z881XO52CY5B2pK66qwlq-yDH3Xkd3/preview';

  return (
    <section id="resume" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background glow */}
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative after:absolute after:bottom-[-8px] after:left-1/4 after:right-1/4 after:h-[3px] after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:rounded"
          >
            Resume
          </motion.h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            View or download the resume below to review detailed academic records, software projects, and technical skills.
          </p>
        </div>

        {/* Resume Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 flex flex-col items-center"
        >
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-md shadow-violet-600/20 hover:from-violet-500 hover:to-indigo-500 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FiDownload className="w-4.5 h-4.5" />
              Download Resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold border border-slate-300 dark:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FiExternalLink className="w-4.5 h-4.5" />
              Open In New Tab
            </a>
          </div>

          {/* Iframe Preview Container */}
          <div className="w-full relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-slate-900/5 dark:bg-black/20 aspect-[3/4] sm:aspect-[4/5] md:h-[650px]">
            {/* Top Bar Decoration */}
            <div className="bg-slate-200 dark:bg-slate-900/90 px-4 py-2 flex items-center justify-between border-b border-slate-300 dark:border-slate-800">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <FiEye className="w-3.5 h-3.5" /> Priya_Patel_Resume.pdf
              </span>
              <div className="w-12" />
            </div>
            
            {/* Embedded Iframe */}
            <iframe
              src={previewUrl}
              className="w-full h-[calc(100%-36px)] border-0"
              allow="autoplay"
              title="Priya Patel Resume Preview"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
