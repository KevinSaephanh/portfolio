import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <>
      <Link href='/'>
        <div id='yeti' title='Yeti from MapleStory'>
          <div className='eye eye1' />
          <div className='eye eye2' />
          <div className='cheek cheek1' />
          <div className='cheek cheek2' />
          <div className='mouth'>vvvv</div>
        </div>
      </Link>
    </>
  );
};
