'use client';

import * as React from 'react';
import { Model } from '@/components/Scene/Model';
import { Scene } from '@/components/Scene/Scene';

export default function Page() {
  return (
    <div
      className='w-full h-4/5 flex flex-col items-center'
      title='Credit Boolkas on sketchfab: https://sketchfab.com/3d-models/lizard-mage-animated-f1cd260da5534351adcbb109e98ac0b5'
    >
      <Scene>
        <Model path='/assets/models/lizard_mage.fbx' />
      </Scene>
      <span className='text-lg pt-6'>Hey, this page doesn&apos;t exist!</span>
    </div>
  );
}
