import { Scene } from '@/components/Canvas/Scene';
import { Terrain } from '@/components/Canvas/Terrain';
import * as React from 'react';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <Scene autoRotate={true}>
        <Terrain />
      </Scene>
    </div>
  );
}
