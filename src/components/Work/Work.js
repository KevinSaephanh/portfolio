import React from "react";
import Projects from "./Projects.json";
import "./Work.css";
import algoProToday from "../../assets/algoProToday.png";

const Work = () => {
    const { projs } = Projects;

    const getProjects = () => {
        return (
            <ul className="projects">
                {projs.map((proj, key) => {
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
        <div className="work">
            <h1>My Favorite Projects</h1>
            {getProjects()}
        </div>
    );
};

export default Work;
