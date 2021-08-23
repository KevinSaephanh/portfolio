import React from "react";
import { Constants } from "../../constants/Constants";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="content">
      <h2 className="title">PROJECTS</h2>

      {/* Project List */}
      <ul className="project-list">
        {Constants.projects.map((proj, key) => {
          return (
            <li className="project-item" key={key}>
              {/* Render project info (title, description, tech stack) */}
              <div className="project-info">
                <h2>{proj.title.toUpperCase()}</h2>
                <p title="Project description">{proj.desc}</p>
                {/* Tech stack used for project */}
                <ul className="stack">
                  {proj.stack.map((s, key) => {
                    return (
                      <li className="stack-item" key={key}>
                        {s.name}
                      </li>
                    );
                  })}
                </ul>

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
                src={`${process.env.REACT_APP_S3_URL}/${proj.pic}`}
                id={proj.pic}
                title={proj.title}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
