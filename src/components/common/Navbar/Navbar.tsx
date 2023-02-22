import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';
import { HamburgerButton } from '../../ui/Buttons/HamburgerButton';
import { ThemeButton } from '../../ui/Buttons/ThemeButton';
import { Logo } from '../Logo/Logo';
import { NavLink } from './NavLink';

const links = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <nav className='relative px-2 lg:px-6 md:h-16 z-20'>
      <div className='flex flex-wrap items-center justify-between'>
        <section className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Logo />
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='mt-2 inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
            onClick={() => setOpen(!open)}
          >
            <HamburgerButton
              path={`${!open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}`}
            />
          </button>
        </section>

        <section
          className={`flex-center flex-col md:flex-row md:flex md:ml-auto w-full md:w-auto
              ${open ? 'flex' : 'hidden'}`}
        >
          <ul className='flex flex-col md:flex-row list-none p-2 mt-4 md:space-x-8 md:mt-0'>
            {links.map((nav, key) => (
              <NavLink
                href={nav.link}
                label={nav.label}
                active={router.pathname === nav.link}
                key={key}
              />
            ))}
            <NavLink href={'/assets/resume.pdf'} label={'Resume'} target={'_blank'} />
          </ul>
          <ThemeButton />
        </section>
      </div>
    </nav>
  );
};
