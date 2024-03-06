'use client';

import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    path: '/assets/data-generator.png',
    title: 'Data Generator',
    desc: 'Create up to 1000 records of mock data for your application, using common properties of entities such as email, names, and encrypted text.\nIn addition, upload .env files to create modules for environment variable types to make them type-safe.',
    stack: ['React', 'Typescript', 'Tailwind'],
    code: 'https://github.com/KevinSaephanh/data-generator',
    site: 'https://inquisitive-entremet-11acdd.netlify.app/',
  },
  {
    id: 2,
    path: '/assets/pathfinder.png',
    title: 'Pathfinder',
    desc: `A visualization of maze generation and pathfinding algorithms. How it works:\n\u2022 A maze is generated in real time using a maze generation algorithm.\n\u2022 A pathfinding algorithm traverses the maze, marking each visited cell.\n\u2022 The optimal path to the escape route will be highlighted.`,
    stack: ['React', 'JavaScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Pathfinder',
    site: 'https://master--sage-youtiao-4202f8.netlify.app/',
  },
  {
    id: 3,
    path: '/assets/sort-visualizer.png',
    title: 'Sort Visualizer',
    desc: 'A visualization of sorting algorithms.\n\u2022 A graph is generated using an array of numbers.\n\u2022 The generated bars begin moving left and right, imitating the sorting algorithm.\n\u2022 Once sorting is completed, all bars will be highlighted.',
    stack: ['React', 'TypeScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://gentle-clafoutis-1e9dfe.netlify.app/',
  },
  {
    id: 4,
    path: '',
    title: 'AlgoProToday',
    desc: 'Technical interview prep platform. Level up your skills by tackling popular industry questions regarding data structures and algortihms.\nNote: this was my very first full-stack application.',
    stack: [
      'React',
      'Bootstrap',
      'JavaScript',
      'Redux',
      'Node',
      'Express',
      'MongoDB',
    ],
    code: 'https://github.com/KevinSaephanh/algoprotoday',
    site: '',
  },
];

export default function Page() {
  const [active, setActive] = React.useState(projects[0]);

  return (
    <div className='w-11/12 lg:w-3/5 h-720 md:h-500 mx-auto themed-border'>
      <section className='flex flex-col md:flex-row h-3/5 md:h-2/4'>
        <article className='md:border-r-2 md:w-1/3 border-white'>
          <ul className='scrollbar flex flex-row md:flex-col gap-x-5 md:gap-0 p-2 md:mx-auto overflow-y-auto md:overflow-hidden'>
            {projects.map((p, key) => (
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
                  {p.title}
                </p>
              </li>
            ))}
          </ul>
        </article>
        <article className='flex-center flex-col md:flex-row w-full md:w-2/3 h-full'>
          <div className='relative w-full h-full'>
            <Image
              src={active.path}
              alt=''
              fill={true}
              className='themed-border'
              priority={true}
            />
          </div>
          <ul className='p-4 flex flex-row flex-wrap md:grid-list-cols w-full md:h-4/5 justify-evenly'>
            {active.stack.map((s, key) => (
              <li className='mr-3 md:mr-0' key={key}>
                {s}
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className='flex-center flex-col md:h-2/4 mb-4 md:mb-8 p-4 rounded border-t-2 border-black dark:border-slate-100'>
        <article className='flex-center px-2 md:px-12 md:mx-auto mb-4'>
          <span className='whitespace-pre-line'>{active.desc}</span>
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
              active.site.length <= 0 ? 'pointer-events-none opacity-50' : ''
            }`}
            href={active.site}
            target='_blank'
            rel='noopener noreferrer'
            aria-disabled={!active.site}
          >
            <TbWorld />
          </a>
        </article>
      </section>
    </div>
  );
}
