import React from "react";
import Me from "../../assets/me.jpg";
import Skills from "./Skills.json";
import "./About.css";

const About = () => {
    const getSkills = () => {
        return (
            <ul className="skills">
                {Skills.skills.map((skill, key) => {
                    return (
                        <li className="skill" key={key}>
                            <h3>{skill.tech}</h3>
                            <div
                                className="proficiency"
                                style={{ width: skill.proficiency * 5 }}
                            />
                            <h3>{skill.proficiency}%</h3>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="about">
            <img src={Me} alt="" />
            <p>
                I'm a Full Stack Developer from California. My work mainly
                involves concentration on full stack apps, but I like to
                occasionally dabble in pure front-end projects.
            </p>
            {getSkills()}
        </div>
    );
};

export default About;
