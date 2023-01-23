import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

const projects = [
  {
    path: '/pathfinder.png',
    title: 'Data Generator',
    desc: 'An app that allows users to create mock data and modules for environment variable types',
    stack: ['React', 'Typescript', 'Tailwind'],
    code: 'https://github.com/KevinSaephanh/data-generator',
    site: 'https://inquisitive-entremet-11acdd.netlify.app/',
  },
  {
    path: '/pathfinder.png',
    title: 'Pathfinder',
    desc: 'A visualization of maze generation and pathfinding algorithms. A maze is first generated in real time. Then the maze will be traversed, marking each visited cell. Finally, the optimal path to the escape route will be highlighted.',
    stack: ['React', 'JavaScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Pathfinder',
    site: 'https://kevinsaephanh.github.io/Pathfinder/',
  },
  {
    path: '/sort_visualizer.png',
    title: 'Sort Visualizer',
    desc: 'This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.',
    stack: ['React', 'TypeScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://kevinsaephanh.github.io/Sort_Visualizer/',
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <ul className='flex flex-col items-center justify-between lg:mx-24 gap-y-12'>
        {projects.map((p) => (
          <li className='flex flex-col md:flex-row w-full h-96 md:h-80 relative'>
            <section className='md:w-1/3 h-full md:mx-auto relative mb-4 md:mb-0'>
              <Image src={p.path} alt='' fill={true} />
            </section>
            <section className='flex flex-col md:w-2/4'>
              <h2 className='game-font text-xl text-center p-2 mb-4 md:mb-6 lg:w-2/4 mx-auto text-teal-500 border-4 border-teal-500'>
                {p.title}
              </h2>
              <p className='p-5 mb-4 dark:bg-slate-700 bg-slate-400'>{p.desc}</p>
              <ul className='flex flex-row mx-auto mb-4'>
                {p.stack.map((s) => (
                  <li className='hover-highlight mr-4'>{s}</li>
                ))}
              </ul>
              <div className='flex-center'>
                <a
                  className='text-2xl mr-4'
                  href={p.code}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsGithub />
                </a>
                <a className='text-3xl' href={p.site} target='_blank' rel='noopener noreferrer'>
                  <TbWorld />
                </a>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
