'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import projects from '@/data/projects.json';

export const Projects = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    <>
      <h3 className='section-title'>Projects</h3>
      <div className='flex flex-col md:flex-row'>
        <section className='flex-1 items-start overflow-x-auto md:overflow-hidden'>
          <ul className='scrollbar flex flex-row md:flex-col p-2 overflow-y-auto md:overflow-hidden'>
            {projects.map((project, key) => (
              <li
                key={key}
                className={`flex-center cursor-pointer p-2 md:p-1`}
                onClick={() => setActive(projects[key])}
              >
                <Image
                  src={'/assets/cursor.gif'}
                  height={30}
                  width={40}
                  alt=''
                  className={`md:mr-2 ${
                    active.id === key + 1 ? '' : 'invisible'
                  }`}
                />
                <p
                  className={`md:w-2/3 whitespace-nowrap hover:text-teal-300 ${
                    active.id === key + 1
                      ? 'bg-slate-300 dark:bg-slate-500 p-1 rounded'
                      : ''
                  }`}
                >
                  {project.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className='flex-1'>
          <span className='whitespace-pre-line font-normal'>{active.desc}</span>
          <ul className='py-2 md:py-4 flex flex-row flex-wrap justify-evenly'>
            {active.technologies.map((tech, key) => (
              <li className='mr-3 md:mr-0' key={key}>
                {tech}
              </li>
            ))}
          </ul>
          <div className='flex flex-row'>
            <a
              className='text-2xl mr-4'
              href={active.code}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub />
            </a>
            <a
              className={`text-3xl ${
                !active.website.length ? 'pointer-events-none opacity-50' : ''
              }`}
              href={active.website}
              target='_blank'
              rel='noopener noreferrer'
              aria-disabled={!active.website}
            >
              <TbWorld />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
