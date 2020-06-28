import React from "react";
import Me from "../../assets/me.jpg";
import Skills from "./Skills.json";
import "./About.css";

const { skills } = Skills;

const About = () => {
    const [slideIndex, setSlideIndex] = React.useState(1);

    React.useEffect(() => {
        colorActiveDot();
        if (slideIndex === 2) {
            toggleButtons("none");
            skills.forEach((s) => {
                animateLoad(s, s.proficiency, 0);
            });
        }
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
                            <div className="proficiency">
                                <div
                                    id={`${skill.tech}`}
                                    className="progress"
                                />
                                <div className="proficiency-num">
                                    {skill.proficiency}%
                                </div>
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
                skillStyle.width = `${iterator}%`;
                animateLoad(skill, goal, iterator);
            }, 10);
        }
        if (iterator >= goal)
            setTimeout(() => {
                toggleButtons("inline-block");
            }, 1000);
    };

    const changeSlide = () => {
        if (slideIndex !== 1) setSlideIndex(1);
        else setSlideIndex(2);
    };

    const toggleButtons = (display) => {
        document.querySelectorAll(".slider").forEach((el) => {
            el.style.display = display;
        });
    };

    return (
        <div className="about">
            <div id="clouds" />
            <div className="carousel">
                {slideIndex === 1 ? (
                    <div className="slides info">
                        <img src={Me} alt="" />
                        <div className="sword">
                            <div className="handle">
                                <div className="handle-line" />{" "}
                                <div className="handle-line" />
                                <div className="handle-line" />
                                <div className="handle-line" />
                            </div>
                            <div className="guard" />
                            <div className="blade" />
                        </div>
                        <p>
                            I'm a Full Stack Developer from California. I began
                            my programming journey in 2016 in college starting
                            with C++. In 2019, my interest in programming led me
                            to the world of web development. The freedom,
                            practicality, and creativeness that web development
                            offers are what motivate me to continue creating web
                            apps that not only showcase my interests, but also
                            allow me to experiment with different designs.
                        </p>
                    </div>
                ) : (
                    <div className="slides skills">
                        <h2>Languages / Technologies</h2>
                        {getSkills()}
                    </div>
                )}
                <a className="slider prev" onClick={changeSlide}>
                    &#10094;
                </a>
                <a className="slider next" onClick={changeSlide}>
                    &#10095;
                </a>
            </div>

            <div>
                <span id="dot1" className="slider dot" onClick={changeSlide} />
                <span id="dot2" className="slider dot" onClick={changeSlide} />
            </div>
        </div>
    );
};

export default About;
