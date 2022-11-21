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
      <div className="flex flex-col md:flex-row">
        <section className="flex flex-col w-full md:w-1/2 items-center md:items-start justify-between md:justify-start">
          <Image
            src="/me.jpg"
            alt="me"
            height={200}
            width={200}
            className="rounded border-2 border-slate-100 w-2/5 md:w-3/5 h-2/5 md:h-3/5 mb-4 mx-auto md:mx-0"
          />
          <span>Kevin Saephanh</span>
          <span title={`I am ${lvl} years old`}>LV: {lvl}</span>
          <span>{'</>'}: 100/100</span>
          <div className="w-4/5 h-4 mt-2 bg-green-500 rounded" />
        </section>

        <section className="flex flex-col w-full md:w-1/2">
          <p>
            Hi, I'm Kevin, a Full Stack Developer from California. I started off my coding journey
            pretty late into college with the introduction to Computer Science using C++. Although I
            wasn't able to make the switch in major to CS, I still enrolled in as many courses as I
            would be allowed. Through these courses, I was able learn the basics of programming by
            creating beginner-level programs such as payroll systems, calculators, and console
            games.
            <br />
            <br />
            My continued interest eventually motivated me to try and pursue a career in software
            development. Fortunately for me, I was able to attend a coding bootcamp after college to
            learn new technologies and network with others. This enabled me to get my foot in the
            door and kickstart my career as a developer!
          </p>
          <ul>
            {technologies.map((tech, key) => {
              return (
                <li
                  key={key}
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
        </section>
      </div>
    </>
  );
};

export default About;
