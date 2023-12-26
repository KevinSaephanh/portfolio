'use client';

import { OrbitControls, Preload, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as React from 'react';

type SceneProps = {
  children: React.ReactNode;
  autoRotate?: boolean;
  enablePan?: boolean;
  enableZoom?: boolean;
};

export const Scene: React.FC<SceneProps> = ({
  children,
  autoRotate,
  enablePan,
  enableZoom,
}) => {
  return (
    <Canvas
      flat
      linear
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
    >
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={0.1}
        rotateSpeed={0.1}
        enablePan={enablePan}
        enableZoom={enableZoom}
      />
      <ambientLight intensity={0.3} />
      <Preload all />
      <React.Suspense fallback={null}>
        <Stage preset='rembrandt' intensity={1} environment='sunset'>
          {children}
        </Stage>
      </React.Suspense>
    </Canvas>
  );
};
