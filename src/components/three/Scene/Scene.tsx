import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from '../Model/Model';

export const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <React.Suspense fallback={null}>
        <group position={[0, -1, 0]}></group>
      </React.Suspense>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </Canvas>
  );
};
