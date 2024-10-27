import { FC, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

type GlbModelProps = {
  path: string;
};

export const GlbModel: FC<GlbModelProps> = ({ path }) => {
  const model = useLoader(GLTFLoader, path);
  const mixer = useRef<AnimationMixer>();

  useEffect(() => {
    if (model.animations?.length) {
      mixer.current = new AnimationMixer(model.scene);
      const action = mixer.current.clipAction(model.animations[0]);
      action.play();
    }
  }, [model]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={model.scene} />;
};
