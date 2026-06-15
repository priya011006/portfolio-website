import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, SiHtml5, SiCss, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiDocker, 
  SiGit, SiGithub, SiPostman, SiVercel, SiRender, 
  SiScikitlearn, SiPandas, SiNumpy 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FiCode, FiLayers, FiDatabase, FiSettings, FiCpu, FiTrendingUp } from 'react-icons/fi';

const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    icon: <FiCode className="w-5 h-5 text-violet-500" />,
    skills: [
      { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
      { name: 'C', icon: <span className="font-bold text-slate-500 text-xs">C</span> },
      { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> }
    ]
  },
  {
    category: 'Frontend',
    icon: <FiLayers className="w-5 h-5 text-cyan-500" />,
    skills: [
      { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: <FiSettings className="w-5 h-5 text-pink-500" />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-emerald-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-600 dark:text-slate-300" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
      { name: 'REST APIs', icon: <FiCode className="text-slate-500" /> }
    ]
  },
  {
    category: 'Databases',
    icon: <FiDatabase className="w-5 h-5 text-indigo-500" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'SQL', icon: <FiDatabase className="text-blue-500" /> }
    ]
  },
  {
    category: 'AI / ML',
    icon: <FiCpu className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: 'Machine Learning', icon: <FiCpu className="text-purple-500" /> },
      { name: 'Deep Learning', icon: <FiCpu className="text-red-500" /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-orange-400" /> },
      { name: 'Pandas', icon: <SiPandas className="text-indigo-400" /> },
      { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: <FiSettings className="w-5 h-5 text-emerald-500" />,
    skills: [
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
      { name: 'AWS', icon: <FaAws className="text-amber-500" /> }
    ]
  },
  {
    category: 'Tools',
    icon: <FiSettings className="w-5 h-5 text-orange-500" />,
    skills: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="text-slate-900 dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
      { name: 'Render', icon: <SiRender className="text-indigo-500" /> }
    ]
  },
  {
    category: 'Core Computer Science',
    icon: <FiTrendingUp className="w-5 h-5 text-rose-500" />,
    skills: [
      { name: 'Data Structures', icon: <FiCode className="text-slate-500" /> },
      { name: 'Algorithms', icon: <FiCode className="text-slate-500" /> },
      { name: 'OOP', icon: <FiCode className="text-slate-500" /> },
      { name: 'DBMS', icon: <FiDatabase className="text-slate-500" /> },
      { name: 'Operating Systems', icon: <FiSettings className="text-slate-500" /> },
      { name: 'Software Engineering', icon: <FiLayers className="text-slate-500" /> }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const } 
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden px-4 md:px-8 bg-slate-50/50 dark:bg-transparent">
      {/* Background glow effects */}
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

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
            Technical Skills
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SKILLS_DATA.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                  {cat.icon}
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-800 dark:text-slate-100">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 mt-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:border-violet-500/30 dark:hover:border-cyan-500/30 transition-colors duration-200"
                  >
                    <span className="text-base flex items-center justify-center">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
