import React from 'react';
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

  return (
    <nav className='px-2 sm:px-4 h-16'>
      <div className='h-full flex flex-wrap items-center justify-between'>
        <section>
          <Logo />
        </section>

        <section className='flex flex-row md:flex-row-reverse items-center'>
          <ThemeButton />
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
            onClick={() => setOpen(!open)}
          >
            <HamburgerButton
              path={`${!open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}`}
            />
          </button>
          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 
              ${open} ? 'flex' : 'hidden'`}
          >
            <ul className='flex flex-col p-2 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              {links.map((nav, key) => (
                <NavLink href={nav.link} label={nav.label} key={key} />
              ))}
              <NavLink href={'/resume.pdf'} label={'Resume'} target={'_blank'} />
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};
