'use client';

import * as React from 'react';
import { Model } from '@/components/Canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

export default function Page() {
  return (
    <div
      className='w-full h-4/5 flex flex-col items-center'
      title='Credit Boolkas on sketchfab: https://sketchfab.com/3d-models/lizard-mage-animated-f1cd260da5534351adcbb109e98ac0b5'
    >
      <Canvas>
        <OrbitControls
          autoRotate={false}
          rotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
        />
        <ambientLight intensity={0.3} />
        <React.Suspense fallback={null}>
          <Stage preset='rembrandt' intensity={1} environment='city'>
            <Model path='/assets/models/lizard_mage.fbx' />
          </Stage>
        </React.Suspense>
      </Canvas>
      <span className='text-lg pt-6'>Hey, this page doesn&apos;t exist!</span>
    </div>
  );
}
