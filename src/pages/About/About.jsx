import React from "react";
import Me from "../../assets/me.jpg";
import { Constants } from "../../constants/Constants";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <img src={Me} alt="" title="ME!" />
      <div className="text-section">
        <p>
          I'm a <strong>Full Stack Developer</strong> from the awesome state of
          California. I enjoy coding, learning and applying new technologies,
          and just web development in general. I have experience in applying my
          knowledge of full stack development (frontend, backend, ops, etc.) in
          both the industry and personal projects. <br />
          <br />
          Here are some of the languages/technologies that I've worked with:
        </p>
        <ul>
          {Constants.technologies.map((tech, i) => {
            return <li key={i}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
