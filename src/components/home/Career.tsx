import React from 'react';
import career from '@/data/career.json';
import { Badge } from '../ui/badge/Badge';
import { motion } from 'framer-motion';

export const Career = () => {
  return (
    <div className='fading-border mb-4 md:mb-6'>
      <h3 className='section-title'>Work Experience</h3>
      <ul className='relative mt-6 pb-2 md:pb-0'>
        {/* Vertical neon timeline line */}
        <div
          className='absolute left-[4px] top-2 bottom-0 w-px'
          style={{
            background: 'linear-gradient(to bottom, rgba(45,212,191,0.7), rgba(45,212,191,0.1) 85%, transparent)',
          }}
        />

        {career.map(({ date, title, company, desc, tech }, key) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: key * 0.12 }}
            key={key}
            className='relative pl-8 pb-6 last:pb-2'
          >
            {/* Timeline dot */}
            <div className='timeline-dot absolute left-0 top-[6px]' />

            {/* Card */}
            <div className='bento-card p-4 md:p-5'>
              <div className='flex justify-between items-start flex-wrap gap-1 mb-1'>
                <span className='font-press-start text-xs highlight'>{company}</span>
                <span className='font-mono text-xs dark:text-slate-400 text-slate-500'>{date}</span>
              </div>
              <span className='font-mono text-xs dark:text-slate-400 text-slate-500 block mb-2'>
                // {title}
              </span>
              <p className='font-normal text-sm leading-relaxed dark:text-slate-300'>{desc}</p>
              <ul className='pt-3 flex flex-row flex-wrap'>
                {tech.map((t, i) => (
                  <Badge
                    text={t}
                    key={i}
                    colorStyles='dark:text-slate-700 bg-teal-300 dark:bg-electric-blue text-xs'
                  />
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
