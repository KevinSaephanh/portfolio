import Link from 'next/link';
import React from 'react';
import config from '../../../config/config';
import { HamburgerButton } from '../../ui/Buttons/HamburgerButton';
import { ThemeButton } from '../../ui/Buttons/ThemeButton';
import { Logo } from '../Logo/Logo';

const links = [
  {
    icon: 'fa fa-home',
    label: 'Home',
    id: 'home-link',
    link: '/',
  },
  {
    icon: 'fa fa-user',
    label: 'About',
    id: 'about-link',
    link: '/about',
  },
  {
    icon: 'fa fa-code',
    label: 'Projects',
    id: 'work-link',
    link: '/projects',
  },
  {
    icon: 'fa fa-envelope',
    label: 'Contact',
    id: 'contact-link',
    link: '/contact',
  },
];

const NavLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="nav-item link-item themed-text md:text-lg block px-3 py-2" aria-current="page">
        {label}
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Logo />
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <HamburgerButton path={'M4 6h16M4 12h16M4 18h16'} />
            ) : (
              <HamburgerButton path={'M6 18L18 6M6 6l12 12'} />
            )}
          </button>
        </div>

        <div
          className={'md:flex flex-grow items-center' + (open ? ' flex' : ' hidden')}
          id="example-navbar-danger"
        >
          <ThemeButton />
          <ul className="nav-menu">
            {links.map((nav, key) => {
              return <NavLink href={nav.link} label={nav.label} key={key} />;
            })}
            <a
              href={config.s3.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
