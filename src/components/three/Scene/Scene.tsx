import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';
import { Model } from '../Model/Model';

export const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 20, zoom: 0.15 }}>
      <OrbitControls target={new Vector3(0, 100)} enableZoom={false} />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <React.Suspense fallback={null}>
        <Model path='/assets/models/me/me.fbx' />
      </React.Suspense>
    </Canvas>
  );
};
