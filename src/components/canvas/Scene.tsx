'use client';

import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Terrain } from './Terrain';

export const Scene: React.FC = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
    >
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.1}
        rotateSpeed={0.1}
        enablePan={false}
        enableZoom={false}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 5]} />
      <Preload all />
      <React.Suspense fallback={null}>
        <Terrain />
      </React.Suspense>
    </Canvas>
  );
};
