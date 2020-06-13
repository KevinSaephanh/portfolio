import React from "react";
import Me from "../../assets/me.jpg";
import Skills from "./Skills.json";
import "./About.css";

const skills = Skills.skills;

const About = () => {
    const [slideIndex, setSlideIndex] = React.useState(1);

    React.useEffect(() => {
        colorActiveDot();
        skills.forEach((s) => {
            animateLoad(s, s.proficiency, 0);
        });
    }, [slideIndex]);

    const colorActiveDot = () => {
        const dot1Style = document.getElementById("dot1").style;
        const dot2Style = document.getElementById("dot2").style;

        if (slideIndex === 1) {
            dot2Style.backgroundColor = "black";
            dot1Style.backgroundColor = "green";
        } else {
            dot1Style.backgroundColor = "black";
            dot2Style.backgroundColor = "green";
        }
    };

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
        if (slideIndex === 2 && iterator < goal) {
            const skillStyle = document.getElementById(`${skill.tech}`).style;
            iterator++;

            setTimeout(() => {
                skillStyle.background = `linear-gradient(90deg, rgb(33, 203, 209) ${iterator}%, gray ${
                    100 - iterator
                }%`;
                animateLoad(skill, goal, iterator);
            }, 10);
        }
    };

    const changeSlide = () => {
        if (slideIndex !== 1) setSlideIndex(1);
        else setSlideIndex(2);
    };

    console.log(slideIndex);

    return (
        <div className="about">
            <div className="carousel">
                {slideIndex === 1 ? (
                    <div className="slides info">
                        <img src={Me} alt="" />
                        <p>
                            I'm a Full Stack Developer from California. I began
                            my programming journey in 2016 in college starting
                            with C++. In 2019, my interest in programming led me
                            to the world of web apps and full stack development.
                            Ever since, I've been passionate about creating fun
                            and sometimes useful web apps that showcase my
                            interests and artistic sense.
                        </p>
                    </div>
                ) : (
                    <div className="slides skills">
                        <h2>Languages / Technologies</h2>
                        {getSkills()}
                    </div>
                )}
                <a className="prev" onClick={changeSlide}>
                    &#10094;
                </a>
                <a className="next" onClick={changeSlide}>
                    &#10095;
                </a>
            </div>

            <div>
                <span id="dot1" className="dot" onClick={changeSlide} />
                <span id="dot2" className="dot" onClick={changeSlide} />
            </div>
        </div>
    );
};

export default About;
