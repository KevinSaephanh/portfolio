import { useAnimations, useFBX } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { AnimationClip, AnimationMixer } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

type ModelProps = {
  path: string;
  animations?: AnimationClip[];
};

export const Model: React.FC<ModelProps> = ({ path, animations = [] }) => {
  const fbxLoader = new FBXLoader();
  const model = React.useRef<THREE.Mesh>(null);
  const { actions } = useAnimations(animations, model);
  fbxLoader.load(path, (obj) => {
    const mixer = new AnimationMixer(obj);
    const action = mixer.clipAction(obj.animations[0]);
    action.play();
  });
  const fbx = useLoader(FBXLoader, path);
  useLoader.preload(FBXLoader, path);

  return <primitive object={fbx} ref={model} />;
};
