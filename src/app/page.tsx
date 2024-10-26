'use client';

import { useState } from 'react';
import { LoadingBar } from '@/components/shared/loading-bar/LoadingBar';
import { Scene } from '@/components/shared/scene/Scene';
import { Projects } from '@/components/home/Projects';
import { Career } from '@/components/home/Career';
import { About } from '@/components/home/About';
import { Terrain } from '@/components/shared/scene/Terrain';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full'>
      {isLoading ? (
        <div className='flex-center flex-col h-full'>
          <Scene autoRotate={true}>
            <Terrain texturePath='/assets/anime-rpg-landscape.jpg' />
          </Scene>
          <LoadingBar
            maxPercent={100}
            color={'rgb(38, 216, 103)'}
            onMaxPercentReached={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <div className='w-full md:w-3/5 mx-auto px-4'>
          <About />
          <Career />
          <Projects />
        </div>
      )}
    </div>
  );
}
