import React from 'react';

const jobs = [
  {
    date: 'Jul 2024 - Current',
    title: 'Software Engineer III',
    company: 'JPMorgan Chase',
    desc: '',
  },
  {
    date: 'Jan 2020 - Jan 2024',
    title: 'Full Stack Engineer',
    company: 'Cognizant',
    desc: '',
  },
  {
    date: 'Oct 2019 - Jan 2020',
    title: 'Full Stack Engineer',
    company: 'Revature',
    desc: '',
  },
];

export const WorkExperience = () => {
  return (
    <>
      <h3 className='section-title'>Work Experience</h3>
      <ul>
        {jobs.map(({ date, title, company, desc }, key) => (
          <li key={key}>
            <div className=''>
              <span>{company}</span>
              <span>{date}</span>
            </div>
            <span>{title}</span>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
