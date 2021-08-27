import React from "react";
import { useTransition, animated } from "react-spring";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
  let delay = 0;
  const transition = useTransition(Constants.projects, {
    from: { opacity: 0 },
    enter: (project) => async (next) => {
      await next({ opacity: 1, delay: (delay += 700) });
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
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github"
                  >
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                  {project.site ? (
                    <a href={project.site} title="website">
                      <i
                        className="fas fa-external-link-alt"
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}
                </div>

                {/* Render app image */}
                <img
                  src={`${process.env.REACT_APP_S3_URL}/${project.pic}`}
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
