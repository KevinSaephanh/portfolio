'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Model } from '@/components/shared/scene/Model';
import { Scene } from '@/components/shared/scene/Scene';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className='w-full h-4/5 flex flex-col items-center'
      title='Credit Boolkas on sketchfab: https://sketchfab.com/3d-models/lizard-mage-animated-f1cd260da5534351adcbb109e98ac0b5'
    >
      <Scene>
        <Model path='/assets/models/lizard_mage.fbx' />
      </Scene>
      <span className='text-lg pt-6'>Hey, this page doesn&apos;t exist!</span>
      <span className='text-lg text-center'>Redirecting...</span>
    </div>
  );
}
