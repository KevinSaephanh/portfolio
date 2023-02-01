import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type ModelProps = {
  path: string;
};

export const Model: React.FC<ModelProps> = ({ path }) => {
  const model = React.useRef<THREE.Mesh>(null);
  const gltf = useLoader(GLTFLoader, path);

  return <primitive object={gltf.scene} ref={model} />;
};
// Lizard: https://sketchfab.com/enalrem
// vivi: https://sketchfab.com/yton
