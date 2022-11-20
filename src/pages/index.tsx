import * as React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify-between mx-auto">
      <div className="relative md:px-20 w-full sm:w-5/6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-wide pb-8 md:pb-12">
          Hello, I'm Kevin Saephanh
        </h1>
      </div>
    </div>
  );
};

export default Home;
