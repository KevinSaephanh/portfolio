'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingBar } from '@/components/ui/loading-bar/LoadingBar';
import { Scene } from '@/components/ui/scene/Scene';
import { Projects } from '@/components/home/Projects';
import { Career } from '@/components/home/Career';
import { About } from '@/components/home/About';
import { GlbModel } from '@/components/ui/scene/GlbModel';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key='loader'
            className='flex-center flex-col h-full'
            title='3D model credit: https://sketchfab.com/HallowDragon'
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            <Scene autoRotate={true} autoRotateSpeed={2.5}>
              <GlbModel path='/assets/models/dragon.glb' />
            </Scene>
            <LoadingBar onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full md:w-3/5 mx-auto px-4'
          >
            <About />
            <Career />
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
