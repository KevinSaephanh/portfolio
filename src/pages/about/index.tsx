import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { ProgressBar } from '../../components/common/ProgressBar/ProgressBar';

const technologies = [
  {
    title: 'React',
    icon: 'react',
    proficiency: 80,
    color: 'rgb(156, 54, 252)',
  },
  {
    title: 'Angular',
    icon: 'angular',
    proficiency: 90,
    color: 'rgb(45, 212, 196)',
  },
  {
    title: 'NodeJS',
    icon: 'node',
    proficiency: 90,
    color: 'rgb(0, 230, 0)',
  },
  {
    title: 'Spring Boot',
    icon: 'springBoot',
    proficiency: 90,
    color: 'rgb(255, 37, 37)',
  },
];

const About: NextPage = () => {
  const getYearDifference = (dateString: string) => {
    return Math.floor((new Date().getTime() - new Date(dateString).getTime()) / 3.15576e10);
  };

  const lvl = getYearDifference('1993-12-01');

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-between mx-0 md:mx-auto w-full md:w-4/5 lg:w-3/5'>
        <section className='flex flex-col w-full md:w-1/3 items-center md:items-start mt-0 mb-auto'>
          <Image
            src='/me.jpg'
            alt='me'
            height={300}
            width={300}
            className='rounded border-2 border-black dark:border-slate-100 mb-4'
          />

          <div className='flex flex-col w-4/5 md:w-full mb-4 space-y-2'>
            <span className='text-2xl md:text-3xl'>Kevin Saephanh</span>
            <span className='text-lg md:text-xl'>Software Developer</span>
            <span className='text-lg md:text-xl' title={`I am ${lvl} years old`}>
              <strong className='dark:text-teal-300'>LV</strong> {lvl}
            </span>
            <span className='text-lg md:text-xl'>
              <strong className='dark:text-teal-300'>{'HP'}</strong> 1000/1000
            </span>
            <div className='health-bar w-full h-4 mt-2 bg-green-500 rounded' />
            <span className='text-lg md:text-xl'>
              <strong className='dark:text-teal-300'>{'MP'}</strong> 1000/1000
            </span>
            <div className='health-bar w-full h-4 mt-2 bg-blue-500 rounded' />
          </div>
        </section>

        <section className='flex flex-col w-full md:w-3/5 mt-0 mb-auto'>
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

          <ul className='mt-4 md:mt-6'>
            {technologies.map((tech, key) => (
              <li
                key={key}
                title={`Proficieny with ${tech.title}: ${tech.proficiency}`}
                className='flex flex-col mb-4 text-teal-300'
              >
                <span className='pb-1 text-teal-300'>{tech.title}</span>
                <ProgressBar
                  maxPercent={tech.proficiency}
                  color={tech.color}
                  toggleLoading={() => {}}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
