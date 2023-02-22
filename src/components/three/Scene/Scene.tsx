import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from '../Model/Model';

export const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 120], fov: 20, zoom: 0.2 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <React.Suspense fallback={null}>
        <Model path='/assets/models/me/kevin.fbx' />
      </React.Suspense>
    </Canvas>
  );
};
