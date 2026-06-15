import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiActivity, FiLayers } from 'react-icons/fi';

interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  period: string;
  grades: string;
  subtitle: string;
  courses?: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Pranveer Singh Institute of Technology',
    degree: 'Bachelor of Technology',
    major: 'Computer Science & Engineering',
    period: '2023 - 2027',
    grades: '83.04% (till 5th Semester)',
    subtitle: 'B.Tech Undergraduate',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Software Engineering'
    ]
  },
  {
    institution: 'Chinmaya Vidyalaya',
    degree: 'Intermediate (Class XII)',
    major: 'Science Stream (PCM)',
    period: '2021 - 2023',
    grades: '88.00%',
    subtitle: 'Senior Secondary Education'
  },
  {
    institution: 'Chinmaya Vidyalaya',
    degree: 'High School (Class X)',
    major: 'Science & Mathematics',
    period: '2019 - 2021',
    grades: '94.16%',
    subtitle: 'Secondary Education'
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden px-4 md:px-8">
      {/* Background glow */}
      <div className="absolute right-0 bottom-1/4 w-72 h-72 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

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
            Education
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {EDUCATION_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-8 pl-10 md:pl-0"
              >
                {/* Timeline Node Point */}
                <div className="absolute left-[10px] md:left-1/2 top-1.5 -translate-x-[4px] md:-translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-500 shadow-md">
                  <FiBookOpen className="w-4 h-4 text-cyan-500" />
                </div>

                {/* Left side / Date (hidden on mobile, on desktop sits left) */}
                <div className="w-full md:w-[45%] md:text-right md:pr-8 md:pt-1 hidden md:block">
                  <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wider block">
                    {item.period}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm mt-1 block">
                    {item.subtitle}
                  </span>
                </div>

                {/* Right side / Content Card */}
                <div className="w-full md:w-[45%] md:pl-8">
                  {/* Mobile-only metadata */}
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider block">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80">
                    <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-violet-500 dark:text-cyan-400 font-semibold text-sm mb-4">
                      {item.degree} <span className="text-slate-400 font-normal">|</span> {item.major}
                    </p>

                    {/* Grade Alert Badge */}
                    <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold w-fit">
                      <FiActivity className="w-4 h-4" />
                      Academic Grade: {item.grades}
                    </div>

                    {/* Highlighted coursework (Rendered conditionally) */}
                    {item.courses && item.courses.length > 0 && (
                      <div>
                        <h4 className="font-outfit text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <FiLayers className="w-3.5 h-3.5 text-violet-500" /> Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {item.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2.5 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
