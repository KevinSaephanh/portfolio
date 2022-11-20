import React from 'react';
import { useTransition, animated } from 'react-spring';
import config from '../../config/config';

const projects = [
  {
    pic: 'pathfinder.png',
    title: 'DataGenerator',
    desc: 'An app that allows users to create mock data and modules for environment variable types',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'TypeScript',
      },
    ],
    code: 'https://github.com/KevinSaephanh/data-generator',
    site: 'https://inquisitive-entremet-11acdd.netlify.app/',
  },
  {
    pic: 'pathfinder.png',
    title: 'Pathfinder',
    desc: 'A visualization of maze generation and pathfinding algorithms. A maze is first generated in real time. Then the maze will be traversed, marking each visited cell. Finally, the optimal path to the escape route will be highlighted.',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'JavaScript',
      },
    ],
    code: 'https://github.com/KevinSaephanh/Pathfinder',
    site: 'https://kevinsaephanh.github.io/Pathfinder/',
  },
  {
    pic: 'sortVisualizer.png',
    title: 'Sort Visualizer',
    desc: 'This app also produces algorithm visualizations. A graph is displayed containing a random array of bars of varying length. After starting, bars begin moving left and right to imitate how the sorting algorithm works. Once sorting is completed, all bars will be highlighted.',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'TypeScript',
      },
    ],
    code: 'https://github.com/KevinSaephanh/Sort_Visualizer',
    site: 'https://kevinsaephanh.github.io/Sort_Visualizer/',
  },
];

const Projects = () => {
  let delay = 0;
  const transition = useTransition(projects, {
    from: { opacity: 0 },
    enter: (project) => async (next) => {
      await next({ opacity: 1, delay: (delay += 500) });
    },
    leave: {},
    config: { duration: 600 },
  });

  return (
    <div className="content">
      <h2 className="title">PROJECTS</h2>

      <ul className="project-list">
        {transition((style, project) =>
          project ? (
            <animated.div style={style} className="title-container">
              <li className="project-item">
                {/* Render project info (title, description, tech stack) */}
                <div className="project-info">
                  <h2>{project.title.toUpperCase()}</h2>
                  <p title="Project description">{project.desc}</p>

                  {/* Tech stack used for project */}
                  <ul className="stack">
                    {project.stack.map((s, key) => {
                      return (
                        <li className="stack-item" key={key}>
                          {s.name}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Render github and website icons */}
                  <a href={project.code} target="_blank" rel="noopener noreferrer" title="github">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                  {project.site ? (
                    <a href={project.site} title="website">
                      <i className="fas fa-external-link-alt" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>

                {/* Render app image */}
                <img
                  src={`${config.s3.baseUrl}/${project.pic}`}
                  id={project.pic}
                  title={project.title}
                  alt=""
                />
              </li>
            </animated.div>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Projects;
