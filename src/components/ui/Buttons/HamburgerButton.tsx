import * as React from 'react';

type HamburgerButtonProps = {
  path: string;
};

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ path }) => {
  return (
    <>
      <svg
        className='h-8 w-8 rounded-full cursor-pointer hover:text-blue-500 dark:hover:text-slate-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={path} />
      </svg>
    </>
  );
};
