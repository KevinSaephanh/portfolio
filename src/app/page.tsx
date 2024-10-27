'use client';

import { useState } from 'react';
import { LoadingBar } from '@/components/ui/loading-bar/LoadingBar';
import { Scene } from '@/components/ui/scene/Scene';
import { Projects } from '@/components/home/Projects';
import { Career } from '@/components/home/Career';
import { About } from '@/components/home/About';
import { GlbModel } from '@/components/ui/scene/GlbModel';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full'>
      {isLoading ? (
        <div
          className='flex-center flex-col h-full'
          title='3D model credit: https://sketchfab.com/HallowDragon'
        >
          <Scene autoRotate={true} autoRotateSpeed={2.5}>
            <GlbModel path='/assets/models/dragon.glb' />
          </Scene>
          <LoadingBar
            maxPercent={100}
            color={'rgb(38, 216, 103)'}
            onMaxPercentReached={() => setIsLoading(false)}
            progressSpeed={75}
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
