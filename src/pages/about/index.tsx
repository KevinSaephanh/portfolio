import Image from 'next/image';
import React from 'react';
import { ProgressBar } from '../../components/common/ProgressBar/ProgressBar';
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
    <>
      <span className="themed-text text-lg font-bold">ABOUT ME</span>

      <div className="">
        <div className="">
          <Image src="/me.jpg" alt="me" />
          <div className="">
            <h2>Kevin Saephanh</h2>
            <h2 title={`I am ${lvl} years old`}>LV: {lvl}</h2>
            <div>
              <h2>{'</>'}: 100/100</h2>
              <div className="" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
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

          <ul>
            {technologies.map((tech, i) => {
              return (
                <li
                  key={i}
                  title={`Proficieny with ${tech.title}: ${tech.proficiency}`}
                  className="flex flex-col mb-4"
                >
                  <span>{tech.title}</span>
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
    </>
  );
};

export default About;
