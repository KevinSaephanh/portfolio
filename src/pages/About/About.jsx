import React from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Constants } from "../../constants/Constants";
import "./About.scss";

const progressBarContainerStyles = {
  height: "25%",
  width: "100%",
  border: "2px solid white",
};

const About = () => {
  // Get the difference (in years) between the current date and date passed in
  const getYearDifference = (dateString) => {
    return Math.floor(
      (new Date() - new Date(dateString).getTime()) / 3.15576e10
    );
  };

  const age = getYearDifference("1993-12-01");

  return (
    <div className="about content">
      <h2 className="title">ABOUT ME</h2>

      <div className="profile-container">
        <div className="profile-card">
          <img
            src={`${process.env.REACT_APP_S3_URL}/me.jpg`}
            alt=""
            title="MEEEEEEE!"
          />
          <div className="profile-metadata">
            <h2>Kevin Saephanh</h2>
            <h2 title={`I am ${age} years old`}>LV: {age}</h2>
            <div className="code-bar-container">
              <h2>{"</>"}: 100/100</h2>
              <div
                className="code-bar-filler"
                title="This doesn't signify anything :)"
              />
            </div>
          </div>
        </div>

        <div className="bio-container">
          <div className="bio-content bio-text">
            <p>
              Hi, I'm Kevin, a Full Stack Developer from California. I started
              off my coding journey pretty late into college (halfway through to
              be exact) with the introduction to Computer Science using C++. In
              my courses, I was able learn the basics and foundation of
              programming by creating beginner-level programs such as payroll
              systems, calculators, and console games. And despite the missed
              opportunity to major in Computer Science, my interest in the field
              never waned.
              <br />
              <br />
              This continued interest eventually motivated me to try and pursue
              a career in software development. Fortunately for me, I was able
              to attend a coding bootcamp after college to learn new
              technologies and network with others. This enabled me to get my
              foot in the door and kickstart my career as a developer!
            </p>
          </div>

          <div className="bio-content stats-container">
            <ul>
              {Constants.technologies.map((tech, i) => {
                return (
                  <li
                    key={i}
                    title={`Proficieny with ${tech.title}: ${tech.proficiency}`}
                  >
                    <div className="stats-data">
                      <img src={tech.icon} />
                      <span>{tech.title}</span>
                    </div>
                    <ProgressBar
                      maxPercent={tech.proficiency}
                      toggleLoading={() => {}}
                      progressBarContainerStyles={progressBarContainerStyles}
                      fillerColor={tech.fillerColor}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
