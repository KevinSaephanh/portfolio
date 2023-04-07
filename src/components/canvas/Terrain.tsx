import React from 'react';
import { useTexture } from '@react-three/drei';

export const Terrain: React.FC = () => {
  const texture = useTexture('/assets/anime-rpg-landscape.jpg');

  return (
    <mesh scale={[3, 3, 3]}>
      <sphereGeometry args={[1, 50, 50]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
