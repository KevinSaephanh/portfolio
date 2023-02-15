import React from 'react';
import type { NextPage } from 'next';
import { ProgressBar } from '../components/common/ProgressBar/ProgressBar';
import { Press_Start_2P } from '@next/font/google';

const pressStartToPlay = Press_Start_2P({ weight: '400', subsets: ['latin'] });

const Home: NextPage = () => {
  const [isLoading, setLoading] = React.useState(true);

  const toggleLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className='container flex flex-col items-center justify-between mx-auto'>
      {isLoading ? (
        <>
          <ProgressBar maxPercent={100} color={'#0dba86'} toggleLoading={toggleLoading} />
          <span>LOADING....</span>
        </>
      ) : (
        <>
          <h1 className={`${pressStartToPlay.className} text-xl md:text-3xl tracking-wide pb-4`}>
            Kevin Saephanh
          </h1>
          <span
            className={`${pressStartToPlay.className} text-sm md:text-lg tracking-wide hover:highlight`}
          >
            Full Stack Developer
          </span>
        </>
      )}
    </div>
  );
};

export default Home;
