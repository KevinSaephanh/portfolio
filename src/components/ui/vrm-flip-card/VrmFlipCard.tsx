'use client';

import { useState } from 'react';
import Image from 'next/image';
// VRM imports — re-enable once Kev.vrm is available (too large for git, tracked separately)
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { VrmModel } from '@/components/ui/scene/VrmModel';

export const VrmFlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className='w-[220px] h-[220px] cursor-pointer'
      style={{ perspective: '900px' }}
      onClick={() => setFlipped(f => !f)}
      title={flipped ? 'Click to flip back' : 'Click to meet Kev'}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front — profile photo */}
        <div
          className='neon-ring overflow-hidden absolute inset-0 flex items-center justify-center'
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <Image
            src='/assets/me.jpeg'
            alt='Kevin Saephanh'
            height={220}
            width={220}
            priority
            className='object-cover w-full h-full'
          />
        </div>

        {/* Back — VRM portrait (disabled until Kev.vrm is available) */}
        <div
          className='neon-ring overflow-hidden absolute inset-0 flex items-center justify-center bg-black/80'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className='font-mono text-xs text-slate-500 text-center px-4'>
            VRM coming soon
          </span>
          {/* Re-enable when Kev.vrm is tracked:
          <Canvas camera={{ position: [0, 0.5, 1.0], fov: 25 }} gl={{ alpha: true }} style={{ width: '100%', height: '100%' }}>
            <OrbitControls target={[0, 0.5, 0]} enableZoom={false} enablePan={false} enableRotate={false} />
            <ambientLight intensity={2.5} />
            <directionalLight position={[1, 2, 1]} intensity={1.2} />
            <Suspense fallback={null}>
              <VrmModel url='/assets/Kev.vrm' yOffset={-1.17} />
            </Suspense>
          </Canvas>
          */}
        </div>
      </div>
    </div>
  );
};
