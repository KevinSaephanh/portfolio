import React from "react";
import Projects from "./Projects.json";
import "./Work.css";

const Work = () => {
    const [projects, setProjects] = React.useState(Projects.projs);

    const getProjects = () => {
        return (
            <ul className="projects">
                {projects.map((proj, key) => {
                    return (
                        <li
                            className="project"
                            key={key}
                            title={`${proj.title} - click to visit`}
                        >
                            <a href={proj.link}>
                                <img src={proj.pic} alt="" />
                                <div className="project-info">
                                    <h3>{proj.title}</h3>
                                    {getStack(proj)}
                                </div>
                            </a>
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

    return <div className="work">{getProjects()}</div>;
};

export default Work;
