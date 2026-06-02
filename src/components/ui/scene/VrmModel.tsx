'use client';

import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRMLoaderPlugin, VRM, VRMHumanBoneName } from '@pixiv/three-vrm';

type Props = {
  url: string;
  yOffset?: number;
};

export const VrmModel = ({ url, yOffset = 0 }: Props) => {
  const [vrm, setVrm] = useState<VRM | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register(parser => new VRMLoaderPlugin(parser));
    loader.load(url, gltf => {
      const vrmData = gltf.userData.vrm as VRM;
      vrmData.scene.rotation.y = Math.PI; // face camera
      vrmData.scene.position.y = yOffset;
      setVrm(vrmData);
    });
  }, [url, yOffset]);

  useFrame((state, delta) => {
    if (!vrm) return;
    const t = state.clock.getElapsedTime();
    const chest = vrm.humanoid?.getNormalizedBoneNode(VRMHumanBoneName.Chest);
    if (chest) chest.rotation.x = Math.sin(t * 1.2) * 0.018;
    vrm.update(delta);
  });

  if (!vrm) return null;
  return <primitive object={vrm.scene} />;
};
