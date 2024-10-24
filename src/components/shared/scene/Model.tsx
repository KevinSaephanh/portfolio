'use client';

import { FC, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import { AnimationMixer, Mesh } from 'three';

type ModelProps = {
  path: string;
  animations?: string[];
};

export const Model: FC<ModelProps> = ({ path, animations = [] }) => {
  const loader = new FBXLoader();
  const scene = useLoader(FBXLoader, path);
  const model = useRef<Mesh>(null);
  const mixers: AnimationMixer[] = [];

  try {
    loader.setPath(path);
    loader.load(path, (obj) => {
      obj.scale.setScalar(0.1);
      obj.traverse((c) => {
        c.castShadow = true;
      });

      const anim = new FBXLoader();
      anim.setPath(path);
      anim.load(animations[0], (anim) => {
        const m = new AnimationMixer(obj);
        mixers.push(m);
        const idle = m.clipAction(anim.animations[0]);
        idle.play();
      });

      scene.add(obj);
    });
  } catch (err) {
    console.error('Error loading model into scene ', err);
  }

  return <primitive object={scene} ref={model} dispose={null} />;
};
