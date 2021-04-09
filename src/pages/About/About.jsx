import React from "react";
import Me from "../../assets/me.jpg";
import Resume from "../../assets/Resume.pdf";
import "./About.css";

const About = () => {
  const technologies = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "Spring Boot",
    "React",
    "Angular",
    "AWS",
    "Docker",
  ];

  const openPDF = (pdf) => {
    window.open(pdf, "_blank", "fullscreen=yes");
    return false;
  };

  return (
    <div className="about">
      <img src={Me} alt="" />
      <p>
        I'm a <strong>Full Stack Developer</strong> from the awesome state of
        California. I enjoy coding, learning and applying new technologies, and
        just web development in general. I have experience in applying my
        knowledge of full stack development (frontend, backend, ops, etc.) in
        both the industry and personal projects.
      </p>
      <p>Here are some of the languages/technologies I've worked with:</p>
      <ul>
        {technologies.map((tech, i) => {
          return <li key={i}>{tech}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;
