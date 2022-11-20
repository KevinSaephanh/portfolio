import React from 'react';
import ProgressBar from '../../components/common/ProgressBar/ProgressBar';
import config from '../../config/config';

const technologies = [
  {
    title: 'Spring Boot',
    icon: 'springBoot',
    proficiency: 90,
    fillerColor: 'rgb(255, 37, 37)',
  },
  {
    title: 'NodeJS',
    icon: 'node',
    proficiency: 90,
    fillerColor: 'rgb(0, 230, 0)',
  },
  {
    title: 'Angular',
    icon: 'angular',
    proficiency: 90,
    fillerColor: 'rgb(45, 212, 196)',
  },
  {
    title: 'React',
    icon: 'react',
    proficiency: 80,
    fillerColor: 'rgb(156, 54, 252)',
  },
];

const About = () => {
  // Get the difference (in years) between the current date and date passed in
  const getYearDifference = (dateString) => {
    return Math.floor((new Date().getTime() - new Date(dateString).getTime()) / 3.15576e10);
  };

  const lvl = getYearDifference('1993-12-01');

  return (
    <div className="about content">
      <h2 className="title">ABOUT ME</h2>

      <div className="profile-container">
        <div className="profile-card">
          <img src={config.s3.me} alt="" title="MEEEEEEE!" />
          <div className="profile-metadata">
            <h2>Kevin Saephanh</h2>
            <h2 title={`I am ${lvl} years old`}>LV: {lvl}</h2>
            <div className="code-bar-container">
              <h2>{'</>'}: 100/100</h2>
              <div className="code-bar-filler" title="This doesn't signify anything :)" />
            </div>
          </div>
        </div>

        <div className="bio-container">
          <div className="bio-content bio-text">
            <p>
              Hi, I'm Kevin, a Full Stack Developer from California. I started off my coding journey
              pretty late into college (halfway through to be exact) with the introduction to
              Computer Science using C++. In my courses, I was able learn the basics and foundation
              of programming by creating beginner-level programs such as payroll systems,
              calculators, and console games. And despite the missed opportunity to major in
              Computer Science, my interest in the field never waned.
            </p>
            <br />
            <p>
              This continued interest eventually motivated me to try and pursue a career in software
              development. Fortunately for me, I was able to attend a coding bootcamp after college
              to learn new technologies and network with others. This enabled me to get my foot in
              the door and kickstart my career as a developer!
            </p>
          </div>

          <div className="bio-content stats-container">
            <ul>
              {technologies.map((tech, i) => {
                return (
                  <li
                    key={i}
                    title={`Proficieny with ${tech.title}: ${tech.proficiency}`}
                    className="stat-item"
                  >
                    <div className="stat-data">
                      <div className="stat-left">
                        <img src={tech.icon} />
                        <span>{tech.title}</span>
                      </div>
                    </div>
                    <ProgressBar
                      maxPercent={tech.proficiency}
                      toggleLoading={() => {}}
                      loadSpeed={25}
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
