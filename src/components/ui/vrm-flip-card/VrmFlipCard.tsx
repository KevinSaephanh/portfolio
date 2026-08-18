'use client';

import { useState } from 'react';
import Image from 'next/image';

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

        {/* Back — empty */}
        <div
          className='neon-ring absolute inset-0 bg-black/80'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        />
      </div>
    </div>
  );
};
