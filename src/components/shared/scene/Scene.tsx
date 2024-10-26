'use client';

import { ReactNode, FC, Suspense } from 'react';
import { OrbitControls, Preload, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

type SceneProps = {
  children: ReactNode;
  autoRotate?: boolean;
  enablePan?: boolean;
  enableZoom?: boolean;
};

export const Scene: FC<SceneProps> = ({
  children,
  autoRotate = false,
  enablePan = true,
  enableZoom = true,
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
      style={{ width: '70vw', height: '70vh' }}
      className='flex-none'
    >
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
        rotateSpeed={0.1}
        enablePan={enablePan}
        enableZoom={enableZoom}
      />
      <ambientLight intensity={0.6} />
      <Preload all />
      <Suspense fallback={null}>
        <Stage preset='soft' intensity={1.5} environment='sunset'>
          {children}
        </Stage>
      </Suspense>
    </Canvas>
  );
};
