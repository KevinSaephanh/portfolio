import React from "react";
import Me from "../../assets/Me";
import "./About.css";

const About = () => {
    const getSkills = () => {
        return <div className="skills">
            
        </div>;
    };

    return (
        <div>
            <img src={Me} alt="" />
            <p>
                I'm a Full Stack Developer from California <br />
                My work mainly involves concentration on full stack apps, but I
                like to occasionally dabble in pure front-end projects.
            </p>
        </div>
    );
};

export default About;
