import React from "react";
import Me from "../../assets/me.jpg";
import Skills from "./Skills.json";
import "./About.css";

const About = () => {
    const [skills, setSkills] = React.useState(Skills.skills);

    React.useEffect(() => {
        setTimeout(() => {
            skills.forEach((s) => {
                animateLoad(s, s.proficiency, 0);
            });
        }, 200);
    }, []);

    const getSkills = () => {
        return (
            <ul className="skills">
                {skills.map((skill, key) => {
                    return (
                        <li className="skill" key={key}>
                            <h3>{skill.tech}</h3>
                            <div id={`${skill.tech}`} className="proficiency">
                                {skill.proficiency}%
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const animateLoad = (skill, goal, iterator) => {
        if (iterator < goal) {
            const skillStyle = document.getElementById(`${skill.tech}`).style;
            iterator++;

            setTimeout(() => {
                skillStyle.background = `linear-gradient(90deg, rgb(33, 203, 209) ${iterator}%, black ${
                    100 - iterator
                }%`;
                animateLoad(skill, goal, iterator);
            }, 10);
        }
    };

    return (
        <div className="about">
            <img src={Me} alt="" />
            <p>
                I'm a Full Stack Developer from California. I began my
                programming journey in 2016 in college starting with C++. In
                2019, my interest in programming led me to the world of web apps
                and full stack development. Ever since, I've been passionate
                about creating fun and sometimes useful web apps that showcase
                my interests and artistic sense.
            </p>
            <h2>Languages / Technologies</h2>
            {getSkills()}
        </div>
    );
};

export default About;
