import React from 'react';
import type { NextPage } from 'next';
import { ProgressBar } from '../components/common/ProgressBar/ProgressBar';

const Home: NextPage = () => {
  const [isLoading, setLoading] = React.useState(true);

  const toggleLoading = () => {
    console.log('asdfasfd');
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className='container flex flex-col items-center justify-between mx-auto'>
      <div className='relative text-center md:px-20 w-full sm:w-5/6 max-w-3xl'>
        {isLoading ? (
          <>
            <ProgressBar maxPercent={100} color={'#0dba86'} toggleLoading={toggleLoading} />
            <span>LOADING....</span>
          </>
        ) : (
          <>
            <h1 className='game-font text-2xl font-bold tracking-wide pb-4'>Kevin Saephanh</h1>
            <span className='game-font text-md md:text-lg font-bold tracking-wide'>
              Full Stack Developer
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
