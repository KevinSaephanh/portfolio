'use client';

import { Scene } from '@/components/shared/scene/Scene';
import { Terrain } from '@/components/shared/scene/Terrain';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-full h-4/5 flex flex-col items-center'>
      <Scene autoRotate={true}>
        <Terrain texturePath='/assets/anime-rpg-landscape.jpg' />
      </Scene>
      <span className='text-lg pt-6 pb-2'>404 nothing to show here</span>
      <Link
        href='/'
        className='text-lg text-center font-bold border-2 py-1 px-4 rounded dark:bg-slate-700'
      >
        Home
      </Link>
    </div>
  );
}
