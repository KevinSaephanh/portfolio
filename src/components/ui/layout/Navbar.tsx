'use client';

import { useState } from 'react';
import { NavLink } from './NavLink';
import { HamburgerButton } from '../buttons/HamburgerButton';
import { ThemeButton } from '../buttons/ThemeButton';
import { Logo } from '../logo/Logo';
import { useScene } from '@/context/SceneContext';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { contentVisible, toggle } = useScene();

  return (
    <nav className={`${open ? 'absolute w-full h-full bg-gray-950 z-50' : ''}`}>
      <div className={`w-full flex flex-wrap items-center justify-between`}>
        <section className='w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Logo />
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-2 rounded-lg md:hidden'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
            onClick={() => setOpen(!open)}
          >
            <HamburgerButton
              path={`${
                !open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'
              }`}
            />
          </button>
        </section>

        <section
          className={`flex-center flex-col md:flex-row md:flex md:ml-auto w-full md:w-auto pr-2 lg:pr-0
              ${open ? 'flex' : 'hidden'}`}
        >
          <ul className='flex flex-col md:flex-row list-none p-2 mt-4 md:space-x-8 md:mt-0'>
            <NavLink href={'/contact'} label={'Contact'} onClick={setOpen} />
            <NavLink
              href={'/assets/resume.pdf'}
              label={'Resume'}
              target={'_blank'}
              onClick={setOpen}
            />
          </ul>
          <button
            onClick={toggle}
            title={contentVisible ? 'Hide content' : 'Show content'}
            className='p-2 text-slate-500 hover:text-rose-400 transition-colors'
          >
            {contentVisible ? (
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.641 0-8.573-3.007-9.963-7.178z' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88' />
              </svg>
            )}
          </button>
          <ThemeButton />
        </section>
      </div>
    </nav>
  );
};
