import React from "react";
import Me from "../../assets/me.jpg";
import Resume from "../../assets/Resume.pdf";

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
    <div>
      <img src={Me} alt="" />
      <p>
        I'm a <strong>Full Stack Developer</strong> from the awesome state of
        California. I enjoy coding, learning and applying new technologies, and
        just web development in general. I have experience in applying my
        knowledge of full stack development (frontend, backend, ops, etc.) in
        both the industry and personal projects.
      </p>
      <p>Here are some of the languages/technologies I've worked with:</p>
      {technologies.map((tech, i) => {
        return <li key={i}>{tech}</li>;
      })}
      <a href="#" onClick={openPDF(Resume)}>
        Resume
      </a>
    </div>
  );
};

export default About;
