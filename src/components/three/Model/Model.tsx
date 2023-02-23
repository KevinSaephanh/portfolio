import { useAnimations, useFBX } from '@react-three/drei';
import React from 'react';
import { AnimationClip, AnimationMixer } from 'three';

type ModelProps = {
  path: string;
  animations?: AnimationClip[];
};

export const Model: React.FC<ModelProps> = ({ path, animations = [] }) => {
  const model = React.useRef<THREE.Mesh>(null);
  const fbx = useFBX(path);
  const { actions } = useAnimations(animations, model);

  React.useEffect(() => {
    console.log(actions);
  }, []);

  return <primitive object={fbx} ref={model} dispose={null} />;
};
