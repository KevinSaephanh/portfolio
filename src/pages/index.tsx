import React from 'react';
import type { NextPage } from 'next';
import { Scene } from '../components/canvas/Scene';

const Home: NextPage = () => {
  return (
    <div className='h-full w-full'>
      <Scene />
    </div>
  );
};

export default Home;
