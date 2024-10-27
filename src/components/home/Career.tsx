import React from 'react';
import career from '@/data/career.json';
import { Badge } from '../ui/badge/Badge';

export const Career = () => {
  return (
    <div className='fading-border mb-4 md:mb-6'>
      <h3 className='section-title'>Work Experience</h3>
      <ul className='pb-2 md:pb-0'>
        {career.map(({ date, title, company, desc, tech }, key) => (
          <li key={key} className='pb-2 md:pb-4'>
            <div className='flex justify-between items-center'>
              <span className='text-left font-extrabold hover:text-cyan-500'>
                {company}
              </span>
              <span className='text-right font-normal'>{date}</span>
            </div>
            <span className='font-normal'>{title}</span>
            <p className='font-normal pt-2'>{desc}</p>
            <ul className='py-2 md:py-4 flex flex-row flex-wrap'>
              {tech.map((t, key) => (
                <Badge
                  text={t}
                  key={key}
                  colorStyles='dark:text-slate-700 bg-teal-300 dark:bg-electric-blue'
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
