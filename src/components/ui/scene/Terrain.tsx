'use client';

import { useTexture } from '@react-three/drei';
import { FC } from 'react';

type TerrainProps = {
  texturePath: string;
};

export const Terrain: FC<TerrainProps> = ({ texturePath }) => {
  const texture = useTexture(texturePath);

  return (
    <mesh scale={[3, 3, 3]}>
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
