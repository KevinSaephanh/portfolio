'use client';

import { useState } from 'react';
import { ProgressBar } from '@/components/shared/progress-bar/ProgressBar';
import { Scene } from '@/components/shared/scene/Scene';
import { Terrain } from '@/components/shared/scene/Terrain';
import { Projects } from '@/components/home/Projects';
import { WorkExperience } from '@/components/home/WorkExperience';
import { About } from '@/components/home/About';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      {isLoading ? (
        <div className='max-h-80 md:max-h-full'>
          <Scene autoRotate={true}>
            <Terrain />
          </Scene>
          <ProgressBar
            maxPercent={100}
            color={'rgb(64,224,208)'}
            onMaxPercentReached={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <div className='w-full md:w-3/5 mx-auto px-4'>
          <About />
          <WorkExperience />
          <Projects />
        </div>
      )}
    </div>
  );
}
