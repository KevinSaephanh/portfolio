import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from '../Model/Model';

export const Scene: React.FC = () => {
  return (
    <Canvas shadows frameloop='demand'>
      <ambientLight intensity={0.1} />
      <React.Suspense fallback={null}>
        <ambientLight />
        {/* <Model /> */}
      </React.Suspense>
      <fog attach='fog' color='#ffffff' near={50} far={300} />
    </Canvas>
  );
};
