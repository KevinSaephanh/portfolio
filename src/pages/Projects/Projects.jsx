import React from "react";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
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
              <div className="project-info">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                {getStack(proj)}
                <a href={proj.link}>
                  <button type="button">Visit</button>
                </a>
              </div>
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
