import React from "react";
import Me from "../../assets/me.jpg";
import { Constants } from "../../constants/Constants";
import "./About.scss";

const About = () => {
  return (
    <div className="about content">
      <h2>ABOUT ME</h2>

      <div className="about-content">
        <img src={Me} alt="" title="MEEEEEEE!" />
        <div className="text-section">
          <p>
            I'm a Full Stack Developer from the awesome state of California. I
            started off my journey in college with C++, learning the basics and
            creating beginner-level programs such as payroll systems,
            calculators, and console games. Although I did not major in computer
            science or a related field, I really enjoyed coding. Over the years,
            my continued interest in the field coupled with the encouragement of
            friends led me to pursue a career in web development.
            <br />
            <br />
            Fast-forward to the present, I now have a multitude of technologies
            under my belt. I've created many fun apps that showcase my abilities
            in frontend/full stack development. I've also had the opportunity to
            apply my acquired knowledge in the industry, utilizing the entire
            stack (frontend, backend, ops).
            <br />
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
    </div>
  );
};

export default About;
