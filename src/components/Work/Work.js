import React from "react";
import Projects from "./Projects.json";
import "./Work.css";

const Work = () => {
    const { projs } = Projects;

    const getProjects = () => {
        return (
            <ul className="projects">
                {projs.map((proj, key) => {
                    return (
                        <li className="project" key={key} title={proj.title}>
                            <a href={proj.link}>
                                <img src={proj.pic} alt="" />
                                <h3>{proj.title}</h3>
                                <h3>{proj.stack}</h3>
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return <div className="work">{getProjects()}</div>;
};

export default Work;
