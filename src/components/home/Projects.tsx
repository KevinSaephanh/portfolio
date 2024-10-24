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
      <section className='flex flex-col md:flex-row h-3/5 md:h-2/4'>
        <h3 className='section-title'>Projects</h3>
        <article className='md:border-r-2 md:w-1/3 border-white'>
          <ul className='scrollbar flex flex-row md:flex-col gap-x-5 md:gap-0 p-2 md:mx-auto overflow-y-auto md:overflow-hidden'>
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
        </article>
      </section>
      <section className='flex-center flex-col md:h-2/4 mb-4 md:mb-8 p-4 rounded border-t-2 border-black dark:border-slate-100'>
        <article className='flex-center px-2 md:px-12 md:mx-auto mb-4'>
          <span className='whitespace-pre-line'>{active.desc}</span>
          <ul className='p-4 flex flex-row flex-wrap md:grid-list-cols w-full md:h-4/5 justify-evenly'>
            {active.technologies.map((tech, key) => (
              <li className='mr-3 md:mr-0' key={key}>
                {tech}
              </li>
            ))}
          </ul>
        </article>
        <article className='flex-center'>
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
        </article>
      </section>
    </>
  );
};
