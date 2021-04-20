import React from "react";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
  // Render array of projects
  const getProjects = () => {
    return (
      <ul>
        {Constants.projects.map((proj, key) => {
          return (
            <li
              className="project-item"
              key={key}
              title={`${proj.title} - click to visit`}
            >
              {/* Render project info (title, description, etc.) */}
              <div className="project-info">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                {getStack(proj)}

                {/* Render github and website icons */}
                <a href={proj.code} key={key}>
                  <i className="fab fa-github" key={key} aria-hidden="true" />
                </a>
                <a href={proj.site} key={key}>
                  <i
                    className="fas fa-external-link-alt"
                    key={key}
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Render app image */}
              <img
                src={require(`../../assets/${proj.pic}`)}
                id={proj.pic}
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
    <div className="projects content">
      <h2>Some Of My Projects</h2>
      {getProjects()}
    </div>
  );
};

export default Projects;
