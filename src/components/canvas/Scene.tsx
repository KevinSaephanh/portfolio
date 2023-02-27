import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';
import { Model } from './Model';

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
      <Preload all />
      <React.Suspense fallback={null}>
        {/* <Model path='/assets/models/me/kevin.fbx' /> */}
        <Model
          path='/assets/models/test/sword_and_shield_guy.fbx'
          animations={['assets/models/test/attack1.fbx']}
        />
      </React.Suspense>
    </Canvas>
  );
};
