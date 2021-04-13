import React from "react";
import { Constants } from "../../constants/Constants";
import { useViewport } from "../../hooks/Viewport";
import "./Projects.scss";

const Projects = () => {
  const width = useViewport().width;

  const getProjects = () => {
    return (
      <ul className="projects">
        {Constants.projects.map((proj, key) => {
          return (
            <li
              className="project"
              key={key}
              title={`${proj.title} - click to visit`}
            >
              <img
                src={require(`../../assets/${proj.pic}`)}
                id={proj.pic}
                alt=""
              />
              <div className="project-info">
                <h3>{proj.title}</h3>
                {getStack(proj)}
                <a href={proj.link}>
                  <button type="button">Visit</button>
                </a>
              </div>
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
    <div className="projects">
      <h2>My Projects</h2>
      <p>Here are a few of projects I've completed and deployed:</p>
      {getProjects()}
    </div>
  );
};

export default Projects;
