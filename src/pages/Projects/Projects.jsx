import React from "react";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
  // Render array of projects
  const getProjects = () => {
    return (
      <ul className="project-list">
        {Constants.projects.map((proj, key) => {
          return (
            <li className="project-item" key={key}>
              {/* Render project info (title, description, tech stack) */}
              <div className="project-info">
                <h2>{proj.title.toUpperCase()}</h2>
                <p>{proj.desc}</p>
                {getStack(proj)}

                {/* Render github and website icons */}
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="github"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href={proj.site} title="website">
                  <i className="fas fa-external-link-alt" aria-hidden="true" />
                </a>
              </div>

              {/* Render app image */}
              <img
                src={require(`../../assets/${proj.pic}`)}
                id={proj.pic}
                title={proj.title}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    );
  };

  // Render technologies/languages used to code app
  const getStack = (project) => {
    return (
      <ul className="stack">
        {project.stack.map((s, key) => {
          return (
            <li className="stack-item" key={key}>
              {s.name}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="content">
      <h2>PROJECTS</h2>
      {getProjects()}
    </div>
  );
};

export default Projects;
