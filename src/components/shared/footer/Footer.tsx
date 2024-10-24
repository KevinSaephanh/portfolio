import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsDiscord } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className='text-center mt-6 pb-4 flex-none relative'>
      <div className='flex-center text-2xl space-x-2 mb-2'>
        <a
          href='https://www.linkedin.com/in/kevin-saephanh'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/KevinSaephanh'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
        <a
          href='https://twitter.com/Kevcoolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsTwitter />
        </a>
        <a
          href='https://www.discord.com/users/360657658270973956'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsDiscord />
        </a>
      </div>
      <span className='text-md hover:highlight'>© 2022 Kevin Saephanh</span>
    </footer>
  );
};
