import { NextPage } from 'next';
import React from 'react';

const projects = [
  {
    path: '/pathfinder.png',
    title: 'Data Generator',
    desc: 'An app that allows users to create mock data and modules for environment variable types',
    code: 'https://github.com/KevinSaephanh/data-generator',
    site: 'https://inquisitive-entremet-11acdd.netlify.app/',
  },
  {
    path: '/pathfinder.png',
    title: 'Pathfinder',
    desc: 'A visualization of maze generation and pathfinding algorithms. A maze is first generated in real time. Then the maze will be traversed, marking each visited cell. Finally, the optimal path to the escape route will be highlighted.',
    code: 'https://github.com/KevinSaephanh/Pathfinder',
    site: 'https://kevinsaephanh.github.io/Pathfinder/',
  },
  {
    path: '/sort_visualizer.png',
    title: 'Sort Visualizer',
    desc: 'This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.',
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://kevinsaephanh.github.io/Sort_Visualizer/',
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <ul className='flex flex-col items-center justify-between lg:mx-24 gap-y-12'>
        {projects.map((p) => (
          <li className='flex flex-col md:flex-row'>
            <section className='md:w-2/4'>
              <img src={p.path} alt='' />
            </section>
            <section className='flex flex-col text-center md:w-2/4'>
              <h2 className='game-font text-xl text-center p-2 my-4 md:mb-4 lg:w-2/4 mx-auto text-teal-500 border-2 border-teal-500'>
                {p.title}
              </h2>
              <p>{p.desc}</p>
              <div className='flex-center'>
                <a href={p.code} target='_blank' rel='noopener noreferrer'>
                  <button>Code</button>
                </a>
                <a href={p.site} target='_blank' rel='noopener noreferrer'>
                  <button>Visit</button>
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
