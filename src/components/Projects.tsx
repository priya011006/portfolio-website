import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiTrendingUp, FiActivity, FiLayers, FiPlay, FiServer, FiDatabase } from 'react-icons/fi';

const flagshipProject = {
  title: 'GoalMatrix',
  description: 'Enterprise goal management platform enabling organization-wide goal setting, KPI tracking, manager approvals, progress monitoring, and HR analytics.',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
  achievements: [
    'Designed a secure role-based access control (RBAC) mechanism for admin, manager, and employee levels.',
    'Implemented real-time KPI tracking algorithms, achieving instant progress sync across dependent department teams.',
    'Optimized MongoDB read/write operations using indexing, resulting in a 40% reduction in dashboard load times.'
  ],
  features: [
    'Organization-wide goal setting & alignment',
    'Real-time KPI and key result tracking metrics',
    'Manager review and approval workflows',
    'Automated HR progress tracking and analytics'
  ],
  liveUrl: 'https://goal-matrix.vercel.app',
  gitUrl: 'https://github.com/priya011006/GoalMatrix'
};

const otherProjects = [
  {
    title: 'Vocalix - AI Voice Agent',
    description: 'Real-time AI voice interaction platform integrating speech-to-text, response generation, and text-to-speech pipelines.',
    tech: ['Python', 'FastAPI', 'AI APIs'],
    icon: <FiCpu className="w-6 h-6 text-pink-500" />,
    liveUrl: 'https://vocalix-ai-voice-agent.onrender.com',
    gitUrl: 'https://github.com/priya011006/AI-Voice-Agent'
  },
  {
    title: 'Notify - AI Productivity Chrome Extension',
    description: 'AI-powered productivity assistant providing summarization, translation, productivity tracking, and browser automation.',
    tech: ['JavaScript', 'Chrome Extension API', 'AI APIs'],
    icon: <FiPlay className="w-6 h-6 text-violet-500" />,
    videoUrl: 'https://youtu.be/AUybgegsW6M',
    gitUrl: 'https://github.com/priya011006/Notify-Chrome-extension'
  },
  {
    title: 'Heart Disease Risk Predictor',
    description: 'Machine learning application that predicts heart disease risk using healthcare data and predictive models.',
    tech: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas'],
    icon: <FiActivity className="w-6 h-6 text-cyan-500" />,
    liveUrl: 'https://heart-disease-risk-predictor-dut8stblde5wesz4eydm2h.streamlit.app/',
    gitUrl: 'https://github.com/priya011006/Heart-Disease-Risk-Predictor'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

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
            Featured Projects
          </motion.h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            A selection of full stack applications, AI integrations, and developer tools built with industry best practices.
          </p>
        </div>

        {/* FLAGSHIP SHOWCASE: GoalMatrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/80 mb-16 relative"
        >
          <div className="absolute top-4 right-4 bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Flagship Project
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* Project Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  {flagshipProject.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagshipProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-outfit text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                    Core Functionality
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {flagshipProject.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="mb-6 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <h4 className="font-outfit text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FiTrendingUp className="w-4 h-4" />
                    Engineering Achievements
                  </h4>
                  <ul className="space-y-2">
                    {flagshipProject.achievements.map((ach, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        • {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-md shadow-violet-600/20 hover:from-violet-500 hover:to-indigo-500 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={flagshipProject.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-700/50"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub Code
                </a>
              </div>
            </div>

            {/* Architecture Area */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Architecture block chart */}
              <div className="p-4 rounded-2xl bg-slate-950/90 text-white border border-slate-800 shadow-xl flex flex-col justify-center items-center h-full min-h-[300px]">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-1">
                  <FiLayers className="w-3.5 h-3.5" /> System Architecture
                </span>
                
                {/* Visual Architecture Flow */}
                <div className="flex flex-col items-center w-full gap-3 py-2 text-xs">
                  {/* Client */}
                  <div className="w-11/12 p-3 bg-slate-900/90 rounded-lg border border-violet-500/30 text-center font-mono">
                    <span className="text-violet-400">Frontend UI</span>
                    <p className="text-[10px] text-slate-500">React + Tailwind (Vercel)</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="h-4 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500" />
                  
                  {/* Gateway */}
                  <div className="w-11/12 p-3 bg-slate-900/90 rounded-lg border border-cyan-500/30 text-center font-mono relative">
                    <span className="text-cyan-400">REST API Gateway</span>
                    <p className="text-[10px] text-slate-500">Express + JWT Authentication</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500" />
                  
                  {/* Services */}
                  <div className="grid grid-cols-2 gap-2 w-11/12">
                    <div className="p-2 bg-slate-900/90 rounded-lg border border-emerald-500/20 text-center font-mono">
                      <FiServer className="w-3 h-3 mx-auto text-emerald-400 mb-1" />
                      <span className="text-emerald-400 block text-[10px]">User Service</span>
                    </div>
                    <div className="p-2 bg-slate-900/90 rounded-lg border border-emerald-500/20 text-center font-mono">
                      <FiTrendingUp className="w-3 h-3 mx-auto text-emerald-400 mb-1" />
                      <span className="text-emerald-400 block text-[10px]">KPI Tracker</span>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="h-4 w-0.5 bg-gradient-to-b from-emerald-500 to-slate-500" />
                  
                  {/* Database */}
                  <div className="w-11/12 p-3 bg-slate-900/90 rounded-lg border border-slate-700 text-center font-mono">
                    <FiDatabase className="w-4 h-4 mx-auto text-yellow-500 mb-1" />
                    <span className="text-yellow-400">MongoDB Database</span>
                    <p className="text-[10px] text-slate-500">Document Store (Atlas)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between h-full hover:border-violet-500/30 dark:hover:border-cyan-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                    {p.icon}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={p.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                      aria-label="View Github repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                        aria-label="View live demo website"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {p.videoUrl && (
                      <a
                        href={p.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-red-500 transition-colors"
                        aria-label="View demo video"
                      >
                        <FiPlay className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-outfit text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div>
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
