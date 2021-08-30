import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  let delay = 0;
  const transition = useTransition(Constants.projects, {
    from: { opacity: 0 },
    enter: (project) => async (next) => {
      await next({ opacity: 1, delay: (delay += 700) });
    },
    leave: {},
    config: { duration: 600 },
  });

  useEffect(() => {
    setActiveProject(Constants.projects[0]);

    // Toggle css for active project
    if (activeProject) {
      const currActiveProj = document.getElementById(activeProject.title);
      currActiveProj.classList.add("active-project");
    }
  }, [activeProject]);

  const handleClick = (index) => {};

  const toggleActiveProject = (project) => {
    const prevActiveProj = document.getElementById(activeProject.title);
    console.log(prevActiveProj);
    prevActiveProj.classList.remove("active-project");

    const currActiveProj = document.getElementById(project.title);
    console.log(currActiveProj);
    currActiveProj.classList.add("active-project");

    setActiveProject(project);
  };

  return (
    <div className="content">
      <h2 className="title">PROJECTS</h2>

      <div className="projects-container">
        {activeProject ? (
          <div className="project-description">
            <h3>{activeProject.title}</h3>

            {/* Project description */}
            <div className="description-body">
              <h4>Description</h4>
              <p>{activeProject.desc}</p>
            </div>

            {/* Tech stack */}
            <div className="description-body">
              <h4>Tech Stack</h4>
              <ul className="stack">
                {activeProject.stack.map((s, key) => {
                  return (
                    <li className="stack-item" key={key}>
                      {s.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Project links */}
            <div className="description-body">
              <a
                href={activeProject.code}
                target="_blank"
                rel="noopener noreferrer"
                title="github"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              {activeProject.site ? (
                <a href={activeProject.site} title="website">
                  <i className="fas fa-external-link-alt" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
        <div>
          <ul className="project-list">
            {Constants.projects.map((proj, key) => (
              <li
                id={proj.title}
                className="project-item"
                key={key}
                onClick={() => toggleActiveProject(proj)}
              >
                <h3>{proj.title}</h3>
                <img
                  src={`${process.env.REACT_APP_S3_URL}/${proj.pic}`}
                  title={proj.title}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
