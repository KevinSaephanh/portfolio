import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    path: '/pathfinder.png',
    title: 'Data Generator',
    desc: 'An app that allows users to create mock data (in JSON format) and modules for environment variable types (env.d.ts)',
    stack: ['React', 'Typescript', 'Tailwind'],
    code: 'https://github.com/KevinSaephanh/data-generator',
    site: 'https://inquisitive-entremet-11acdd.netlify.app/',
  },
  {
    id: 2,
    path: '/pathfinder.png',
    title: 'Pathfinder',
    desc: 'A visualization of maze generation and pathfinding algorithms. A maze is first generated in real time. Then the maze will be traversed, marking each visited cell. Finally, the optimal path to the escape route will be highlighted.',
    stack: ['React', 'JavaScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Pathfinder',
    site: 'https://kevinsaephanh.github.io/Pathfinder/',
  },
  {
    id: 3,
    path: '/sort_visualizer.png',
    title: 'Sort Visualizer',
    desc: 'This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.',
    stack: ['React', 'TypeScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://kevinsaephanh.github.io/Sort_Visualizer/',
  },
  {
    id: 4,
    path: '/sort_visualizer.png',
    title: 'Placeholder',
    desc: 'This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.',
    stack: ['React', 'TypeScript', 'Bootstrap'],
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://kevinsaephanh.github.io/Sort_Visualizer/',
  },
  {
    id: 5,
    path: '/sort_visualizer.png',
    title: 'AlgoProToday',
    desc: 'Technical interview prep platform. Level up your skills by tackling popular industry algorithms/data structures questions.\nNote: this was my very first full-stack application.',
    stack: ['React', 'Bootstrap', 'JavaScript', 'Redux', 'Node', 'Express', 'MongoDB'],
    code: 'https://github.com/KevinSaephanh/algoprotoday',
    site: '',
  },
];

const Projects: NextPage = () => {
  const [active, setActive] = React.useState(projects[1]);

  return (
    <div className='md:w-2/3 lg:w-2/4 md:mx-auto themed-border'>
      <section className='flex flex-col md:flex-row'>
        <article className='flex-center md:pr-4 md:border-r-2 border-white'>
          <ul className='scrollbar flex flex-row mb-4 md:mb-0 md:flex-col p-2 overflow-y-auto md:overflow-hidden'>
            {projects.map((p, key) => (
              <li
                key={key}
                className={`whitespace-nowrap cursor-pointer p-2 md:p-1 rounded hover:text-teal-300 ${
                  active.id === key + 1 ? 'bg-slate-500' : ''
                }`}
                onClick={() => setActive(projects[key])}
              >
                {p.title}
              </li>
            ))}
          </ul>
        </article>
        <article className='flex-center flex-col md:flex-row p-4'>
          <div className='md:w-1/3'>
            asdf
            {/* <Image src={active.path} alt='' fill={true} className='themed-border' /> */}
          </div>
          <ul className='flex flex-row flex-wrap md:grid-list-cols md:w-2/4 h-full justify-evenly'>
            {active.stack.map((s) => (
              <li className='mr-3 md:mr-0'>{s}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className='flex-center flex-col mb-4 md:mb-8 p-4 rounded border-t-2 border-black dark:border-slate-100'>
        <article className='flex-center px-4 md:mx-auto mb-4'>
          <span className='text-center whitespace-pre-line'>{active.desc}</span>
        </article>
        <article className='flex-center'>
          <a className='text-2xl mr-4' href={active.code} target='_blank' rel='noopener noreferrer'>
            <BsGithub />
          </a>
          <a
            className={`text-3xl ${
              active.site.length <= 0 ? 'pointer-events-none opacity-50' : ''
            }`}
            href={active.site}
            target='_blank'
            rel='noopener noreferrer'
          >
            <TbWorld />
          </a>
        </article>
      </section>
    </div>
  );
};

export default Projects;
