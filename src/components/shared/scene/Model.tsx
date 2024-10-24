'use client';

import { FC, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';

type ModelProps = {
  path: string;
  animations?: string[];
};

export const Model: FC<ModelProps> = ({ path, animations = [] }) => {
  const loader = new FBXLoader();
  const scene = useLoader(FBXLoader, path);
  const model = useRef<THREE.Mesh>(null);
  const mixers: THREE.AnimationMixer[] = [];

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
        const m = new THREE.AnimationMixer(obj);
        mixers.push(m);
        const idle = m.clipAction(anim.animations[0]);
        idle.play();
      });

      scene.add(obj);
    });
  } catch (err) {
    console.error('Error loading model into scene ', err);
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    }
  }

  return <primitive object={scene} ref={model} dispose={null} />;
};
