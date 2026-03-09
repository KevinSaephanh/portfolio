'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import projects from '@/data/projects.json';
import { Badge } from '../ui/badge/Badge';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    <div id='projects' className='fading-border'>
      <h3 className='section-title'>Projects</h3>
      <div className='flex flex-col md:flex-row gap-4 mt-4'>
        {/* Project list — game menu style */}
        <section className='w-full md:w-2/5'>
          <ul className='scrollbar flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0'>
            {projects.map((project, key) => (
              <motion.li
                key={key}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`flex items-center cursor-pointer rounded-lg px-3 py-2 transition-all duration-200 min-w-fit md:min-w-0 ${
                  active.id === key + 1
                    ? 'bento-card dark:border-teal-400/60'
                    : 'hover:bg-teal-900/10'
                }`}
                onClick={() => setActive(projects[key])}
              >
                <Image
                  src={'/assets/cursor.gif'}
                  height={20}
                  width={28}
                  alt=''
                  className={`mr-2 flex-shrink-0 ${active.id === key + 1 ? '' : 'invisible'}`}
                />
                <span
                  className={`text-sm font-mono whitespace-nowrap ${
                    active.id === key + 1
                      ? 'neon-text font-bold'
                      : 'dark:text-slate-300 text-slate-600 hover:text-teal-500'
                  }`}
                >
                  {project.title}
                </span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Project details */}
        <AnimatePresence mode='wait'>
          <motion.section
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className='w-full md:w-3/5 bento-card p-5'
          >
            <p className='whitespace-pre-line font-normal text-sm leading-relaxed dark:text-slate-300 mb-3'>
              {active.desc}
            </p>
            <ul className='py-2 flex flex-row flex-wrap'>
              {active.technologies.map((tech, key) => (
                <Badge
                  text={tech}
                  key={key}
                  colorStyles='bg-soft-lilac dark:bg-turquoise text-xs dark:text-slate-700'
                />
              ))}
            </ul>
            <div className='flex items-center gap-3 mt-2 mb-2'>
              <a
                className='flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-teal-600/40 hover:border-teal-400 hover:text-teal-400 dark:text-slate-300 transition-colors duration-200'
                href={active.code}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaCode size={14} />
                <span>Source</span>
              </a>
              {active.website.length > 0 && (
                <a
                  className='flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-teal-600/40 hover:border-teal-400 hover:text-teal-400 dark:text-slate-300 transition-colors duration-200'
                  href={active.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TbWorld size={14} />
                  <span>Live</span>
                </a>
              )}
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
};
