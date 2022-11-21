import React from 'react';
import type { NextPage } from 'next';
import { ProgressBar } from '../components/common/ProgressBar/ProgressBar';

const Home: NextPage = () => {
  const [isLoading, setLoading] = React.useState(true);

  const toggleLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="container flex flex-col items-center justify-between mx-auto">
      <div className="relative text-center md:px-20 w-full sm:w-5/6 max-w-3xl">
        {isLoading ? (
          <>
            <ProgressBar
              maxPercent={100}
              toggleLoading={toggleLoading}
              loadSpeed={15}
              fillerColor={'#0dba86'}
            />
            <span>LOADING....</span>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold tracking-wide pb-8 md:pb-12">
              Hello, I'm Kevin Saephanh
            </h1>
            <span className="text-3xl font-bold tracking-wide">I'm a full stack developer</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
