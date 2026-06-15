import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiCloud, FiLayout, FiMaximize, FiShield } from 'react-icons/fi';

const INTERESTS = [
  { name: 'Full Stack Development', icon: <FiLayout className="w-5 h-5 text-violet-500" /> },
  { name: 'Backend Engineering', icon: <FiCode className="w-5 h-5 text-cyan-500" /> },
  { name: 'Artificial Intelligence', icon: <FiCpu className="w-5 h-5 text-indigo-500" /> },
  { name: 'Machine Learning', icon: <FiMaximize className="w-5 h-5 text-blue-500" /> },
  { name: 'Cloud Technologies', icon: <FiCloud className="w-5 h-5 text-emerald-500" /> },
  { name: 'Software Architecture', icon: <FiShield className="w-5 h-5 text-amber-500" /> },
  { name: 'System Design', icon: <FiDatabase className="w-5 h-5 text-rose-500" /> },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Subtle blur decorative circle */}
      <div className="absolute right-0 top-1/2 w-72 h-72 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative after:absolute after:bottom-[-8px] after:left-1/4 after:right-1/4 after:h-[3px] after:bg-gradient-to-r after:from-violet-500 after:to-cyan-400 after:rounded"
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 text-slate-700 dark:text-slate-300"
          >
            <p className="text-lg leading-relaxed mb-6">
              I am a Computer Science undergraduate pursuing a <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science and Engineering</strong> at Pranveer Singh Institute of Technology.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I enjoy building scalable software systems, designing backend architectures, developing full-stack applications, and solving complex engineering problems.
            </p>
            <p className="text-lg leading-relaxed">
              My coding philosophy is centered around writing maintainable, production-ready code and integrating modern engineering paradigms like clean architecture, secure RESTful APIs, and efficient AI pipelines.
            </p>
          </motion.div>

          {/* Interests and Fields */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-6 pl-2 border-l-4 border-violet-500">
              Technical Interests
            </h3>
            <div className="flex flex-col gap-3">
              {INTERESTS.map((interest) => (
                <motion.div
                  key={interest.name}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-slate-200/50 dark:border-slate-800/80 hover:border-violet-500/30 dark:hover:border-cyan-500/30"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                    {interest.icon}
                  </div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
