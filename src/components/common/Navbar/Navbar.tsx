import clsx from 'clsx';
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

type NavLinkProps = {
  href: string;
  label: string;
  target?: string;
  styles?: string;
  icon?: string;
};

const NavLink = ({ href, label, target, styles, icon }: NavLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx('link-item themed-text md:text-lg block py-2 ', styles)}
      aria-current="page"
    >
      <i className={clsx('pr-2', icon)} aria-hidden="true" />
      {label}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <Logo />

        <div className="flex flex-grow items-center">
          <ThemeButton />
        </div>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-2 themed-text rounded-lg md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <HamburgerButton path={`${!open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}`} />
        </button>

        <div
          className={clsx(
            'justify-between items-center w-full md:flex md:w-auto md:order-1 ',
            open ? 'flex' : 'hidden'
          )}
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 rounded-lg border border-gray-100 dark:border-gray-700">
            {links.map((nav, key) => (
              <NavLink href={nav.link} label={nav.label} icon={nav.icon} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
